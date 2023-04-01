import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { NewProducts } from './components/NewProducts';
import { Nomatch } from './components/Nomatch';
import { OrderSummary } from './components/OrderSummary';
import { Products } from './components/Products';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import { Profile } from './components/Profile';
import { AuthProvider } from './components/auth';
import { Login } from './components/Login';
import { RequireAuth } from './components/RequireAuth';
const LazyContent = React.lazy(() => import('./components/LazyComponent'))


function App() {
  return (
    <AuthProvider>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='lazy-content' element={<React.Suspense fallback='Loading...'><LazyContent /></React.Suspense>} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path='featured' element={<FeaturedProducts />} />
            <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='users' element={<Users />} >
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Nomatch />} />
    </Routes>
    </AuthProvider>
  );
}

export default App;
