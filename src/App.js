import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Banner from './components/Banner';
import Login from './components/Login';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { UserContext } from './context/User.Context';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Success from './components/Success';
import Signup from './components/Signup';
function App() {

  const userCtx = useContext(UserContext);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          {
            userCtx.user.isLogged ? (
              <>
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/success" element={<Success/>}/>

                <Route path="/*" element={<Navigate to="/menu" />} />
              </>


            ) : (
              <>
                <Route path="/home" element={<Banner />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                <Route path="/*" element={<Navigate to="/home" />} />
              </>

            )
          }

        </Routes>

      </Router>


    </>
  );
}

export default App;
