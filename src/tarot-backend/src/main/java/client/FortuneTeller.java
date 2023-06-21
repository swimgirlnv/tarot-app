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

  /**
   * Makes API call to GPT-3 with the prompt "Do a daily reading..." along with the morning,
   * afternoon, and evening cards displayed on the page.
   * @param morning The name of the card in the "morning" placement.
   * @param afternoon The name of the card in the "afternoon" placement.
   * @param evening The name of thee card in the "evening" placement.
   * @return Gson string from Open AI that includes request id, object, created, model, choices,
   * text, index, logprobs, and finish_reason.
   */
  public String CareerInterpreter(String one, String two, String three, String four, String five) {
    try {
      String reqUri = "https://api.openai.com/v1/completions";

      String apiKey = ClientAuthenticator.getApiKey();

      HttpRequest request = HttpRequest.newBuilder()
          .uri(URI.create(reqUri))
          .header("Content-Type", "application/json")
          .header("Authorization", "Bearer " + apiKey)
          .POST(HttpRequest.BodyPublishers.ofString(
              "{\"model\": \"text-davinci-002\", \"prompt\": \"Do a career tarot reading. " +
                  "The card representing your dream job is " + one
                  + ". The card representing how you can get there is " + two
                  + ". The card representing the qualities you bring is " + three
                  + ". The card representing where you can find assistance is " + four
                  + ". The card representing what needs attention is " + five
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

  /**
   * Makes API call to GPT-3 with the prompt "Do a self reflections reading..." along with the card meanings.
   * @return Gson string from Open AI that includes request id, object, created, model, choices,
   * text, index, logprobs, and finish_reason.
   */
  public String SelfReflectionInterpreter(String one, String two, String three, String four, String five) {
    try {
      String reqUri = "https://api.openai.com/v1/completions";

      String apiKey = ClientAuthenticator.getApiKey();

      HttpRequest request = HttpRequest.newBuilder()
          .uri(URI.create(reqUri))
          .header("Content-Type", "application/json")
          .header("Authorization", "Bearer " + apiKey)
          .POST(HttpRequest.BodyPublishers.ofString(
              "{\"model\": \"text-davinci-002\", \"prompt\": \"Do a self reflection tarot reading. " +
                  "The card representing how self-talk affecting their ability to be true to themself is " + one
                  + ". The card representing what they are hiding from themself out of shame or fear is " + two
                  + ". The card representing what a healing aspect/influence that they can access right now to help them overcome shame/fear is " + three
                  + ". The card representing what they need to let go of is " + four
                  + ". The card representing what they need to embrace and nurture right now is " + five
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

  /**
   * Makes API call to GPT-3 with the prompt "Do a self reflections reading..." along with the card meanings.
   * @return Gson string from Open AI that includes request id, object, created, model, choices,
   * text, index, logprobs, and finish_reason.
   */
  public String CompletionistInterpreter(String one, String two, String three, String four, String five) {
    try {
      String reqUri = "https://api.openai.com/v1/completions";

      String apiKey = ClientAuthenticator.getApiKey();

      HttpRequest request = HttpRequest.newBuilder()
          .uri(URI.create(reqUri))
          .header("Content-Type", "application/json")
          .header("Authorization", "Bearer " + apiKey)
          .POST(HttpRequest.BodyPublishers.ofString(
              "{\"model\": \"text-davinci-002\", \"prompt\": \"Do a tarot reading for completing achievements/goals. " +
                  "The card representing an achievement/goal that they view as absolutely necessary is " + one
                  + ". The card representing an achievement/goal that they see as not necessary but desirable is " + two
                  + ". The card representing an achievement that they may think is unnecessary but is easily accomplished is " + three
                  + ". The card representing an achievement not easily attainable but worth their time is " + four
                  + ". The card representing what they get out of putting their all into collecting each achievement is " + five
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

  /**
   * Makes API call to GPT-3 with the prompt "Do a trust your gut reading..." along with the card meanings.
   * @return Gson string from Open AI that includes request id, object, created, model, choices,
   * text, index, logprobs, and finish_reason.
   */
  public String TrustYourGutInterpreter(String one, String two, String three, String four, String five) {
    try {
      String reqUri = "https://api.openai.com/v1/completions";

      String apiKey = ClientAuthenticator.getApiKey();

      HttpRequest request = HttpRequest.newBuilder()
          .uri(URI.create(reqUri))
          .header("Content-Type", "application/json")
          .header("Authorization", "Bearer " + apiKey)
          .POST(HttpRequest.BodyPublishers.ofString(
              "{\"model\": \"text-davinci-002\", \"prompt\": \"Do a trust your gut tarot reading. " +
                  "The card representing their feelings toward a particular situation is " + one
                  + ". The card representing how accurate their perception of the situation is is " + two
                  + ". The card representing how they can better understand what is going on is " + three
                  + ". The card representing why they should trust their gut is " + four
                  + ". The card representing something they should know moving forward is " + five
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

  /**
   * Makes API call to GPT-3 with the prompt "Do a daily reading..." along with the morning,
   * afternoon, and evening cards displayed on the page.
   * @param morning The name of the card in the "morning" placement.
   * @param afternoon The name of the card in the "afternoon" placement.
   * @param evening The name of thee card in the "evening" placement.
   * @return Gson string from Open AI that includes request id, object, created, model, choices,
   * text, index, logprobs, and finish_reason.
   */
  public String SpiritualInterpreter(String one, String two, String three, String four, String five) {
    try {
      String reqUri = "https://api.openai.com/v1/completions";

      String apiKey = ClientAuthenticator.getApiKey();

      HttpRequest request = HttpRequest.newBuilder()
          .uri(URI.create(reqUri))
          .header("Content-Type", "application/json")
          .header("Authorization", "Bearer " + apiKey)
          .POST(HttpRequest.BodyPublishers.ofString(
              "{\"model\": \"text-davinci-002\", \"prompt\": \"Do a spiritual dream message tarot reading. " +
                  "The card representing a past event is " + one
                  + ". The card representing the dream theme is " + two
                  + ". The card representing the waking life block is " + three
                  + ". The card representing the message from the dream is " + four
                  + ". The card representing the lesson from the dream is " + five
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

  /**
   * Makes API call to GPT-3 with the prompt "Do a daily reading..." along with the morning,
   * afternoon, and evening cards displayed on the page.
   * @param morning The name of the card in the "morning" placement.
   * @param afternoon The name of the card in the "afternoon" placement.
   * @param evening The name of thee card in the "evening" placement.
   * @return Gson string from Open AI that includes request id, object, created, model, choices,
   * text, index, logprobs, and finish_reason.
   */
  public String LoveInterpreter(String one, String two, String three, String four) {
    try {
      String reqUri = "https://api.openai.com/v1/completions";

      String apiKey = ClientAuthenticator.getApiKey();

      HttpRequest request = HttpRequest.newBuilder()
          .uri(URI.create(reqUri))
          .header("Content-Type", "application/json")
          .header("Authorization", "Bearer " + apiKey)
          .POST(HttpRequest.BodyPublishers.ofString(
              "{\"model\": \"text-davinci-002\", \"prompt\": \"Do a love tarot reading on how someone else feels. " +
                  "The card representing how the other person feels about you is " + one
                  + ". The card representing how the other person feels about the relationship is " + two
                  + ". The card representing what the other person's challenges are is " + three
                  + ". The card representing where the relationship is headed is " + four
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