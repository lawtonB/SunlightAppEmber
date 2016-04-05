import Ember from 'ember';

export default Ember.Component.extend({
  showMore: false,
actions: {
  hideDetails(){
    this.set('showMore', false);
  },
  showDetails(){
    this.set('showMore', true);
  }
}
});
