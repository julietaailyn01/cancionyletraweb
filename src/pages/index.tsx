import {
  Box,
  Center,
  Divider,
  Grid,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import drakewixkidykyla from "../recursos/drakewizkidykyla.jpg";
import edsheeran from "../recursos/edsheeran.jpg";
import glassanimals from "../recursos/glassanimals.jpg";
import HarryStyles from "../recursos/HarryStyles.jpg";
import imaginedragons from "../recursos/imaginedragons.jpg";
import lewiscapaldi from "../recursos/lewiscapaldi.jpg";
import postmalone from "../recursos/postmalone.jpg";
import thekidyjustin from "../recursos/thekidyjustin.jpeg";
import theweeknd from "../recursos/theweeknd.jpg";
import tonesandi from "../recursos/tonesandi.jpeg";

import { IoPlayCircleOutline } from "react-icons/io5";
import { useRouter } from "next/router";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const data = {
  artistas: [],
  canciones: [
    {
      index: 0,
      imagen: theweeknd.src,
      cancion: "Blinding Lights",
      artista: "The Weeknd",
      url: "http://localhost:3000/song/The%20weeknd/Blinding%20Lights",
    },
    {
      index: 1,
      imagen: edsheeran.src,
      cancion: "Shape of you",
      artista: "Ed Sheeran",
      url: "http://localhost:3000/song/Ed%20Sheeran/Shape%20of%20you",
    },
    {
      index: 2,
      imagen: lewiscapaldi.src,
      cancion: "Someone you loved",
      artista: "Lewis Capaldi",
      url: "http://localhost:3000/song/Lewis%20Capaldi/Someone%20you%20loved",
    },
    {
      index: 3,
      imagen: postmalone.src,
      cancion: "Sunflower",
      artista: "Post Malone, Swae Lee",
      url: "http://localhost:3000/song/Post%20Malone/Sunflower",
    },
    {
      index: 4,
      imagen: tonesandi.src,
      cancion: "Dance Monkey",
      artista: "Tones and I",
      url: "http://localhost:3000/song/Tones%20and%20I/Dance%20Monkey",
    },
    {
      index: 5,
      imagen: HarryStyles.src,
      cancion: "As it was",
      artista: "Harry Styles",
      url: "http://localhost:3000/song/Harry%20Styles/As%20it%20was",
    },
    {
      index: 6,
      imagen: drakewixkidykyla.src,
      cancion: "One dance",
      artista: "Drake, WizKid, Kyla",
      url: "http://localhost:3000/song/Drake/One%20dance",
    },
    {
      index: 7,
      imagen: thekidyjustin.src,
      cancion: "Stay",
      artista: "The Kid Laroi, Justin Bieber",
      url: "http://localhost:3000/song/The%20Kid%20Laroi/Stay",
    },
    {
      index: 8,
      imagen: imaginedragons.src,
      cancion: "Believer",
      artista: "Imagine Dragons",
      url: "http://localhost:3000/song/Imagine%20Dragons/Believer",
    },
    {
      index: 9,
      imagen: glassanimals.src,
      cancion: "Heat waves",
      artista: "Glass Animals",
      url: "http://localhost:3000/song/Glass%20Animals/Heat%20waves",
    },
  ],
};
const index = () => {
  const router = useRouter();
  useEffect(() => {
    // Cargar el script de AdSense después de que el componente se monte en el lado del cliente
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <Box height="97vh" backgroundColor="#273248">
      <Box display="flex" justifyContent="center" color="white">
        <Box width="80%" mt={10}>
          <Text fontSize="2xl" marginBottom="4" mb={10}>
            Canciones más buscadas
          </Text>
          <Grid
            gap={4}
            templateColumns="repeat(auto-fit, minmax(120px, 1fr))"
            justifyContent="center"
          >
            {data.canciones.map((i, index) => (
              <Box key={index}>
                <Button
                  backgroundColor="transparent"
                  _hover={{ backgroundColor: "transparent" }}
                  my={10}
                  mx={-2}
                  onClick={() => router.push(i.url ? i.url : "/")}
                >
                  <Image
                    src={i.imagen}
                    alt="Cancionyletra"
                    borderRadius="full"
                    boxSize="120px"
                    _hover={{ transform: "scale(1.1)" }}
                  />
                </Button>
                <Text fontSize="sm" textAlign="center">
                  {i.cancion}
                </Text>
                <Text fontSize="sm" textAlign="center">
                  {i.artista}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
      <Divider color="white" my={10} />
      <Box color="white">
        {/* Código del anuncio de Google AdSense */}
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-5187386644736472"
          data-ad-format="auto"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (adsbygoogle = window.adsbygoogle || []).push({});
      `,
          }}
        />
      </Box>
    </Box>
  );
};

export default index;
