import React from 'react';
import { shallow } from 'enzyme';
import UserContentItem from './UserContentItem';

describe('Teste unitário do component UserContentItem', () => {
  const details = {
    name: 'repository',
    value: 3,
  };

  const UserContentItemWrapper = shallow(<UserContentItem {...details} />);
  const contentWrapperProps = UserContentItemWrapper.props();

  test('Verificando se o componente renderiza corretamente', () => {
    expect(contentWrapperProps.className).toEqual('content-item');
    expect(contentWrapperProps.children).toHaveLength(2);
  });

  test('Verificando a imagem do Content Item', () => {
    const imageContentItem = contentWrapperProps.children[0];
    expect(imageContentItem.props.src).toEqual(`/img/${details.name}.svg`);
    expect(imageContentItem.props.alt).not.toBeNull();
  });

  test('Verificando o texto do Content Item', () => {
    const textContentItem = contentWrapperProps.children[1];
    expect(textContentItem.props.className).toEqual(`user-${details.name}`);
    expect(textContentItem.props.children).toEqual(details.value);
  });
});
