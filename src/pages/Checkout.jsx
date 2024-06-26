import { Box, Button, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

function Checkout() {
  const location = useLocation();
  const { item } = location.state || {};

  return (
    <Box p={5}>
      <Text fontSize="2xl">Checkout</Text>
      {item ? (
        <Box mt={5}>
          <Text>{item.name}</Text>
          <Text>${item.price}</Text>
          <Text>Selected Modifiers:</Text>
          <Box>
            {item.modifiers.map((modifier, idx) => (
              <Text key={idx}>{modifier}</Text>
            ))}
          </Box>
          <Button mt={3} colorScheme="teal">
            Pay Now
          </Button>
        </Box>
      ) : (
        <Text>No item selected</Text>
      )}
    </Box>
  );
}

export default Checkout;
