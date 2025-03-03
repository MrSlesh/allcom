import { Route, Routes } from 'react-router-dom';

import NotFound from './components/NotFound/NotFound';
import Layout from './features/Layout';
import MyAccount from './features/MyAccount/MyAccount';
import ProductDetails from './features/products/ProductDetails/ProductDetails';
import Shipping from './components/Shipping/Shipping';
import Payment from './components/Payment/Payment';
import Return from './components/Return/Return';
import Support from './components/Support/Support';
import AboutMe from './features/MyAccount/components/AboutMe';
import ChangePassword from './features/MyAccount/components/ChangePassword';
import ProductList from './features/user/wishProducts/ProductList';
import MyAuctions from './features/MyAccount/components/MyAuctions/MyAuctions';
import HomePage from './features/HomePage/HomePage';
import LoginPage from './components/LoginRegisterForgotPassword/LoginPage';
import RegisterPage from './components/LoginRegisterForgotPassword/RegisterPage';
import RestorePassword from './components/LoginRegisterForgotPassword/RestorePassword';
import RestorePasswordWait from './components/LoginRegisterForgotPassword/RestoreUserValidationWait';
import RestoreEnterNewPAssword from './components/LoginRegisterForgotPassword/RestoreEnterNewPAssword';
import UsersList from './features/MyAccount/components/UsersList';
import ProductsList from './features/products/ProductsList/ProductsList';
import AboutUs from './features/AboutUs/AboutUs';
import Contact from './features/Contact/Contact';
import FAQ from './features/FAQ/FAQ';
import AddProductPage from './features/products/AddProduct/AddProduct';
import AddedSuccessPage from './features/products/AddedSuccessPage/AddedSuccessPage';
import PrivacyPolicy from './features/PrivacyPolicy/PrivacyPolicy';
import EditProduct from './features/products/EditProduct/EditProduct';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { authCheck } from './features/auth/authSlice';
import { selectIsAuthenticated } from './features/auth/selectors';
import Greetings from './main/Greetings';

function App(): JSX.Element {
	const isAuth = useAppSelector(selectIsAuthenticated);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!isAuth) {
			dispatch(authCheck());
		}
	}, [dispatch, isAuth]);

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="user/my_account/" element={<MyAccount />}>
						<Route index element={<AboutMe />} />
						<Route path="products" element={<ProductList />} />
						<Route path="about_me" element={<AboutMe />} />
						<Route path="change_password" element={<ChangePassword />} />
						<Route path="my_auctions" element={<MyAuctions />} />
						<Route path="users_list" element={<UsersList />} />
						<Route path="greetings" element={<Greetings />} />
					</Route>
					<Route path="/user/users_list" element={<UsersList />} />
					<Route path="product/products_list" element={<ProductsList />} />
					<Route path="products/details/:id" element={<ProductDetails />} />
					<Route path="products/add" element={<AddProductPage />} />
					<Route path="products/edit/:productId" element={<EditProduct />} />
					<Route path="products/product_added_success" element={<AddedSuccessPage />} />
					<Route path="shipping" element={<Shipping />} />
					<Route path="payment" element={<Payment />} />
					<Route path="return" element={<Return />} />
					<Route path="support" element={<Support />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="register" element={<RegisterPage />} />
					<Route path="restore_password" element={<RestorePassword />} />
					<Route path="restore_password_wait" element={<RestorePasswordWait />} />
					<Route path="restore_password_new" element={<RestoreEnterNewPAssword />} />
					<Route path="about_us" element={<AboutUs />} />
					<Route path="contact" element={<Contact />} />
					<Route path="faq" element={<FAQ />} />
					<Route path="privacy_policy" element={<PrivacyPolicy />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
