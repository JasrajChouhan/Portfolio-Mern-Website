import React, { useState } from 'react';
import axios from 'axios';
import { useToast, useColorModeValue } from '@chakra-ui/react';

function ForgetPassword() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const toast = useToast();
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const focusColor = useColorModeValue('blue.400', 'blue.500');
    const hoverColor = useColorModeValue('blue.500', 'blue.600');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await axios.post('/api/v1/user/forgetPassword', { email });
            console.log(response);
            toast({
                title: 'Password Reset Email Sent',
                description: 'Please check your email for instructions on resetting your password.',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
        } catch (error) {
            setError(error.response.data.message);
            toast({
                title: 'Error',
                description: error.response.data.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col justify-center ' >
            <div>
                <h1>Forget Password</h1>
            </div>

            <div className="form-div shadow-sm">
                <form onSubmit={handleSubmit} className='flex flex-col justify-center min-h-screen items-center '>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className={`px-2 h-10 border w-[20%] text-black rounded-lg shadow-sm focus:outline-none focus:border-${focusColor} hover:border-${hoverColor}`}
                        placeholder='email'
                        style={{ borderColor }}
                    />

                    <button
                        className='px-8 py-2 rounded-lg mt-3 text-white bg-blue-500 hover:bg-blue-700 transition duration-200 ease-in-out'
                        type='submit'
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ForgetPassword;
