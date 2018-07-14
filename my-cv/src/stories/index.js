import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Background from '../components/Background'
// import EnterButton1 from '../components/EnterButton1'
import EnterButton2 from '../components/EnterButton2'

storiesOf('leitmotiv in background', module)
  .add('gradient text for leitmotiv', () => <Background />)

// storiesOf('Enter Button 1', module)
//   .add('see my cv', () => 
//     <EnterButton1 onClick={action('clicked')}/>)
  
    storiesOf('Enter Button 2', module)
    .add('see my cv', () => 
      <EnterButton2 onClick={action('clicked')}/>)
  
