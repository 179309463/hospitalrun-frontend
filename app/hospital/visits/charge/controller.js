import ProcedureChargeController from 'hospitalrun/hospital/visits/procedures/charge/controller';
import Ember from 'ember';

export default ProcedureChargeController.extend({
  cancelAction: 'closeModal',
  newPricingItem: false,
  requestingController: Ember.inject.controller('hospital/visits/edit')
});
