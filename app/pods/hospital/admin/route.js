import AbstractModuleRoute from 'hospitalrun/pods/application/routes/abstract-module-route';
export default AbstractModuleRoute.extend({
  addCapability: 'add_user',
  allowSearch: false,
  moduleName: 'hospital.admin',
  sectionTitle: 'Admin',

  editPath: function() {
    return 'hospital.admin.users.edit';
  }.property(),

  deletePath: function() {
    return 'hospital.admin.users.delete';
  }.property()
});
