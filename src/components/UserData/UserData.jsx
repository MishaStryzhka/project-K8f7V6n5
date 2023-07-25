import {
  Container,
  Wrap,
  Title,
  InfoItem,
  StyledBtnEdit,
  StyledBtn,
  WrapFoto,
  Avatar,
  WrapInfo,
  TextTitle,
  Text,
} from './UserData.styled';
import photoDefault from '../../images/userPageImages/photoDefault.svg';
import { useState } from 'react';
import { UserForm } from 'components/UserForm/UserForm';
import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';
import { useAuth } from 'hooks';

export const UserData = () => {
	const { user } = useAuth();
  const [isEditUser, setisEditUser] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const isEdit = user => {
    setisEditUser(true);
    return user;
  };
  const isCloceEdit = () => {
    setisEditUser(false);
    //  setBigImg('');
  };
  const isOpenModal = user => {
    setIsModal(true);
    return user;
  };
  const isCloseModal = () => {
    setIsModal(false);
    //  setBigImg('');
  };

  return (
    <Container>
      <div style={{ position: 'relative' }}>
        <Title>My information:</Title>
        <StyledBtnEdit
          icon={'IconEdit'}
          transparent={true}
          onClick={isEdit}
          isEditUser={isEditUser}
        />
      </div>
      {isEditUser ? (
        <UserForm user={user} close={isCloceEdit} />
      ) : (
        <Wrap>
          <WrapFoto>
            <Avatar>
              <img
                src={user.avatar ? user.avatar : photoDefault}
                alt="Avatar"
              />
            </Avatar>
          </WrapFoto>
          <WrapInfo>
            <InfoItem>
              <TextTitle>Name:</TextTitle>
              <Text>{user.name}</Text>
            </InfoItem>
            <InfoItem>
              <TextTitle>Email:</TextTitle>
              <Text>{user.email}</Text>
            </InfoItem>
            <InfoItem>
              <TextTitle>Birthday:</TextTitle>
              <Text>{user.birthday ? user.birthday : '00.00.0000'}</Text>
            </InfoItem>
            <InfoItem>
              <TextTitle>Phone:</TextTitle>
              <Text>{user.phone ? user.phone : '+380000000000'}</Text>
            </InfoItem>
            <InfoItem>
              <TextTitle>City:</TextTitle>
              <Text>{user.city ? user.city : 'no info'}</Text>
            </InfoItem>
            <StyledBtn
              icon={'Iconlogout'}
              text={'Log Out'}
              transparent={true}
              onClick={isOpenModal}
            />
            {isModal && (
              <ModalApproveAction close={isCloseModal} id={user.id} />
            )}
          </WrapInfo>
        </Wrap>
      )}
    </Container>
  );
};