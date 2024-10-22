import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App({logout, setLogout}){

  const handleLogout = () => {
    setLogout(true);
  }

  return (
    <>
      <div className="bg-black rounded-md h-10 p-1">
        <ul className="flex space-x-10 mr-5 justify-end text-white cursor-pointer">
          <button className="hover:bg-slate-600 rounded-md p-1 text-center">
            <NavLink to="/">Home</NavLink>
          </button>

          {logout ? (
            <>
              <button className="hover:bg-slate-600 rounded-md p-1" >
                <NavLink to="/register">Signup</NavLink>
              </button>
              <button className="hover:bg-slate-600 rounded-md p-1">
                <NavLink to="/login">Login</NavLink>
              </button>
            </>
          ) : (
            <button className="hover:bg-slate-600 rounded-md p-1" onClick={handleLogout}>
              <NavLink to="/">Logout</NavLink>
            </button>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default App;

