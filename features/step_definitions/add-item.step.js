'use strict';

var GroceryList = require(process.cwd() + '/script/model/grocery-list');

module.exports = function () {

  this.Given(/^I have an empty grocery list$/, function (callback) {
    myList = GroceryList.create();
    callback();
  });

  this.When(/^I add an item to the list$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^the grocery list contains a single item$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^I can acces that item from the grocery list$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

};