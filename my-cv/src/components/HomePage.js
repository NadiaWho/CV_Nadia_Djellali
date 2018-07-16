import React from 'react'
import Background from '../components/Background'
import SocialLogos from'../components/SocialLogos'
import EnterButton4 from '../components/EnterButton4'


class HomePage extends React.Component {
    render () {
        return (
            <div>
            <Background />
            <SocialLogos />
            <EnterButton4 />
            </div>
        )
    }
}

export default HomePage

