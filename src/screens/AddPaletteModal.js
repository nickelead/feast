import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { ColorSwitch } from '../components';
import { ALL_COLORS } from '../constants';

export const AddPaletteModal = () => {
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

  return (
    <>
      <View style={styles.textForm}>
        <Text>Name of your color palette</Text>
        <TextInput
          style={styles.input}
          value={paletteName}
          onChangeText={setPaletteName}
        />
      </View>
      <FlatList
        style={styles.list}
        data={allColors}
        keyExtractor={item => item.colorName}
        renderItem={({ item }) => (
          <ColorSwitch
            colorName={item.colorName}
            isSelected={item.isSelected}
            onChange={handleChange}
          />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 40,
    padding: 5,
    marginBottom: 20,
  },
  list: {
    padding: 5,
  },
  textForm: {
    padding: 10,
  },
});
