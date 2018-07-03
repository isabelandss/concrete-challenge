import React from 'react';
import { shallow } from "enzyme";
import Input from './Input';

describe('Teste unitário do Input', () => {
  test.skip('Verificando se o componente renderizou corretamente', () => {
    const onChange = () => {};
    const onSubmit = () => {};

    const inputWrapper = shallow(<Input onChange={onChange} onSubmit={onSubmit}/>);
    expect(inputWrapper.props().className).toEqual('input-form');

    expect(inputWrapper.props().children).toBeInstanceOf(Array);
    expect(inputWrapper.props().children[0]).toHaveProperty('type', 'input');
    expect(inputWrapper.props().children[1]).toHaveProperty('type', 'button');

    expect(inputWrapper.props()).toHaveProperty('onSubmit');
    expect(inputWrapper.props().onSubmit).toBeInstanceOf(Function);
    expect(inputWrapper.props().children[0].props).toHaveProperty('onChange');
    expect(inputWrapper.props().children[0].props.onChange).toBeInstanceOf(Function);
  });

  test('Verificando se a função onChange é chamada quando ocorre interação', () => {
    const onChange = jest.fn();
    const onSubmit = () => {};

    const inputWrapper = shallow(<Input onChange={onChange} onSubmit={onSubmit}/>);

    inputWrapper.find('.input-text').simulate('change', {
      target: { name: 'search', value: 'testando input para cs' }
    });

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(2);
  });
});
