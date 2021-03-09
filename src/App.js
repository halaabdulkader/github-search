import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {HomeScreen, ListScreen, BookmarksScreen} from './Screens'

const App = () => {
 
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomeScreen />
        </Route>
        <Route path='/search'>
          <ListScreen />
        </Route>
        <Route exact path='/bookmarks'>
          <BookmarksScreen />
        </Route>
        <Route>
          <h1>404 NOT FOUND</h1>
        </Route>
      </Switch>
    </Router>
  )
} 

export default App
