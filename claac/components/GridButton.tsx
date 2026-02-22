import { Text, StyleSheet, Pressable, Image, ImageSourcePropType, View } from 'react-native';

type GridButtonProps = {
  word: string;
  image: ImageSourcePropType;
  onPress: () => void;
  backgroundColor?: string; 
};

export default function GridButton({ word, image, onPress, backgroundColor }: GridButtonProps) {
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.box,
        { backgroundColor: backgroundColor || '#007AFF' }, 
        pressed && styles.pressed 
      ]} 
      onPress={onPress}
    >
      <Image source={image} style={styles.icon} />
      <Text style={styles.text}>{word}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    margin: 8,
    height: 140,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
   
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.7,
    backgroundColor: '#0056b3',
  },
  icon: {
    width: 70,
    height: 70,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});