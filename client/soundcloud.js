/* soundcloud.js */

var dep = new Deps.Dependency;
Soundcloud = {
  getLikes: function() {
    dep.depend();

    //Set access token so we can query the Soundcloud API
    var user = Meteor.user();
    if(user && user.services.soundcloud){
        var accessToken = user.services.soundcloud.accessToken;
        if(accessToken){
            SC.accessToken(accessToken);
        }
    }
    
    if(typeof this.likes === 'undefined') {
      this.likes = [];

      //Call the API
      SC.get("/me/favorites", {limit: 10} ,_.bind(function(response){
        if(response.errors){
            console.log(response.errors);
            throw new Error("Error getting likes");
        }
        this.likes = response;
        dep.changed();
      }, this));
    }
    return this.likes;
  }
};