import { useEffect, useState } from 'react';
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Avatar,
    FormControl,
    InputRightElement,
    useColorModeValue,
    
    useToast,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { loginApi } from '../actions/action';

import { useDispatch, useSelector } from 'react-redux';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const toast = useToast();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const {isAuth, role} =useSelector(state=>state.auth)

    const handleSubmit = () => {

        dispatch(loginApi({email,password}))
       
    };

    useEffect(()=>{
        if(isAuth && role === 'admin'){
            navigate('/admin_dashboard')
           }
           else if(isAuth && role === 'user'){
            navigate('/quiz')
           }
    },[isAuth])
   
    const handleShowClick = () => setShowPassword(!showPassword);
    return (
        <>
            <Flex
                flexDirection="column"
                width="100wh"
                height="100vh"
                backgroundColor="gray.200"
                justifyContent="center"
                alignItems="center"
            >
                <Stack
                    flexDirection="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Avatar bg="teal.500" />
                    <Heading color="teal.400">Welcome</Heading>
                    <Box minW={{ base: '90%', md: '468px' }}>
                        <form>
                            <Stack
                                spacing={4}
                                p="1rem"
                                bg={useColorModeValue('white', 'gray.700')}
                                boxShadow="md"
                            >
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<CFaUserAlt color="gray.300" />}
                                        />
                                        <Input
                                            type="email"
                                            placeholder="Enter yor email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            color="gray.300"
                                            children={<CFaLock color="gray.300" />}
                                        />
                                        <Input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Password"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                                {showPassword ? 'Hide' : 'Show'}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Button
                                    borderRadius={0}
                                    variant="solid"
                                    colorScheme="teal"
                                    width="full"
                                    onClick={handleSubmit}
                                >
                                    Login
                                </Button>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
}

export default Login