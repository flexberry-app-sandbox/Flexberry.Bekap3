import Controller from '@ember/controller';
import $ from 'jquery';
import { computed, observer } from '@ember/object';
import { isNone } from '@ember/utils';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';



export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.главная.caption'),
          title: i18n.t('forms.application.sitemap.главная.title'),
          children: [{
            link: 'i-i-s-bekap-3-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.главная.i-i-s-bekap-3-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.главная.i-i-s-bekap-3-сотрудник-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-bekap-3-визит-l',
            caption: i18n.t('forms.application.sitemap.главная.i-i-s-bekap-3-визит-l.caption'),
            title: i18n.t('forms.application.sitemap.главная.i-i-s-bekap-3-визит-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-bekap-3-должности-l',
            caption: i18n.t('forms.application.sitemap.главная.i-i-s-bekap-3-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.главная.i-i-s-bekap-3-должности-l.title'),
            icon: 'folder',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-клиенты.caption'),
          title: i18n.t('forms.application.sitemap.справочник-клиенты.title'),
          children: [{
            link: 'i-i-s-bekap-3-клиент-l',
            caption: i18n.t('forms.application.sitemap.справочник-клиенты.i-i-s-bekap-3-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-клиенты.i-i-s-bekap-3-клиент-l.title'),
            icon: 'file',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-услуги.caption'),
          title: i18n.t('forms.application.sitemap.справочник-услуги.title'),
          children: [{
            link: 'i-i-s-bekap-3-услуга-l',
            caption: i18n.t('forms.application.sitemap.справочник-услуги.i-i-s-bekap-3-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-услуги.i-i-s-bekap-3-услуга-l.title'),
            icon: 'tasks',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.товары.caption'),
          title: i18n.t('forms.application.sitemap.товары.title'),
          children: [{
            link: 'i-i-s-bekap-3-товар-l',
            caption: i18n.t('forms.application.sitemap.товары.i-i-s-bekap-3-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.товары.i-i-s-bekap-3-товар-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),

  /**
    Locales supported by application.

    @property locales
    @type String[]
    @default ['ru', 'en']
  */
  locales: undefined,

  /**
    Handles changes in userSettingsService.isUserSettingsServiceEnabled.

    @method _userSettingsServiceChanged
    @private
  */
  _userSettingsServiceChanged: observer('userSettingsService.isUserSettingsServiceEnabled', function() {
    this.get('target.router').refresh();
  }),

  /**
    Initializes controller.
  */
  init() {
    this._super(...arguments);

    let i18n = this.get('i18n');
    if (isNone(i18n)) {
      return;
    }

    this.set('locales', ['ru', 'en']);

    // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
    let shortCurrentLocale = this.get('i18n.locale').split('-')[0];
    let availableLocales = A(this.get('locales'));

    // Force current locale to be one of available,
    // if browser's current language is not supported by dummy application,
    // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
    if (!availableLocales.includes(shortCurrentLocale)) {
      i18n.set('locale', 'en');
    } else {
      i18n.set('locale', shortCurrentLocale);
    }
  },

  /**
    Service that triggers objectlistview events.

    @property objectlistviewEventsService
    @type Service
  */
  objectlistviewEventsService: service('objectlistview-events'),

  /**
    Service for managing the state of the application.

    @property appState
    @type AppStateService
  */
  appState: service(),

  actions: {
    /**
      Call `updateWidthTrigger` for `objectlistviewEventsService`.

      @method actions.updateWidth
    */
    updateWidth() {
      this.get('objectlistviewEventsService').updateWidthTrigger();
    },

    /**
      Toggles application sitemap's side bar.

      @method actions.toggleSidebar
    */
    toggleSidebar() {
      let sidebar = $('.ui.sidebar.main.menu');
      sidebar.sidebar('toggle');
      sidebar.toggleClass('sidebar-mini');

      $('.full.height').toggleClass('content-opened');

      $('.sidebar.icon .text_menu').toggleClass('hidden');
      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.bgw-opacity').toggleClass('hidden');

      // For reinit overflowed tabs.
      $(window).trigger('resize');
    },

    /**
      Toggles application sitemap's side bar in mobile view.

      @method actions.toggleSidebarMobile
    */
    toggleSidebarMobile() {
      $('.ui.sidebar.main.menu').sidebar('toggle');

      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.sidebar.icon').toggleClass('hidden-text');
      $('.bgw-opacity').toggleClass('hidden');

      if (!this.get('_hideEventIsAttached')) {
        $('.ui.sidebar.main.menu').sidebar('attach events', '.ui.sidebar.main.menu .item a', 'hide');
        this.set('_hideEventIsAttached', true);
      }
    }
  }
});
