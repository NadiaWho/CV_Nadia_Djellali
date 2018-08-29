import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Router>
    <App path='/*' />
  </Router>, document.getElementById('root'))
registerServiceWorker()
