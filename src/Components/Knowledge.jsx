const knowledgeNumber = [1, 2, 3];

const Knowledge = () => {
  return (
    <div className="container mx-auto py-[50px] h-[100vh]">
      <div className="flex justify-between">
        <div>
          <small>You alreadey know?</small>
          <h3 className="text-primary text-[24px] font-[700]">
            Useful pet knowledge
          </h3>
        </div>
        <button className="border-solid border-2 border-primary py-2  px-6 rounded-full text-primary">
          View More
        </button>
      </div>
      <div className="grid grid-cols-3 gap-[20px] mt-5 ">
        {knowledgeNumber.map((element, index) => (
          <div key={index}>
            <div className="flex flex-col gap-[15px] p-3 rounded-[12px] bg-white shadow-lg">
              <img src={`/knowledge/knowledge-${element}.jpg`} alt="" />
              <span className="text-[12px] text-white bg-[#00A7E7] rounded-full flex px-1  w-[90px]">
                Pet Knowledge
              </span>
              <small className="text-[16px] font-[500]">
                What is a Pomeranian? How to Identify Pomeranian Dogs
              </small>

              <span className="text-[12px] text-[#667479]">
                The Pomeranian, also known as the Pomeranian (Pom dog), is
                always in the top of the cutest pets. Not only that, the small,
                lovely, smart, friendly, and skillful circus dog breed.
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Knowledge;
