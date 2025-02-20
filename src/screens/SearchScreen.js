import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { searchMedia } from '../services/api';
import Form from '../components/forms/Form';
import MediaList from '../components/Lists/MediaList';
import Loading from '../components/layout/Loading';

const SearchScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [searchType, setSearchType] = useState('multi');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (page = 1) => {
    if (!searchText.trim()) return;

    try {
      setLoading(true);
      setError(null);
      const data = await searchMedia(searchText, searchType, page);
      setResults(data.results.slice(0, 10));
      setTotalPages(Math.ceil(data.total_results / 10));
      setCurrentPage(page);
      setHasSearched(true);
    } catch (error) {
      console.error('Search error:', error);
      setError('Failed to perform search');
    } finally {
      setLoading(false);
    }
  };

  const handleSearchTypeChange = (newType) => {
    setSearchType(newType);
    if (searchText.trim()) {
      // If there's already a search term, automatically search with new type
      handleSearch(1);
    }
  };

  const handlePageChange = (page) => {
    handleSearch(page);
  };

  const EmptyMessage = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        {hasSearched 
          ? 'No results found' 
          : 'Please enter a search term'}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Form
        searchText={searchText}
        searchType={searchType}
        onSearchTextChange={setSearchText}
        onSearchTypeChange={handleSearchTypeChange}
        onSubmit={() => handleSearch(1)}
      />
      {error && (
        <Text style={styles.errorText}>{error}</Text>
      )}
      {loading ? (
        <Loading />
      ) : (
        <MediaList
          data={results}
          onItemPress={item => navigation.navigate('SearchDetails', { 
            id: item.id, 
            type: item.media_type || searchType 
          })}
          ListEmptyComponent={EmptyMessage}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    padding: 10,
  },
});

export default SearchScreen;