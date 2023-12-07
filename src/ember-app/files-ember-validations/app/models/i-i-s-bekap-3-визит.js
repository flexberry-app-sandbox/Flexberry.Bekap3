import {
  defineNamespace,
  defineProjections,
  Model as ВизитMixin
} from '../mixins/regenerated/models/i-i-s-bekap-3-визит';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВизитMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
