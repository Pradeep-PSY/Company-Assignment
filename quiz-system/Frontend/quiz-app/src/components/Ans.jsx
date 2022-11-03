import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const Ans = ({ val, correct, setPoint,point,num, setLevel, level }) => {
    const [flag, setFlag] = useState('')
 
    console.log(point)

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
    }

    useEffect(() => {
        setFlag('')
    }, [num])
    return (
        <Box m='2' p='1' border='1px' fontSize='2xl' display='block' bg={handleBg}  onClick={() => handleClick(val)}>{val}</Box>

    )
}

export default Ans