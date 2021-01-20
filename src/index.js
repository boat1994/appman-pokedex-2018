import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { DexProvider } from './stores/DexProvider'

ReactDOM.render(
    <DexProvider>
        <App />
    </DexProvider>
, document.getElementById('root'))
