import { useState } from 'react';
import { BrowserRouter }  from 'react-router-dom';
import Routes from './routes';

import Header from './components/header';
import Footer from './components/footer';
import Cart from './components/cart';

const App = () => {
  const [show, setShow] = useState(false);

  return (
      <BrowserRouter>
        <Header show={show} setShow={setShow}/>
        <Routes />
        <Footer />
        <Cart show={show} setShow={setShow}/>
      </BrowserRouter>
  )
}

export default App;