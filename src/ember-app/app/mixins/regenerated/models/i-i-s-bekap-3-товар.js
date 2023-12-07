import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  материала: DS.attr('number'),
  наименование: DS.attr('string'),
  производитель: DS.attr('string')
});

export let ValidationRules = {
  материала: {
    descriptionKey: 'models.i-i-s-bekap-3-товар.validations.материала.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-bekap-3-товар.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  производитель: {
    descriptionKey: 'models.i-i-s-bekap-3-товар.validations.производитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-bekap-3-товар', {
    материала: attr('Материала', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    производитель: attr('Производитель', { index: 2 })
  });

  modelClass.defineProjection('ТоварL', 'i-i-s-bekap-3-товар', {
    материала: attr('Материала', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    производитель: attr('Производитель', { index: 2 })
  });
};
