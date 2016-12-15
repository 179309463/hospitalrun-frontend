import { translationMacro as t } from 'ember-i18n';
import AbstractModuleRoute from 'hospitalrun/application/routes/abstract-module-route';
export default AbstractModuleRoute.extend({
  addCapability: 'add_imaging',
  additionalModels: [{
    name: 'imagingPricingTypes',
    findArgs: ['lookup', 'imaging_pricing_types']
  }, {
    name: 'radiologistList',
    findArgs: ['lookup', 'radiologists']
  }],
  allowSearch: false,
  moduleName: 'hospital.imaging',
  newButtonText: t('imaging.buttons.newButton'),
  sectionTitle: t('imaging.sectionTitle')
});
