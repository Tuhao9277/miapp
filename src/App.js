import React,{Component} from 'react';
import { Provider } from 'react-redux'
import { HashRouter} from 'react-router-dom'
import Container from './Container'

import store from './store/'

import './static/reset.css'
export class App extends Component {
  
  render(){
    return (
      <div className="App">
      <Provider store={store}>
            <HashRouter>
              <Container />
            </HashRouter>
        </Provider>
  </div>
  )
    }
}

export default App;
