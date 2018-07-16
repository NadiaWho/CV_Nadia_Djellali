import React from 'react'
import './Curriculum.css'

import SkillsLogos from './SkillsLogos'
import Hobbies from './Hobbies'


class Curriculum extends React.Component {
    render () {
        return (
            <div id='curriculum'>
            <SkillsLogos />
            <Hobbies />
            </div>
        )
    }
}

export default Curriculum