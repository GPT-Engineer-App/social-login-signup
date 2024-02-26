import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Stack, Heading, Text, useToast, Divider, chakra } from "@chakra-ui/react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

// Helper components for social media buttons
const SocialButton = ({ children, label, ...props }) => {
  return (
    <Button w="full" {...props}>
      <Stack direction="row" justify="center" align="center" spacing={4}>
        {children}
        <Text>{label}</Text>
      </Stack>
    </Button>
  );
};

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = async () => {
    // Call the backend login API here
    // This is a placeholder to indicate where the login logic would go
    toast({
      title: "Login Functionality Not Implemented",
      description: "This would be replaced with an actual API call to the backend.",
      status: "warning",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleSignup = async () => {
    // Call the backend signup API here
    // This is a placeholder to indicate where the signup logic would go
    toast({
      title: "Signup Functionality Not Implemented",
      description: "This would be replaced with an actual API call to the backend.",
      status: "warning",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container py={10}>
      <Stack spacing={8}>
        <Heading textAlign="center">Welcome</Heading>
        <Box p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button colorScheme="blue" onClick={handleLogin}>
              Login
            </Button>
            <Button mt={4} colorScheme="green" onClick={handleSignup}>
              Signup
            </Button>
            <Divider my={6} />
            <chakra.p textAlign="center">Or continue with</chakra.p>
            <SocialButton colorScheme="facebook" leftIcon={<FaFacebook />} label="Facebook" />
            <SocialButton colorScheme="twitter" leftIcon={<FaTwitter />} label="Twitter" />
            <SocialButton colorScheme="red" leftIcon={<FaGoogle />} label="Google" />
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Index;
