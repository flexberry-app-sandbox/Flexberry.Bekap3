import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('decimal'),
  товар: DS.belongsTo('i-i-s-bekap-3-товар', { inverse: null, async: false }),
  услуга: DS.belongsTo('i-i-s-bekap-3-услуга', { inverse: 'составУслуги', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-bekap-3-состав-услуги.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-bekap-3-состав-услуги.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-bekap-3-состав-услуги.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставУслугиE', 'i-i-s-bekap-3-состав-услуги', {
    количество: attr('Количество', { index: 0 }),
    товар: belongsTo('i-i-s-bekap-3-товар', 'Товар', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });
};
