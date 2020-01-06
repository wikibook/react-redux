import React from 'react';
import { mount } from 'enzyme';
import EntryEMail from './EntryEMail';

it('EntryEMail 컴포넌트', () => {
  const mockFunc = jest.fn();
  const wrapper = mount(<EntryEMail onClick={mockFunc} />);

  wrapper.find('button').simulate('click');
  expect(mockFunc).toHaveBeenCalled();
});