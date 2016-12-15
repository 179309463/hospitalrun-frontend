import AbstractIndexRoute from 'hospitalrun/pods/application/routes/abstract-index-route';
import { translationMacro as t } from 'ember-i18n';

export default AbstractIndexRoute.extend({
  editReturn: 'hospital.appointments.index',
  modelName: 'appointment',
  pageTitle: t('appointments.thisWeek'),

  _getStartKeyFromItem(item) {
    let endDate = item.get('endDate');
    let id = this._getPouchIdFromItem(item);
    let startDate = item.get('startDate');
    if (endDate && endDate !== '') {
      endDate = new Date(endDate);
      if (endDate.getTime) {
        endDate = endDate.getTime();
      }
    }
    if (startDate && startDate !== '') {
      startDate = new Date(startDate);
      if (startDate.getTime) {
        startDate = startDate.getTime();
      }
    }

    return [startDate, endDate, id];
  },

  _modelQueryParams() {
    let endOfWeek = moment().endOf('week').toDate().getTime();
    let startOfWeek = moment().startOf('week').toDate().getTime();
    let maxId = this._getMaxPouchId();
    return {
      options: {
        startkey: [startOfWeek, null, null],
        endkey: [endOfWeek, endOfWeek, maxId]
      },
      mapReduce: 'appointments_by_date'
    };
  },

  actions: {
    editAppointment(appointment) {
      appointment.set('returnTo', this.get('editReturn'));
      this.send('editItem', appointment);
    }
  }
});