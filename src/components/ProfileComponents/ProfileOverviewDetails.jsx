import { useState } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import cover from '../../assets/profile_images/cover-photo.jpeg';
import mainProfile from '../../assets/profile_images/main-profile.webp';

const ProfileOverviewDetails = ({ data }) => {
  const [profileState, setProfileState] = useState(false);

  const handleProfileImage = () => {
    setProfileState(true);
  };

  const {
    cover_image,
    profile_picture,
    user,
    work,
    stickers_count,
    sticking_count,
    address,
  } = data;

  return (
    <div
      style={{
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      {profileState && (
        <div className='user_profile_image'>
          <div className='cancel_btn'>
            <button onClick={() => setProfileState(false)}>
              <IoArrowBackOutline className='arrow_back' />
            </button>
          </div>

          <div className='user_image_container'>
            <img
              src={profile_picture ? profile_picture : mainProfile}
              alt='Profile Image'
            />
          </div>
        </div>
      )}

      <div className='cover_image'>
        <img src={cover_image ? cover_image : cover} alt='Cover Image' />
      </div>

      <div className='profile_details'>
        <img
          src={profile_picture ? profile_picture : mainProfile}
          alt='Profile Image'
          onClick={handleProfileImage}
        />

        <h1>Charlotte Caria Faith</h1>

        <div className='location_expertise'>
          <span>{work ? work : 'Unemployed'}</span>
          <span>{address.city ? address.city : 'Lagos, Nigeria'}</span>
        </div>

        <div className='profile_details_btns'>
          <div className='stickers'>
            <span>Stickers</span>
            <span>{stickers_count}</span>
          </div>

          <div className='stickers'>
            <span>Sticking</span>
            <span>{sticking_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverviewDetails;
