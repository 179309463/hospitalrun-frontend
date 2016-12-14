import Ember from 'ember';

const { camelize } = Ember.String;

export default Ember.Mixin.create({
  navItems: [
    {
      title: 'Inventory',
      iconClass: 'octicon-package',
      route: 'hospital.inventory',
      capability: 'inventory',
      subnav: [
        {
          title: 'Requests',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.inventory.index',
          capability: 'add_inventory_request'
        },
        {
          title: 'Items',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.inventory.listing',
          capability: 'inventory'
        },
        {
          title: 'Inventory Received',
          iconClass: 'octicon-plus',
          route: 'hospital.inventory.batch',
          subroute: 'new',
          capability: 'add_inventory_item'
        },
        {
          title: 'Reports',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.inventory.reports',
          capability: 'inventory'
        }
      ]
    },
    {
      title: 'Patients',
      iconClass: 'octicon-organization',
      route: 'hospital.patients',
      capability: 'patients',
      subnav: [
        {
          title: 'Patient Listing',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.patients',
          capability: 'patients'
        },
        {
          title: 'Admitted Patients',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.patients.admitted',
          capability: 'patients'
        },
        {
          title: 'New Patient',
          iconClass: 'octicon-plus',
          route: 'hospital.patients.edit',
          subroute: 'new',
          capability: 'add_patient'
        },
        {
          title: 'Reports',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.patients.reports',
          capability: 'patients'
        }
      ]
    },
    {
      title: 'Appointments',
      iconClass: 'octicon-calendar',
      route: 'hospital.appointments.index',
      capability: 'appointments',
      subnav: [
        {
          title: 'This Week',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.appointments.index',
          capability: 'appointments'
        },
        {
          title: 'Today',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.appointments.today',
          capability: 'appointments'
        },
        {
          title: 'Missed',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.appointments.missed',
          capability: 'appointments'
        },
        {
          title: 'Search',
          iconClass: 'octicon-search',
          route: 'hospital.appointments.search',
          capability: 'appointments'
        },
        {
          title: 'Add Appointment',
          iconClass: 'octicon-plus',
          route: 'hospital.appointments.edit',
          subroute: 'new',
          capability: 'add_appointment'
        }
      ]
    },
    {
      title: 'Imaging',
      iconClass: 'octicon-device-camera',
      route: 'hospital.imaging.index',
      capability: 'imaging',
      subnav: [
        {
          title: 'Requests',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.imaging.index',
          capability: 'imaging'
        },
        {
          title: 'Completed',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.imaging.completed',
          capability: 'imaging'
        },
        {
          title: 'New Request',
          iconClass: 'octicon-plus',
          route: 'hospital.imaging.edit',
          subroute: 'new',
          capability: 'add_imaging'
        }
      ]
    },
    {
      title: 'Medication',
      iconClass: 'octicon-file-text',
      route: 'hospital.medication.index',
      capability: 'medication',
      subnav: [
        {
          title: 'Requests',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.medication.index',
          capability: 'medication'
        },
        {
          title: 'Completed',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.medication.completed',
          capability: 'medication'
        },
        {
          title: 'New Request',
          iconClass: 'octicon-plus',
          route: 'hospital.medication.edit',
          subroute: 'new',
          capability: 'add_medication'
        },
        {
          title: 'Dispense',
          iconClass: 'octicon-checklist',
          route: 'hospital.medication.edit',
          subroute: 'dispense',
          capability: 'fulfill_medication'
        },
        {
          title: 'Return Medication',
          iconClass: 'octicon-mail-reply',
          route: 'hospital.medication.return',
          subroute: 'new',
          capability: 'add_medication'
        }
      ]
    },
    {
      title: 'Labs',
      iconClass: 'octicon-microscope',
      route: 'hospital.labs.index',
      capability: 'labs',
      subnav: [
        {
          title: 'Requests',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.labs.index',
          capability: 'labs'
        },
        {
          title: 'Completed',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.labs.completed',
          capability: 'labs'
        },
        {
          title: 'New Request',
          iconClass: 'octicon-plus',
          route: 'hospital.labs.edit',
          subroute: 'new',
          capability: 'add_lab'
        }
      ]
    },
    {
      title: 'Billing',
      iconClass: 'octicon-credit-card',
      route: 'hospital.invoices.index',
      capability: 'invoices',
      subnav: [
        {
          title: 'Invoices',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.invoices.index',
          capability: 'invoices'
        },
        {
          title: 'New Invoice',
          iconClass: 'octicon-plus',
          route: 'hospital.invoices.edit',
          subroute: 'new',
          capability: 'invoices'
        },
        {
          title: 'Prices',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.pricing.index',
          capability: 'invoices'
        },
        {
          title: 'Price Profiles',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.pricing.profiles',
          capability: 'invoices'
        }
      ]
    },
    {
      title: 'Administration',
      iconClass: 'octicon-person',
      route: 'hospital.admin.lookup',
      capability: 'admin',
      subnav: [
        {
          title: 'Lookup Lists',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.admin.lookup',
          capability: 'update_config'
        },
        {
          title: 'Address Fields',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.admin.address',
          capability: 'update_config'
        },
        {
          title: 'Load DB',
          iconClass: 'octicon-plus',
          route: 'hospital.admin.loaddb',
          capability: 'load_db'
        },
        {
          title: 'Users',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.admin.users',
          capability: 'users'
        },
        {
          title: 'New User',
          iconClass: 'octicon-plus',
          route: 'hospital.admin.users.edit',
          subroute: 'new',
          capability: 'add_user'
        },
        {
          title: 'User Roles',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.admin.roles',
          capability: 'define_user_roles'
        },
        {
          title: 'Workflow',
          iconClass: 'octicon-chevron-right',
          route: 'hospital.admin.workflow',
          capability: 'update_config'
        }
      ]
    }
  ],

  // Navigation items get mapped localizations
  localizedNavItems: Ember.computed('navItems.[]', function() {
    let localizationPrefix = 'navigation.';
    // Supports unlocalized keys for now, otherwise we would get:
    // "Missing translation: key.etc.path"
    let translationOrOriginal = (translation, original) => {
      // Check for typeof string, because if it's found in localization,
      // i18n will return a SafeString object, not a string
      return typeof translation === 'string' ? original : translation;
    };
    return this.get('navItems').map((nav) => {
      let sectionKey = localizationPrefix + camelize(nav.title).toLowerCase();
      let navTranslated = this.get('i18n').t(sectionKey);

      Ember.set(nav, 'localizedTitle', translationOrOriginal(navTranslated, nav.title));
      // Map all of the sub navs, too
      nav.subnav = nav.subnav.map((sub) => {
        let subItemKey = `${localizationPrefix}subnav.${camelize(sub.title)}`;
        let subTranslated = this.get('i18n').t(subItemKey);

        sub.localizedTitle = translationOrOriginal(subTranslated, sub.title);
        return sub;
      });

      return nav;
    });
  })
});
