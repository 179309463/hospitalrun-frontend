import AbstractDeleteController from 'hospitalrun/pods/application/controllers/abstract-delete-controller';
import Ember from 'ember';
export default AbstractDeleteController.extend({
  afterDeleteAction: 'notifyProcedureDelete',
  editController: Ember.inject.controller('hospital/visits/edit'),
  title: 'Delete Procedure',

  actions: {
    notifyProcedureDelete() {
      this.send('closeModal');
      this.get('editController').send('deleteProcedure', this.get('model'));
    }
  }
});
