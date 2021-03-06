import AbstractEditRoute from 'hospitalrun/pods/application/routes/abstract-edit-route';
import Ember from 'ember';
import { translationMacro as t } from 'ember-i18n';
import UserSession from 'hospitalrun/mixins/user-session';
export default AbstractEditRoute.extend(UserSession, {
  hideNewButton: true,
  editTitle: t('admin.loaddb.editTitle'),

  beforeModel() {
    if (!this.currentUserCan('load_db')) {
      this.transitionTo('application');
    }
  },

  // No model needed for import.
  model() {
    return Ember.RSVP.resolve(Ember.Object.create({}));
  }
});
