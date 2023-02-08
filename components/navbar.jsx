const Navbar = () => {
    return (  
        <div>
            <div className="text-center font-bold text-white text-2xl py-3 top-bar">
                DEMO ONLINE TEST
            </div>
            <ul className="flex gap-1 mt-2 ml-4">
                    <li>
                        <button className="px-10 py-1 font-semibold text-[16px] text-white bluebg">All Sections</button>
                    </li>
                    <li>
                        <button className="px-10 py-1 font-semibold text-[16px] text-white bluebg">PHYSICS</button>
                    </li>
                    <li>
                        <button className="px-10 py-1 font-semibold text-[16px] text-white bluebg">CHEMISTRY</button>
                    </li>
                    <li>
                        <button className="px-10 py-1 font-semibold text-[16px] text-white bluebg">MATHS</button>
                    </li>
                </ul>
                <hr className="border-1 w-1/2 border-black mt-2"></hr>
        </div>
    );
}
 
export default Navbar;