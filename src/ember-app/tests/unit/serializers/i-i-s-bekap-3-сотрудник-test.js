import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-bekap-3-сотрудник', 'Unit | Serializer | i-i-s-bekap-3-сотрудник', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-bekap-3-сотрудник',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-bekap-3-пол',

    'model:i-i-s-bekap-3-визит',
    'model:i-i-s-bekap-3-должности',
    'model:i-i-s-bekap-3-запись-визита',
    'model:i-i-s-bekap-3-клиент',
    'model:i-i-s-bekap-3-состав-услуги',
    'model:i-i-s-bekap-3-сотрудник',
    'model:i-i-s-bekap-3-товар',
    'model:i-i-s-bekap-3-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
