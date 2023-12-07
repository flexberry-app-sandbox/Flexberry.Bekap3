import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  стоимость: DS.attr('decimal'),
  сотрудник: DS.belongsTo('i-i-s-bekap-3-сотрудник', { inverse: null, async: false }),
  услуга: DS.belongsTo('i-i-s-bekap-3-услуга', { inverse: null, async: false }),
  визит: DS.belongsTo('i-i-s-bekap-3-визит', { inverse: 'записьВизита', async: false })
});

export let ValidationRules = {
  стоимость: {
    descriptionKey: 'models.i-i-s-bekap-3-запись-визита.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-bekap-3-запись-визита.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-bekap-3-запись-визита.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  визит: {
    descriptionKey: 'models.i-i-s-bekap-3-запись-визита.validations.визит.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьВизитаE', 'i-i-s-bekap-3-запись-визита', {
    стоимость: attr('Стоимость', { index: 0 }),
    сотрудник: belongsTo('i-i-s-bekap-3-сотрудник', 'Сотрудник', {
      фИО: attr('ФИО', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' }),
    услуга: belongsTo('i-i-s-bekap-3-услуга', 'Услуга', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' })
  });
};
