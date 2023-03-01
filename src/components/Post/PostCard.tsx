import { Button, Text, HStack, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { Post } from "../../types/Post";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import formatDate from "../../utils/formatDate";
import { PostListItem } from "./PostListItem";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { RemovePost } from "../../graphql/post";
import { useMutation } from "urql";
import ConfirmationPopUp from "../ConfirmationPopUp";

type Props = {
    post: Post
}

export default function PostCard({ post }: Props) {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [_, removePost] = useMutation(RemovePost);

    async function deletePost() {
        const removePostId = post.id;
        await removePost({ removePostId });
        window.location.reload();
    }

    return (
        <div>
            <Link onClick={onOpen}>
                <PostListItem post={post} />
            </Link>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <HStack justify="space-between">
                            <Text >{post.title}</Text>
                            <ConfirmationPopUp
                                colorScheme="red"
                                callBack={deletePost}
                                message={`Are you sure you want to delete ${post.title}?`}
                                openButton={<FontAwesomeIcon size="xl" icon={faTrashCan} />}
                            />
                        </HStack>
                        <Text>by: {post.author.name}</Text>
                        <Text color="grey">{formatDate(post.createdAt)}</Text>
                    </ModalHeader>
                    <ModalBody>
                        <p>{post.body}</p>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}
