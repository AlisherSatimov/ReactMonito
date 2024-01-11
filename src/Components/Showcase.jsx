const Showcase = () => {
  return (
    <div className="bg-secondary w-[100%] h-[68.4vh]">
      <div className="flex container mx-auto justify-between ">
        <div className="flex flex-col gap-2 w-[49%]">
          <div>
            <h1 className="text-primary text-[60px] font-[800] capitalize ">
              One more friend
            </h1>
            <h2 className="text-primary text-[46px] font-[800] capitalize">
              Thousands more fun!
            </h2>
          </div>
          <p className="font-[500]">
            Having a pet means you have more joy, a new friend, a happy <br />{" "}
            person who will always be with you to have fun. We have 200+ <br />{" "}
            different pets that can meet your needs!
          </p>
          <div className="mt-9 flex gap-5 ">
            <button className="border-solid border-2 border-primary py-2 px-6 rounded-full text-primary ">
              View intro
            </button>
            <button className="border-solid bg-primary border-2 border-primary py-2 px-6 rounded-full text-white ">
              Explore now
            </button>
          </div>
        </div>
        <div className="">
          <img src="/showcase-woman.png" width={680} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
