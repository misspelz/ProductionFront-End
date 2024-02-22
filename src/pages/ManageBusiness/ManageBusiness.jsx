import './style.css';
import { useNavigate } from 'react-router-dom';

import MainLayout from '../../Layout/MainLayout';
import ProfileAds from '../../components/ProfileComponents/ProfileAds';
import ProfileStickersAndMessages from '../../components/ProfileComponents/ProfileStickersAndMessages';
import ManageBusinessEmpty from '../../components/ManageBusinessComponents/ManageBusinessEmpty';
import ManageBusinessLists from '../../components/ManageBusinessComponents/ManageBusinessLists';
import plus from '../../assets/profile_images/plus.png';
import ModalHeader from '../../components/Modals/ModalHeader';
import { useModal } from 'Hooks/useModal';
import EditBusinessProfile from 'components/BusinessProfileComponents/EditBusinessProfile';
import ModalContainer from 'components/Modals/ModalContainer';

const ManageBusiness = () => {
  const { modal, setModal } = useModal();
  const navigate = useNavigate();
  const manageBusiness = [4];

  const handleClick = (e) => {
    const type = e.target.attributes.typeof.nodeValue;

    setModal((prev) => ({
      ...prev,
      [type]: true,
    }));
  };

  return (
    <div className='home-container'>
      <MainLayout>
        <div className='profile_container'>
          <div className='manage_business'>
            <ModalHeader
              header='Manage Businesses'
              onModalClose={() => navigate(-1)}
            />

            <div className='bottom_box'>
              {!manageBusiness.length ? (
                <ManageBusinessEmpty />
              ) : (
                <div className='business_lists'>
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((list) => (
                    <ManageBusinessLists key={list + 1} />
                  ))}
                </div>
              )}
            </div>

            {manageBusiness.length > 0 && (
              <>
                <div
                  className='add_new_bussiness_btn'
                  onClick={handleClick}
                  typeof='setting'
                >
                  <img src={plus} alt='Plus' />
                </div>

                {modal.setting && (
                  <ModalContainer type='setting'>
                    <EditBusinessProfile />
                  </ModalContainer>
                )}
              </>
            )}
          </div>

          <div className='profile_ads'>
            <ProfileAds />
          </div>

          <div className='profile_users'>
            <ProfileStickersAndMessages />
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default ManageBusiness;
