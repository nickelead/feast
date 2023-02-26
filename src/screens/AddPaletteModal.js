import React, { useCallback, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { ColorSwitch } from '../components';
import { ALL_COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';

export const AddPaletteModal = () => {
  const { navigate } = useNavigation();

  const [allColors, setAllColors] = useState(
    ALL_COLORS.map(item => ({ ...item, isSelected: false })),
  );
  const [paletteName, setPaletteName] = useState('');

  const handleChange = useCallback(
    ({ newSelected, colorName: selectedColorName }) => {
      const changed = allColors.find(
        ({ colorName }) => colorName === selectedColorName,
      );
      const newAllColors = [
        ...allColors.filter(({ colorName }) => colorName !== selectedColorName),
        {
          ...changed,
          isSelected: newSelected,
        },
      ].sort((first, second) => first.colorName > second.colorName);
      setAllColors(newAllColors);
    },
    [allColors],
  );

  const handleSubmit = useCallback(() => {
    if (paletteName === '') {
      return Alert.alert('Please enter a palette name');
    }

    const selectedColors = allColors.filter(({ isSelected }) => isSelected);
    if (selectedColors.length < 3) {
      return Alert.alert('Please select at least 3 colors');
    }

    const newPalette = {
      paletteName,
      colors: selectedColors.map(({ colorName, hexCode }) => ({
        colorName,
        hexCode,
      })),
    };
    navigate('Home', { newPalette });
  }, [allColors, navigate, paletteName]);

  return (
    <>
      <View style={styles.textForm}>
        <Text>Name of your color palette</Text>
        <TextInput
          style={styles.input}
          value={paletteName}
          onChangeText={setPaletteName}
          placeholder="Palette name"
        />
      </View>
      <FlatList
        style={styles.list}
        data={allColors}
        keyExtractor={item => item.colorName}
        renderItem={({ item }) => (
          <ColorSwitch
            colorName={item.colorName}
            hexCode={item.hexCode}
            isSelected={item.isSelected}
            onChange={handleChange}
          />
        )}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 40,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  list: {
    padding: 5,
    backgroundColor: 'white',
  },
  textForm: {
    padding: 10,
    backgroundColor: 'white',
  },
  submitButton: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
