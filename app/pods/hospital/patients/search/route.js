import AbstractSearchRoute from 'hospitalrun/pods/application/routes/abstract-search-route';
export default AbstractSearchRoute.extend({
  moduleName: 'hospital.patients',
  searchKeys: [{
    name: 'friendlyId',
    type: 'contains'
  }, {
    name: 'externalPatientId',
    type: 'contains'
  }, {
    name: 'firstName',
    type: 'fuzzy'
  }, {
    name: 'lastName',
    type: 'fuzzy'
  }, {
    name: 'phone',
    type: 'contains'
  }],
  searchModel: 'patient'
});
