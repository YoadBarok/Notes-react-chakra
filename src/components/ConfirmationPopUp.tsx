import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react'

type Props = {
    callBack: () => void;
    message: string;
    openButton: React.ReactNode;
    colorScheme?: string;
}

export default function ConfirmationPopUp({ callBack, message, openButton, colorScheme }: Props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <Button colorScheme={colorScheme} onClick={onOpen}>{openButton}</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>{message}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={callBack}>
                            Yes
                        </Button>
                        <Button colorScheme="red" onClick={onClose} variant='ghost'>No</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}