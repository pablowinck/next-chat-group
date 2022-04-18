import { useToast } from 'components/Toast';
import { useUserContext } from 'contexts/UserContext';
import { useCallback, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { useMutation } from 'react-query';
import api from 'utils/api';
import { Container, Loading } from './styles';

const ChangeAvatar: React.FC = () => {
   const { user, setUser } = useUserContext();
   const toast = useToast();
   const updateImage = useMutation(
      ({ file }: { file: FileWithPath }) => {
         const body = new FormData();
         body.append('file', file);
         return api.patch(`users/image/${user.id}`, body);
      },
      {
         onError: () => toast.error('server error, try again in five minutes'),
         onSuccess: (res) => {
            setUser({ ...user, profileImage: res.data.profileImage });
            toast.success('image changed successfully')
         }
      }
   );

   const onDrop = useCallback(
      (acceptedFiles) => {
         const file = acceptedFiles[0];
         const maxSize = 1024 * 1024; // 1MB
         if (!file) return;
         if (file.size > maxSize) {
            toast.error('File size is too large. Max size is 1MB');
            return;
         }

         updateImage.mutate({ file });
      },
      [updateImage, toast]
   );
   const { getRootProps, getInputProps, isDragActive, isDragReject } =
      useDropzone({
         onDrop,
         accept: 'image/jpeg,image/png',
         maxFiles: 1
      });
   return (
      <Container
         src={user.profileImage}
         {...getRootProps()}
         isDragActive={isDragActive}
         isDragReject={isDragReject}
         loading={updateImage.isLoading}
      >
         <input {...getInputProps()} />
         {!user.profileImage &&
            (isDragReject ? (
               <p>Wrong file type</p>
            ) : isDragActive ? (
               <p>Just drop here</p>
            ) : (
               <p>
                  <b>Drag and drop</b> or click here
               </p>
            ))}
         {updateImage.isLoading && <Loading src="/svg/eclipse.svg" />}
      </Container>
   );
};

export default ChangeAvatar;
