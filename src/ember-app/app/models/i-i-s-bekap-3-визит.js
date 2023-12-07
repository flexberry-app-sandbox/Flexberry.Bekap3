import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ВизитMixin
} from '../mixins/regenerated/models/i-i-s-bekap-3-визит';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ВизитMixin, Validations, {
});

defineProjections(Model);

export default Model;
