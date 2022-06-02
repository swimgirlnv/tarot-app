package backendcruding;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 * Code below partially recycled from Database lab.
 *
 * Database class instantiates the database and returns/edits it.
 */
public class Database {

  private static Connection conn = null;

  /**
   * Empty constructor for the Database class.
   */
  public Database(){}

  /**
   * Instantiates the database. Copied from the Database lab.
   * @param filename file name of SQLite3 database to open.
   */
  public Database(String filename) {
    try {
      // this line loads the driver manager class, and must be
      // present for everything else to work properly
      Class.forName("org.sqlite.JDBC");
      String urlToDB = "jdbc:sqlite:" + filename;
      conn = DriverManager.getConnection(urlToDB);
      // these two lines tell the database to enforce foreign keys during operations,
      // and should be present
      Statement stat = conn.createStatement();
      stat.executeUpdate("PRAGMA foreign_keys=ON;");
      System.out.println("INFO: Database " + filename + " loaded.");
    } catch (ClassNotFoundException e) {
      System.out.print("ERROR: " + e.getMessage());
    } catch (SQLException e) {
      System.out.print("ERROR: " + e.getMessage());
    }
  }

  /**
   * Gets a single random card from the Tarot table.
   * @return The id of the card pulled.
   */
  public String getCard() {
    String cardId = "";
    try {
      String sql = "SELECT id FROM Tarot ORDER BY RANDOM() LIMIT 1;";
      PreparedStatement cardFinder = conn.prepareStatement(sql);
      ResultSet rs = cardFinder.executeQuery();
      // Ensure that we get all the tables in the database with while loop.
      while (rs.next()) {
        // Index based on 1, 2, etc. instead of 0, 1, etc.
        cardId = rs.getString(1);
      }
    } catch (SQLException e) {
      System.out.println("ERROR: " + e.getMessage());
    }
    return cardId;
  }

  /**
   * Gets the card name that corresponds with the random ID returned from getCard()
   */
  public String getCardName(String cardID){
    String cardName = "";
    try {
      String sql = "SELECT card FROM Tarot WHERE id=" + cardID + ";";
      PreparedStatement cardFinder = conn.prepareStatement(sql);
      ResultSet rs = cardFinder.executeQuery();
      // Ensure that we get all the tables in the database with while loop.
      while (rs.next()) {
        // Index based on 1, 2, etc. instead of 0, 1, etc.
        cardName = rs.getString(1);
      }
    } catch (SQLException e) {
      System.out.println("ERROR: " + e.getMessage());
    }
    return cardName;
  }

  /**
   * Gets the card upright that corresponds with the random ID returned from getCard()
   */
  public String getCardUpright(String cardID){
    String cardUpright = "";
    try {
      String sql = "SELECT upright FROM Tarot WHERE id=" + cardID + ";";
      PreparedStatement cardFinder = conn.prepareStatement(sql);
      ResultSet rs = cardFinder.executeQuery();
      // Ensure that we get all the tables in the database with while loop.
      while (rs.next()) {
        // Index based on 1, 2, etc. instead of 0, 1, etc.
        cardUpright = rs.getString(1);
      }
    } catch (SQLException e) {
      System.out.println("ERROR: " + e.getMessage());
    }
    return cardUpright;
  }

  /**
   * Gets the card reverse that corresponds with the random ID returned from getCard()
   */
  public String getCardReverse(String cardID){
    String cardReverse = "";
    try {
      String sql = "SELECT reverse FROM Tarot WHERE id=" + cardID + ";";
      PreparedStatement cardFinder = conn.prepareStatement(sql);
      ResultSet rs = cardFinder.executeQuery();
      // Ensure that we get all the tables in the database with while loop.
      while (rs.next()) {
        // Index based on 1, 2, etc. instead of 0, 1, etc.
        cardReverse = rs.getString(1);
      }
    } catch (SQLException e) {
      System.out.println("ERROR: " + e.getMessage());
    }
    return cardReverse;
  }

  /**
   * Gets the card image that corresponds with the random ID returned from getCard()
   */
  public String getCardImage(String cardID){
    String cardImage = "";
    try {
      String sql = "SELECT image FROM Tarot WHERE id=" + cardID + ";";
      PreparedStatement cardFinder = conn.prepareStatement(sql);
      ResultSet rs = cardFinder.executeQuery();
      // Ensure that we get all the tables in the database with while loop.
      while (rs.next()) {
        // Index based on 1, 2, etc. instead of 0, 1, etc.
        cardImage = rs.getString(1);
      }
    } catch (SQLException e) {
      System.out.println("ERROR: " + e.getMessage());
    }
    return cardImage;
  }
}

