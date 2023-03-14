import {
    Box,
    Collapse,
    Flex,
    Icon,
    IconButton,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link, useNavigate } from 'react-router-dom';

import { logoutApi } from '../actions/action';
import { useDispatch } from 'react-redux';
import { loadData } from '../hoc/localStorage';

const Navbar = () => {
    const bg = useColorModeValue('#00d1a0', '#00b48a');
    const color = useColorModeValue('gray.800', 'white');
    const { isOpen, onToggle } = useDisclosure();
    const isAuth = loadData('isAuth');
    const navigate = useNavigate();
    // console.log(isAuth)
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutApi());
        navigate('/login');
    };






    const MobileNav = () => {
        return (
            <Stack
                bg={useColorModeValue('white', 'gray.800')}
                p={4}
                display={{ md: 'none' }}>
                <Flex
                    py={2}


                    justify={'space-between'}
                    align={'center'}
                    _hover={{
                        textDecoration: 'none',
                    }}>

                    {isAuth ? (
                        <Text cursor={'pointer'} m="2" fontSize="20" onClick={handleLogout}>
                            Logout
                        </Text>
                    ) : (
                        <Link to="/login">
                            <Text cursor={'pointer'} m="2" fontSize="20"
                                onClick={onToggle}>
                                Login
                            </Text>
                        </Link>
                    )}

                </Flex>
                {isAuth ? (
                    ''
                ) : (
                    <Link to="/signup">
                        <Text cursor={'pointer'} fontWeight={600}

                            onClick={onToggle}
                            m="2" fontSize="20">
                            Signup
                        </Text>
                    </Link>
                )}


            </Stack>
        );
    };

    return (
        <Box pos={'sticky'} top="0">
            <Flex
                justify="space-between"
                borderBottom="1px solid grey"
                opacity="3"
                bg={bg}
            >
                <Flex m="2">
                    <Link to="/">
                        <Text cursor={'pointer'} m="2" fontSize="24" color={color}>
                            QUIZ APP
                        </Text>
                    </Link>
                </Flex>
                <IconButton
                    variant="outline"
                    colorScheme="teal"
                    cursor={'pointer'}
                    m="2"
                    display={['flex', 'flex', 'none', 'none']}

                    onClick={onToggle}
                    icon={
                        isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                    }

                />

                <Flex
                    justify="space-between"
                    m="2"
                    display={['none', 'none', 'flex', 'flex']}
                >
                    {isAuth ? (
                        <Text cursor={'pointer'} m="2" fontSize="20" onClick={handleLogout}>
                            Logout
                        </Text>
                    ) : (
                        <Link to="/login">
                            <Text cursor={'pointer'} m="2" fontSize="20">
                                Login
                            </Text>
                        </Link>
                    )}

                    {isAuth ? (
                        ''
                    ) : (
                        <Link to="/signup">
                            <Text cursor={'pointer'} m="2" fontSize="20">
                                Signup
                            </Text>
                        </Link>
                    )}

                    <ColorModeSwitcher />
                </Flex>
            </Flex>


            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>


    );
};

export default Navbar;
