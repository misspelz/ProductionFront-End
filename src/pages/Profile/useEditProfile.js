import { useMutation } from '@tanstack/react-query';
import { editProfile } from 'services/profileRequest';

export const useEditProfile = () => {
  const { status: editStatus, mutate: editing } = useMutation({
    mutationFn: editProfile,

    onSuccess: (response) => {
      console.log(response);
    },
  });

  return { editStatus, editing };
};
