const Adoption = () => {
    return (
        <div className="container mx-auto rounded-[20px] my-9  bg-secondary flex">
            <div className="p-[50px]">
                <h2 className="text-primary text-[52px] font-[800]">Adoption</h2>
                <h3 className="text-primary text-[36px] font-[700] capitalize">We need help. so do they.</h3>
                <small>
                    Adopt a pet and give it a home, <br />
                    it will be love you back unconditionally.
                </small>
                <div className="mt-9 flex gap-5 ">
                        <button className="border-solid bg-primary border-2 border-primary py-2 px-6 rounded-full text-white ">
                            Explore now
                        </button>
                        <button className="border-solid border-2 border-primary py-2 px-6 rounded-full text-primary ">
                            View intro
                        </button>
                    </div>
            </div>
            <img src="/adoption.png" alt="" />
        </div>
    );
};

export default Adoption;
