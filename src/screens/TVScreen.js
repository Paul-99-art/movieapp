import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { fetchTVShows } from '../services/api';
import MediaList from '../components/Lists/MediaList';
import Loading from '../components/layout/Loading';

const TVScreen = ({ navigation }) => {
  const [shows, setShows] = useState([]);
  const [type, setType] = useState('popular');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadShows();
  }, [type, currentPage]);

  const loadShows = async () => {
    try {
      setLoading(true);
      const data = await fetchTVShows(type, currentPage);
      setShows(data.results.slice(0, 10));
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
          <Picker.Item label="Airing Today" value="airing_today" />
          <Picker.Item label="On The Air" value="on_the_air" />
          <Picker.Item label="Top Rated" value="top_rated" />
        </Picker>
      </View>
      <MediaList
        data={shows}
        onItemPress={item => navigation.navigate('TVDetails', { id: item.id, type: 'tv' })}
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

export default TVScreen;
