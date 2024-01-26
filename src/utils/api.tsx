import axios from 'axios';

const LYRICS_API_BASE_URL = 'https://api.lyrics.ovh/v1';

export const getLyrics = async (artist: string, song: string): Promise<string> => {
  try {
    const response = await axios.get(`${LYRICS_API_BASE_URL}/${artist}/${song}`);
    return response.data.lyrics;
  } catch (error) {
    console.error('Error al obtener la letra de la canción', error);
    throw error;
  }
};
