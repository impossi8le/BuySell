// components/SplashScreen
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions  } from 'react-native';

const screenHeight = Dimensions.get('window').height;

const SplashScreen = () => {


  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/logo.png')} style={styles.logo} />
      <Text style={styles.title}>BUYSELL</Text>
      <Text style={styles.subtitle}>Выкупай быстрее остальных</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    marginTop: screenHeight / 5,
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  subtitle: {
    fontSize: 25,
    color: '#555',
    marginTop: 10,
    letterSpacing: 1,
  },
});

export default SplashScreen;
