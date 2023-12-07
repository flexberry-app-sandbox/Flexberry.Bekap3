import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СоставУслугиMixin
} from '../mixins/regenerated/models/i-i-s-bekap-3-состав-услуги';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СоставУслугиMixin, Validations, {
});

defineProjections(Model);

export default Model;
