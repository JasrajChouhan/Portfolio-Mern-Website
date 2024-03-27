import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/user/UserContext';
import { useNavigate , useParams } from 'react-router-dom';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';

function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { isAuthorized } = useContext(UserContext);

    const navigate = useNavigate();
    const toast = useToast();
    const {token , id} = useParams();

    if (!isAuthorized) {
        navigate('/signin');
        return null;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast({
                duration: 5000,
                status: 'error',
                isClosable: true,
                title: 'Reset Password',
                description: 'Passwords do not match',
            });
            return;
        }

        try {
            const response = await axios.post(`/api/v1/user/reset-password/${token}`, {password}, { withCredentials: true });
            console.log(response.data);
            toast({
                duration: 5000,
                status: 'success',
                isClosable: true,
                title: 'Reset Password',
                description: 'Successfully reset the password',
            });
            navigate('/signin')
        } catch (error) {
            console.log(error.response.data.message);
            toast({
                duration: 5000,
                status: 'error',
                isClosable: true,
                title: 'Reset Password',
                description: 'Unsuccessful in resetting the password',
            });
        }
    };

    return (
        <div className='mx-auto p-6 max-w-lg'>
            <h1 className='text-2xl font-bold mb-4'>Reset Password</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor='password' className='block mb-2'>New Password</label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black '
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='confirmPassword' className='block mb-2'>Confirm Password</label>
                    <input
                        type='password'
                        id='confirmPassword'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black'
                    />
                </div>
                <button
                    type='submit'
                    className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700'
                >
                    Submit
                </button>
            </form>
        </div>
    );
}



export default ResetPassword;
