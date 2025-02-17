import styles from '@/styles/global-styles';
import React from 'react';
import { SafeAreaView, FlatList, TextInput, Button, View, Text, TouchableOpacity } from 'react-native';
import { useProducts } from '../hooks/useProducts';  // Importamos el hook

const App = () => {
  // Usamos el hook 'useProducts' para manejar la lógica de productos
  const {
    products,
    productName,
    productQuantity,
    setProductName,
    setProductQuantity,
    addProduct,
    toggleProductBought
  } = useProducts();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Lista de Compras</Text>

      {/* Campo para ingresar el nombre del producto */}
      <TextInput
        style={styles.input}
        placeholder="Producto"
        value={productName}
        onChangeText={setProductName}  // Actualizamos el estado del nombre
      />

      {/* Campo para ingresar la cantidad del producto */}
      <TextInput
        style={styles.input}
        placeholder="Cantidad"
        keyboardType="numeric"
        value={productQuantity.toString()}
        onChangeText={(text) => setProductQuantity(Number(text))}  // Actualizamos la cantidad
      />

      {/* Botón para agregar el producto */}
      <Button
        title="Agregar Producto"
        onPress={addProduct}  // Llama a la función de agregar producto del hook
        color={styles.buttonColor.backgroundColor}
      />

      {/* Lista de productos */}
      <FlatList
        data={products}  // Mostramos los productos de la lista
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            {/* Nombre y cantidad del producto */}
            <Text style={[styles.productName, item.bought && styles.bought]}>
              {item.name} (x{item.quantity})
            </Text>
            {/* Botón para marcar como comprado o pendiente */}
            <TouchableOpacity onPress={() => toggleProductBought(item.id)}>
              <Text style={[styles.status, item.bought && styles.bought]}>
                {item.bought ? 'Comprado' : 'Pendiente'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}  // Clave única para cada producto
      />
    </SafeAreaView>
  );
};

export default App;
