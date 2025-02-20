import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { IMAGE_BASE_URL } from '../../config/apiConfig';

const MediaCard = ({ item, onPress }) => (
  <View style={styles.card}>
    <Image
      style={styles.image}
      source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }}
    />
    <View style={styles.info}>
      <Text style={styles.title}>{item.title || item.name}</Text>
      <Text style={styles.popularity}>Popularity: {item.popularity}</Text>
      <Text style={styles.date}>
        Release Date: {item.release_date || item.first_air_date || 'N/A'}
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => onPress(item)}>
        <Text style={styles.buttonText}>More Details</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  info: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  popularity: {
    fontSize: 14,
    color: '#666',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

export default MediaCard;