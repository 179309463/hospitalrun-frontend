import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    returnToInvoice() {
      this.transitionTo('hospital.invoices.edit', this.get('model'));
    }
  }
});
