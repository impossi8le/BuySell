// HomeScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView  edges={['bottom', 'top']} style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Главная</Text>
        </View>
        
        <Image
          style={styles.thumbnail}
          // source={{ uri: 'your-image-url' }} // Replace with your image URL or require statement
          source={require('../assets/img/home.png')}         
        />
        
        <Text style={styles.description}>
          Откуда взять ссылку с объявлениями
        </Text>       

        <TouchableOpacity style={styles.button}>
          <LinearGradient
            colors={['#e22821', '#106299']} // Define your gradient colors array
            style={styles.gradient}
            start={{x: 0.5, y: 0}} // Gradient start position
            end={{x: 1, y: 0}}   // Gradient end position
          >
            <Text style={styles.buttonText}>КАК УВЕЛИЧИТЬ ПРИБЫЛЬ</Text>
          </LinearGradient>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <LinearGradient
            colors={['#e22821', '#106299']} // Define your gradient colors array
            style={styles.gradient}
            start={{x: 0.5, y: 0}} // Gradient start position
            end={{x: 1, y: 0}}   // Gradient end position
          >
            <Text style={styles.buttonText}>КАК ПОДКЛЮЧИТЬ БОТА</Text>
          </LinearGradient>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  gradient: {
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 390,
    marginBottom: -65,
  },
  button: {
    borderRadius: 10, // This should match the borderRadius of the gradient to prevent overflow
    // overflow: 'hidden', // Ensures the gradient does not bleed outside the border radius
  },
  container: {
    padding: 15,
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
    // height: 200, // Adjust the height as needed
    width: '100%', // Adjust the width as neededdth: 200, // Adjust the width as neededdth: 200, // Adjust the width as neededdth: 380, // Adjust the width as needed
    // resizeMode: 'cover',
    marginVertical: 30,
    borderRadius: 10, // Round the corners
  },
  description: {
    marginBottom: 20,
    fontSize: 20,
  },
  button: {
    // height: 50,
    padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 5,
  },

  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 2,
    paddingHorizontal: 20,
    paddingVertical: 20,

  },
});

