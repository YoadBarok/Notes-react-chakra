import { Avatar, Badge, Box, Flex, Text } from "@chakra-ui/react"
import { Post } from "../../types/Post"
import formatDate from "../../utils/formatDate"
import styles from "../../styles/PostListItem.module.css";

type Props = {
    post: Post
}

export const PostListItem = ({ post }: Props) => {
    
    return (
        <Flex className={styles.postListItemBody} boxShadow="md" p={3} bg="lightblue" maxH="100px" minH="100px" borderRadius="lg" maxW="xl" w="100%">
            <Box flex="1" ml={3}>
                <Flex justifyContent="space-between" h="100%">
                    <Flex maxW="400px" flexDir="column" textAlign="left">
                        <Text fontWeight="bold">{post.title}</Text>
                        <Text fontSize="small">{post.body}</Text>
                    </Flex>
                    <Flex minW="120px" flexDir="column" justify="felx-start">
                        <div>
                            <Badge
                                colorScheme="darkblue"
                                borderRadius="full"
                                textTransform="lowercase"
                                py={1}
                                px={3}
                                as="div"
                                textAlign="right"
                                color="black"
                            >By: {post.author.name} </Badge>
                        </div>
                        <Text fontSize="xs">{formatDate(post.createdAt)}</Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}