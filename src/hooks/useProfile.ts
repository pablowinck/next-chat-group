import { useMutation } from 'react-query';
import api from 'utils/api';

type UpdateUserDto = {
   name: string;
   email: string;
   password: string;
   profileImage: string;
};

export const useUpdateProfile = ({ userId }: { userId: string }) => {
   return useMutation((values: UpdateUserDto) => {
      return api.patch(`users/${userId}`, values);
   });
};

export const useDisableAccount = ({ userId }: { userId: string }) => {
   return useMutation((password: string) => {
      return api.post(`users/disable/${userId}`, {
         password
      });
   });
};
