package backendcruding;

/**
 * Class designed to assist the JSON parser understand arguments in a addRow request.
 */
public class AddRowRequest {
  /**
   * The values of the row to be added.
   */
  private String[] values;

  /**
   * Empty constructor for Gson() parsing.
   */
  public AddRowRequest() {}

  /**
   * Constructor with arguments to create a AddRowRequest.
   * @param values the values to be added.
   */
  public AddRowRequest(String[] values) {
    this.values = values;
  }

  /**
   * Sets the values to be added.
   * @param values the values to be added.
   */
  public void setValues(String[] values) {
    this.values = values;
  }

  /**
   * Gets the values to be added.
   * @return the values to be added.
   */
  public String[] getValues() {
    return values;
  }
}

