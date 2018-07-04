import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

describe('Teste unitário do component NotFound', () => {
  test('O componente NotFound deve renderizar corretamente ', () => {
    const NotFoundWrapper = shallow(<NotFound />);
    expect(NotFoundWrapper.find('.not-found')).toHaveLength(1);
    expect(NotFoundWrapper.props().children).toEqual('User not found :(');
  });
});

