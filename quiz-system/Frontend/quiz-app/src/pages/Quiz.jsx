import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Select,
    Stack,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getquestionApi } from '../actions/action';
import { saveData } from '../hoc/localStorage';

const Quiz = () => {
    const [level, setLevel] = useState('');
    const dispatch = useDispatch();

    const handleStart = () => {
        saveData('level', level);
        dispatch(getquestionApi({ difficulty: level }));
    };

    return (
        <Flex
            width="100wh"
            height="100vh"
            backgroundColor="#4c43d4"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDirection="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} color="teal.400">Check Your IQ</Heading>
                </Stack>
                <Box minW={{ base: '90%', md: '468px' }}>

                    <Stack
                        rounded={'xl'}

                        bg={useColorModeValue('#ffc72a', '#12e177')}
                        boxShadow={'md'}
                        p={8}
                    >
                        <Stack spacing={4}>
                            <FormControl id="difficulty" isRequired>
                                <FormLabel>Difficulty</FormLabel>

                                <Select
                                    placeholder="Difficulty"
                                    name="difficulty"
                                    onChange={e => setLevel(e.target.value)}
                                >
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                </Select>
                            </FormControl>

                            <Stack spacing={10}>
                                <Link to="/quizpage">
                                    <Button
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}
                                        isDisabled={level.length === 0}
                                        onClick={handleStart}
                                    >
                                        Start Quiz
                                    </Button>
                                </Link>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex >
    );
};

export default Quiz;
