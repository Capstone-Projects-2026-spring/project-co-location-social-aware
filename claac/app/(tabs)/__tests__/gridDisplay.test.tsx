import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import Grid from '../gridDisplay';

jest.mock('@/components/AACBoard', () => 'AACBoard');
jest.mock('@/components/PreferredWords', () => 'PreferredWords');
jest.mock('@/components/SentenceBar', () => 'SentenceBar');

describe('Grid Component', () => {
  it('renders loading indicator initially', () => {
    const { getByTestId } = render(<Grid />);
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('fetches and displays preferred words', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve( { preferred_words: ['Dinosaur', 'Monster Truck', 'NBA'] } ),
    })) as jest.Mock;
    render(<Grid />);
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:8000/api/users/1/preferred-words/');
    });
  });

  it('handles fetch error', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      ok: false,
      json: () => Promise.resolve({ detail: 'Error fetching preferred words' }),
    })) as jest.Mock;
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<Grid />);
    await waitFor(() => {
      expect(errorSpy).toHaveBeenCalledWith(
        'Error fetching preferred words:',
        expect.any(Error)
      );
    });
  });
});
