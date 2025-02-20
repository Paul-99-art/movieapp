import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import MediaCard from '../listItems/MediaCard';
import Pagination from './Pagination';

const MediaList = ({ 
  data, 
  onItemPress, 
  ListEmptyComponent,
  currentPage,
  totalPages,
  onPageChange,
}) => (
  <View style={styles.container}>
    <FlatList
      data={data}
      renderItem={({ item }) => <MediaCard item={item} onPress={onItemPress} />}
      keyExtractor={item => item.id.toString()}
      ListEmptyComponent={ListEmptyComponent}
      contentContainerStyle={styles.list}
    />
    {data.length > 0 && (
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flexGrow: 1,
  },
});

export default MediaList;