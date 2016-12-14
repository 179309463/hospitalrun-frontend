import { translationMacro as t } from 'ember-i18n';
import MedicationIndexRoute from 'hospitalrun/hospital/medication/index/route';
export default MedicationIndexRoute.extend({
  modelName: 'medication',
  pageTitle: t('medication.titles.completedMedication'),
  searchStatus: 'Fulfilled'
});
