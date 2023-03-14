import { Box, Button, Flex, Text } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getMagic } from '../actions/action'
import Chart_lg from '../components/Chart'

import Chart_md from '../components/Chart1'

import Chart_sm from '../components/Chart_sm'
import { loadData } from '../hoc/localStorage'

const Result = () => {
  const dispatch = useDispatch();
  const [score] = useState(loadData('point'));
  const { once } = useSelector(state => state.question)
  const navigate = useNavigate();

  const handleMagic = () => {
    dispatch(getMagic())
  }

  useEffect(() => {
    if (once === true) {
      alert('you had experience the magic once')
    }
    else if (once === false) {
      navigate('/magic')

    }
  }, [once])


  return (
    <Box>
      <Flex justify="space-evenly" m='3' fontSize={'2xl'}>
        <Text>Difficulty: {loadData('level')}</Text>
        <Text>Level: {loadData('lvl')}</Text>
        <Text>Score: {score[score.length - 1]}</Text>
      </Flex>
      {
        loadData('lvl') >= 9 ? (
          <Box textAlign="center" m='3' fontSize="2xl" >
            <Text border='1px' m='2' p='3' color='black' bg='blue.400' display='inline-block' borderRadius='20px'>Awesome</Text> </Box>

        ) : (

          <Box textAlign="center" m='3' fontSize="2xl">
            <Text border='1px' m='2' p='3' color='black' bg='pink.400' display='inline-block' borderRadius='20px'>Well Played</Text>
          </Box>
        )
      }

      <Box m='auto' p='6' w={{ base: '300px', md: '400px', lg: '800px' }} display={{ base: 'none', md: 'none', lg: 'block' }} >

        <Chart_lg />
      </Box>
      <Box m='auto' p='6' w={{ base: '300px', md: '450px', lg: '600px' }} display={{ base: 'none', md: 'block', lg: 'none' }} >

        <Chart_md />
      </Box>

      <Box m='auto' p='6' w={{ base: '380px', md: '450px', lg: '600px' }} display={{ base: 'block', md: 'none', lg: 'none' }} >

        <Chart_sm />
      </Box>

      <Box m='auto' p='6' textAlign='center'>
        <Text fontSize='xl' color='teal' fontWeight='bold'>If you want to experience some magic then click the button below.</Text>

        <Button colorScheme='red' m='2' onClick={handleMagic} disabled={once}>Magic</Button>

      </Box>
    </Box>
  )
}

export default Result