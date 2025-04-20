import Sidebar from '../Sidebar';
import './index.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {

    return <div className="App">
        <div className="page">
            <span className='tags top-tags'>
            </span>
            <Outlet />
            <span className='tags bottom-tags'>
            </span>
        </div>
    </div>
}

export default Layout