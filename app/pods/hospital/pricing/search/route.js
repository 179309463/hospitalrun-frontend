import AbstractSearchRoute from 'hospitalrun/pods/application/routes/abstract-search-route';
export default AbstractSearchRoute.extend({
  moduleName: 'hospital.pricing',
  searchKeys: [{
    'name': 'fuzzy'
  }],
  searchModel: 'pricing'
});
