import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/Shared/NavBar";
import SearchBar from "../../Pages/Shared/SearchBar";


const Main = () => {
    return (
        <div>
            <div className="bg-gray-200">
                <NavBar></NavBar>
            </div>
            <div className="bg-white">
                <SearchBar></SearchBar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;