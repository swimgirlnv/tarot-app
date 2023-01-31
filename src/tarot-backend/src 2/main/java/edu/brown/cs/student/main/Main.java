package edu.brown.cs.student.main;

import backendcruding.Database;
import client.FortuneTeller;
import com.google.gson.Gson;
import joptsimple.OptionParser;
import joptsimple.OptionSet;
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

    Spark.before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));
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

    Spark.get("/getReading/:morning/:afternoon/:evening", (req, res) -> {
      String morning = req.params(":morning");
      String afternoon = req.params(":afternoon");
      String evening = req.params(":evening");
      return gson.toJson(fortuneTeller.DailyInterpreter(morning, afternoon, evening));
    });

    Spark.init();

  }

}
