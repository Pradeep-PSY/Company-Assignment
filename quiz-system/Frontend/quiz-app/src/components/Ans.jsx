import { Box } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { loadingStateprev } from '../actions/action'

const Ans = ({ val, correct, setPoint, point, num, setLevel, level }) => {
    const [flag, setFlag] = useState('')

    // console.log(point)
    const { loading } = useSelector(state => state.question)

    const dispatch = useDispatch();
    const handleBg = () => {
        if (flag == '') {
            return
        }
        else if (flag == 'green') {
            // setNum(num+1)
            return 'green'
        }
        else if (flag == 'red') {
            // setNum(num-1)
            return 'red'
        }
    }

    const handleClick = (value) => {
        if (value == correct) {
            setFlag('green')
            setPoint(point + 5)
            setLevel(level + 1)
        }
        else {
            setFlag('red')
            setPoint(point - 2);
            setLevel(level - 1)
        }

        dispatch(loadingStateprev())
    }

    useEffect(() => {
        setFlag('')
    }, [num])
    return (
        <Box as='button' m='2' p='1' display={'block'} w='98%' textAlign='left' disabled={loading} border='1px' fontSize='2xl' bg={handleBg} onClick={() => handleClick(val)}>{val}</Box>

    )
}

export default Ans