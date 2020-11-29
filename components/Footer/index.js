import styled from 'styled-components';

const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0rem;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <h2>
        This website has no affiliation with Google. YouTube is a trademark of
        Google LLC.
      </h2>
    </FooterDiv>
  );
};

export default Footer;
