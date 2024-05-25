import { Link } from "react-router-dom";
import { Box, Flex, Spacer, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <Flex as="nav" p={5} bg="teal.500" color="white">
      <Box>
        <Link to="/">Home</Link>
      </Box>
      <Spacer />
      <Box>
        <Link to="/checkout">
          <Button colorScheme="teal" variant="outline">
            Checkout
          </Button>
        </Link>
      </Box>
    </Flex>
  );
}

export default Navigation;
