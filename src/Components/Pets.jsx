const petsNumber = [1, 2, 3, 4, 5, 6, 7, 8];

const Pets = () => {
  return (
    <div className="container mx-auto py-5 h-[100vh]">
      <div className="flex justify-between">
        <div>
          <small>What's new?</small>
          <h3 className="text-primary text-[24px] font-[700]">
            Take A Look At Some Of Our Pets
          </h3>
        </div>
        <button className="border-solid border-2 border-primary py-2  px-6 rounded-full text-primary">
          View More
        </button>
      </div>
      <div className="grid grid-cols-4 gap-[20px] mt-5 ">
        {petsNumber.map((element, index) => (
          <div
            key={index}
            className="flex flex-col gap-[15px] p-3 rounded-[12px] bg-white shadow-lg"
          >
            <img src={`/Puppy/puppy-${element}.jpg`} alt="" />
            <small className="text-[16px] font-[500]">
              MO231 - Pomeranian White
            </small>
            <div className="flex gap-2 ">
              <span className="text-[12px] text-[#667479]">Gene: male</span>
              <span className="text-[12px] text-[#667479]">Age: 2 months</span>
            </div>
            <small className="text-[16px] font-[500]">6.900.000 VND</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pets;
