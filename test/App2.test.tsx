import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../app/index'; // Asegúrate de que la ruta sea correcta

test('debe cambiar el estado de comprado cuando se toca un producto', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    
    // Agregar producto
    const inputName = getByPlaceholderText('Producto');
    const inputQuantity = getByPlaceholderText('Cantidad');
    const addButton = getByText('Agregar Producto');
    
    fireEvent.changeText(inputName, 'Pan');
    fireEvent.changeText(inputQuantity, '3');
    fireEvent.press(addButton);
    
    // Verificar que el producto aparece en la lista
    const product = getByText(/Pan \(x3\)/i);
    expect(product).toBeTruthy();
  
    // Marcar como comprado
    const status = getByText('Pendiente');
    fireEvent.press(status);
    
    // Verificar que el estado cambió a Comprado
    expect(getByText('Comprado')).toBeTruthy();
});
