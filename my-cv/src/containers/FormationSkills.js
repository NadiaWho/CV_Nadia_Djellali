import React from 'react'
import './FormationSkills.css'
 
import Formations from '../components/Formations'
import SkillsLogos from '../components/SkillsLogos'

const FormationSkills = () => {
    return (
        <div className='formation-skills'>
            <Formations />
            <SkillsLogos />
        </div>
    )
}

export default FormationSkills