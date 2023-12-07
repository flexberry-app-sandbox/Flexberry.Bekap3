import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-bekap-3-запись-визита', 'Unit | Model | i-i-s-bekap-3-запись-визита', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
