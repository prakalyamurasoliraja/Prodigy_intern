import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route,Link} from 'react-router-dom';
import Log from './comp/login/login';
import Sidemenu from './navbar/sidemenu';
import Sidemenu1 from './navbar1/sidemenu1';
import Home from './Menu/Home';
import Home1 from './Menu1/Home1';
import Gallery from './collections/Gallery';
import Userpro from './profile/Upro';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar/Navbar';
import Theme from './theme/theme';
import Home14 from './addgif/Home';
import Create from './addgif/Create';
import Edit from './addgif/Edit';
import Homecopy from './addgif/Homecopy';
import Crudcreate from './crud/crudcreate';
import Crudedit from './crud/crudedit';
import Crudhome from './crud/curdhome';
import Crudcopy from './crud/crudcopy';
import Orderedit from './orders/orderedit';
import Orderhome from './orders/orderhome';
import Ordercreate from './orders/ordercreate';
import Themehome from './addtheme/hometheme';
import Themecreate from './addtheme/createtheme';
import Themeedit from './addtheme/edittheme';
import Reg from './comp/login/register';
import Payment from './payment/payment';
import Gifc from './addgif/Create';
import Gife from './addgif/Edit'
import Copygif from './addgif/Homecopy';
import Themecopy from './addtheme/copytheme';
import Paycreate from './Pay/createp';
import Payedit from './Pay/editp';
import Payho from './Pay/home';
import Copyp from './Pay/copy';
import Pro from './profile/adminpro';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<div><Log/><Sidemenu /></div>} />
        <Route path='/reg' element={<><Reg /><Sidemenu /></>} />
        
          <Route path='/abcd' element={<><Home /><Sidemenu /></>} />
          <Route path='/abc' element={<><Home1 /><Sidemenu1 /></>} />
          <Route path='/coll' element={<><Sidemenu1 /><Gallery /></>} />
          <Route path='/user' element={<>
            <Userpro /><Sidemenu1 />
            </>} />
          <Route path='/mens' element={<>
            <Navbar/><ShopCategory category="men" />
            </>} />
          <Route path='/womens' element={<>
            <Navbar/><ShopCategory  category="women" />
            </>} />
          <Route path='/kids' element={<>
            <Navbar/><ShopCategory category="kid" />
            </>} />
          <Route path='/product/:productId' element={<>
            <Navbar/><Product />
            </>} />
          <Route path='/cart' element={<>
            <Navbar/><Cart/>
            </>} />
          <Route path='/theme' element={<>
           <Theme/> <Sidemenu1/>
            </>} />
            <Route path='/home3' element={<><Home14 /><Sidemenu1 /></>} />
            <Route path='/create' element={<><Gifc /><Sidemenu1 /></>} />
            <Route path='/edit' element={<><Gife /><Sidemenu1 /></>} />
            <Route path='/copygif' element={<><Copygif /><Sidemenu /></>} />
            <Route path='/create' element={<><Create /><Sidemenu1 /></>} />
            <Route path='/edit/:id' element={<><Edit /><Sidemenu1 /></>} /> 
            <Route path='/copy' element={<><Homecopy /><Sidemenu /></>} />
            <Route path='/home5' element={<><Crudhome /><Sidemenu /></>} />
            <Route path='/create5' element={<><Crudcreate /><Sidemenu /></>} />
            <Route path='/edit5' element={<><Crudedit /><Sidemenu /></>} />
            <Route path='/orderhome' element={<><Orderhome /><Sidemenu /></>} />
            <Route path='/ordercreate' element={<><Ordercreate /></>} />
            <Route path='/orderedit/:id' element={<><Orderedit /><Sidemenu /></>} />
            <Route path='/crudcopy' element={<><Crudcopy /><Sidemenu1 /></>} />
            <Route path='/themehome' element={<><Themehome /><Sidemenu /></>} />
            <Route path='/themecopy' element={<><Themecopy /><Sidemenu1 /></>} />
                    <Route path='/themecreate' element={<><Themecreate /><Sidemenu /></>} />
                    <Route path='/themeedit/:id' element={<><Themeedit /><Sidemenu1 /></>} />
                    <Route path='/createp' element={<><Paycreate /><Sidemenu /></>} />
                    <Route path='/homep' element={<><Payho /><Sidemenu1 /></>} />
                    <Route path='/copyp' element={<><Copyp /><Sidemenu /></>} />
                    <Route path='/editp/:id' element={<><Payedit /><Sidemenu1 /></>} />
                    <Route path='/pay' element={<><Payment /><Sidemenu /></>} />
                    <Route path='/pro' element={<><Pro /><Sidemenu1 /></>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
