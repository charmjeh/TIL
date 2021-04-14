import test from 'tape';

import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { incrementAsync } from './sagas'

/*
  // incrementAsync는 제너레이터 함수입니다.
  // 이것을 실행하면, 이터레이터 오브젝트를 반환하고, 이터레이터의 next메소드는 다음과 같은 모양을 가진 객체를 돌려줍니다.
  const gen = incrementAsync();
  gen.next(); // => { done: false, value: <result of calling delay(1000)> }
  gen.next(); // => { done: false, value: <result of calling put({type: 'INCREMENT'})> }
  gen.next(); // => { done: true, value: undefined }
  // value필드는 yield된 표현식을 포함합니다. yield 다음 표현식의 결과같은 것 말이죠.
  // done 필드는 아직 yield 표현이 남아있는지, 아니면 제너레이터가 종료되었는지 가리킵니다.
*/

test('incrementAsync Saga test', (assert) => {
  const gen = incrementAsync()

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    'incrementAsync Saga must call delay(1000)'
  )

  assert.deepEqual(
    gen.next().value,
    put({type: 'INCREMENT'}),
    'incrementAsync Saga must dispatch an INCREMENT action'
  )

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'incrementAsync Saga must be done'
  )

  assert.end()
});