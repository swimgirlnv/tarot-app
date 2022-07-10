package client;

import java.net.URI;
import java.io.IOException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

public class FortuneTeller {
  protected ApiClient client = new ApiClient();

  public String DailyInterpreter(String morning, String afternoon, String evening) {
      try {
        String reqUri = "https://api.openai.com/v1/completions";

        //String[] values = new Gson().fromJson(json, String[].class);

        //ReadRequest readRequest = new ReadRequest(values);
        String apiKey = ClientAuthenticator.getApiKey();

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(reqUri))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer " + apiKey)
            .POST(HttpRequest.BodyPublishers.ofString(
                "{\"model\": \"text-davinci-002\", \"prompt\": \"Do a daily tarot reading. The morning card is " + morning + ". The afternoon card is " + afternoon + ". The evening card is " + evening + ". The reading is:\", \"temperature\": 0.3, \"max_tokens\": 1024}"))
            .build();
        return client.makeRequest(request);
      } catch (Exception e) {
        return e.getMessage();
      }
    }
  }