import { getLyrics } from '@/utils/api';
import { Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const SongPage = () => {
  const router = useRouter();
  const { artista, cancion } = router.query;
  const [lyrics, setLyrics] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const lyricsFromQuery = await getLyrics(artista as string, cancion as string);
      try {
        setLyrics(lyricsFromQuery);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error('Error al buscar la letra de la canción', error.message);
        } else {
          console.error('Error desconocido al buscar la letra de la canción');
        }
      }
    };

    fetchData();
  }, [router.query]);

  return (
    <Box backgroundColor="#273248" minH="100vh"       fontFamily="Arimo" color="white">
      <Text
      fontSize="2xl"
      fontWeight="bold"
      fontFamily="Arimo"
      mb={2}
      pt={1}
      >
        {`Letras de ${cancion} de ${artista}`}
      </Text>
      <pre>{lyrics}</pre>
    </Box>
  );
};

export default SongPage;
