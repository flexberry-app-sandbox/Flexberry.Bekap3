import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должности: DS.attr('number'),
  должность: DS.attr('string')
});

export let ValidationRules = {
  должности: {
    descriptionKey: 'models.i-i-s-bekap-3-должности.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-bekap-3-должности.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностиE', 'i-i-s-bekap-3-должности', {
    должности: attr('Должности', { index: 0 }),
    должность: attr('Должность', { index: 1 })
  });

  modelClass.defineProjection('ДолжностиL', 'i-i-s-bekap-3-должности', {
    должности: attr('Должности', { index: 0 }),
    должность: attr('Должность', { index: 1 })
  });
};
