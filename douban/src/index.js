import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import './public/css/reset.less'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
)
registerServiceWorker()
