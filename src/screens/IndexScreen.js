import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { fetchMovies } from '../services/api';
import MediaList from '../components/Lists/MediaList';
import Loading from '../components/layout/Loading';

const IndexScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState('popular');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadMovies();
  }, [type, currentPage]);

  const loadMovies = async () => {
    try {
      setLoading(true);
      const data = await fetchMovies(type, currentPage);
      setMovies(data.results.slice(0, 10)); 
      setTotalPages(Math.ceil(data.total_results / 10));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) return <Loading />;

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={type}
          onValueChange={(value) => {
            setType(value);
            setCurrentPage(1);
          }}
          style={styles.picker}
        >
          <Picker.Item label="Popular" value="popular" />
          <Picker.Item label="Now Playing" value="now_playing" />
          <Picker.Item label="Top Rated" value="top_rated" />
          <Picker.Item label="Upcoming" value="upcoming" />
        </Picker>
      </View>
      <MediaList
        data={movies}
        onItemPress={item => navigation.navigate('MovieDetails', { id: item.id, type: 'movie' })}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  picker: {
    height: 50,
  },
});

export default IndexScreen;