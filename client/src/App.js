import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Join from './component/join/join'
import Chat from './component/chat/chat'

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/" exact component={Join} />
          <Route path="/chats" component={Chat} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
