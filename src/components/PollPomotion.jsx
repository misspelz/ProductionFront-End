import React from 'react';

const PricingComponent = ({ title, price, duration }) => {
  return (
    <div className="border rounded-[5px] w-full">
      <div className="flex justify-between mt-[1.2rem]">
        <p className="ml-4">{title}</p>
        <p className="py-1 px-3 bg-primaryColor text-white rounded-l-[5px]">
          {price}
        </p>
      </div>
      <div className="flex justify-between px-3 items-center w-full">
        <div className="flex items-center">
          <p className="font-bold">{duration}</p>
        </div>
        <div className="flex justify-end">
          <input
            type="radio"
            name="standard"
            id="standard"
            className="mb-[1rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
