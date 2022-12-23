import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMagicdata } from '../actions/action';

const Magic = () => {
    const [num, setNum] = useState(0);
    const {magic} = useSelector(state=>state.question);
    const dispatch = useDispatch();

    const handleResult = () => {
    
        setNum(num + 1);
        
    };

   

    const handleNext = num => {
        setNum(num + 1);
       
    };

   useEffect(()=>{
        if(magic.length === 0){
            dispatch(getMagicdata())
        }
   },[])

    return (
        <Box p="4" backgroundColor="#4c43d4" width="100wh" height="100vh">
            {magic.length > 0 ? (
                <Box border="1px" p="3">
                    <Text fontSize="4xl"> {magic[num]}</Text>
                </Box>
            ) : (
                <Box textAlign="center" m="3" fontSize="2xl">
                    Loading...
                </Box>
            )}
            <Flex justify="center">
                {/* <Button m='2' colorScheme='teal' disabled={num == 0} onClick={() => handlePrevious(num)}>Previous</Button> */}
                {num === magic.length - 2 ? (
                    <Button m="2" colorScheme="teal" onClick={handleResult}>
                        Show
                    </Button>
                ) : num === magic.length - 1 ? (
                    ''
                ) : (
                    <Button
                        m="2"
                        colorScheme="teal"
                        disabled={num == magic.length - 1}
                        onClick={() => handleNext(num)}
                    >
                        Next
                    </Button>
                )}
            </Flex>
        </Box>
    );
};

export default Magic;
