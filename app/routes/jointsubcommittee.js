import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var id = params.committee_id;
    var urljointsubcommittee='http://congress.api.sunlightfoundation.com/committees?chamber=joint&subcommittee=true&parent_committee_id=' + id + '&apikey=6fa70caf0ff646f88ce164da51fa6f33';
    return Ember.$.getJSON(urljointsubcommittee).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
