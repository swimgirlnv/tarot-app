package client;

import java.net.URI;
import java.io.IOException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import openai.TextCompletion;
import com.google.gson.Gson;

public class FortuneTeller {
  protected ApiClient client = new ApiClient();

  /**
   * Makes API call to GPT-3 with the prompt "Do a daily reading..." along with the morning,
   * afternoon, and evening cards displayed on the page.
   * @param morning The name of the card in the "morning" placement.
   * @param afternoon The name of the card in the "afternoon" placement.
   * @param evening The name of thee card in the "evening" placement.
   * @return Gson string from Open AI that includes request id, object, created, model, choices,
   * text, index, logprobs, and finish_reason.
   */
  public String DailyInterpreter(String morning, String afternoon, String evening) {
      try {
        String reqUri = "https://api.openai.com/v1/completions";

        String apiKey = ClientAuthenticator.getApiKey();

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(reqUri))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer " + apiKey)
            .POST(HttpRequest.BodyPublishers.ofString(
                "{\"model\": \"text-davinci-002\", \"prompt\": \"Do a daily tarot reading. " +
                    "The morning card is " + morning + ". The afternoon card is " + afternoon
                    + ". The evening card is " + evening
                    + ". The reading is:\", \"temperature\": 0.3, \"max_tokens\": 1024}"))
            .build();
        String httpResponse = client.makeRequest(request);
        Gson gson = new Gson();
        TextCompletion textCompletion = gson.fromJson(httpResponse, TextCompletion.class);
        return textCompletion.choices[0].text;
      } catch (Exception e) {
        return e.getMessage();
      }
    }
  }