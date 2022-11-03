import {
    Box,
    Flex,
    IconButton,
    Text,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link, useNavigate } from 'react-router-dom';

import { logoutApi } from '../actions/action';
import { useDispatch } from 'react-redux';
import { loadData } from '../hoc/localStorage';

const Navbar = () => {
    const bg = useColorModeValue('yellow', 'gray.700');
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
                    icon={<HamburgerIcon />}
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
        </Box>
    );
};

export default Navbar;
