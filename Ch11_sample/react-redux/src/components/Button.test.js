import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

it('Button 컴포넌트', () => {
  const text = '추가';
  const wrapper = shallow(<Button>{text}</Button>);

  expect(wrapper.contains(text)).toEqual(true);
});