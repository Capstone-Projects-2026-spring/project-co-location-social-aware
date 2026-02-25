import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    word: {
        fontSize: 16,
        marginBottom: 5,
    },
});

interface PreferredWordsProps {
    words: string[];
}


export default function PreferredWords( props: PreferredWordsProps) {
    const words = props.words;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Preferred Words</Text>
            {words.map((word, index) => (
                <Text key={index} style={styles.word}>{word}</Text>
            ))}
        </View>
    );
}