import { translationMacro as t } from 'ember-i18n';
import ImagingIndexRoute from 'hospitalrun/pods/hospital/imaging/index/route';
export default ImagingIndexRoute.extend({
  pageTitle: t('imaging.titles.completedImaging'),
  searchStatus: 'Completed'
});
