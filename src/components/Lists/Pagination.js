import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <View style={styles.pagination}>
      <TouchableOpacity 
        style={[styles.pageButton, currentPage === 1 && styles.disabled]}
        onPress={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Text style={styles.pageButtonText}>Previous</Text>
      </TouchableOpacity>
      <Text style={styles.pageInfo}>Page {currentPage} of {totalPages}</Text>
      <TouchableOpacity 
        style={[styles.pageButton, currentPage === totalPages && styles.disabled]}
        onPress={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Text style={styles.pageButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  pageButton: {
    padding: 8,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  pageButtonText: {
    color: '#fff',
  },
  disabled: {
    backgroundColor: '#ccc',
  },
  pageInfo: {
    fontSize: 14,
  },
});

export default Pagination;