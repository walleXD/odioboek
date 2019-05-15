import React from 'react'
import { HashRouter } from 'react-router-dom'

import Pages from './pages'

const App = () => (
    <div>
        <HashRouter>
            <Pages />
        </HashRouter>
    </div>
)

export default App