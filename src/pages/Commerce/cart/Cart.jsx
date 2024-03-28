import Header from "components/newCommerce/typography/txtHeader";
import Description from "components/newCommerce/typography/txtDescription";
import { BsArrowLeft } from "react-icons/bs";
import { FaNotesMedical } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { Cartdata } from "components/newCommerce/data/cartData";
import { BiMessage } from "react-icons/bi";
import { useState, useContext } from "react";
import { ModalContext } from "Context/ModalContext";
import { CommerceModal } from "components/newCommerce/Modals/Reviewpopup";
import Overlay from "components/newCommerce/shared/maodalOverlay";
const Cartpage = () => {
  const { isOpen, openModal, setModalContent, fetchCartid } =
    useContext(ModalContext);
  const [counts, setCounts] = useState(Cartdata.map(() => 1));

  const countPlus = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index]++;
      return newCounts;
    });
  };

  const countMinus = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = Math.max(1, newCounts[index] - 1);
      return newCounts;
    });
  };
  const showCart = (payload, data, index) => {
    setModalContent(payload);
    !isOpen && openModal();
    let sum = counts[index];
    Cartdata[index].quantity = sum;
    // console.log(Cartdata[index]);
    // setthe params to the id of the currently clicked cart item
    fetchCartid(data.id);
  };
  return (
    <div className="pt-3 bg-[#f5f5f5] flex-[7] pb-2 cart_mobile">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <BsArrowLeft fontSize="20px" onClick={() => window.history.back()} />
          <Header title="Cart" />
        </div>

        {/* order-history */}
        <button
          className="flex items-center bg-white py-2
        px-3 text-[#000000] gap-4 rounded-md"
        >
          <div className="flex items-center gap-2">
            <FaNotesMedical fontSize="14px" />
            <span className="text-[14px] font-medium">order history</span>
          </div>
          <FaGreaterThan
            className="font-light"
            fontSize="10px"
            fill="#000000"
          />
        </button>
      </div>

      {/* cart-board */}
      <div className="flex flex-col gap-2 mt-4 cart_item_mobile">
        {Cartdata.map((cart, index) => {
          return (
            <div
              className="bg-[#ffff] py-3 px-3 flex justify-between flex-wrap items-center rounded-xl gap-y-[1.3rem]"
              key={cart.id}
            >
              <div className="flex flex-row gap-3">
                <div className="w-[120px] h-[70px]">
                  <img
                    className="w-full h-full rounded-lg"
                    src={cart.product_img}
                    alt="cart-product"
                  />
                </div>
                <div className="flex flex-col justify-between items-start">
                  <Header
                    title={cart.product_name}
                    fw="500"
                    fz="18px"
                    cl="black"
                  />
                  <Description
                    title={cart.product_price}
                    fw="500"
                    fz="18px"
                    cl="black"
                  />
                </div>
              </div>

              {/* button-count-increment*/}
              <div>
                <button className="bg-[#f5f5f5] px-2 py-0 rounded-sm flex gap-x-2 justify-center items-center text-12px">
                  <span
                    className="text-[15px] "
                    onClick={() => {
                      countMinus(index);
                    }}
                  >
                    -
                  </span>
                  <span>{counts[index]}</span>
                  <span
                    className="text-[15px]"
                    onClick={() => {
                      countPlus(index);
                    }}
                  >
                    +
                  </span>
                </button>
              </div>

              {/* remove-item-button */}
              <button className="flex items-center justify-center gap-x-3 px-2 py-2 bg-[#ffff] text-[13px] text-[red] rounded-lg">
                <FiDelete fontSize="20px" stroke="red" />
                <span className="text-center">Remove</span>
              </button>

              {/* message-seller-button */}
              <button
                className="flex items-center justify-center gap-x-3 px-2 py-2 bg-[#4f0da3] text-[#ffff] text-[13px] rounded-lg"
                onClick={() => showCart("checkout", cart, index)}
              >
                <BiMessage fontSize="20px" stroke="#ffff" />
                <span className="text-center">Message seller</span>
              </button>
              <CommerceModal />
              <Overlay />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cartpage;
