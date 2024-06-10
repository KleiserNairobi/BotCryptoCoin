import {
  Box,
  Button,
  Text,
  Flex,
  Heading,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { MdFirstPage, MdLastPage } from "react-icons/md";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

// Dados estáticos para a tabela
const allUsers: User[] = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  role: index % 2 === 0 ? "Admin" : "User",
}));

export default function Symbols() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const totalPages = Math.ceil(allUsers.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const currentUsers = allUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Flex w={"full"} h={"full"} flexDir={"column"}>
        <HStack>
          <Heading mt={6} mb={6}>
            Usuários
          </Heading>
          <Button onClick={onOpen}>Open Modal</Button>
        </HStack>
        <Box overflowX="auto">
          <Table>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentUsers.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.id}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.role}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Flex mt={10} justifyContent="space-between" alignItems="center">
          <Select
            width="auto"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </Select>

          <Flex>
            <Button
              onClick={() => handlePageChange(1)}
              isDisabled={currentPage === 1}
              mr={2}
            >
              <MdFirstPage />
            </Button>
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              isDisabled={currentPage === 1}
              mr={2}
            >
              <GrFormPrevious />
            </Button>
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              isDisabled={currentPage === totalPages}
              mr={2}
            >
              <GrFormNext />
            </Button>
            <Button
              onClick={() => handlePageChange(totalPages)}
              isDisabled={currentPage === totalPages}
            >
              <MdLastPage />
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Corpo da modal...</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
