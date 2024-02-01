// HomeScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Главная</Text>
      </View>
      
      <Image
        style={styles.thumbnail}
        source={{ uri: 'your-image-url' }} // Replace with your image URL or require statement
      />
      
      <Text style={styles.description}>
        Откуда взять ссылку с объявлениями
      </Text>

      <TouchableOpacity style={[styles.button, styles.firstButton]}>
        <Text style={styles.buttonText}>КАК УВЕЛИЧИТЬ ПРИБЫЛЬ</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.button, styles.secondButton]}>
        <Text style={styles.buttonText}>КАК ПОДКЛЮЧИТЬ БОТА</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
    margin: 10,
    borderRadius: 10, // Round the corners
  },
  description: {
    margin: 10,
    fontSize: 18,
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
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

