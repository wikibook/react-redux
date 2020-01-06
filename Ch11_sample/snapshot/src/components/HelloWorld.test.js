import React from 'react';
import renderer from 'react-test-renderer';
import HelloWorld from './HelloWorld';

test('HelloWorld 컴포넌트 스냅숏 테스트', () => {
  const result = renderer.create(<HelloWorld/>).toJSON();

  expect(result).toMatchSnapshot();
});