import { Box, Button, Container, FormControl, FormLabel, Heading, Image, Input, Stack, Text, useColorModeValue, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user/UserContext';

function Signin({ setIsSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.600', 'white');
  const { isAuthorized, setIsAuthorized } = useContext(UserContext);
  const navigate = useNavigate();

 


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('/api/v1/user/signin', { email, password }, { withCredentials: true });
      toast({
        title: 'Sign In Success',
        description: `Welcome back ${response.data.user.name} `,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      setIsAuthorized(true);
    } catch (error) {
      setError(error.response.data.message);
      toast({
        title: 'Error',
        description: error.response.data.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setIsAuthorized(false)
    } finally {
      setLoading(false);
    }
  };

  if(isAuthorized){
    return navigate('/')
  }



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
              <Heading fontSize={'2xl'} textAlign="center" className='text-gray-700' >Sign in to your account</Heading>
              <Text textAlign="center" fontSize="md" color={color}>
                Or{' '}
              
                <Link to="/signup" className="text-blue-400 font-normal hover:text-blue-500 transiti duration-300 ease-in-out">
                  sign up!
                </Link>
                
              </Text>
              <form onSubmit={handleSubmit}>
                <FormControl id="email" isRequired>
                  
                  <FormLabel className='text-black' >Email address</FormLabel>
                  <div className='border border-gray-400  rounded-md ' >
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='text-black'  />
                  </div>
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel className='text-black' >Password</FormLabel>
                  <div className='border border-gray-400  rounded-md ' >
                  <Input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} className='text-black' />
                  </div>
                </FormControl>
                {error && (
                  <Text color="red.500" fontSize="sm" textAlign="center">
                    {error}
                  </Text>
                )}
                <Link to='/forget-password' >
                <div>
                <Link to="/forget-password" className="my-4 text-blue-400 font-normal hover:text-blue-500 transiti duration-300 ease-in-out">
                  Forgot Password
                </Link>
                </div>
                </Link>
                
                <Stack spacing={6} align="center">
                  <Button
                    isLoading={loading}
                    type="submit"
                    colorScheme="blue"
                    variant="solid"
                    disabled={loading}
                  >
                    Sign In
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

export default Signin;

