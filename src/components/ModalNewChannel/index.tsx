import Overlay from 'components/Overlay';
import { Children, cloneElement, FC, useState } from 'react';
import BasicInfo from './BasicInfo';
import ChangeAvatar from './ChangeAvatar';

const ModalNewChannel: FC = ({ children }) => {
   const [whoOpen, setWhoOpen] = useState({
      basicInfo: false,
      changeAvatar: false
   });

   const handleFirstOpen = (state: boolean): void => {
      setWhoOpen((prev) => ({ ...prev, basicInfo: state }));
   };

   const handleCloseAll = () => {
      setWhoOpen({
         basicInfo: false,
         changeAvatar: false
      });
   };

   const handleCloseBasicInfo = () => {
      setWhoOpen((prev) => ({ ...prev, basicInfo: false }));
   };

   const handleCloseChangeAvatar = () => {
      setWhoOpen((prev) => ({ ...prev, changeAvatar: false }));
   };

   return (
      <>
         <ModalNewChannelTrigger onOpenChange={handleFirstOpen}>
            {children}
         </ModalNewChannelTrigger>
         {(whoOpen.basicInfo || whoOpen.changeAvatar) && (
            <Overlay onClick={handleCloseAll} />
         )}
         {open && whoOpen.basicInfo && (
            <BasicInfo close={handleCloseBasicInfo} setWhoOpen={setWhoOpen} />
         )}
         {open && whoOpen.changeAvatar && (
            <ChangeAvatar close={handleCloseChangeAvatar} />
         )}
      </>
   );
};

type ModalNewChannelTriggerProps = {
   onOpenChange: (open: boolean) => void;
};

const ModalNewChannelTrigger: React.FC<ModalNewChannelTriggerProps> = ({
   children,
   onOpenChange
}) => {
   const child = Children.only(children) as React.ReactElement;

   return cloneElement(child, {
      onClick: () => onOpenChange(true),
      ...child.props
   });
};

export default ModalNewChannel;
