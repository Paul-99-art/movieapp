import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { getMediaDetails } from '../services/api';  
import { IMAGE_BASE_URL } from '../config/apiConfig';
import Loading from '../components/layout/Loading';

const ShowScreen = ({ route }) => {
  const { id, type } = route.params;
  const [media, setMedia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadMediaDetails();
  }, [id, type]);

  const loadMediaDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getMediaDetails(id, type);
      setMedia(data);
    } catch (error) {
      console.error('Error in ShowScreen:', error);
      setError('Failed to load details');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <Text style={styles.error}>{error}</Text>;
  if (!media) return null;

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: `${IMAGE_BASE_URL}${media.poster_path}` }}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{media.title || media.name}</Text>
        <Text style={styles.popularity}>Popularity: {media.popularity}</Text>
        <Text style={styles.date}>
          Release Date: {media.release_date || media.first_air_date || 'N/A'}
        </Text>
        <Text style={styles.overview}>{media.overview}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
  },
  info: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  popularity: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  overview: {
    fontSize: 16,
    lineHeight: 24,
  },
  error: {
    padding: 20,
    color: 'red',
    textAlign: 'center',
  },
});

export default ShowScreen;