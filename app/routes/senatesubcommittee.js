import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var id = params.committee_id;
    var urlsenatesubcommittee='http://congress.api.sunlightfoundation.com/committees?chamber=senate&subcommittee=true&parent_committee_id=' + id + '&apikey=6fa70caf0ff646f88ce164da51fa6f33';
    return Ember.$.getJSON(urlsenatesubcommittee).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
