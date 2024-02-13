// SearchScreen.js
import React, { useState } from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ProductItem from '../components/ProductItem';
import { useNavigation } from '@react-navigation/native';


const products = [
  {
    id: 1,
    title: 'Apple iPhone 13 Pro 256 Gb Gold',
    location: 'г. Набережные Челны, пр-т Мира, 24А',
    price: '82 000 руб.',
    imageUrl: 'https://via.placeholder.com/100',
    description: 'test',
  },
  {
    id: 2,
    title: 'Apple iPhone 11 Pro 256 Gb Gold',
    location: 'г. Набережные Челны, пр-т Мира, 24А',
    price: '81 000 руб.',
    imageUrl: 'https://via.placeholder.com/100',
    description: 'test',
  },
  {
    id: 3,
    title: 'Apple iPhone 12 Pro 256 Gb Gold',
    location: 'г. Набережные Челны, пр-т Мира, 24А',
    price: '87 000 руб.',
    imageUrl: 'https://via.placeholder.com/100',
    description: 'test',
  },
  {
    id: 4,
    title: 'Apple iPhone 14 Pro 256 Gb Gold',
    location: 'г. Набережные Челны, пр-т Мира, 24А',
    price: '855 000 руб.',
    imageUrl: 'https://via.placeholder.com/100',
    description: 'test',
  },
  {
    id: 5,
    title: 'Apple iPhone 13 Pro 256 Gb Gold',
    location: 'г. Набережные Челны, пр-т Мира, 24А',
    price: '82 000 руб.',
    imageUrl: 'https://via.placeholder.com/100',
    description: 'test',
  },
  {
    id: 6,
    title: 'Apple iPhone 11 Pro 256 Gb Gold',
    location: 'г. Набережные Челны, пр-т Мира, 24А',
    price: '81 000 руб.',
    imageUrl: 'https://via.placeholder.com/100',
    description: 'test',
  },
  {
    id: 7,
    title: 'Apple iPhone 12 Pro 256 Gb Gold',
    location: 'г. Набережные Челны, пр-т Мира, 24А',
    price: '87 000 руб.',
    imageUrl: 'https://via.placeholder.com/100',
    description: 'test',
  },
  {
    id: 8,
    title: 'Apple iPhone 14 Pro 256 Gb Gold',
    location: 'г. Набережные Челны, пр-т Мира, 24А',
    price: '855 000 руб.',
    imageUrl: 'https://via.placeholder.com/100',
    description: 'test',
  },
];

export default function SearchScreen() {

  const [searchQuery, setSearchQuery] = useState('');

  const navigation = useNavigation();


  // Функция для обработки изменений в поле ввода
  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  // Фильтрация продуктов в соответствии с запросом поиска
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView edges={['bottom', 'top']} style={styles.container}>
      <Text style={styles.headerText}>Поиск</Text>
      <TextInput
        style={styles.searchInput}
        onChangeText={handleSearchChange}
        value={searchQuery}
        placeholder="Поиск..."
        clearButtonMode="while-editing"
      />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { ...item })}>
            <ProductItem
              title={item.title}
              location={item.location}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 35,
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginTop: 20,
    marginBottom: 10,
    // alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  thumbnail: {
    height: 200, // Adjust the height as needed
    resizeMode: 'cover',
    marginHorizontal: 10,
    borderRadius: 10, // Round the corners
  },
  description: {
    marginBottom: 40,
    fontSize: 18,
  },
  button: {
    // height: 50,
    padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 5,
  },
  firstButton: {
    backgroundColor: 'red', // Use a gradient if needed
  },
  secondButton: {
    backgroundColor: 'blue', // Use a gradient if needed
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

