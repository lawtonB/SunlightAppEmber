import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var id = params.committee_id;
    var urlSubcommittee='http://congress.api.sunlightfoundation.com/committees?chamber=house&subcommittee=true&parent_committee_id=' + id + '&apikey=6fa70caf0ff646f88ce164da51fa6f33';
    return Ember.$.getJSON(urlSubcommittee).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
