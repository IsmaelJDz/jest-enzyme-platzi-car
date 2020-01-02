import React from 'react';
import { mount } from 'enzyme';

import Footer from '../../components/Footer';

//Mocks funciones que simulan acciones que tendria que hacer nuestra aplicacion

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
