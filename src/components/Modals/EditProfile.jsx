import { useState } from 'react';
import { MdOutlineAddPhotoAlternate, MdEdit } from 'react-icons/md';
import ModalHeader from './ModalHeader';
import ModalWrapper from './ModalWrapper';
import img from '../../assets/profile_images/profile-cover.png';
import ProfileInput from '../ProfileComponents/ProfileInput';
import ProfileEditOption from '../ProfileComponents/ProfileEditOption';
import ModalButton from './ModalButton';
import CustomDropdown from './CustomDropdown';
import { day, genderData, month, years } from 'utils/helper';
import { useEditProfile } from 'pages/Profile/useEditProfile';
import ErrorMessage from './ErrorMessage';
import Spinner from 'components/Spinner';

const EditProfile = ({ onModalClose }) => {
  const [data, setData] = useState({});
  const [cover, setCover] = useState('');
  const [profile, setProfile] = useState('');
  const [bioValidate, setBioValidate] = useState(false);
  const { editStatus, editing } = useEditProfile();

  const handleCover = (event) => {
    setCover(URL.createObjectURL(event.target.files[0]));
  };

  const handleProfile = (event) => {
    setProfile(URL.createObjectURL(event.target.files[0]));
  };

  const handleChange = (e) => {
    setBioValidate(false);

    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bioChar = data.bio.split(' ');

    if (bioChar.length > 50) {
      return setBioValidate(true);
    }

    const formData = {
      user: {
        first_name: data.first_name,
        last_name: data.last_name,
      },
      address: {
        city: data.city,
      },
      bio: data.bio,
      occupation: data.occupation,
      date_of_birth: new Date(`${data.year} ${data.month} ${data.day}`),
      gender: data.gender,
    };

    editing(formData);
  };

  return (
    <ModalWrapper>
      <ModalHeader header='Edit profile' onModalClose={onModalClose} />

      <form className='edit_profile_container' onSubmit={handleSubmit}>
        <div className='edit_profile_images'>
          <div className='top_image'>
            <div className='top_image_container'>
              {cover ? (
                <img src={cover ? cover : img} alt='User Photo' />
              ) : (
                <div className='stalling'>
                  <MdOutlineAddPhotoAlternate className='stalling_photo_alt' />
                  <h2>Add cover photo</h2>
                </div>
              )}
            </div>

            <input
              type='file'
              id='cover'
              style={{ display: 'none' }}
              onChange={handleCover}
            />
            <label htmlFor='cover'>
              <MdEdit />
            </label>
          </div>

          <div className='bottom_image'>
            <div className='image'>
              {profile ? (
                <img src={profile} alt='' />
              ) : (
                <div className='stalling_image'></div>
              )}

              <input
                type='file'
                id='profile'
                style={{ display: 'none' }}
                onChange={handleProfile}
              />
              <label htmlFor='profile'>
                <MdEdit />
              </label>
            </div>

            <p>Add profile picture (you can select up to 5)</p>
          </div>
        </div>

        <div className='edit_profile_content'>
          <div>
            <ProfileInput
              placeholder='First name'
              name='first_name'
              onChange={handleChange}
            />
            <ProfileInput
              placeholder='Last name'
              name='last_name'
              onChange={handleChange}
            />
          </div>

          <div>
            <ProfileInput
              placeholder='Occupation'
              name='occupation'
              onChange={handleChange}
            />
            <ProfileInput
              placeholder='Current city'
              name='city'
              onChange={handleChange}
            />
          </div>

          <div>
            <ProfileEditOption header='Date of Birth'>
              <CustomDropdown
                stallValue='Day'
                menu={day}
                name='day'
                setData={setData}
              />
              <CustomDropdown
                stallValue='Month'
                menu={month}
                name='month'
                setData={setData}
              />
              <CustomDropdown
                stallValue='Year'
                menu={years}
                name='year'
                setData={setData}
              />
            </ProfileEditOption>

            <ProfileEditOption header='Gender'>
              <CustomDropdown
                stallValue='Gender'
                menu={genderData}
                name='gender'
                setData={setData}
              />
            </ProfileEditOption>
          </div>

          <div className='textarea_container'>
            <textarea
              placeholder='Bio'
              onChange={handleChange}
              name='bio'
            ></textarea>

            <span>Max 50 words</span>
          </div>
          {bioValidate && <ErrorMessage>Maximum of 50 words</ErrorMessage>}

          <ModalButton>
            {editStatus === 'pending' ? <Spinner /> : 'Save & Continue'}
          </ModalButton>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default EditProfile;
