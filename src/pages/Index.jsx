import { Box, Container, Flex, Heading, HStack, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaNewspaper, FaChartLine, FaCommentDots, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0} bg="#f3f2f1" minH="100vh">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Financial Times
        </Heading>
        <HStack spacing={8}>
          <Link href="#" display="flex" alignItems="center">
            <FaHome />
            <Text ml={2}>Home</Text>
          </Link>
          <Link href="#" display="flex" alignItems="center">
            <FaNewspaper />
            <Text ml={2}>News</Text>
          </Link>
          <Link href="#" display="flex" alignItems="center">
            <FaChartLine />
            <Text ml={2}>Markets</Text>
          </Link>
          <Link href="#" display="flex" alignItems="center">
            <FaCommentDots />
            <Text ml={2}>Opinion</Text>
          </Link>
          <Link href="#" display="flex" alignItems="center">
            <FaEnvelope />
            <Text ml={2}>Contact</Text>
          </Link>
        </HStack>
      </Flex>

      {/* Main Headline Section */}
      <Box bg="gray.100" p={8} my={4}>
        <Heading as="h2" size="xl" mb={4}>
          Main Headline: Breaking News Story
        </Heading>
        <Text fontSize="lg">
          This is the main headline section where the most important news story of the day will be displayed.
        </Text>
      </Box>

      {/* Latest News Section */}
      <Box my={8}>
        <Heading as="h3" size="lg" mb={4}>
          Latest News
        </Heading>
        <Stack spacing={4}>
          <Box p={4} bg="white" shadow="md">
            <Heading as="h4" size="md">News Article 1</Heading>
            <Text mt={2}>Summary of the news article 1...</Text>
          </Box>
          <Box p={4} bg="white" shadow="md">
            <Heading as="h4" size="md">News Article 2</Heading>
            <Text mt={2}>Summary of the news article 2...</Text>
          </Box>
          <Box p={4} bg="white" shadow="md">
            <Heading as="h4" size="md">News Article 3</Heading>
            <Text mt={2}>Summary of the news article 3...</Text>
          </Box>
        </Stack>
      </Box>

      {/* Market Updates Section */}
      <Box my={8}>
        <Heading as="h3" size="lg" mb={4}>
          Market Updates
        </Heading>
        <Stack spacing={4}>
          <Box p={4} bg="white" shadow="md">
            <Heading as="h4" size="md">Market Update 1</Heading>
            <Text mt={2}>Summary of the market update 1...</Text>
          </Box>
          <Box p={4} bg="white" shadow="md">
            <Heading as="h4" size="md">Market Update 2</Heading>
            <Text mt={2}>Summary of the market update 2...</Text>
          </Box>
        </Stack>
      </Box>

      {/* Opinion Section */}
      <Box my={8}>
        <Heading as="h3" size="lg" mb={4}>
          Opinion
        </Heading>
        <Stack spacing={4}>
          <Box p={4} bg="white" shadow="md">
            <Heading as="h4" size="md">Opinion Piece 1</Heading>
            <Text mt={2}>Summary of the opinion piece 1...</Text>
          </Box>
          <Box p={4} bg="white" shadow="md">
            <Heading as="h4" size="md">Opinion Piece 2</Heading>
            <Text mt={2}>Summary of the opinion piece 2...</Text>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default Index;