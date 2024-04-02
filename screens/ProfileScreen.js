import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userLogin, setUserLogin] = useState('');

  const handleRegister = async () => {
    const url = `https://smiling-positively-mantis.ngrok-free.app/reg?email=${email}&psw=${password}`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      setMessage(json.errors);
      if (json.errors === 'success') {
        Alert.alert("Успешно", "Registration successful");
        handleLogin(); // Automatically attempt to log in after registration
      } else {
        Alert.alert("Ошибка", json.errors);
      }
    } catch (error) {
      console.error('Registration Error:', error);
    }
  };

  const handleLogin = async () => {
    const url = `https://smiling-positively-mantis.ngrok-free.app/login?email=${email}&psw=${password}`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      setMessage(json.errors);
      if (json.errors === 'success') {
        setIsLoggedIn(true);
        setUserLogin(email); // Update the userLogin state with the email
        setEmail('');
        setPassword('');
        Alert.alert("Успешно", "Login successful");
      } else {
        Alert.alert("Ошибка", json.errors);
      }
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserLogin('');
    setEmail('');
    setPassword('');
    setMessage('');
    // Add any additional cleanup or state management you need here
  };

  const renderAuthFields = () => (
    <>
      <TextInput
        style={styles.input}
        placeholder="Email or Login"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
      />
      
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Регистрация</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Авторизоваться</Text>
      </TouchableOpacity>
      
      {message !== '' && <Text style={styles.message}>{message}</Text>}
    </>
  );

  const renderUserInfo = () => (
    <>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{userLogin}</Text>
        <View style={styles.subscriptionContainer}>
          <View style={styles.subscriptionIconContainer}>
            <Image 
              source={require('../assets/img/galochka.png')} 
              style={styles.subscriptionIcon} 
            />
          </View>
          <View style={styles.subscriptionDetails}>
            <Text style={styles.subscriptionTitle}>тариф «Минимальный»</Text>
            <Text style={styles.subscriptionTimeLeft}>до конца тарифа 16 дней</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Выйти из аккаунта</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom', 'top']} style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Личный кабинет</Text>
        </View>

        {isLoggedIn ? renderUserInfo() : renderAuthFields()}

      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  subscriptionContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop: 26,
  },
  subscriptionIconContainer: {
    position: 'absolute',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#069',
    left: 0,
    top: -22,
    // marginRight: 10,
  },
  subscriptionIcon: {
    width: 24,
    height: 24,
  },
  subscriptionDetails: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  subscriptionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subscriptionTimeLeft: {
    fontSize: 14,
    color: '#555',
  },
  userInfo: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  bottomButtonContainer: {
    justifyContent: 'flex-end',
    marginBottom: 36, // You can adjust this value as needed
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginTop: 20,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#069',
    borderRadius: 20,

  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    color: 'red',
    marginTop: 20,
    textAlign: 'center',
  },
});
