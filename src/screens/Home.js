import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { PalettePreview } from '../components';
import { useNavigation } from '@react-navigation/native';

export const Home = ({ route }) => {
  const newColorPalette = route.params?.newPalette;
  const [palettes, setPalettes] = useState();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { navigate } = useNavigation();

  const fetchData = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (result.ok) {
      const data = await result.json();
      setPalettes(data);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (newColorPalette) {
      setPalettes(oldPalettes => [newColorPalette, ...oldPalettes]);
    }
  }, [newColorPalette]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchData();
    setIsRefreshing(false);
  }, [fetchData]);

  const handlePress = useCallback(() => {
    navigate('AddPaletteModal');
  }, [navigate]);

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Add a color scheme</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.list}
        data={palettes}
        keyExtractor={item => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview paletteName={item.paletteName} colors={item.colors} />
        )}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    height: 50,
    backgroundColor: 'white',
    padding: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'teal',
  },
});
