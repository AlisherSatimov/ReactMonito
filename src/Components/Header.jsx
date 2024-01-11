const Header = () => {
    return (
        <header id="main-header" className="bg-secondary ">
            <div className="container mx-auto py-8 flex justify-between items-center">
                <img src="/icons/logo.png" alt="" />
                <ul className="flex gap-[48px] text-[16px] font-[700] text-primary items-center ">
                    <li>Home</li>
                    <li>Category</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="flex gap-[15px]">
                    <input type="search" placeholder="Search something here!" className="p-2 rounded-full w-[280px]"/>
                    <button className="bg-primary p-2 rounded-full w-[200px] text-white">Join the community</button>
                </div>
                <p>Eng</p>
            </div>
        </header>
    );
};

export default Header;
