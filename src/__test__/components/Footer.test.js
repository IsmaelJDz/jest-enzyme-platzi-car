import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import Footer from '../../components/Footer';

//Mocks funciones que simulan acciones que tendria que hacer nuestra aplicacion

//Snapshots permiten probar la UI y establecer una regla cuando estamos teniendo componentes que no cambian
//gradualmente = podemos tener un componente como el footer que no tiene logica y que simplemente
//representa una estructura visual

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer Snapshot', () => {
  test('Comprobar la UI del componente footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
