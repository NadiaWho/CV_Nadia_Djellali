import React from 'react'
import './Curriculum.css'

import Bio from './Bio'
import FormationSkills from '../containers/FormationSkills'
import ExperiencesHobbies from '../containers/ExperiencesHobbies'
import ReturnButton from './ReturnButton'
import UploadCv from './UploadCv'
// import BackCv from './BackCv'


class Curriculum extends React.Component {
    render () {
        return (
            <div className='curriculum'>
            <Bio />
            <FormationSkills />
            <ExperiencesHobbies />
            {/* <UploadCv />  */}
            <ReturnButton /> 

            </div>
           
        )
    }
}

export default Curriculum