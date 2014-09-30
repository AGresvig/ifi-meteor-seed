Template.hello.helpers({
  counter: function () {
    return Session.get("counter");
  }
});

Template.hello.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set("counter", Session.get("counter") + 1);
  }
});

Template._loginButtonsLoggedInDropdown.events({
  'click #soundcloud-login': function(event) {
    event.stopPropagation();
    Template._loginButtons.toggleDropdown();
    Meteor.loginWithSoundcloud(function(evt) {
        console.log("Logged in");
    });
  }
});