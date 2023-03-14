import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
    FormHelperText,
    FormErrorMessage,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { signupApi } from '../actions/action';



const Signup = () => {
    const dispatch = useDispatch();
    const toast = useToast();

    const navigate = useNavigate();

    const [signup, setSignup] = useState({
        password: '',
        email: '',
        name: '',
    });

    const handleChange = e => {
        let { name, value } = e.target;
        setSignup({
            ...signup,
            [name]: value,
        });
    };
    const handleSignup = () => {
        dispatch(signupApi(signup));
    };



    const { isAuth, role } = useSelector(state => state.auth)


    useEffect(() => {
        if (isAuth && role === 'admin') {
            navigate('/admin_dashboard')
        }
        else if (isAuth && role === 'user') {
            navigate('/quiz')
        }
    }, [isAuth])

    return (
        <>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}
            >
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Sign Up</Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}
                    >
                        <Stack spacing={4}>
                            <FormControl id="name" isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    type="text"
                                    name="name"
                                    value={signup.name}
                                    onChange={handleChange}
                                />

                            </FormControl>

                            <FormControl id="email" isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    type="email"
                                    name="email"
                                    value={signup.email}
                                    onChange={handleChange}
                                />

                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    type="password"
                                    name="password"
                                    value={signup.password}
                                    onChange={handleChange}
                                />
                            </FormControl>


                            <Stack spacing={10}>
                                <Button
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}
                                    onClick={handleSignup}
                                >
                                    Sign Up
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
};

export default Signup;
