import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import Layout from '../../component/Layout'
import Header from '../../component/Header'
import Menu from '../../component/Menu'
import Welcome from '../../component/Welcome'
import StudentList from '../../component/StudentList'
import StudentAdd from '../../component/StudentAdd'
import Course from '../../component/Course'
import CourseAdd from '../../component/CourseAdd'

export default class Admin extends Component {
    render() {
        return (
            <Layout
                header={ <Header /> }
                aside={ <Menu /> }
            >
                <Route path='/' exact component={ Welcome }/>
                <Route path='/student' exact component={ StudentList }/>
                <Route path='/student/add' exact component={ StudentAdd }/>
                <Route path='/course' exact component={ Course }/>
                <Route path='/course/add' exact component={ CourseAdd }/>
            </Layout>
        )
    }
}
