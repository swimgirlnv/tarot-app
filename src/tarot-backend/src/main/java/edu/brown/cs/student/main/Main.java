package edu.brown.cs.student.main;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import java.lang.reflect.Type;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.security.*;
import java.security.interfaces.RSAKey;
import java.security.spec.RSAPublicKeySpec;
import java.security.spec.RSAPrivateKeySpec;
import java.security.spec.InvalidKeySpecException;
import java.math.BigInteger;
import java.util.Base64;
import java.util.Collection;
import java.util.Map;

import backendcruding.Database;
import client.FortuneTeller;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import joptsimple.OptionParser;
import joptsimple.OptionSet;
import com.auth0.jwt.JWT;
import spark.Spark;
import spark.Request;
import spark.Response;
import spark.Route;



//import static spark.route.HttpMethod.get;

/**
 * The Main class of our project. This is where execution begins.
 */

public final class Main {

  private static final int DEFAULT_PORT = 4567;
  private static Database db = null;

  /**
   * The initial method called when execution begins.
   *
   * @param args An array of command line arguments
   */
  public static void main(String[] args) {
    new Main(args).run();
  }

  private String[] args;


  private Main(String[] args) {
    this.args = args;
  }

  private void run() {

    OptionParser parser = new OptionParser();
    parser.accepts("gui");
    parser.accepts("port").withRequiredArg().ofType(Integer.class).defaultsTo(DEFAULT_PORT);

    OptionSet options = parser.parse(args);

    if (options.has("gui")) {
      runSparkServer((int) options.valueOf("port"));
    }
  }

  private static void runSparkServer(int port) {
    System.out.println("Starting spark server on port " + port);
    Spark.port(port);
    Spark.externalStaticFileLocation("src/main/resources/static");

    Spark.options("/*", (request, response) -> {
      String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
      if (accessControlRequestHeaders != null) {
        response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
      }

      String accessControlRequestMethod = request.headers("Access-Control-Request-Method");

      if (accessControlRequestMethod != null) {
        response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
      }

      return "OK";
    });

    Spark.before((request, response) -> {
      // Check the access token on anything except the CORS preflight request.
      if (request.requestMethod() != "OPTIONS") {
        String auth = request.headers("Authorization");
        if (auth == null || auth.isEmpty()) {
          System.err.println("Missing Authorization header");
          Spark.halt(401, "Missing Authorization header");
          return;
        }

        String[] parts = auth.split("\\s+");
        if (!parts[0].equals("Bearer")) {
          System.err.println("Unknown authorization method '" + parts[0] + "'");
          Spark.halt(401, "Unknown authorization method '" + parts[0] + "'");
          return;
        }

        if (parts.length < 2) {
          System.err.println("Missing bearer token");
          Spark.halt(401, "Missing bearer token");
          return;
        }

        try {
          verifyJwtToken(parts[1]);
        } catch (JWTDecodeException ex) {
          System.err.println("Invalid bearer token: " + ex.getMessage());
          Spark.halt(401, "Invalid bearer token: " + ex.getMessage());
        } catch (JWTVerificationException ex) {
          System.err.println("Authorization failed: " + ex.getMessage());
          Spark.halt(401, "Authorization failed: " + ex.getMessage());
        }
      }

      response.header("Access-Control-Allow-Origin", "*");
    });
    Gson gson = new Gson();
    FortuneTeller fortuneTeller = new FortuneTeller();
    // Put Routes Here
    db = new Database("data/tarot.sqlite3");

    Spark.get("/getCard", (req, res) -> {
      return gson.toJson(db.getCard());
    });

    Spark.get("/getCards/:n", (req, res) -> {
      String numCards = req.params(":n");
      return gson.toJson(db.getCards(numCards));
    });

    Spark.get("/getCardName/:n", (req, res) -> {
      String cardID = req.params(":n");
      return gson.toJson(db.getCardName(cardID));
    });

    Spark.get("/getCardUpright/:n", (req, res) -> {
      String cardID = req.params(":n");
      return gson.toJson(db.getCardUpright(cardID));
    });

    Spark.get("/getCardReverse/:n", (req, res) -> {
      String cardID = req.params(":n");
      return gson.toJson(db.getCardReverse(cardID));
    });

    Spark.get("/getCardImage/:n", (req, res) -> {
      String cardID = req.params(":n");
      return gson.toJson(db.getCardImage(cardID));
    });

    Spark.get("/getReadingLinearDay/:morning/:afternoon/:evening", (req, res) -> {
      String morning = req.params(":morning");
      String afternoon = req.params(":afternoon");
      String evening = req.params(":evening");
      return gson.toJson(fortuneTeller.DailyInterpreter(morning, afternoon, evening));
    });

    Spark.get("/getReadingShootingForward/:one/:two/:three/:four/:five", (req, res) -> {
      String one = req.params(":one");
      String two = req.params(":two");
      String three = req.params(":three");
      String four = req.params(":four");
      String five = req.params(":five");
      return gson.toJson(fortuneTeller.CareerInterpreter(one, two, three, four, five));
    });

    Spark.get("/getReadingDreamMessages/:one/:two/:three/:four/:five", (req, res) -> {
      String one = req.params(":one");
      String two = req.params(":two");
      String three = req.params(":three");
      String four = req.params(":four");
      String five = req.params(":five");
      return gson.toJson(fortuneTeller.SpiritualInterpreter(one, two, three, four, five));
    });

    Spark.get("/getReadingHTF/:one/:two/:three/:four", (req, res) -> {
      String one = req.params(":one");
      String two = req.params(":two");
      String three = req.params(":three");
      String four = req.params(":four");
      return gson.toJson(fortuneTeller.LoveInterpreter(one, two, three, four));
    });

    Spark.init();

  }

  protected static void verifyJwtToken(String token) throws JWTVerificationException, JWTDecodeException {
    // A lot of this from https://ncona.com/2015/02/consuming-a-google-id-token-from-a-server/

    // Get the certs.
    DecodedJWT jwt = JWT.decode(token);
    if (!jwt.getAlgorithm().equals("RS256")) {
      System.err.println("Got an unexpected signature algorithm = " + jwt.getAlgorithm());
      throw new JWTVerificationException("Unexpected JWT signature algorithm");
    }

    RSAPublicKeySpec pubKeySpec = getGooglePubKey(jwt.getKeyId());
    String kMajorAracanaGoogleAppId = "87928211828-tgq8r75ntrl2d3qn6nujnldl9i99rsct.apps.googleusercontent.com";

    try {
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        PublicKey pubKey = keyFactory.generatePublic(pubKeySpec);
        Algorithm algorithm = Algorithm.RSA256((RSAKey) pubKey);
        JWT.require(algorithm)
            .withIssuer("https://accounts.google.com")
            .withAnyOfAudience(kMajorAracanaGoogleAppId)
            .acceptLeeway(24 * 60 * 60 /* 1 day */)
            .build()
            .verify(token);
    } catch (NoSuchAlgorithmException ex) {
      throw new JWTVerificationException("Missing RSA encryption on server");
    } catch (InvalidKeySpecException ex) {
      throw new JWTVerificationException("Incorrectly configured key on server");
    }
  }

  protected static RSAPublicKeySpec getGooglePubKey(String kid) {
    HttpClient client = HttpClient.newBuilder()
      .version(HttpClient.Version.HTTP_1_1)
      .build();

    HttpRequest req = HttpRequest
      .newBuilder()
      .uri(URI.create("https://www.googleapis.com/oauth2/v2/certs"))
      .build();

    try {
      HttpResponse<String> response = client.send
        (req, HttpResponse.BodyHandlers.ofString());

      Gson gson = new Gson();
      Type type = new TypeToken<Map<String, Collection<Map<String, String>>>>(){}.getType();
      Map<String, Collection<Map<String, String>>> keyMap = gson.fromJson(response.body(), type);

      Collection<Map<String, String>> keys = keyMap.get("keys");
      for (Map<String, String> key : keys) {
        if (kid.equals(key.get("kid"))) {
          BigInteger exponent = new BigInteger(1, Base64.getUrlDecoder().decode(key.get("e")));
          BigInteger modulus = new BigInteger(1, Base64.getUrlDecoder().decode(key.get("n")));
          return new RSAPublicKeySpec(modulus, exponent);
        }
      }
    } catch (java.io.IOException ex) {
      throw new JWTVerificationException("Could not retrieve Google pubkeys, " + ex);
    } catch (java.lang.InterruptedException ex) {
      throw new JWTVerificationException("Could not retrieve Google pubkeys, " + ex);    }

    throw new JWTVerificationException("Could not find Google pubkey with ID " + kid);
  }
}
