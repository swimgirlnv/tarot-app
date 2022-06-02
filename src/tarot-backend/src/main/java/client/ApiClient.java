package client;

import java.io.IOException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

/**
 * This class encapsulates the client request handling logic. It is agnostic of what kinds of
 * requests are being made.
 * The exact request formatting is outsourced to ClientRequestGenerator.
 * @author Daniel Graves
 */
public class ApiClient {

  /**
   * field for the HttpClient that makes the requests.
   */
  private final HttpClient client;

  private static final int SIXTY = 60;

  /**
   * method that instantiates the ApiClient, creating an HttpClient to make requests.
   */
  public ApiClient() {
    this.client = HttpClient.newBuilder()
        .version(HttpClient.Version.HTTP_2)
        .connectTimeout(Duration.ofSeconds(SIXTY))
        .build();
  }

  /**
   * method that makes a request to an api endpoint through the HttpClient.
   * @param req an HttpRequest that to a particular endpoint
   * @return a string containing the status of the response and the output of the request to the
   * endpoint
   * @throws IOException if the request to the handler is not accepted
   * @throws InterruptedException if the request to the handler is interrupted
   */
  public String makeRequest(HttpRequest req) throws IOException, InterruptedException {
    HttpResponse<String> apiResponse = client.send(req, HttpResponse.BodyHandlers.ofString());
    String toReturn = "Status " + apiResponse.statusCode() + "\n";
    toReturn = toReturn + apiResponse.body() + "\n";
    return toReturn;
  }
}
