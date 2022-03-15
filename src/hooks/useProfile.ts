import { useToast } from 'components/Toast';
import { useMutation } from 'react-query';
import api from 'utils/api';

type UpdateUserDto = {
   name: string;
   email: string;
   password: string;
   profileImage: string;
};

export const useUpdateProfile = ({ userId }: { userId: string }) => {
   const toast = useToast();
   return useMutation(
      (values: UpdateUserDto) => {
         return api.patch(`users/${userId}`, values);
      },
      {
         onSuccess: () => {
            toast.success('Success');
         },
         onError: () => {
            toast.error('Incorrect password');
         }
      }
   );
};

export const useDisableAccount = ({ userId }: { userId: string }) => {
   const toast = useToast();
   return useMutation(
      (password: string) => {
         return api.post(`users/disable/${userId}`, {
            password
         });
      },
      {
         onSuccess: () => {
            toast.success('Success');
         },
         onError: () => {
            toast.error('Incorrect password');
         }
      }
   );
};
