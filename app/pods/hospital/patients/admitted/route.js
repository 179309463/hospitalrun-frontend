import { translationMacro as t } from 'ember-i18n';
import PatientsIndexRoute from 'hospitalrun/pods/hospital/patients/index/route';
export default PatientsIndexRoute.extend({
  pageTitle: t('patients.titles.admittedPatients'),

  _modelQueryParams() {
    return {
      mapReduce: 'patient_by_admission'
    };
  }
});
