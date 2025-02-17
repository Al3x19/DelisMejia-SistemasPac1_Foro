import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../app/index';

test('debe agregar un producto correctamente', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  console.log('====================================');
  console.log('esta iniciando');
  console.log('====================================');
  
  // Obtener los campos de texto y el botón
  const inputName = getByPlaceholderText('Producto');
  const inputQuantity = getByPlaceholderText('Cantidad');
  const addButton = getByText('Agregar Producto');

  // Simular la acción de escribir y presionar el botón
  fireEvent.changeText(inputName, 'Leche');
  fireEvent.changeText(inputQuantity, '2');
  fireEvent.press(addButton);

  // Comprobar si el producto se ha añadido a la lista
  expect(getByText('Leche (x2)')).toBeTruthy();
});
