import { NavLink } from "react-router-dom";
import Hero from "./Hero";

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center py-4 shadow-xl bg-gray-200 px-5">
                <Hero></Hero>
                <ul className="flex items-center gap-5">
                    <li>
                        <NavLink 
                         to="/"
                         className={({ isActive, isPending }) =>
                           isPending ? "pending" : isActive ? "text-2xl text-[#FF444A] underline" : ""
                         }>
                            home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                         to="/donation"
                         className={({ isActive, isPending }) =>
                           isPending ? "pending" : isActive ? "text-2xl text-[#FF444A] underline" : ""
                         }>
                            Donation
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                         to="/statistics"
                         className={({ isActive, isPending }) =>
                           isPending ? "pending" : isActive ? "text-2xl text-[#FF444A] underline" : ""
                         }>
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;