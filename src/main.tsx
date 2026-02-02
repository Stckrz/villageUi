import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import './style.css'
import Layout from './pages/layout/layout.tsx';
import Home from './pages/home/home.tsx';
import Village from './pages/village/village.tsx';
import Stats from './pages/statistics/statistics.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="home" element={<Home />} />
						<Route path="village" element={<Village />} />
						<Route path="stats" element={<Stats />} />
						{/* <Route path="*" element={<PageNotFound />} /> */}
					</Route>
				</Routes>
			</Router>
  </StrictMode>,
)
