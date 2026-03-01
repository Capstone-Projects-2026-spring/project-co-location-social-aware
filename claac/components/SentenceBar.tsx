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
              <Text style={styles.chipText}>{item.word}</Text>
              <Text style={styles.chipRemove}>×</Text>
            </Pressable>
          ))
      </ScrollView>
      {words.length > 0 && (
        <View style={styles.actions}>
          <Pressable
            style={({ pressed }) => [styles.actionButton, { backgroundColor: pressed ? '#248A3D' : '#34C759' }]}
            onPress={onSpeak}
          >
            <Text style={styles.actionText}>Speak</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.actionButton, { backgroundColor: pressed ? '#C0392B' : '#FF3B30' }]}
            onPress={onClear}
          >
            <Text style={styles.actionText}>Clear</Text>
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
    minHeight: 110,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  placeholder: {
    color: '#AAA',
    fontSize: 16,
    fontStyle: 'italic',
    alignSelf: 'center',
  },
  chip: {
    alignItems: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 8,
    minWidth: 90,
  },
  chipPressed: {
    backgroundColor: '#0056b3',
  },
  chipImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 4,
  },
  chipText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  chipRemove: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    lineHeight: 16,
    marginTop: 2,
  },
  actions: {
    flexDirection: 'column',
    gap: 6,
    marginLeft: 8,
  },
  actionButton: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: 'center',
  },
  actionText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '600',
  },
});
