import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Modal } from '../../src/modal';

configure({ adapter: new Adapter() });

describe('<Modal />', () => {
  it('Should render modal with the defined text', () => {
    const wrapper = mount(
      <Modal>Test</Modal>
    );

    expect(wrapper.text()).toEqual('Test');
  });
});
