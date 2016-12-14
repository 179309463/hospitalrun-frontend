import PricingIndexRoute from 'hospitalrun/hospital/pricing/index/route';
export default PricingIndexRoute.extend({
  category: 'Imaging',
  pageTitle: 'Imaging Pricing',

  actions: {
    editItem(item) {
      item.set('returnTo', 'pricing.imaging');
      this.transitionTo('hospital.pricing.edit', item);
    }
  }
});
