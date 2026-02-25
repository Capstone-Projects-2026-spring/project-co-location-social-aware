import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import GridButton from './GridButton';

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
    const numColumns = 4;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Preferred Words</Text>
            <FlatList
                key={numColumns}
                data={words}
                numColumns={numColumns}
                renderItem={({ index }) => (
                    <GridButton 
                        key={words[index]} 
                        word={words[index]} 
                        image={require('../assets/images/placeholder.jpg')} 
                        onPress={() => console.log(`Selected preferred word: ${words[index]}`)} 
                        backgroundColor="#9DC183"
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}