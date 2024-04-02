// SearchScreen.js
import React, { useState, useEffect } from 'react';
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
];

export default function SearchScreen() {

  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState([]);
  const navigation = useNavigation();

  // New function to fetch data from API
  const fetchData = async (query) => {
    try {
      console.log(query);
      const response = await fetch(`https://ea9b-2a03-6f01-1-2-00-7b39.ngrok-free.app/search?link=${query}&s=104`);
      const json = await response.json();
      if(json.errors === "Oshibok netu, vse okey") {
        setItems(json.info);
      } else {
        console.error('API Errors:', json.errors);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  // Effect hook to trigger fetch when searchQuery changes
  useEffect(() => {
    if(searchQuery) {
      fetchData(searchQuery);
    }
  }, [searchQuery]);

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  return (
    <SafeAreaView edges={['bottom', 'top']} style={styles.container}>
      <Text style={styles.headerText}>Поиск</Text>
      <TextInput
        style={styles.searchInput}
        onChangeText={handleSearchChange}
        value={searchQuery}
        placeholder="Вставьте ссылку..."
        clearButtonMode="while-editing"
      />
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { ...item })}>
            <ProductItem
              title={item.title}
              time={item.time} // Assuming 'location' can display 'time' as it's not directly available in API response
              price={item.price}
              imageUrl={item.img} // You may need to handle images differently as API doesn't seem to provide them
              description={item.desc}
              link={item.link}
              location={item.location}

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

