import AbstractPagedController from 'hospitalrun/application/controllers/abstract-paged-controller';
import PatientVisits from 'hospitalrun/mixins/patient-visits';
export default AbstractPagedController.extend(PatientVisits, {
  addPermission: 'add_patient',
  deletePermission: 'delete_patient',
  canAdmitPatient: function() {
    return this.currentUserCan('admit_patient');
  }.property(),

  canDischargePatient: function() {
    return this.currentUserCan('discharge_patient');
  }.property(),

  startKey: [],
  actions: {
    admitPatient(patient) {
      this.getPatientVisits(patient).then(function(visits) {
        this.send('createNewVisit', patient, visits);
      }.bind(this));

    },

    dischargePatient(patient) {
      this.getPatientVisits(patient).then(function(visits) {
        let visitToDischarge = visits.findBy('status', 'Admitted');
        if (visitToDischarge) {
          visitToDischarge.set('status', 'Discharged');
          visitToDischarge.set('endDate', new Date());
          this.transitionToRoute('hospital.visits.edit', visitToDischarge);
        }
      }.bind(this));
    }
  }
});
