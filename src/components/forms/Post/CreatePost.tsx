import { Button, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik'
import { useMutation } from 'urql';
import { User } from '../../../types/User';
import { InputField } from '../InputField';
import { postSchema } from './postSchema';
import { TextAreaField } from '../TextAreaField';
import { CreatePost as CreatePostMutation } from "../../../graphql/post";

type Props = {
    user: User;
}

export default function CreatePostForm({ user }: Props) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [createPostResult, createPost] = useMutation(CreatePostMutation)

    async function onSubmit(values: any) {

        await createPost({
            createPostInput: {...values, authorId: user.id}
        })
        window.location.reload();
    }


    return (
        <>
            <Button colorScheme="blue" onClick={onOpen}>Create Post</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Formik initialValues={{
                            title: '',
                            body: '',
                        }}
                            onSubmit={onSubmit}
                            validationSchema={postSchema}
                        >
                            {(formikProps) =>
                                <Form>
                                    <VStack spacing={4} align="stretch">
                                        <InputField
                                            label="Title"
                                            name="title"
                                            placeholder="Title..."
                                        />
                                        <TextAreaField label="Body" name="body" placeholder="Body..." />
                                        <VStack spacing={2}>
                                            <Button
                                                minW="sm"
                                                colorScheme="blue"
                                                size="lg"
                                                borderRadius="full"
                                                type="submit"
                                            >
                                                Submit
                                            </Button>
                                        </VStack>
                                    </VStack>
                                </Form>}

                        </Formik >
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )

}