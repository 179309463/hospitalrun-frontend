import AbstractDeleteController from 'hospitalrun/application/controllers/abstract-delete-controller';
import Ember from 'ember';
export default AbstractDeleteController.extend({
  afterDeleteAction: 'notifyVitalsDelete',
  editController: Ember.inject.controller('hospital/visits/edit'),
  title: 'Delete Vitals',

  actions: {
    notifyVitalsDelete() {
      this.send('closeModal');
      this.get('editController').send('deleteVitals', this.get('model'));
    }
  }
});
