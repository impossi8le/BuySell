// SearchScreen.js
import React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ProductItem from '../components/ProductItem';

const products = [
  {
    id: 1,
    title: 'Apple iPhone 13 Pro 256 Gb Gold',
    location: 'г. Набережные Челны, пр-т Мира, 24А',
    price: '82 000 руб.',
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    id: 2,
    title: 'Apple iPhone 11 Pro 256 Gb Gold',
    location: 'г. Набережные Челны, пр-т Мира, 24А',
    price: '81 000 руб.',
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    id: 3,
    title: 'Apple iPhone 12 Pro 256 Gb Gold',
    location: 'г. Набережные Челны, пр-т Мира, 24А',
    price: '87 000 руб.',
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    id: 4,
    title: 'Apple iPhone 14 Pro 256 Gb Gold',
    location: 'г. Набережные Челны, пр-т Мира, 24А',
    price: '855 000 руб.',
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    id: 5,
    title: 'Apple iPhone 13 Pro 256 Gb Gold',
    location: 'г. Набережные Челны, пр-т Мира, 24А',
    price: '82 000 руб.',
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    id: 6,
    title: 'Apple iPhone 11 Pro 256 Gb Gold',
    location: 'г. Набережные Челны, пр-т Мира, 24А',
    price: '81 000 руб.',
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    id: 7,
    title: 'Apple iPhone 12 Pro 256 Gb Gold',
    location: 'г. Набережные Челны, пр-т Мира, 24А',
    price: '87 000 руб.',
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    id: 8,
    title: 'Apple iPhone 14 Pro 256 Gb Gold',
    location: 'г. Набережные Челны, пр-т Мира, 24А',
    price: '855 000 руб.',
    imageUrl: 'https://via.placeholder.com/100',
  },
];

export default function SearchScreen() {
  return (
    <SafeAreaView edges={['bottom', 'top']} style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductItem
            title={item.title}
            location={item.location}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        )}
        ListHeaderComponent={() => <Text style={styles.headerText}>Поиск</Text>}
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

