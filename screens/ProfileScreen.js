// ProfileScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView  edges={['bottom', 'top']} style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Личный кабинет</Text>
        </View>
        
        <Text style={styles.description}>
          Откуда взять ссылку с объявлениями
        </Text>

        <TouchableOpacity style={[styles.button]}>
          <Text style={styles.buttonText}>Авторизоваться</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button]}>
          <Text style={styles.buttonText}>Выйти из аккаунта</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
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
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 50,
    backgroundColor: '#069',
  },
 
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

