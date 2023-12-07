import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗаписьВизитаMixin
} from '../mixins/regenerated/models/i-i-s-bekap-3-запись-визита';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗаписьВизитаMixin, Validations, {
});

defineProjections(Model);

export default Model;
