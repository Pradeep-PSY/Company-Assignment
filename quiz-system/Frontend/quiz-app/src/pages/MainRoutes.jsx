import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Quiz from './Quiz'
import Signup from './Signup';
import { RequiredauthAdmin, RequiredauthUser } from '../hoc/requiredAuth'
import Quizpage from './Quizpage'
import Result from './Result'
import { Box, Text } from '@chakra-ui/react'
import Magic from './Magic'
import { useSelector } from 'react-redux'

const MainRoutes = () => {
    const { isAuth } = useSelector(state => state.auth)
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<Box textAlign="center" m='3' >
                <Text fontSize="2xl"> Welcome To Quizz App</Text>
                {
                    isAuth ? ('') : (
                        <Text fontSize="2xl"> Please Signup/Login and experience the quiz and some magic ahead!</Text>
                    )
                }
            </Box>} />
            <Route path='/admin_dashboard' element={
                <RequiredauthAdmin >
                    <Dashboard />
                </RequiredauthAdmin>
            } />
            <Route path='/quiz' element={
                <RequiredauthUser>
                    <Quiz />
                </RequiredauthUser>
            } />
            <Route path='/quizpage' element={
                <RequiredauthUser>
                    <Quizpage />
                </RequiredauthUser>
            } />
            <Route path='/result' element={
                <RequiredauthUser>
                    <Result />
                </RequiredauthUser>
            } />
            <Route path='/magic' element={
                <RequiredauthUser>
                    <Magic />
                </RequiredauthUser>
            } />
            <Route path="/*" element={<Box textAlign="center" m='3' fontSize="2xl">Page Not Found</Box>} />
        </Routes>
    )
}

export default MainRoutes