import React, { useState } from 'react';
import { Button, FlatList, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { AACNode, initialVocabulary } from '../data/vocabulary';
import GridButton from './GridButton';

type AACBoardProps = {
  onWordAdded?: (word: string, image: ImageSourcePropType) => void;
};

export default function AACBoard({ onWordAdded }: AACBoardProps) {
  const [currentWords, setCurrentWords] = useState<AACNode[]>(initialVocabulary);
  const [history, setHistory] = useState<AACNode[][]>([]);

  const handlePress = (node: AACNode) => {
    if (node.type === 'category' && node.subWords) {
      setHistory([...history, currentWords]);
      setCurrentWords(node.subWords);
    } else {
      console.log(`Speaking: ${node.word}`);
      onWordAdded?.(node.word, node.image);
    }
  };

  const goBack = () => {
    const prev = history.pop();
    if (prev) {
      setCurrentWords(prev);
      setHistory([...history]);
    }
  };

  return (
    <View style={styles.boardContainer}>
      {history.length > 0 && <Button title="Go Back" onPress={goBack} />}
      <FlatList
        data={currentWords}
        keyExtractor={(item) => item.id}
        numColumns={4}
        renderItem={({ item }) => (
          <GridButton 
            word={item.word} 
            image={item.image} 
            onPress={() => handlePress(item)} 
            // if it's a category, make it yellow otherwise leave it blue.
            backgroundColor={item.type === 'category' ? '#FFD700' : '#007AFF'}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  boardContainer: { flex: 1, width: '100%' },
});