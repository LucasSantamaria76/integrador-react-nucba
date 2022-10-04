<<<<<<< HEAD
import { ImgContainer, InfoContent, InfoWrapper, ProfileWrapper } from '../Styled-Components';
import backgroundImage from '../../../assets/backgroundImage.jpg';

export const UserInfo = ({ name, photoURL, email, createdAt }) => {
  return (
    <InfoWrapper backgroundImage={backgroundImage}>
      <ProfileWrapper>
        <h2>Modificar perfil</h2>
        <InfoContent>
          <ImgContainer img={photoURL} />
          <div>
            <h2>{name}</h2>
            <p>Correo: {email}</p>
            <p>Fecha de alta: {createdAt}</p>
          </div>
        </InfoContent>
      </ProfileWrapper>
=======
import { ImgContainer, InfoContent, InfoWrapper } from '../Styled-Components';

export const UserInfo = ({ name, photoURL, email, createdAt }) => {
  return (
    <InfoWrapper>
      <h2>Modificar perfil</h2>
      <InfoContent>
        <ImgContainer img={photoURL} />
        <div>
          <h2>{name}</h2>
          <p>Correo: {email}</p>
          <p>Fecha de alta: {createdAt}</p>
        </div>
      </InfoContent>
>>>>>>> refs/remotes/origin/master
    </InfoWrapper>
  );
};
