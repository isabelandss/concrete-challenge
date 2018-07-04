import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Teste do componente Home', () => {
  const HomeWrapper = shallow(<Home />);
  test('Verificando se o componente renderiza corretamente', () => {
    expect(HomeWrapper.find('.home-search').props().children).toHaveLength(2);
    expect(HomeWrapper.find('.logo')).toHaveLength(1);
  });
});

