import { translationMacro as t } from 'ember-i18n';
import AbstractDeleteController from 'hospitalrun/application/controllers/abstract-delete-controller';
export default AbstractDeleteController.extend({
  title: t('inventory.labels.deleteItem')
});
