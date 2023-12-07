import Controller from '@ember/controller';
import { computed } from '@ember/object';

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
})