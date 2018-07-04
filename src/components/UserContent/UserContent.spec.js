import React from 'react';
import { shallow } from 'enzyme';
import UserContent from './UserContent';

describe('Teste unitário do componente UserContent', () => {
  const user = {
    company: 'Concrete Solutions',
    location: 'Brasil',
    stars: 3,
  };

  const mockProps = {
    avatar_url: 'https://fotolegal.png',
    name: 'Isabela Neri dos Santos',
    login: 'isabelandss',
  };
  const UserContentWrapper = shallow(<UserContent user={user} />);

  test('', () => {

  });
});

