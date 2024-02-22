import { useModal } from 'Hooks/useModal';
import empty from '../../assets/profile_images/manageBusinessEmpty.png';
import ModalContainer from 'components/Modals/ModalContainer';
import EditBusinessProfile from 'components/BusinessProfileComponents/EditBusinessProfile';

const ManageBusinessEmpty = () => {
  const { modal, setModal } = useModal();

  const handleClick = (e) => {
    const type = e.target.attributes.typeof.nodeValue;

    setModal((prev) => ({
      ...prev,
      [type]: true,
    }));
  };

  return (
    <>
      <div className='empty_business'>
        <img src={empty} alt='Empty' />

        <p>No business yet!</p>

        <button onClick={handleClick} typeof='setting'>
          + Create a Business acccount now
        </button>
      </div>

      {modal.setting && (
        <ModalContainer type='setting'>
          <EditBusinessProfile />
        </ModalContainer>
      )}
    </>
  );
};

export default ManageBusinessEmpty;
