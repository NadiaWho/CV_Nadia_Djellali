import React from 'react'
import './Curriculum.css'

import Bio from './Bio'
import Experiences from './Experiences'
import Formations from './Formations'
import SkillsLogos from './SkillsLogos'
import Hobbies from './Hobbies'
import ReturnButton from './ReturnButton'
import UploadCv from './UploadCv'
// import BackCv from './BackCv'


class Curriculum extends React.Component {
    render () {
        return (
            <div id='curriculum'>
            {/* <BackCv /> */}
            <Bio />
            <Formations  />
            <Experiences />
            <SkillsLogos />
            {/* <Hobbies /> */}
            {/* <ReturnButton /> */}
            {/* <UploadCv /> */}
            </div>
        )
    }
}

export default Curriculum