
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

function Dashboard() {
  return (
    <>
    <div>

    <Header/>
    <div className="sidebar">
        <Sidebar/>
    </div>
    <div className="content">
        <Main/>
    </div>
    </div>

   </>
);
}

export default Dashboard;
