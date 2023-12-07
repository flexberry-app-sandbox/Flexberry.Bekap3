import {
  defineNamespace,
  defineProjections,
  Model as СоставУслугиMixin
} from '../mixins/regenerated/models/i-i-s-bekap-3-состав-услуги';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СоставУслугиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
