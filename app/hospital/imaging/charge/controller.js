import ProcedureChargeController from 'hospitalrun/hospital/visits/procedures/charge/controller';
import Ember from 'ember';

export default ProcedureChargeController.extend({
  cancelAction: 'closeModal',
  newPricingItem: false,
  requestingController: Ember.inject.controllers('imaging/edit'),
  pricingList: Ember.computed.alias('requestingController.chargesPricingList')
});
