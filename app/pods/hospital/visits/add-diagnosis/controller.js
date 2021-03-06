import Ember from 'ember';
import AbstractEditController from 'hospitalrun/pods/application/controllers/abstract-edit-controller';
export default AbstractEditController.extend({
  visitsController: Ember.inject.controller('hospital/visits'),
  diagnosisList: Ember.computed.alias('visitsController.diagnosisList'),

  editController: Ember.inject.controller('hospital/visits/edit'),
  lookupListsToUpdate: [{
    name: 'diagnosisList',
    property: 'model.diagnosis',
    id: 'diagnosis_list'
  }],
  title: 'Add Diagnosis',
  updateButtonText: 'Add',
  updateButtonAction: 'add',
  showUpdateButton: true,

  actions: {
    cancel() {
      this.send('closeModal');
    },

    add() {
      this.updateLookupLists();
      let newDiag = {
        date: new Date(),
        description: this.get('model.diagnosis')
      };
      this.get('editController').send('addDiagnosis', newDiag);
    }
  }
});
