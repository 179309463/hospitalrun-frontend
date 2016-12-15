import AbstractSearchRoute from 'hospitalrun/pods/application/routes/abstract-search-route';
export default AbstractSearchRoute.extend({
  moduleName: 'hospital.medication',
  searchKeys: [{
    name: 'prescription',
    type: 'contains'
  }],
  searchModel: 'medication'
});
