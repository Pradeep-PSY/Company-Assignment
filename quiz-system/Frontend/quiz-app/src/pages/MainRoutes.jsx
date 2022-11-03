import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Quiz from './Quiz'
import Signup from './Signup';
import { RequiredauthAdmin, RequiredauthUser} from '../hoc/requiredAuth'
import Quizpage from './Quizpage'
import Result from './Result'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<div>home</div>} />
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
        </Routes>
    )
}

export default MainRoutes