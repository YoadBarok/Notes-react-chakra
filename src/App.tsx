import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/300.css';
import { theme } from "./theme";
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  Heading,
} from "@chakra-ui/react"
import { PostList } from "./components/Post/PostList";
import CreatePostForm from './components/forms/Post/CreatePost';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <Box color="black" textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3} bg="gray.50">
            <VStack spacing={8}>
              <Heading as="h2" size="4xl">DevBros</Heading>
              <Heading as="h1" size="xl">DevBros-UI</Heading>
              <Text>
                Demo project to show a ui for an imaginary post feed.
                <br /> Built with Chakra UI, urql, formik and more.
              </Text>
              <CreatePostForm user={{
                name: "dummyUser",
                id: 1,
                email: "dummy@user.com",
                posts: []
              }} />
              <PostList />
            </VStack>
          </Grid>
        </Box>
      </Grid>
    </Box>
  </ChakraProvider>
)
