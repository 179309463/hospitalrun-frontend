import AbstractSearchRoute from 'hospitalrun/application/routes/abstract-search-route';
export default AbstractSearchRoute.extend({
  moduleName: 'hospital.pricing',
  searchKeys: [{
    'name': 'fuzzy'
  }],
  searchModel: 'pricing'
});
