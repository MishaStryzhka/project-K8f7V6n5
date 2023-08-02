import React, { useState } from 'react';

import {
  Header,
  NotiveItem,
  Status,
  Information,
  InformationItem,
  Favorite,
  Top,
  Footer,
  BtnStyled,
  ModalHeader,
  ModalPhoto,
  ModalInfo,
  ModalPersonality,
  ModalPersonalityField,
  ModalPersonalityKey,
  ModalPersonalityValue,
  ModalPersonalityLink,
  ModalComments,
  ModalButtons,
  BtnStyledWithIcon,
  ModalStatus,
} from './NoticesCategoriesItem.styled';
import Modal from 'shared/modal/NoticeItemModal/NoticeItemModal';
import ListIcons from 'images/icons/ListIcons';
import { Description } from 'components/NewsList/NewsList.styled';
import { addFavoriteNotices } from 'services';
import { Notify } from 'notiflix';

const NoticesCategoriesItem = ({ animal, setNoticesList }) => {
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  // console.log('animal', animal);

  if (2 === 1) {
    console.log('error', error);
  } //це щоб лінтер не ругався

  const handleClose = () => setIsOpen(false);

  const addToFavorite = id => {
    addFavoriteNotices(id)
      .then(res => {
        console.log('res', res);
        if (res.status === 204) {
          Notify.success('Notices ad removed from favorites', {
            timeout: 4000,
          });
          setNoticesList(pref => pref.filter(item => item._id !== id));
        }
        if (res.status === 200) {
          Notify.success('The notices has been added to favorites', {
            timeout: 4000,
          });
          // setNoticesList(pref => pref.filter(item => item._id !== id));
        }
        setIsOpen(false);
      })
      .catch(err => {
        console.log('err', err);
        setError(err);
        Notify.failure(err.response.data.message, {
          timeout: 4000,
        });
      });

    console.log(`id is ${id}`);
  };

  const goToContact = () => {
    console.log(`go to ${animal.contactLink}`);
  };

  const acceptColor = '#54ADFF';

  // TODO it must be replaced with a backend data
  // const mockData = {
  //   status: 'In good hands',
  //   breed: 'Pomeranian',
  //   title:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eveniet!',
  //   name: 'Rich',
  //   birthday: '21.09.2020',
  //   location: 'Lviv',
  //   gender: 'male',
  //   email: 'user@gmail.com',
  //   phone: '+380971234567',
  //   comments: `Comments: Rich would be the perfect addition
  //   to an active family that loves to play and go on walks.
  //    I bet he would love having a doggy playmate too!`,
  //   contactLink: 'https://google.com',
  // };

  return (
    <NotiveItem>
      <Header img={animal}>
        <Top>
          <Status>{animal.status}</Status>
          <Favorite onClick={() => addToFavorite(animal._id)}>
            {ListIcons(null, 'IconHeart')}
          </Favorite>
        </Top>
        <Information>
          <InformationItem>
            {ListIcons(null, 'IconLocation1')}
            <span>{animal.place}</span>
          </InformationItem>
          <InformationItem>
            {ListIcons(null, 'IconClock')}
            <span>
              {animal.age} {animal.age > 1 ? 'years' : 'year'}
            </span>
          </InformationItem>
          <InformationItem>
            {ListIcons(null, animal.sex !== 'male' ? 'IconFemale' : 'IconMale')}
            <span>{animal.sex}</span>
          </InformationItem>
        </Information>
      </Header>
      <Footer>
        <Description>{animal.title}</Description>
        <BtnStyled onClick={() => setIsOpen(true)} color={acceptColor}>
          Learn more
        </BtnStyled>
      </Footer>

      <Modal isOpen={isOpen} handleClose={handleClose}>
        <ModalHeader>
          <ModalPhoto>
            <ModalStatus>{animal.status}</ModalStatus>
            <img src={animal.photoUrl} alt={animal.name || 'animal'} />
          </ModalPhoto>
          <ModalInfo>
            <h2>{animal.title}</h2>
            <ModalPersonality>
              <ModalPersonalityField>
                <ModalPersonalityKey>Name:</ModalPersonalityKey>
                <ModalPersonalityValue>{animal.name}</ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>Birthday:</ModalPersonalityKey>
                <ModalPersonalityValue>{animal.birthday}</ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>Breed:</ModalPersonalityKey>
                <ModalPersonalityValue>{animal.breed}</ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>Location:</ModalPersonalityKey>
                <ModalPersonalityValue>{animal.location}</ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>The sex:</ModalPersonalityKey>
                <ModalPersonalityValue>{animal.gender}</ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>Email:</ModalPersonalityKey>
                <ModalPersonalityValue>
                  <ModalPersonalityLink href={`mailto:${animal.email}`}>
                    {animal.email}
                  </ModalPersonalityLink>
                </ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>Phone:</ModalPersonalityKey>
                <ModalPersonalityValue>
                  <ModalPersonalityLink href={`mailto:${animal.phone}`}>
                    {animal.phone}
                  </ModalPersonalityLink>
                </ModalPersonalityValue>
              </ModalPersonalityField>
            </ModalPersonality>
          </ModalInfo>
        </ModalHeader>
        <div className="modal-footer">
          <ModalComments>
            <b>Comments:</b> {animal.comments}
          </ModalComments>
        </div>
        <ModalButtons>
          <BtnStyledWithIcon
            onClick={() => addToFavorite(animal._id)}
            bg={acceptColor}
          >
            Add to {ListIcons('#fff', 'IconHeart')}
          </BtnStyledWithIcon>
          <BtnStyled onClick={() => goToContact(true)} color={acceptColor}>
            Contact
          </BtnStyled>
        </ModalButtons>
      </Modal>
    </NotiveItem>
  );
};

export default NoticesCategoriesItem;