import React from 'react';
import { shallow } from "enzyme";
import RepositoryContent from './RepositoryContent';

describe('Teste unitário do componente RepositoryContent', () => {
  const mockProps = {
    name: 'react-lua',
    description: 'Um projeto simples de React com Lua',
    stars: 999,
    html_url: 'https://github.com/projetoreactlua'
  };

  const RepositoryContentWrapper = shallow(<RepositoryContent {...mockProps} />);
  const contentWrapperProps = RepositoryContentWrapper.props();

  test('O componente RepositoryContent deve renderizar corretamente', () => {
    expect(contentWrapperProps.className).toEqual('repository-content-wrapper');
    expect(contentWrapperProps.children).toHaveLength(3);
  });

  test('Verificando o título do conteúdo de repositório', () => {
    const repoTitle = contentWrapperProps.children[0];

    expect(repoTitle).toHaveProperty('type', 'header');
    expect(repoTitle.props.className).toEqual('repository-title');
    expect(repoTitle.props.children).toHaveProperty('type', 'a');
    expect(repoTitle.props.children.props.href).toEqual(mockProps.html_url);
    expect(repoTitle.props.children.props.children).toEqual(mockProps.name);
  });

  test('Verificando a descrição do conteúdo de repositório', () => {
    const repoDescription = contentWrapperProps.children[1];

    expect(repoDescription).toHaveProperty('type', 'p');
    expect(repoDescription.props.className).toEqual('repository-description');
    expect(repoDescription.props.children).toEqual(mockProps.description);
  });

  test('Verificando a a imagem e a quantidade de estrelas do repositório', () => {
    const repoRate = contentWrapperProps.children[2];

    expect(repoRate.props.children).toHaveLength(2);
    expect(repoRate.props.children[0]).toHaveProperty('type', 'img');
    expect(repoRate.props.children[1].props.children).toEqual(mockProps.stars);
  });
});

