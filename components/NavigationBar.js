// NavigationBar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavigationBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.navContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // Extract tabBarIcon from options
        const tabBarIcon = options.tabBarIcon;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.navItem}
          >
            {/* Render the tabBarIcon if available */}
            {tabBarIcon && tabBarIcon({ focused: isFocused, color: isFocused ? '#069' : '#222', size: 25 })}
            <Text style={{ color: isFocused ? '#069' : '#222' }}>
              {options.title || route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    padding: 10,
    alignItems: 'center', // Center items horizontally in the container
  },
});

export default NavigationBar;
