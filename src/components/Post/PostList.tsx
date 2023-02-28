import { Box, Flex, Heading, Link, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "urql";
import { AllPosts } from "../../graphql/post";
import { Post } from "../../types/Post";
import PostCard from "./PostCard";
import { PostListItem } from "./PostListItem";

type PostsQueryRes = {
    posts: Post[];
}

type Props = {}

export const PostList = (props: Props) => {

    const [field, setField] = useState('createdAt');
    const [direction, setDirection] = useState(true)
    const [{ data, fetching, error }] = useQuery<PostsQueryRes>({
        query: AllPosts,
        variables: {
            orderBy: {
                orderByField: field,
                orderByDirection: direction ? "desc" : "asc",
            },
        },
    });


    if (error) return <p>Something went wrong...</p>;
    if (fetching || !data) return <p>Loading...</p>

    function sortBy(field: string): void {
        setField(field);
        setDirection(!direction);
    }

    return <div>
        {data.posts.length > 0 ? <Flex direction="column">
            <Heading as="h1" size="2xl">Posts:</Heading>
            <Flex direction="row" justifyContent="space-between" mx={6}>
                <Link onClick={() => sortBy("title")}>sort by title</Link>
                <Link onClick={() => sortBy("createdAt")}>sort by date</Link>
            </Flex>
            <VStack spacing={4}>


                {data.posts.map(post =>
                    <VStack spacing={4} key={post.id}>
                        <Box
                         minW="lg"
                         maxW="lg"
                        
                        >
                            <PostCard
                                post={{
                                    id: post.id,
                                    title: post.title,
                                    body: post.body,
                                    createdAt: post.createdAt,
                                    author: post.author,
                                    authorId: post.authorId
                                }}></PostCard>
                        </Box>
                    </VStack>
                )}
            </VStack>
        </Flex> : <p>Looks like there are no posts!</p>
        }
    </div>

}