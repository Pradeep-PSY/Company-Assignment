import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { scoreTotal } from '../actions/action';
import Ans from '../components/Ans';
import { loadData, saveData } from '../hoc/localStorage';

const Quizpage = () => {
    const { questions } = useSelector(state => state.question);
 

    const [point,setPoint] = useState(0)
    const [level,setLevel] = useState(5)
    const [flag, setFlag] = useState('')
    const dispatch = useDispatch();
    const [num, setNum] = useState(0);
    const navigate = useNavigate();
    

    const handleResult = () => {
        dispatch(scoreTotal({level,point}))
        // saveData('lvl',level)
        // saveData('point',point)
        navigate('/result')
    }
   

    const handlePrevious = () => {
        setNum(num - 1)
        setFlag('')
    }

    const handleNext = (num) => {
        setNum(num + 1)
        setFlag('')
    }

    
    console.log(level,'level')
    useEffect(() => {
        if (questions.length == 0) {
            // dispatch(getquestions(url))
        }
    }, [questions.length])
    // console.log(count)
    useEffect(() => {
        if (level == 1 || level == 10) {
            navigate('/result')
        }
    }, [level])

    return (
        <Box p='4'>
        <Flex fontSize='xl' justify={'space-evenly'} m='2'>

            <Text>Difficulty: {loadData('level')}</Text>
            <Text>Level: {level}</Text>
        </Flex>
            {questions.length > 0 ?
                (<Box border="1px" p='2'>

                    <Text fontSize='4xl'><span>{num + 1}.</span>  {questions[num].question}</Text>
                    {
                        questions[num].options.map((el) => {
                            return <Ans val={el} correct={questions[num].correct_answer} setPoint={setPoint} point={point} num={num} setLevel={setLevel} level={level} />
                        })
                    }
                   
                </Box>) : ""
            }
            <Flex justify="center">

                <Button m='2' colorScheme='teal' disabled={num == 0} onClick={() => handlePrevious(num)}>Previous</Button>
                {
                    num === questions.length - 1 ? (
                        <Button m='2' colorScheme='teal' onClick={handleResult}>Submit</Button>

                    ) : (

                        <Button m='2' colorScheme='teal' disabled={num == questions.length - 1} onClick={() => handleNext(num)}>Next</Button>

                    )
                }
            </Flex>
        </Box>
    )
}

export default Quizpage