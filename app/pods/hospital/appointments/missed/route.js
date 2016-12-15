import AppointmentIndexRoute from 'hospitalrun/pods/hospital/appointments/index/route';
import { translationMacro as t } from 'ember-i18n';

export default AppointmentIndexRoute.extend({
  editReturn: 'hospital.appointments.missed',
  modelName: 'appointment',
  pageTitle: t('appointments.missed'),

  _modelQueryParams() {
    let queryParams = this._super(...arguments);
    queryParams.filterBy = [{
      name: 'status',
      value: 'Missed'
    }];
    return queryParams;
  }
});