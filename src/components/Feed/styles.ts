import styled from 'styled-components';
import { LogoWhite, Document, Folder, Upload } from '../../assets/Icons';

export const Container = styled.div`
  width: 32rem;
  display:  flex;
  flex-direction: column;

  padding: 4rem 10rem 4rem 4rem;
  background: var(--dark-blue);
  border-radius: 0.9rem;
  border-top-right-radius: 9.9rem;

  @media only screen and (min-width: 1440px) {
    width: 42rem;
    padding: 6rem 16.4rem 6rem 5.4rem;
  }
`;

export const LogoContainer = styled.div``;
export const Logo = styled(LogoWhite)``;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const IconContainer = styled.div`
  width: 5rem;
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.9rem;
  background: var(--very-dark-blue);

  @media only screen and (min-width: 1440px) {
    width: 5.4rem;
    height: 5.4rem;
  }
`;

export const DocumentIcon = styled(Document)``;
export const FolderIcon = styled(Folder)``;
export const UploadIcon = styled(Upload)``;