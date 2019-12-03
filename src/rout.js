import React from 'react'
import {Route} from 'react-router-dom'
import Desc from './desc'
import App from './App'

 function Rout() {
    return (
        <div>
            <Route exact path="/" component={App}/>
            <Route  path="/:id" component={Desc}/>
        </div>
    )
}
export default Rout