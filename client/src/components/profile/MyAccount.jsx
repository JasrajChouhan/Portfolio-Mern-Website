import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/user/UserContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Button, Box, Heading, Text, FormControl, FormLabel, FormHelperText, useToast } from '@chakra-ui/react';
import { FaEdit, FaSave } from 'react-icons/fa';
import axios from 'axios'

function MyAccount() {
    const { user, isAuthorized } = useContext(UserContext);
    const [emailUpdate, setEmailUpdate] = useState('');
    const [nameUpdate, setNameUpdate] = useState('');
    const [showEmailInput, setShowEmailInput] = useState(false);
    const [showNameInput, setShowNameInput] = useState(false);
    const navigate = useNavigate();
    const toast = useToast();

    if (!isAuthorized) {
        return navigate('/signin');
    }

    const handleEmailUpdate = () => {
        setEmailUpdate(user.email);
        setShowEmailInput(true);
    };

    const handleNameUpdate = () => {
        setNameUpdate(user.name);
        setShowNameInput(true);
    };

    const saveEmail = () => {
        const id = user._id;

        console.log(`id of user is ${id}`);

        const updateEmailFunction = async () => {
            try {
                const response = await axios.put(`/api/v1/user/updateemail/${id}`, 
                {email : emailUpdate}, 
                { withCredentials: true })
                console.log(emailUpdate);
                console.log(response.data);

                toast({
                    title: response.data.message || `update the email for ${user.name}`,
                    description: `success fully update the email!`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });

            } catch (error) {

                toast({
                    title: error.response.data.message || `not update the email for ${user.name}`,
                    description: `not update the email!`,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });


            }
        }

        updateEmailFunction();
        setShowEmailInput(false);
    };

    const saveName = () => {
        const id = user._id;

        console.log(`id of user is ${id}`);

        const updateNameFunction = async () => {
            try {
                const response = await axios.put(`/api/v1/user/updateemail/${id}`, 
                {name : nameUpdate}, 
                { withCredentials: true })
                

                toast({
                    title: response.data.message || `update the name for ${user.name}`,
                    description: `success fully update the name!`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });

            } catch (error) {

                toast({
                    title: error.response.data.message || `not update the name for ${user.name}`,
                    description: `not update the name!`,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });


            }
        }

        updateNameFunction();

        setShowNameInput(false);
    };

    const handleForgotPassword = () => {
        
    };

    return (
        <Box p={4} maxW="lg" mx="auto">
            <Heading mb={4}>{user.name}'s Account</Heading>

            <Box mb={4}>
                <Text>Email: {user.email}</Text>
                {showEmailInput ? (
                    <Box>
                        <form action=""  >
                        <FormControl  >
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="email"
                                value={emailUpdate}
                                onChange={(e) => setEmailUpdate(e.target.value)}
                                mb={2}
                            />
                        </FormControl>
                        <Button  type='submit' variant="solid" size="sm" onClick={saveEmail} leftIcon={<FaSave />} ml={2}>
                            Save
                        </Button>
                        </form>
                    </Box>
                ) : (
                    <Button variant="outline" size="sm" onClick={handleEmailUpdate} leftIcon={<FaEdit />} className='dark:bg-gray-300 ' >
                        Update
                    </Button>
                )}
            </Box>

            <Box mb={4}>
                <Text>Name: {user.name}</Text>
                {showNameInput ? (
                    <Box>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input
                                type="text"
                                value={nameUpdate}
                                onChange={(e) => setNameUpdate(e.target.value)}
                                mb={2}
                            />
                        </FormControl>
                        <Button variant="solid" size="sm" onClick={saveName} leftIcon={<FaSave />} ml={2}   >
                            Save
                        </Button>
                    </Box>
                ) : (
                    <Button variant="outline" size="sm" onClick={handleNameUpdate} leftIcon={<FaEdit />}  className='dark:bg-gray-300 '>
                        Update
                    </Button>
                )}
            </Box>

            <Box mb={4}>
                <Button variant="link" size="sm" onClick={handleForgotPassword}>
                    Forgot Password?
                </Button>
            </Box>
        </Box>
    );
}

export default MyAccount;
