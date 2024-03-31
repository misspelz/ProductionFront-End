import { ModalContext } from "Context/ModalContext";
import { useContext } from "react";
import DetailsForm from "./Carts/detailsField";
import AddressSelect from "./Carts/addressSelect";
import Confirmcheckout from "./Carts/Confirmcheckout";
import OrderCompleted from "./Carts/orderSucess";
const Checkoutcontent = () => {
  const { cartContent } = useContext(ModalContext);

  return (
    <div className="bg-[#f5f5f5] pt-3 pb-5 px-4">
      {/* display current based on clicked */}
      {cartContent === "buyerDetails" && <DetailsForm />}
      {cartContent === "addressSelection" && <AddressSelect />}
      {cartContent === "checkoutconfirm" && <Confirmcheckout />}
      {cartContent === "ordercompleted" && <OrderCompleted />}
    </div>
  );
};

export default Checkoutcontent;
