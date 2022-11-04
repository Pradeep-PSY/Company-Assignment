import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { loadData } from '../hoc/localStorage'

const Result = () => {
    // const {level,point} = useSelector(state=>state.question)
  return (
    <Box>
        <Flex justify="space-evenly" m='3' fontSize={'2xl'}>
            <Text>Difficulty: {loadData('level')}</Text>
            <Text>Level: {loadData('lvl')}</Text>
            <Text>Score: {loadData('point')}</Text>
        </Flex>
    </Box>
  )
}

export default Result