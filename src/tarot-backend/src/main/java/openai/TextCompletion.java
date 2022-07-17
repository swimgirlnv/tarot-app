package openai;

public class TextCompletion {
  public String id;
  public String object;
  public long created;
  public String model;
  public Choice[] choices;
  public Usage usage;
}
