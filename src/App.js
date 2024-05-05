
import { Route, Routes } from 'react-router-dom';

import Dashboard from './DashBoard';
import Profile from './Profile';
import CreateCards from './CreateCards';
import Registration from './Registration';
import ForgetPassword from './ForgetPassword';
import HomePage from './Home/HOME';
function App() {
  return (
   <Routes>
      
     <Route path="/" element={<Dashboard/>} >
        <Route path='create' element={<CreateCards/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path="/create/registration" element={<Registration/>}/>
        <Route path="/profile/forget" element={<ForgetPassword/>}/>
     </Route>
     <Route path='/home' element={<HomePage/>}></Route>
     <Route path='create' element={<CreateCards/>}/>
   </Routes>
 );
}

export default App;