import {
  Container,
  WrapItem,
  Title,
  InfoItem,
  StyledBtnPlus,
  StyledBtn,
  WrapFoto,
  Avatar,
  WrapInfo,
  TextTitle,
  Text,
} from './PetsData.styled';
import photoPetsDefault from '../../images/userPageImages/photoPetsDefault.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPets } from 'redux/pets/operation';
import { usePets } from '../../hooks';
// import { useAuth } from 'hooks';
// import Btn from 'components/Btn/Btn';

export const PetsData = () => {
  const dispatch = useDispatch();
  const { pets } = usePets();

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);
  const navigate = useNavigate();
  const navAddPet = () => {
    navigate('/add-pet');
  };

  return (
    <Container>
      <Title>My pets:</Title>
      <StyledBtnPlus icon={'IconPlus'} text={'Add Pet'} onClick={navAddPet} />
      {pets.length === 0 ? (
        <p>You don't have  pets</p>
      ) : (
        <ul>
          {pets.map(pet => {
            return (
              <WrapItem key={pet.name}>
                <WrapFoto>
                  <Avatar>
                    <img
                      src={!pet.avatar ? photoPetsDefault : pet.avatar}
                      alt="Avatar"
                    />
                  </Avatar>
                </WrapFoto>
                <WrapInfo>
                  <StyledBtn icon={'IconTrash2'} transparent={true} />
                  <InfoItem>
                    <Text>
                      <TextTitle>Name: </TextTitle>
                      {pet.name}
                    </Text>
                  </InfoItem>
                  <InfoItem>
                    <Text>
                      <TextTitle>Date of birth: </TextTitle>
                      {pet.birthday}
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
              </WrapItem>
            );
          })}
        </ul>
      )}
    </Container>
  );
};
