import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодDизита: DS.attr('number'),
  конецСеанса: DS.attr('number'),
  началоСеанса: DS.attr('number'),
  клиент: DS.belongsTo('i-i-s-bekap-3-клиент', { inverse: null, async: false }),
  записьВизита: DS.hasMany('i-i-s-bekap-3-запись-визита', { inverse: 'визит', async: false })
});

export let ValidationRules = {
  кодDизита: {
    descriptionKey: 'models.i-i-s-bekap-3-визит.validations.кодDизита.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  конецСеанса: {
    descriptionKey: 'models.i-i-s-bekap-3-визит.validations.конецСеанса.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  началоСеанса: {
    descriptionKey: 'models.i-i-s-bekap-3-визит.validations.началоСеанса.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-bekap-3-визит.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  записьВизита: {
    descriptionKey: 'models.i-i-s-bekap-3-визит.validations.записьВизита.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВизитE', 'i-i-s-bekap-3-визит', {
    кодDизита: attr('Код dизита', { index: 0 }),
    началоСеанса: attr('Начало сеанса', { index: 1 }),
    конецСеанса: attr('Конец сеанса', { index: 2 }),
    клиент: belongsTo('i-i-s-bekap-3-клиент', 'Клиент', {
      фИО: attr('ФИО', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИО' }),
    записьВизита: hasMany('i-i-s-bekap-3-запись-визита', 'Табличная часть состав визита', {
      стоимость: attr('Стоимость', { index: 0 }),
      сотрудник: belongsTo('i-i-s-bekap-3-сотрудник', 'Сотрудник', {
        фИО: attr('ФИО', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'фИО' }),
      услуга: belongsTo('i-i-s-bekap-3-услуга', 'Услуга', {
        наименование: attr('Наименование', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ВизитL', 'i-i-s-bekap-3-визит', {
    кодDизита: attr('Код dизита', { index: 0 }),
    началоСеанса: attr('Начало сеанса', { index: 1 }),
    конецСеанса: attr('Конец сеанса', { index: 2 }),
    клиент: belongsTo('i-i-s-bekap-3-клиент', 'ФИО', {
      фИО: attr('ФИО', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
