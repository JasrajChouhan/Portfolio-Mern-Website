import React, { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/user/UserContext';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, Stack, Heading, Text, useToast, Image, useColorModeValue, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { setIsAuthorized } = useContext(UserContext);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.600', 'white');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('/api/v1/user/signup', {name, phone ,  email, password }, { withCredentials: true });
      toast({
        title: response.data.message,
        description: `Welcome to community!`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setIsAuthorized(true);
      
    } catch (error) {
      setError(error.response.data.message);
      toast({
        title: Error || "Server Error",
        description: error.response.data.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setIsAuthorized(false);
   
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxW="container.xl" p={0}>
      <Stack minH="100vh" direction={{ base: 'column', md: 'row' }}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-1 items-center justify-center p-10"
        >
         
          <Box rounded={'lg'} bg={bg} boxShadow={'lg'} p={8} className="backdrop-blur-sm bg-opacity-50" maxWidth="400px">
            <Stack spacing={4}>
              <Heading fontSize={'2xl'} textAlign="center">Sigup in to your account</Heading>
              <Text textAlign="center" fontSize="md" color={color}>
                Or{' '}
                <Link color={'blue.400'}  to={'/signin'} className='text-blue-400 font-normal hover:text-blue-500 transiti duration-300 ease-in-out' >
                  sign in
                </Link>
              </Text>
              <form onSubmit={handleSubmit}>
                <FormControl id="name" isRequired>
                  <FormLabel>full name</FormLabel>
                  <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>email</FormLabel>
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                <FormControl id="phone" isRequired>
                  <FormLabel>phone</FormLabel>
                  <Input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </FormControl>
                {error && (
                  <Text color="red.500" fontSize="sm">
                    {error}
                  </Text>
                )}
                <Stack spacing={6}>
                  <Button
                    marginTop={10}
                    isLoading={loading}
                    type="submit"
                    colorScheme="blue"
                    variant="solid"
                  >
                    Sign up
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </motion.div>
        <Box flex={1}>
          <Image src="../../public/login.png" alt="Login" fit="cover" w="full" h="full" />
        </Box>
      </Stack>
    </Container>
  );
}

export default SignUp;
