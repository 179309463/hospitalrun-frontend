import LabsIndexRoute from 'hospitalrun/hospital/labs/index/route';
import { translationMacro as t } from 'ember-i18n';

export default LabsIndexRoute.extend({
  pageTitle: t('labs.completedTitle'),
  searchStatus: 'Completed'
});
