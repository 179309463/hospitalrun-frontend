import AbstractModuleRoute from 'hospitalrun/pods/application/routes/abstract-module-route';
export default AbstractModuleRoute.extend({
  addCapability: 'add_pricing',
  additionalModels: [{
    name: 'expenseAccountList',
    findArgs: ['lookup', 'expense_account_list']
  }, {
    name: 'imagingPricingTypes',
    findArgs: ['lookup', 'imaging_pricing_types']
  }, {
    name: 'labPricingTypes',
    findArgs: ['lookup', 'lab_pricing_types']
  }, {
    name: 'procedurePricingTypes',
    findArgs: ['lookup', 'procedure_pricing_types']
  }, {
    name: 'pricingProfiles',
    findArgs: ['price-profile']
  }, {
    name: 'wardPricingTypes',
    findArgs: ['lookup', 'ward_pricing_types']
  }],
  allowSearch: true,
  moduleName: 'hospital.pricing',
  newButtonText: '+ new item',
  sectionTitle: 'Pricing',
  subActions: [{
    text: 'All Pricing Items',
    linkTo: 'hospital.pricing.index'
  }, {
    text: 'Imaging Pricing',
    linkTo: 'hospital.pricing.imaging'
  }, {
    text: 'Lab Pricing',
    linkTo: 'hospital.pricing.lab'
  }, {
    text: 'Procedure Pricing',
    linkTo: 'hospital.pricing.procedure'
  }, {
    text: 'Ward Pricing',
    linkTo: 'hospital.pricing.ward'
  }, {
    text: 'Pricing Profiles',
    linkTo: 'hospital.pricing.profiles'
  }]
});
