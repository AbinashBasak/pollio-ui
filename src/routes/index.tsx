import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layouts = lazy(() => import(/* webpackChunkName: "SignUp" */ '../layouts'));

// user rotes
const SignUp = lazy(() => import(/* webpackChunkName: "SignUp" */ '../pages/SignUp'));
const DashboardHome = lazy(
	() => import(/* webpackChunkName: "DashboardHome" */ '../pages/dashboard/index')
);

function WebRoutes() {
	return (
		<Suspense fallback={<div className='loading' />}>
			<Routes>
				<Route path='/sign-up' element={<SignUp />} />

				<Route path='dashboard' element={<Layouts />}>
					<Route index element={<DashboardHome />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default WebRoutes;
