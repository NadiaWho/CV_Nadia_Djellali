import React from 'react'
import ContainerMin from '../containers/ContainerMin'
import './SkillsLogos.css'  

const SkillsLogos = () => {
        return (
            <ContainerMin>
            <div className='skills'>
                <ul>
                    <li><i className="devicon-html5-plain"></i></li>
                    <li><i className="devicon-css3-plain"></i></li>
                    <li><i className="devicon-javascript-plain"></i></li>
                </ul>
                <ul>
                    <li><i className="devicon-react-original"></i></li>
                    <li><i className="devicon-nodejs-plain"></i></li>
                    <li><i className="devicon-mysql-plain"></i></li>    
                </ul>
                <ul>
                   <li><i className="devicon-bootstrap-plain"></i></li>
                   <li><i className="devicon-git-plain"></i></li>
                   <li><i className="devicon-travis-plain"></i></li>
                   
		
                </ul>
            </div>
            </ContainerMin>
        )
    }

export default SkillsLogos
