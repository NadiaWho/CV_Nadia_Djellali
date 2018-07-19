import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Background from '../components/Background'
import EnterButton2 from '../components/EnterButton2'
import EnterButton3 from '../components/EnterButton3'
import EnterButton4 from '../components/EnterButton4'
import SocialLogos from '../components/SocialLogos'
import SkillsLogos from '../components/SkillsLogos'
import Hobbies from '../components/Hobbies'

import Container from '../container/Container'

storiesOf('leitmotiv in background', module)
  .add('gradient text for leitmotiv', () => <Background />)
  
storiesOf('Enter Button 2', module)
  .add('see my cv', () => 
    <EnterButton2 onClick={action('clicked')}/>)

storiesOf('Enter Button 3', module)
  .add('see my cv', () => 
    <EnterButton3 onClick={action('clicked')}/>)

storiesOf('Enter Button 4', module)
  .add('see my cv', () => 
    <EnterButton4 onClick={action('clicked')}/>)

storiesOf('Socials logos', module)
  .add('multy socials logos', () => 
    <SocialLogos onClick={action('clicked')}/>)

storiesOf('container', module)
  .add('container', () => <Container />)

storiesOf('skills logos', module)
  .add('skills', () => <SkillsLogos />)

storiesOf('hobbies logos', module)
  .add('hobbies', () => <Hobbies />)
