import { useState } from "react";
import { useCreateGadget } from "pages/Profile/useCreateGadget";

import ModalWrapper from "./ModalWrapper";
import ModalHeader from "./ModalHeader";
import ModalButton from "./ModalButton";
import CustomDropdown from "./CustomDropdown";
import Spinner from "components/Spinner";

const inputStyle =
  "rounded-[8px] border border-[#acacaca9] py-[10px] text-[14px] !text-[#000] placeholder:text-[#000] placeholder:text-[14px]";

const NewIMEISerialModal = ({ type, title, onModalClose }) => {
  const [data, setData] = useState({});
  const { gadgetStatus, createGadget } = useCreateGadget();

  const handleChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createGadget(data);
  };

  return (
    <ModalWrapper>
      <ModalHeader header={title} onModalClose={onModalClose} />

      <div className="px-[15px] h-[90vh] overflow-y-auto mb-0 py-[10px] lg:px-[10px] lg:h-[60vh] overflow-auto lg:mb-[1.5rem]">
        <form
          className="flex flex-col gap-[30px] mt-[5rem]"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Preferred name"
            className={inputStyle}
            onChange={handleChange}
            name="phone_name"
          />

          <input
            type="text"
            placeholder={`${type.toUpperCase()} Number`}
            className={inputStyle}
            onChange={handleChange}
            name="id_number"
          />

          <CustomDropdown
            stallValue={"Select category"}
            menu={[
              { label: "Imei", value: "imei" },
              { label: "Serial", value: "serial_number" },
            ]}
            setData={setData}
            name="category"
          />

          <ModalButton>
            {gadgetStatus === "pending" ? <Spinner /> : "Save"}
          </ModalButton>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default NewIMEISerialModal;
