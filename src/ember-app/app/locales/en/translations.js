import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISBekap_3ВизитLForm from './forms/i-i-s-bekap-3-визит-l';
import IISBekap_3ДолжностиLForm from './forms/i-i-s-bekap-3-должности-l';
import IISBekap_3КлиентLForm from './forms/i-i-s-bekap-3-клиент-l';
import IISBekap_3сотрудникLForm from './forms/i-i-s-bekap-3-сотрудник-l';
import IISBekap_3ТоварLForm from './forms/i-i-s-bekap-3-товар-l';
import IISBekap_3УслугаLForm from './forms/i-i-s-bekap-3-услуга-l';
import IISBekap_3ВизитEForm from './forms/i-i-s-bekap-3-визит-e';
import IISBekap_3ДолжностиEForm from './forms/i-i-s-bekap-3-должности-e';
import IISBekap_3КлиентEForm from './forms/i-i-s-bekap-3-клиент-e';
import IISBekap_3сотрудникEForm from './forms/i-i-s-bekap-3-сотрудник-e';
import IISBekap_3ТоварEForm from './forms/i-i-s-bekap-3-товар-e';
import IISBekap_3УслугаEForm from './forms/i-i-s-bekap-3-услуга-e';
import IISBekap_3ВизитModel from './models/i-i-s-bekap-3-визит';
import IISBekap_3ДолжностиModel from './models/i-i-s-bekap-3-должности';
import IISBekap_3ЗаписьВизитаModel from './models/i-i-s-bekap-3-запись-визита';
import IISBekap_3КлиентModel from './models/i-i-s-bekap-3-клиент';
import IISBekap_3СоставУслугиModel from './models/i-i-s-bekap-3-состав-услуги';
import IISBekap_3сотрудникModel from './models/i-i-s-bekap-3-сотрудник';
import IISBekap_3ТоварModel from './models/i-i-s-bekap-3-товар';
import IISBekap_3УслугаModel from './models/i-i-s-bekap-3-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-bekap-3-визит': IISBekap_3ВизитModel,
    'i-i-s-bekap-3-должности': IISBekap_3ДолжностиModel,
    'i-i-s-bekap-3-запись-визита': IISBekap_3ЗаписьВизитаModel,
    'i-i-s-bekap-3-клиент': IISBekap_3КлиентModel,
    'i-i-s-bekap-3-состав-услуги': IISBekap_3СоставУслугиModel,
    'i-i-s-bekap-3-сотрудник': IISBekap_3сотрудникModel,
    'i-i-s-bekap-3-товар': IISBekap_3ТоварModel,
    'i-i-s-bekap-3-услуга': IISBekap_3УслугаModel
  },

  'application-name': 'Bekap_3',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Bekap_3',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Bekap_3',
          title: 'Bekap_3'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        главная: {
          caption: 'Главная',
          title: 'Главная',
          'i-i-s-bekap-3-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-bekap-3-визит-l': {
            caption: 'Визит',
            title: ''
          },
          'i-i-s-bekap-3-должности-l': {
            caption: 'Должности',
            title: ''
          }
        },
        'справочник-клиенты': {
          caption: 'Справочник клиенты',
          title: 'Справочник клиенты',
          'i-i-s-bekap-3-клиент-l': {
            caption: 'Клиент',
            title: 'Клиент'
          }
        },
        'справочник-услуги': {
          caption: 'Справочник услуги',
          title: 'Справочник услуги',
          'i-i-s-bekap-3-услуга-l': {
            caption: 'Услуга',
            title: 'Услуга'
          }
        },
        товары: {
          caption: 'Товары',
          title: 'Товары',
          'i-i-s-bekap-3-товар-l': {
            caption: 'Товар',
            title: 'Товар'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-bekap-3-визит-l': IISBekap_3ВизитLForm,
    'i-i-s-bekap-3-должности-l': IISBekap_3ДолжностиLForm,
    'i-i-s-bekap-3-клиент-l': IISBekap_3КлиентLForm,
    'i-i-s-bekap-3-сотрудник-l': IISBekap_3сотрудникLForm,
    'i-i-s-bekap-3-товар-l': IISBekap_3ТоварLForm,
    'i-i-s-bekap-3-услуга-l': IISBekap_3УслугаLForm,
    'i-i-s-bekap-3-визит-e': IISBekap_3ВизитEForm,
    'i-i-s-bekap-3-должности-e': IISBekap_3ДолжностиEForm,
    'i-i-s-bekap-3-клиент-e': IISBekap_3КлиентEForm,
    'i-i-s-bekap-3-сотрудник-e': IISBekap_3сотрудникEForm,
    'i-i-s-bekap-3-товар-e': IISBekap_3ТоварEForm,
    'i-i-s-bekap-3-услуга-e': IISBekap_3УслугаEForm
  },

});

export default translations;
