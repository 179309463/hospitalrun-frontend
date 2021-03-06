import AppointmentIndexRoute from 'hospitalrun/pods/hospital/appointments/index/route';
import { translationMacro as t } from 'ember-i18n';
export default AppointmentIndexRoute.extend({
  editReturn: 'hospital.appointments.today',
  modelName: 'appointment',
  pageTitle: t('appointments.todayTitle'),

  _modelQueryParams() {
    let endOfDay = moment().endOf('day').toDate().getTime();
    let maxValue = this.get('maxValue');
    let startOfDay = moment().startOf('day').toDate().getTime();
    return {
      options: {
        startkey: [startOfDay, null, 'appointment_'],
        endkey: [endOfDay, endOfDay, `appointment_${maxValue}`]
      },
      mapReduce: 'appointments_by_date'
    };
  }
});
