import React from 'react'
import { Link } from "react-router-dom"
import './index.scss'

export default function Menu() {
    return (
        <ul className="menu">
            {/* <li><a href="/student">学生列表</a></li>
            <li><a href="/student/add">添加学生</a></li>
            <li><a href="/course">课程列表</a></li>
            <li><a href="/course/add">添加课程</a></li> */}
            <li><Link to="/student">学生列表</Link></li>
            <li><Link to="/student/add">添加学生</Link></li>
            <li><Link to="/course">课程列表</Link></li>
            <li><Link to="/course/add">添加课程</Link></li>
        </ul>
    )
}
