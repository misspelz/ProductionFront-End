import { useQuery } from '@tanstack/react-query';
import { getProfileData } from 'services/profileRequest';

export const useProfileDetails = () => {
  const { status: profileStatus, data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfileData,
  });

  return { profileStatus, profile };
};
