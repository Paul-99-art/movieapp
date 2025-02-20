import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Form = ({ 
  searchText, 
  searchType, 
  onSearchTextChange, 
  onSearchTypeChange, 
  onSubmit 
}) => (
  <View style={styles.form}>
    <TextInput
      style={styles.input}
      placeholder="i.e. James Bond, CSI"
      value={searchText}
      onChangeText={onSearchTextChange}
    />
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={searchType}
        onValueChange={(itemValue) => onSearchTypeChange(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Multi" value="multi" />
        <Picker.Item label="Movie" value="movie" />
        <Picker.Item label="TV" value="tv" />
      </Picker>
    </View>
    <TouchableOpacity 
      style={styles.button} 
      onPress={onSubmit}
      disabled={!searchText.trim()}
    >
      <Text style={styles.buttonText}>Search</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  form: {
    padding: 15,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  picker: {
    height: 40,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Form;