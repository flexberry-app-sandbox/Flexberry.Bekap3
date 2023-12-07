import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  mail: DS.attr('string'),
  датаРождения: DS.attr('date'),
  код: DS.attr('number'),
  номерТелефона: DS.attr('number'),
  пол: DS.attr('i-i-s-bekap-3-пол'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  mail: {
    descriptionKey: 'models.i-i-s-bekap-3-клиент.validations.mail.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаРождения: {
    descriptionKey: 'models.i-i-s-bekap-3-клиент.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-bekap-3-клиент.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-bekap-3-клиент.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пол: {
    descriptionKey: 'models.i-i-s-bekap-3-клиент.validations.пол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-bekap-3-клиент.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-bekap-3-клиент', {
    код: attr('Код', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    номерТелефона: attr('Номер телефона', { index: 2 }),
    датаРождения: attr('Дата рождения', { index: 3 }),
    пол: attr('Пол', { index: 4 })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-bekap-3-клиент', {
    код: attr('Код', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    номерТелефона: attr('Номер телефона', { index: 2 }),
    датаРождения: attr('Дата рождения', { index: 3 }),
    пол: attr('Пол', { index: 4 })
  });
};
