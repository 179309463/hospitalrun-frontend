import AbstractSearchRoute from 'hospitalrun/routes/abstract-search-route';
export default AbstractSearchRoute.extend({
  moduleName: 'hospital.invoices',
  searchKeys: [{
    name: 'externalInvoiceNumber',
    type: 'contains'
  }, {
    name: 'patientInfo',
    type: 'contains'
  }],
  searchModel: 'invoice'
});
