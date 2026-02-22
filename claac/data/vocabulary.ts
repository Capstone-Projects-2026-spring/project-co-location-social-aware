import { ImageSourcePropType } from 'react-native';

export type NodeType = 'word' | 'category';

export interface AACNode {
  id: string;
  word: string;
  image: ImageSourcePropType;
  type: NodeType;
  subWords?: AACNode[]; // only needed for categories
}

export const initialVocabulary: AACNode[] = [
  { 
    id: 'cat_1', 
    word: 'Food', 
    image: require('../assets/images/propellerhat.png'), 
    type: 'category',
    subWords: [
      { id: 'f1', word: 'Apple', image: require('../assets/images/propellerhat.png'), type: 'word' },
      { id: 'f2', word: 'Pizza', image: require('../assets/images/propellerhat.png'), type: 'word' },
      { id: 'f3', word: 'Water', image: require('../assets/images/propellerhat.png'), type: 'word' },
    ]
  },
  { id: 'w1', word: 'Yes', image: require('../assets/images/propellerhat.png'), type: 'word' },
  { id: 'w2', word: 'No', image: require('../assets/images/propellerhat.png'), type: 'word' },
  { id: 'w3', word: 'Help', image: require('../assets/images/propellerhat.png'), type: 'word' },
];