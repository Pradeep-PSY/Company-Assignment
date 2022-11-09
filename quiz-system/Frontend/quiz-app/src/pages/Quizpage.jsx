import { Box, Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Ans from '../components/Ans';
import { getquestionApi, loadingStatenext, loadingStateprev } from '../actions/action'
import { loadData, saveData } from '../hoc/localStorage';

const Quizpage = () => {
    const { questions } = useSelector(state => state.question);

    const [data] = useState([0])
    const [point, setPoint] = useState(0)
    const [level, setLevel] = useState(5)
    const [flag, setFlag] = useState('')
    const dispatch = useDispatch();
    const [num, setNum] = useState(0);
    const navigate = useNavigate();

    const {loading} = useSelector(state=>state.question)
    const handleResult = () => {
        // dispatch(scoreTotal({level,point}))
        saveData('lvl', level)
        data.push(point)
        saveData('point', data)
        navigate('/result')
    }


    const handlePrevious = () => {
        setNum(num - 1)
        setFlag('')
        if(loading){
            setPoint(point - 5)
            setLevel(level - 1)
        }
        dispatch(loadingStateprev()) //separate the loading state on  previous fire false dispatch 
    }

    const handleNext = (num) => {
        setNum(num + 1)
        data.push(point)
        setFlag('')

        dispatch(loadingStatenext())
    }


    // console.log(loading,'loading')
    useEffect(() => {
        if (questions.length == 0) {
            dispatch(getquestionApi({ difficulty: loadData('level') }))
        }
    }, [questions.length])
        
    useEffect(() => {
        if (level == 1 || level == 10) {
            saveData('lvl', level)
            data.push(point)
            saveData('point', data)
            navigate('/result')
        }
    }, [level])

    return (
        <Box p='4' backgroundColor="#4c43d4"  width="100wh"
        height="100vh">
            <Flex fontSize='xl' justify={'space-evenly'} m='2' >

                <Text>Difficulty: {loadData('level')}</Text>
                <Text>Level: {level}</Text>
            </Flex>
            {questions.length > 0 ?
                (<Box border="1px" p='3' >

                    <Text fontSize='4xl'><span>{num + 1}.</span>  {questions[num].question}</Text>
                    {
                        questions[num].options.map((el, i) => {
                            return <Ans key={i} val={el} correct={questions[num].correct_answer} setPoint={setPoint} point={point} num={num} setLevel={setLevel} level={level} />
                        })
                    }

                </Box>) : <Box textAlign="center" m='3' fontSize="2xl">Loading...</Box>
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