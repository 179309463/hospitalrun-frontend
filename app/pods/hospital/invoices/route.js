import AbstractModuleRoute from 'hospitalrun/pods/application/routes/abstract-module-route';
import ModalHelper from 'hospitalrun/mixins/modal-helper';
import PatientListRoute from 'hospitalrun/mixins/patient-list-route';

export default AbstractModuleRoute.extend(ModalHelper, PatientListRoute, {
  addCapability: 'add_invoice',
  currentScreenTitle: 'Invoices',
  editTitle: 'Edit Invoice',
  newTitle: 'New Invoice',
  moduleName: 'hospital.invoices',
  newButtonText: '+ new invoice',
  sectionTitle: 'Invoices',

  additionalButtons: function() {
    if (this.currentUserCan('add_payment')) {
      return [{
        class: 'btn btn-default',
        buttonText: '+ add deposit',
        buttonAction: 'showAddDeposit'
      }];
    }
  }.property(),

  additionalModels: [{
    name: 'billingCategoryList',
    findArgs: ['lookup', 'billing_categories']
  }, {
    name: 'expenseAccountList',
    findArgs: ['lookup', 'expense_account_list']
  }, {
    name: 'pricingProfiles',
    findArgs: ['price-profile']
  }],

  actions: {
    showAddDeposit() {
      let payment = this.store.createRecord('payment', {
        paymentType: 'Deposit',
        datePaid: new Date()
      });
      this.send('openModal', 'hospital.invoices.payment', payment);
    },

    showAddPayment(invoice) {
      let payment = this.store.createRecord('payment', {
        invoice,
        paymentType: 'Payment',
        datePaid: new Date()
      });
      this.send('openModal', 'hospital.invoices.payment', payment);
    },

    showEditPayment(payment) {
      if (this.currentUserCan('add_payment')) {
        this.send('openModal', 'hospital.invoices.payment', payment);
      }
    }
  },

  subActions: function() {
    let actions = [{
      text: 'Billed',
      linkTo: 'hospital.invoices.index',
      statusQuery: 'Billed'
    }];
    if (this.currentUserCan('add_invoice')) {
      actions.push({
        text: 'Drafts',
        linkTo: 'hospital.invoices.index',
        statusQuery: 'Draft'
      });
      actions.push({
        text: 'All Invoices',
        linkTo: 'hospital.invoices.index',
        statusQuery: 'All'
      });
    }
    actions.push({
      text: 'Paid',
      linkTo: 'hospital.invoices.index',
      statusQuery: 'Paid'
    });
    return actions;
  }.property()

});
