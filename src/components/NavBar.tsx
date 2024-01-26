import { getLyrics } from '@/utils/api';
import { Box, Button, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import cancionYletra1 from '../recursos/CancionYLetra1.png'

const NavBar = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [cancion, setCancion] = useState<string>("");
  const [artista, setArtista] = useState<string>("");

  const router = useRouter()

  const openModal = () => {
    setIsOpenModal(true)
  }

  const closeModal = () => {
    setIsOpenModal(false)
  }

  const handleCancionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCancion(event.target.value);
  };

  const handleArtistaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArtista(event.target.value);
  };

  const handleLookFor = async () => {
    try {
      router.push(`/song/${artista}/${cancion}`);
      closeModal();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error al buscar la letra de la canción', error.message);
      } else {
        console.error('Error desconocido al buscar la letra de la canción');
      }
    }
  };
  
  

  return (
    <Box 
    w="100%" 
    h="3em"
    backgroundColor="#FC7643"
    p={1}

    >
        <HStack justifyContent="space-between">
            <Button
            onClick={
              () => router.push("/")
            }
            backgroundColor="transparent"
            _hover={{backgroundColor: "transparent"}}
            >
                     <Image 
        src={cancionYletra1.src}
        alt="Cancionyletra"
        w={20}
        _hover={{transform: "scale(1.1)"}}
        />
            </Button>
            <Button
            onClick={
              () => openModal()
            }
            backgroundColor="transparent"
            _hover={{backgroundColor: "#273248", color: "white"}}
            >
              Buscar
            </Button>

        </HStack>

        <Modal isOpen={isOpenModal} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Buscar Canción</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input 
            placeholder="Canción" 
            mb={3} 
            onChange={handleCancionChange}
            />
            <Input 
            placeholder="Artista" 
            mb={6} 
            onChange={handleArtistaChange}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleLookFor}>
              Buscar
            </Button>
            <Button onClick={closeModal}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default NavBar