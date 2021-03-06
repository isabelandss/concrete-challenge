import React from 'react';
import { shallow } from "enzyme";
import Footer from './Footer';

describe('Teste unitário do footer', () => {
  test('Verificando se renderizou com texto', () => {
    const footerWrapper = shallow(<Footer />);
    expect(footerWrapper.props().children).toEqual('Copyright © Isabela Neri 2018');
  });
});
