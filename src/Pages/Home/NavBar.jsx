

const NavBar = () => {
    return (
        <div className="container mx-auto px-12">
            <ul className="flex justify-end items-center gap-8 uppercase text-xs py-1">
                <li>
                    <a className="hover:text-[#F85606] hover:underline hover:underline-offset-2" href="">Save more on app</a>
                </li>
                <li>
                    <a className="hover:text-[#F85606] hover:underline hover:underline-offset-2" href="">Daraz Donates</a>
                </li>
                <li>
                    <a className="hover:text-[#F85606] hover:underline hover:underline-offset-2" href="">Sell on daraz</a>
                </li>
                <li>
                    <a className="hover:text-[#F85606] hover:underline hover:underline-offset-2" href="">Customer Care</a>
                </li>
                <li>
                    <a className="hover:text-[#F85606] hover:underline hover:underline-offset-2" href="">Track my order</a>
                </li>
                <li>
                    <a className="hover:text-[#F85606] hover:underline hover:underline-offset-2" href="">Sign up/Login</a>
                </li>
                <li>
                    <a className="hover:text-[#F85606] hover:underline hover:underline-offset-2" href="">Daraz Affiliate Program</a>
                </li>
                <li>
                    <a className="hover:text-[#F85606] hover:underline hover:underline-offset-2" href="">Language</a>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;