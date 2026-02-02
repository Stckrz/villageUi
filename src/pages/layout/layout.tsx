import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

const Layout = () => {
	return (
		<div className="flex items-center justify-start flex-col m-0 p-0 w-full h-full">
			<Navbar />
			<Outlet />
		</div>
	)
}
export default Layout;
