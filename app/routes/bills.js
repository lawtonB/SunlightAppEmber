import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var urlBills='http://congress.api.sunlightfoundation.com/bills?apikey=6fa70caf0ff646f88ce164da51fa6f33';
    return Ember.$.getJSON(urlBills).then(function(responseJSON){
      // console.log(JSON.stringify(responseJSON));
      return responseJSON.results;
    });
  }
});
