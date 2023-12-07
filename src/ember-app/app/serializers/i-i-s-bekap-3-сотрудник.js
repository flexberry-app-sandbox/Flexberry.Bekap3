import { Serializer as сотрудникSerializer } from
  '../mixins/regenerated/serializers/i-i-s-bekap-3-сотрудник';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(сотрудникSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
