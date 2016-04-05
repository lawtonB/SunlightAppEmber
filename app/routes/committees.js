import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var urlHouse='http://congress.api.sunlightfoundation.com/committees?chamber=house&subcommittee=false&apikey=6fa70caf0ff646f88ce164da51fa6f33';
    return Ember.$.getJSON(urlHouse).then(function(responseJSON){
      // console.log(JSON.stringify(responseJSON));
      return responseJSON.results;
    });
  }
});
