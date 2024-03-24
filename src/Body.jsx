
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Body = () => {
    return (
        <div className='lg:flex'>
            <div><Navbar></Navbar></div>
            <Outlet></Outlet>
        </div>
    );
};

export default Body;