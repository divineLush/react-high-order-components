import './App.css';

import UserList from './components/user-list/user-list.jsx';
import UserProfile from './components/user-profile/user-profile.jsx';

// high order component is a function
// that gets a component and returns a new enhanced component
function App() {
  return (
    <div className="App">
      <UserList />
      <UserProfile name="divine" email="divine@email.com" />
    </div>
  );
}

export default App;
