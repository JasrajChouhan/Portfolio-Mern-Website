import React from 'react';
import axios from 'axios';
import {
    Menu,
    MenuButton,
    MenuGroup,
    MenuItem,
    MenuDivider,
    MenuList,
    Button,
    useToast
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user/UserContext';
import { useContext, useEffect } from 'react';


function Profile() {
    const navigate = useNavigate();
    const { user, setUser, isAuthorized, setIsAuthorized } =
        useContext(UserContext);

    const toast = useToast();
  

    if (!isAuthorized) {
         navigate('/signin');
         return null;
    }

    async function handleLogOut() {
        try {
            const response = await axios.get('/api/v1/user/logout', { withCredentials: true });
    
            console.log(response.data);
            toast({
                title: "Success!",
                description: `Successfully logged out ${user.name}`,
                duration: 5000,
                isClosable: true,
                status: 'success'
            });
            setIsAuthorized(false);
            navigate('/signin');
        } catch (error) {
            toast({
                title: 'Error',
                description: error.response?.data?.message || 'An error occurred while logging out',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            console.error('Error logging out:', error);
        }
    }
    return (
        <div>
            <Menu>
                <MenuButton as={Button} colorScheme="blue">
                    Profile
                </MenuButton>
                <MenuList>
                    <MenuGroup title="Profile">
                        <MenuItem>
                            <Link to="myaccount">My Account</Link>
                        </MenuItem>
                        <MenuItem>

                            <button onClick={handleLogOut} className='bg-transparent'  >Log out</button>
                        </MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    
                </MenuList>
            </Menu>
        </div>
    );
}

export default Profile;
