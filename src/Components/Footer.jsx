const Footer = () => {
    return (
        <div className="bg-secondary rounded-t-[40px]">
            <div className=" container mx-auto pt-[80px]">
                <div className="flex bg-primary rounded-[16px] p-[32px] items-center">
                    <h3 className="capitalize text-[24px] font-[700] text-white w-[40%]">
                        Register now so you don't miss <br /> our programs
                    </h3>
                    <div className="rounded-[14px] p-[12px] bg-white w-[60%] flex gap-[12px]">
                        <input
                            type="text"
                            placeholder="Enter Your Email"
                            className="rounded-[8px] border-1 border-solid px-[14px] py-[28px] w-[70%]"
                        />
                        <button className="bg-primary rounded-[8px] w-[30%] text-white px-[14px] py-[28px]">
                            Subscribe Now
                        </button>
                    </div>
                </div>

                <div className="flex justify-between py-9">
                <ul className="flex gap-[48px] text-[16px] font-[700] text-primary items-center ">
                    <li>Home</li>
                    <li>Category</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <ul className="flex items-center text-[16px] font-[700] text-primary gap-[48px]">
                    <li><i className="fa-brands fa-facebook"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-instagram"></i></li>
                    <li><i className="fa-brands fa-youtube"></i></li>
                </ul>
                </div>

                <hr />

                <ul className="flex justify-between items-center py-9"> 
                    <li>© 2022 Monito. All rights reserved.</li>
                    <li><img src="/icons/logo.png" alt="" /></li>
                    <li>Terms Of Service Privacy Policy</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
