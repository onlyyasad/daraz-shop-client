import logo from "../../assets/images/logo.png"
import { AiOutlineSearch } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import navad from "../../assets/images/navad.png"

const SearchBar = () => {
    return (
        <div className="container mx-auto px-12">
            <div className="grid grid-flow-col gap-4 py-4">
                <a href="" className="col-span-2">
                    <img className="h-12" src={logo} alt="" />
                </a>
                <div className="col-span-10 flex justify-between items-center gap-8">
                    <div className="flex justify-start items-center flex-grow">
                        <input className="bg-gray-100 px-4 py-4 h-12 focus:outline-none flex-grow" type="search" name="" id="" placeholder="Search in Daraz" />
                        <button className="bg-[#F85606] h-12 py-4 px-4 text-white text-xl">
                            <AiOutlineSearch />
                        </button>
                    </div>
                    <a className="text-2xl" href="">
                        <FiShoppingCart />
                    </a>
                    <a href="">
                        <img className="h-12" src={navad} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;