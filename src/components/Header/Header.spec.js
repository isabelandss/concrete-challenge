import React from 'react';
import { shallow } from "enzyme";
import Header from './Header';

describe('Teste unitário do Header', () => {
  test('Deve renderizar o Header', () => {
    const headerComponentTest = shallow(<Header />);
    expect(headerComponentTest.props().children.type).toBe('nav');
    expect(headerComponentTest.props().children.props.children).toBeInstanceOf(Array);

    const [ namePage, searchBox ] = headerComponentTest.props().children.props.children;
    expect(searchBox.props.children.type).toBeInstanceOf(Function);
  });
});