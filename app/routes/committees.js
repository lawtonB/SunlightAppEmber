import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url='http://congress.api.sunlightfoundation.com/committees?chamber=house&subcommittee=false&apikey=6fa70caf0ff646f88ce164da51fa6f33';
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
