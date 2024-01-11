const productNumber = [1, 2, 3, 4, 5, 6, 7, 8];

const Products = () => {
  return (
    <div className="container mx-auto mt-[250px] py-[50px] h-[100vh]">
      <div className="flex justify-between">
        <div>
          <small>Hard to choose right products for your pets?</small>
          <h3 className="text-primary text-[24px] font-[700]">Our Products</h3>
        </div>
        <button className="border-solid border-2 border-primary py-2  px-6 rounded-full text-primary">
          View More
        </button>
      </div>
      <div className="grid grid-cols-4 gap-[20px] mt-5 ">
        {productNumber.map((element, index) => (
          <div
            key={index}
            className="flex flex-col gap-[15px] p-3 rounded-[12px] bg-white shadow-lg"
          >
            <img src={`/Products/product-${element}.jpg`} alt="" />
            <small className="text-[16px] font-[500]">
              Reflex Plus Adult Cat Food Salmon
            </small>
            <div className="flex gap-2 ">
              <span className="text-[12px] text-[#667479]">
                Product: Dof food
              </span>
              <span className="text-[12px] text-[#667479]">
                Size: 385 gramms
              </span>
            </div>
            <small className="text-[16px] font-[500]">140.000 VND</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
