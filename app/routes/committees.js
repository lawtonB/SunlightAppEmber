import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var urlHouse='http://congress.api.sunlightfoundation.com/committees?chamber=house&subcommittee=false&apikey=6fa70caf0ff646f88ce164da51fa6f33';
    var urlSenate='http://congress.api.sunlightfoundation.com/committees?chamber=senate&subcommittee=false&apikey=6fa70caf0ff646f88ce164da51fa6f33';
    var urlJoint='http://congress.api.sunlightfoundation.com/committees?chamber=joint&subcommittee=false&apikey=6fa70caf0ff646f88ce164da51fa6f33';
    return Ember.RSVP.hash({
      house: Ember.$.getJSON(urlHouse).then(function(responseJSON){
        return responseJSON.results;
      }),
      senate: Ember.$.getJSON(urlSenate).then(function(responseJSON){
        return responseJSON.results;
      }),
      joint: Ember.$.getJSON(urlJoint).then(function(responseJSON){
        return responseJSON.results;
      })
    })
  }
});
