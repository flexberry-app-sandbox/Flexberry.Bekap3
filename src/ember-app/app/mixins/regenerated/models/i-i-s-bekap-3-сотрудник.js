import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРождения: DS.attr('date'),
  номерТелефона: DS.attr('number'),
  пол: DS.attr('i-i-s-bekap-3-пол'),
  фИО: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-bekap-3-должности', { inverse: null, async: false })
});

export let ValidationRules = {
  датаРождения: {
    descriptionKey: 'models.i-i-s-bekap-3-сотрудник.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-bekap-3-сотрудник.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пол: {
    descriptionKey: 'models.i-i-s-bekap-3-сотрудник.validations.пол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-bekap-3-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-bekap-3-сотрудник.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('сотрудникE', 'i-i-s-bekap-3-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    номерТелефона: attr('Номер телефона', { index: 1 }),
    датаРождения: attr('Дата рождения', { index: 2 }),
    пол: attr('Пол', { index: 3 }),
    должности: belongsTo('i-i-s-bekap-3-должности', 'Должности', {
      должность: attr('Должность', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'должность' })
  });

  modelClass.defineProjection('сотрудникL', 'i-i-s-bekap-3-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    номерТелефона: attr('Номер телефона', { index: 1 }),
    датаРождения: attr('Дата рождения', { index: 2 }),
    пол: attr('Пол', { index: 3 }),
    должности: belongsTo('i-i-s-bekap-3-должности', 'Должность', {
      должность: attr('Должность', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
