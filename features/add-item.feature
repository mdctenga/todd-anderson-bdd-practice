Feature: Shopper can add an item to their Grocery List
  As a grocer shopper
  I want to add an item to my grocery list
  So tha I can remember to buy that item at the grocery store

  Scenario: Item added to grocery list
    Given I have an empty grocery list
    When I add an item to the list
    Then the grocery list contains a single item

  Scenario: Item accessible from grocery list
    Given I have an empty grocery list
    When I add an item to the list
    Then I can acces that item from the grocery list