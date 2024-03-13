import "./style.css";
import { useNavigate } from "react-router-dom";

import MainLayout from "../../Layout/MainLayout";
import ProfileAds from "../../components/ProfileComponents/ProfileAds";
import ProfileStickersAndMessages from "../../components/ProfileComponents/ProfileStickersAndMessages";
import ManageBusinessEmpty from "../../components/ManageBusinessComponents/ManageBusinessEmpty";
import ManageBusinessLists from "../../components/ManageBusinessComponents/ManageBusinessLists";
import plus from "../../assets/profile_images/plus.png";
import ModalHeader from "../../components/Modals/ModalHeader";
import { useModal } from "Hooks/useModal";
import EditBusinessProfile from "components/BusinessProfileComponents/EditBusinessProfile";
import ModalContainer from "components/Modals/ModalContainer";
import { useCurrentBusinessLists } from "pages/BusinessProfile/useCurrentBusinessLists";
import { useOpenModal } from "Hooks/useOpenModal";
import { ManageBusinessSkeleton } from "components/ManageBusinessSkeleton";

const ManageBusiness = () => {
  const navigate = useNavigate();

  const { modal } = useModal();
  const { handleClick } = useOpenModal();

  const { businessesStatus, businesses } = useCurrentBusinessLists();

  const manageBusiness = [4];

  return (
    <div className="profile_container">
      <div className="manage_business">
        <ModalHeader
          header="Manage Businesses"
          onModalClose={() => navigate(-1)}
        />

        <div className="bottom_box">
          {businessesStatus === "pending" ? (
            Array.from({ length: 20 }, (_, i) => i + 1).map((ske) => (
              <ManageBusinessSkeleton key={ske} />
            ))
          ) : businessesStatus === "error" ? (
            "Please check your internet "
          ) : businesses.length === 0 ? (
            <ManageBusinessEmpty />
          ) : (
            businesses.map((business, i) => <ManageBusinessLists key={i + 1} />)
          )}
        </div>

        {manageBusiness.length > 0 && (
          <>
            <div
              className="add_new_bussiness_btn clickModalOpen"
              onClick={handleClick}
              data-modal="setting"
            >
              <img src={plus} alt="Plus" />
            </div>

            {modal.setting && (
              <ModalContainer type="setting">
                <EditBusinessProfile />
              </ModalContainer>
            )}
          </>
        )}
      </div>

      <div className="profile_ads">
        <ProfileAds />
      </div>

      <div className="profile_users">
        <ProfileStickersAndMessages />
      </div>
    </div>
  );
};

export default ManageBusiness;
