import AbstractDeleteController from 'hospitalrun/pods/application/controllers/abstract-delete-controller';
import PatientSubmodule from 'hospitalrun/mixins/patient-submodule';
export default AbstractDeleteController.extend(PatientSubmodule, {
  title: 'Delete Request',

  actions: {
    delete() {
      this.deleteChildFromVisit('imaging');
    }
  }
});
