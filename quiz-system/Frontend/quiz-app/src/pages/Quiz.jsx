import { Box, Button, FormControl, FormLabel, Heading, HStack, Input, Select, Stack, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getquestionApi } from '../actions/action'
import { saveData } from '../hoc/localStorage'

const Quiz = () => {

    const [level, setLevel] = useState('');
    const dispatch = useDispatch();

    const handleStart = () => {
        saveData('level',level);
        dispatch(getquestionApi({difficulty:level}))
    }


    return (
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
                <Heading fontSize={'4xl'}>Check Your IQ</Heading>
            </Stack>
            <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}
            >
                <Stack spacing={4}>
                    <FormControl id="difficulty" isRequired>
                        <FormLabel>Difficulty</FormLabel>

                        <Select
                            placeholder="Difficulty"
                            name="difficulty"
                            onChange={(e) => setLevel(e.target.value)}
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
            </Box>
        </Stack>
    )
}

export default Quiz