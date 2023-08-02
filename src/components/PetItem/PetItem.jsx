import { useState } from 'react';
import {
  InfoItem,
  StyledBtn,
  WrapFoto,
  Avatar,
  WrapInfo,
  TextTitle,
  Text,
} from './PetItem.styled';
import ModalDeletePet from 'components/ModalDeletePet/ModalDeletePet';
import dateFormat from 'dateformat';
import photoPetsDefault from '../../images/userPageImages/photoPetsDefault.svg';

const PetItem = ({pet}) => {
	const [isModal, setIsModal] = useState(false);
	 	const isOpenModal = () => {
      // console.log();
      setIsModal(true);
    };
    const isCloseModal = () => {
      setIsModal(false);
    };
	return (
		<>
	    <WrapFoto>
                  <Avatar>
                    <img
                      src={!pet.photoUrl ? photoPetsDefault : pet.photoUrl}
                      alt="Avatar"
                    />
                  </Avatar>
                </WrapFoto>
                <WrapInfo>
                  <StyledBtn
                    icon={'IconTrash2'}
                    transparent={true}
                    onClick={isOpenModal}
                  />
                  {isModal && (
                    <ModalDeletePet close={isCloseModal} id={pet._id} />
                  )}
                  <InfoItem>
                    <Text>
                      <TextTitle>Name: </TextTitle>
                      {pet.name}
                    </Text>
                  </InfoItem>
                  <InfoItem>
                    <Text>
                      <TextTitle>Date of birth: </TextTitle>
                      {pet.birthday
                        ? dateFormat(pet.birthday, 'dd.mm.yyyy')
                        : ''}
                    </Text>
                  </InfoItem>
                  <InfoItem>
                    <Text>
                      <TextTitle>Type: </TextTitle>
                      {pet.type}
                    </Text>
                  </InfoItem>
                  <InfoItem>
                    <Text>
                      <TextTitle>Comments: </TextTitle>
                      {pet.comments}
                    </Text>
                  </InfoItem>
			</WrapInfo>
			</>
  );
};

export default PetItem;