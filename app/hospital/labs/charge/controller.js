import ProcedureChargeController from 'hospitalrun/hospital/visits/procedures/charge/controller';
import Ember from 'ember';

export default ProcedureChargeController.extend({
  labsEdit: Ember.inject.controller('hospital/labs/edit'),
  cancelAction: 'closeModal',
  newPricingItem: false,
  requestingController: Ember.computed.alias('controllers.labs/edit'),
  pricingList: Ember.computed.alias('controllers.labs/edit.chargesPricingList')
});
