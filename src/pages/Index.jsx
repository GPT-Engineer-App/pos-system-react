import React, { useState, useEffect } from "react";
import { Container, VStack, HStack, Text, Input, Textarea, Button, Image, Box, SimpleGrid, IconButton, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", description: "", price: "", image: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddItem = () => {
    setMenuItems([...menuItems, newItem]);
    setNewItem({ name: "", description: "", price: "", image: "" });
  };

  const handleDeleteItem = (index) => {
    const updatedItems = menuItems.filter((_, i) => i !== index);
    setMenuItems(updatedItems);
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">
          POS System
        </Text>

        <Box p={4} borderWidth={1} borderRadius="lg">
          <Text fontSize="xl" mb={4}>
            Add New Menu Item
          </Text>
          <VStack spacing={3}>
            <Input placeholder="Name" name="name" value={newItem.name} onChange={handleInputChange} />
            <Textarea placeholder="Description" name="description" value={newItem.description} onChange={handleInputChange} />
            <Input placeholder="Price" name="price" value={newItem.price} onChange={handleInputChange} />
            <Input placeholder="Image URL" name="image" value={newItem.image} onChange={handleInputChange} />
            <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddItem}>
              Add Item
            </Button>
          </VStack>
        </Box>

        <Box p={4} borderWidth={1} borderRadius="lg">
          <Text fontSize="xl" mb={4}>
            Menu
          </Text>
          <SimpleGrid columns={[1, 2, 3]} spacing={4}>
            {menuItems.map((item, index) => (
              <Box key={index} p={4} borderWidth={1} borderRadius="lg">
                <Image src={item.image || "https://images.unsplash.com/photo-1714630011903-77155c14028e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZW51JTIwaXRlbXxlbnwwfHx8fDE3MTY2MTY1MDF8MA&ixlib=rb-4.0.3&q=80&w=1080"} alt={item.name} borderRadius="md" mb={4} />
                <Text fontSize="lg" fontWeight="bold">
                  {item.name}
                </Text>
                <Text>{item.description}</Text>
                <Text fontWeight="bold">${item.price}</Text>
                <IconButton aria-label="Delete item" icon={<FaTrash />} colorScheme="red" onClick={() => handleDeleteItem(index)} mt={2} />
                <Button as={RouterLink} to="/checkout" state={{ item }} colorScheme="teal" mt={2}>
                  Buy
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
