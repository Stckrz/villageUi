import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="w-full border flex gap-100px items-center justify-evenly">
			<a><Link to="home">Home</Link></a>
			<a><Link to="village">Village</Link></a>
			<a><Link to="stats">Stats</Link></a>
		</div>
	)
}
export default Navbar;
