// ProductItem.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductItem = ({ title, location, price, imageUrl }) => {
  return (
    <View style={styles.itemContainer}>
        <View style={styles.fistPart}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.location}>{location}</Text>
            </View>
        </View>     
        <View style={styles.priceContainer}>
            <Text style={styles.price}>{price}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    backgroundColor: 'white',
  },
  fistPart: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 20,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#069',
  },
});

export default ProductItem;
