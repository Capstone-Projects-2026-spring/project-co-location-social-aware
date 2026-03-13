import React from 'react';
import { render } from '@testing-library/react-native';
import PreferredWords from '../PreferredWords';

describe('PreferredWords Component', () => {
  it('renders all words', () => {
    const words = ['Dinosaur', 'Monster Truck', 'NBA'];
    const { getByText } = render(<PreferredWords words={words} />);
    words.forEach(word => {
      expect(getByText(word)).toBeTruthy();
    });
  });
});
