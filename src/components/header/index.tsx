// import Image from 'next/image'
import { CSSProperties } from 'react';
import {
  Box,
  Image,
  Flex,
  Text,
  SimpleGrid,
  HStack,
  Divider,
  Center,
  Stack,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";

export function Header() {

  const indicatorStyles: CSSProperties = {
    background: '#999999',
    width: 16,
    height: 16,
    borderRadius:8,
    display: 'inline-block',
    margin: '0 8px',
};
const arrowStyles: CSSProperties = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(50% - 15px)',
  width: 30,
  height: 30,
  cursor: 'pointer',
};
  return (
    <Flex h="100vh" display="column">
      <Flex h={["50", "100"]} justifyContent="center" align="center">
        <Image src="/images/logo.svg" alt="asdf" w={["81", "180"]} />
      </Flex>
      <Flex position="relative" flex={1}>
        <Image src="/images/Background.svg" alt="Background" />
        <Flex position="absolute" w="100%">
          <SimpleGrid flex={1} minChildWidth="320px">
            <Flex align="center">
              <Box>
                <Text
                  ml="140"
                  w="426"
                  fontSize="3xl"
                  fontWeight="medium"
                  textAlign="left"
                  color="white"
                  decoration="none"
                >
                  5 Continentes, infinitas possibilidades.
                </Text>
                <Text
                  mt="20px"
                  ml="140"
                  w="426"
                  fontSize="1xl"
                  fontWeight="medium"
                  color="white"
                  textAlign="left"
                  decoration="none"
                >
                  Chegou a hora de tirar do papel a viagem que você sempre
                  sonhou.
                </Text>
              </Box>
            </Flex>

            <Flex justify="center">
              <Image src="/images/Airplane.svg" alt="Airplane" />
            </Flex>
          </SimpleGrid>
        </Flex>
      </Flex>

      <SimpleGrid h={145} align="center">
        <HStack justify="center" spacing="120" mt={160}>
          <Box>
            <Stack spacing="4" align="center">
              <Image src="/images/cocktail.svg" alt="cocktail" w="20" />
              <Text fontWeight="semibold" fontSize="md" color="#47585B">
                vida noturna
              </Text>
            </Stack>
          </Box>
          <Box>
            <Stack spacing="4" align="center">
              <Image src="/images/surf.svg" alt="Praia" w="20" />
              <Text fontWeight="semibold" fontSize="md" color="#47585B">
                praia
              </Text>
            </Stack>
          </Box>
          <Box>
            <Stack spacing="4" align="center">
              <Image src="/images/building.svg" alt="Moderno" w="20" />
              <Text fontWeight="semibold" fontSize="md" color="#47585B">
                moderno
              </Text>
            </Stack>
          </Box>
          <Box>
            <Stack spacing="4" align="center">
              <Image src="/images/museum.svg" alt="cocktail" w="20" />
              <Text fontWeight="semibold" fontSize="md" color="#47585B">
                clássico
              </Text>
            </Stack>
          </Box>
          <Box>
            <Stack spacing="4" align="center">
              <Image src="/images/earth.svg" alt="cocktail" w="20" />
              <Text fontWeight="semibold" fontSize="md" color="#47585B">
                e mais...
              </Text>
            </Stack>
          </Box>
        </HStack>
        <Stack spacing="14">
          <Box mt="20">
            <Divider
              orientation="horizontal"
              h="1"
              w="20"
              bg="black"
              borderRadius="2"
            />
          </Box>
          <Box mt="52px">
            <Text fontWeight="medium" fontSize="2xl" color="#47585B">
              Vamos nessa?
            </Text>
            <Text fontWeight="medium" fontSize="2xl" color="#47585B">
              Então escolha seu continente
            </Text>
          </Box>
          <Carousel
            width="80%"
            dynamicHeight
            infiniteLoop
            autoPlay
            interval={3000}
            style={{ height: "420px" }}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                  <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
                    <Image src="./images/arrowLeft.svg" alt="Arrow Left" />
                  </button>
              )
            
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                  <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
                       <Image src="./images/arrowRight.svg" alt="Arrow Right" />
                  </button>
              )
            } 
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              if (isSelected) {
                  return (
                      <li
                          style={{ ...indicatorStyles, background: '#FFBA08' }}
                          aria-label={`Selected: ${label} ${index + 1}`}
                          title={`Selected: ${label} ${index + 1}`}
                      />
                  );
              }
              return (
                  <li
                      style={indicatorStyles}
                      onClick={onClickHandler}
                      onKeyDown={onClickHandler}
                      value={index}
                      key={index}
                      role="button"
                      tabIndex={0}
                      title={`${label} ${index + 1}`}
                      aria-label={`${label} ${index + 1}`}
                  />
              );
          }}
          >
            <Box>
              <Image src="/images/image1.jpg" style={{ height: "420px" }} />
            </Box>
            <Box>
              <Image src="/images/image2.jpg" style={{ height: "420px" }} />
            </Box>
            <Box>
              <Image src="/images/image3.jpg" style={{ height: "420px" }} />
            </Box>
          </Carousel>
        </Stack>
      </SimpleGrid>
    </Flex>
  );
}
