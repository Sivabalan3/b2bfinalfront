import {Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import  {CategoryList}  from './pages/CategoryList';
import { C1 } from './pages/C1';
import { C2 } from './pages/C2';
import { C3 } from './pages/C3';
import { C4 } from './pages/C4';
import { C5 } from './pages/C5';
import { C6 } from './pages/C6';
import { C7 } from './pages/C7';
import { EditUser } from './pages/EditUser';
import { C8 } from './pages/C8';
import Shopping from './pages/Shopping';
import Messages from './pages/Messages';
// import Chat from './pages/Chat';
import Payments from './pages/Payments';
import Cart from './pages/Cart';
import PaymentsDetailsPage from './pages/PaymentDetails';
import { AuthProvider } from './provider/AuthProvider';
import Notifications from './pages/Notifications';
import Myorders from './pages/Myorders';
import Requirements from './pages/Requirements';
import Profile from './pages/Profile';
import {View1} from './pages/View1'
import {View2} from './pages/View2'
import {Seller} from './pages/Seller'
import {Seller1} from './pages/Seller1'
import {History} from './pages/History'
import {His1} from './pages/His1'
import {Ship} from './pages/Ship'
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Industry from "./pages/Industry"
import CreateCategory from './pages/CreateCategory';
import CreateProduct from './pages/createProduct';
import ProductList from './pages/ProductList'
import Chat from './chatpages/Chat';
import SetAvataor from './chatpages/SetAvatar';
function App() {
  const user = true

  return (
    <>
    <AuthProvider>
    
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/createcategory" element={<CreateCategory/>} />
        <Route path="/createproduct" element={<CreateProduct/>} />
        <Route path="/productlist" element={<ProductList/>} />
        <Route path="/setAvatar" element={<SetAvataor/>} />
        <Route path="/myCarts" element={<Cart/>} />

        <Route path="/home" element={user?<Home />:<Login/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/categories' element={<CategoryList/>} />
        <Route path='/shopping' element={<Shopping/>} />
        <Route path="/shopping/:productId" element={<Shopping/>} />
        <Route path='/c1' element={<C1/>} />
        <Route path='/c2' element={<C2/>} />
        <Route path='/c3' element={<C3/>} />
        <Route path='/c4' element={<C4/>} />
        <Route path='/c5' element={<C5/>} />
        <Route path='/c6' element={<C6/>} />
        <Route path='/c7' element={<C7/>} />
        <Route path='/c8' element={<C8/>} />
        <Route path='/edit' element={<EditUser/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/paymentdata' element={<PaymentsDetailsPage />} />
        <Route path='/myorders' element={<Myorders />} />
        <Route path='/requirements' element={<Requirements />} />
        <Route path="/messages/:userId" element={<Chat />} />
        <Route path='/view1' element={<View1/>} />
        <Route path='/view2' element={<View2/>} />
        <Route path='/sell' element={<Seller/>} />
        <Route path='/sell1' element={<Seller1/>} />
        <Route path='/his' element={<History/>} />
        <Route path='/his1' element={<His1 />} />
        <Route path="/ship" element={<Ship/>} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/industry" element={<Industry />} />
      
      </Routes>
   
    </AuthProvider>
    </>
  )
}

export default App
