import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ImageSourcePropType, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export type SentenceWord = {
  word: string;
  image: ImageSourcePropType;
};

type SentenceBarProps = {
  words: SentenceWord[];
  onRemoveWord: (index: number) => void;
  onClear: () => void;
  onSpeak: () => void;
};

export default function SentenceBar({ words, onRemoveWord, onClear, onSpeak }: SentenceBarProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        contentContainerStyle={{ alignItems: 'center', paddingRight: 8 }}
        showsHorizontalScrollIndicator={false}
      >
        {words.length === 0 ? (
          <Text style={styles.placeholder}>Select a word</Text>
        ) : (
          words.map((item, index) => (
            <Pressable
              key={index}
              style={({ pressed }) => [styles.chip, pressed && styles.chipPressed]}
              onPress={() => onRemoveWord(index)}
            >
              <Image source={item.image} style={styles.chipImage} />
            </Pressable>
          ))
        )}
      </ScrollView>
      {words.length > 0 && (
        <View style={styles.actions}>
          <Pressable
            style={({ pressed }) => [styles.actionButton, { backgroundColor: pressed ? '#248A3D' : '#34C759' }]}
            onPress={onSpeak}
          >
            <Ionicons name="volume-high" size={20} color="#FFF" />
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.actionButton, { backgroundColor: pressed ? '#C0392B' : '#FF3B30' }]}
            onPress={onClear}
          >
            <Ionicons name="trash" size={20} color="#FFF" />
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 64,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  placeholder: {
    color: '#AAA',
    fontSize: 14,
    fontStyle: 'italic',
    alignSelf: 'center',
  },
  chip: {
    alignItems: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 4,
    marginRight: 6,
  },
  chipPressed: {
    backgroundColor: '#0056b3',
  },
  chipImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  actions: {
    flexDirection: 'column',
    gap: 4,
    marginLeft: 8,
  },
  actionButton: {
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
  },
});
