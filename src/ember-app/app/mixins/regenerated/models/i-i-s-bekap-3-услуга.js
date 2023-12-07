import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  длительность: DS.attr('number'),
  наименование: DS.attr('string'),
  услуги: DS.attr('number'),
  цена: DS.attr('decimal'),
  составУслуги: DS.hasMany('i-i-s-bekap-3-состав-услуги', { inverse: 'услуга', async: false })
});

export let ValidationRules = {
  длительность: {
    descriptionKey: 'models.i-i-s-bekap-3-услуга.validations.длительность.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-bekap-3-услуга.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  услуги: {
    descriptionKey: 'models.i-i-s-bekap-3-услуга.validations.услуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-bekap-3-услуга.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  составУслуги: {
    descriptionKey: 'models.i-i-s-bekap-3-услуга.validations.составУслуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УслугаE', 'i-i-s-bekap-3-услуга', {
    услуги: attr('Услуги', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    цена: attr('Цена', { index: 2 }),
    длительность: attr('Длительность', { index: 3 }),
    составУслуги: hasMany('i-i-s-bekap-3-состав-услуги', 'Табличная часть состав услуги', {
      количество: attr('Количество', { index: 0 }),
      товар: belongsTo('i-i-s-bekap-3-товар', 'Товар', {
        наименование: attr('Наименование', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('УслугаL', 'i-i-s-bekap-3-услуга', {
    услуги: attr('Услуги', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    цена: attr('Цена', { index: 2 }),
    длительность: attr('Длительность', { index: 3 })
  });
};
