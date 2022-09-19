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
    </InfoWrapper>
  );
};
