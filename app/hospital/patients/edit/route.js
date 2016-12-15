import AbstractEditRoute from 'hospitalrun/application/routes/abstract-edit-route';
import Ember from 'ember';
import PatientId from 'hospitalrun/mixins/patient-id';
import PatientVisits from 'hospitalrun/mixins/patient-visits';
import PatientNotes from 'hospitalrun/mixins/patient-notes';
import PouchDbMixin from 'hospitalrun/mixins/pouchdb';
import { translationMacro as t } from 'ember-i18n';

export default AbstractEditRoute.extend(PatientId, PatientVisits, PouchDbMixin, PatientNotes, {
  editTitle: t('patients.titles.edit'),
  modelName: 'patient',
  newTitle: t('patients.titles.new'),
  photos: null,

  actions: {
    updateNote(note) {
      note.get('visit').save().then(function() {
        // noop
      });
    },
    appointmentDeleted(model) {
      this.controller.send('appointmentDeleted', model);
    },
    returnToPatient() {
      this.controller.send('returnToPatient');
    },
    deleteContact(model) {
      this.controller.send('deleteContact', model);
    },

    deleteExpense(model) {
      this.controller.send('deleteExpense', model);
    },

    deleteFamily(model) {
      this.controller.send('deleteFamily', model);
    },

    deletePhoto(model) {
      this.controller.send('deletePhoto', model);
    },

    updateExpense(model) {
      this.controller.send('updateExpense', model);
    },

    updateFamilyInfo(model) {
      this.controller.send('updateFamilyInfo', model);
    },

    visitDeleted(model) {
      this.controller.send('visitDeleted', model);
    }
  },

  getNewData() {
    return this.generateFriendlyId().then(function(friendlyId) {
      return { friendlyId };
    });
  },

  setupController(controller, model) {
    // Load appointments, photos and visits asynchronously.
    let friendlyId = model.get('friendlyId');
    let externalId = model.get('externalPatientId');
    let maxValue = this.get('maxValue');
    let patientId = model.get('id');
    if (Ember.isEmpty(friendlyId) && !Ember.isEmpty(externalId)) {
      model.set('friendlyId', externalId);
    }
    this._super(controller, model);
    this.getPatientVisits(model).then(function(visits) {
      model.set('visits', visits);
    });
    this.store.query('appointment', {
      options: {
        startkey: [patientId, null, null, 'appointment_'],
        endkey: [patientId, maxValue, maxValue, maxValue]
      },
      mapReduce: 'appointments_by_patient'
    }).then(function(appointments) {
      model.set('appointments', appointments);
    });
    this.store.query('photo', {
      options: {
        key: patientId
      },
      mapReduce: 'photo_by_patient'
    }).then(function(photos) {
      let patientPhotos = [];
      patientPhotos.addObjects(photos);
      model.set('photos', patientPhotos);
    });
  }

});
