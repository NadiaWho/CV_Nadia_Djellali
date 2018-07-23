import React from 'react'
import './Curriculum.css'

import Bio from './Bio'
import FormationSkills from '../containers/FormationSkills'
import ExperiencesHobbies from '../containers/ExperiencesHobbies'
import ReturnButton from './ReturnButton'
import UploadCv from './UploadCv'
import ContactButton from './ContactButton'
import BackCv from './BackCv'

class Curriculum extends React.Component {
    render () {
        return (
            <div className='curriculum'>
            <BackCv />
            <Bio />
            <FormationSkills />
            <ExperiencesHobbies />
            <UploadCv />
            <ReturnButton /> 
            <ContactButton />
            </div>
        )
    }
}

export default Curriculum