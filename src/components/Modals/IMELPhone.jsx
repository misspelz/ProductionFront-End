import { useModal } from "Hooks/useModal";
import { useOpenModal } from "Hooks/useOpenModal";
import Spinner from "components/Spinner";
import { useDeletePhone } from "pages/Profile/useDeletePhone";
import ModalContainer from "./ModalContainer";
import NewIMEISerialModal from "./NewIMEISerialModal";

const buttonStyle =
  "w-full h-[35px] p-[10px] gap-[10px] flex-1 rounded-[10px] text-center border-none text-[#fff] text-[14px] font-light transition-all duration-300 ease-in-out";

const IMELPhone = ({ name, id_number, id, type, category }) => {
  const { modal } = useModal();
  const { handleClick } = useOpenModal();

  const { gadgetStatus, deleteGadget, deleteGadgetError } = useDeletePhone();

  const handleDelete = () => {
    deleteGadget(id);
  };

  return (
    <>
      <div className="flex p-[10px] flex-col gap-[10px] rounded-[10px] border border-[#d0d5dd]">
        <div className="py-[8px] px-[14px] rounded-[7px] border border-[#d0d5dd]">
          <h4 className="text-[14px] font-normal m-0 text-gray-950">{name}</h4>
          <p className="overflow-hidden text-[14px] font-thin p-0 text-left text-ellipsis w-[70%]">
            {id_number}
          </p>
        </div>

        <div className="flex gap-[10px]">
          <button
            className={buttonStyle + " bg-[#f00] hover:bg-[#d60808]"}
            onClick={handleDelete}
          >
            {gadgetStatus === "pending" ? <Spinner /> : "Delete"}
          </button>
          <button
            className={
              buttonStyle + " bg-[#4f0da3] hover:bg-[#3c0a7e] clickModalOpen"
            }
            id="btn"
            data-modal="input_edit"
            onClick={handleClick}
          >
            Edit
          </button>
        </div>
      </div>

      {modal.input_edit && (
        <ModalContainer type="input_edit">
          <NewIMEISerialModal
            title={`Edit ${name}`}
            type={type === "Imei" ? "Imei" : type}
            edit="true"
            name={name}
            id_number={id_number}
            category={category}
            id={id}
          />
        </ModalContainer>
      )}
    </>
  );
};

export default IMELPhone;
