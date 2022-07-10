package backendcruding;

import client.ApiClient;
import com.google.gson.Gson;

import java.net.URI;
import java.net.http.HttpRequest;
import java.util.List;

/**
 * Class for the addRow command.
 */
public class AddRow implements REPLCommand {
  // Field for repl command map
  private final REPLCmdMap cmdMap;

  /**
   * Constructor for ColNames class, takes in repl command map.
   *
   * @param cmdMap Hashmap used for storing relevant information between classes
   */
  public AddRow(REPLCmdMap cmdMap) {
    this.cmdMap = cmdMap;
  }


  /**
   * Command input should look like -> addRow "tableName" ["col1 value", "col2 value", ...]
   * @param userInput a List of white-space separated Strings representing the user's REPL
   *                  input
   * @return Json string in the format {"values":["col1 val","col2 val", ...]}
   */
  @Override
  public String commandExec(List<String> userInput) {
    if (userInput.size() < 3) {
      return REPL.errorOutput("Usage: addRow\n");
    }  else {
      try {
        ApiClient client = new ApiClient();

        String reqUri = "http://localhost:4567/addRow/" + userInput.get(1);

        String json = "";
        for (int i = 2; i < userInput.size(); ++i) {
          json += " " + userInput.get(i);
        }

        String[] values = new Gson().fromJson(json, String[].class);

        AddRowRequest addRowRequest = new AddRowRequest(values);

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(reqUri))
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(new Gson().toJson(addRowRequest)))
            .build();
        return client.makeRequest(request);
      } catch (Exception e) {
        return REPL.errorOutput(e.getMessage());
      }
    }
  }
}
