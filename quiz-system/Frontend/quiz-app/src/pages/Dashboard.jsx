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
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { questionApi } from '../actions/action';

const Dashboard = () => {
  const [data, setData] = useState({
    difficulty: '',
    question: '',
    options: [],
    correct_answer: '',
  });
  const dispatch = useDispatch();

  const handleChange = e => {
    let { name, value } = e.target;
    if (name === 'option_A') {
      data.options[0] = value;
    } else if (name === 'option_B') {
      data.options[1] = value;
    } else if (name === 'option_C') {
      data.options[2] = value;
    } else if (name === 'option_D') {
      data.options[3] = value;
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const handleaddQuestion = () => {
    console.log(data)
    dispatch(questionApi(data))

  };
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
            <Heading fontSize={'4xl'}>Add Questions</Heading>
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
                  onChange={handleChange}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </Select>
              </FormControl>

              <FormControl id="question" isRequired>
                <FormLabel>Question</FormLabel>
                <Input
                  type="text"
                  name="question"
                  value={data.question}
                  onChange={handleChange}
                />
              </FormControl>

              <HStack>
                <Box>
                  <FormControl id="option_A" isRequired>
                    <FormLabel>Option A</FormLabel>
                    <Input
                      type="text"
                      name="option_A"
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="option_B" isRequired>
                    <FormLabel>Option B</FormLabel>
                    <Input
                      type="text"
                      name="option_B"
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
              </HStack>

              <HStack>
                <Box>
                  <FormControl id="option_C" isRequired>
                    <FormLabel>Option C</FormLabel>
                    <Input
                      type="text"
                      name="option_C"
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="option_D" isRequired>
                    <FormLabel>Option D</FormLabel>
                    <Input
                      type="text"
                      name="option_D"
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
              </HStack>

              <FormControl id="correct_answer" isRequired>
                <FormLabel>Correct Answer</FormLabel>
                <Input
                  type="text"
                  name="correct_answer"
                  value={data.correct_answer}
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
                  onClick={handleaddQuestion}
                >
                  Add Question
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Dashboard;
