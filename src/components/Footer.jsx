import styled from "styled-components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import EmailIcon from "@mui/icons-material/Email";

const Container = styled.div`
  display: flex;
  // border: 1px solid black;
  background-color: #ffdeb4;
  // color: white;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  } ;
`;

const Left = styled.div`
  flex: 1;
  padding: 20px;
`;

const Logo = styled.h2``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
  // border: 1px solid red;
`;
const SocialIcon = styled.div`
  // border: 1px solid green;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    justify-content: flex-start;
  } ;
`;
const Wrapper = styled.div``;

const Title = styled.div`
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 20px;
`;
const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
`;
const ListItem = styled.li`
  margin-bottom: 8px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SFH.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          nesciunt facere saepe aperiam, amet animi debitis iure velit expedita
          perspiciatis perferendis, molestiae pariatur consequatur quisquam
          distinctio dignissimos, ipsa eligendi obcaecati.
        </Desc>
        <SocialContainer>
          <SocialIcon color="293462">
            <FacebookOutlinedIcon />
          </SocialIcon>
          <SocialIcon color="D61C4E">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="1F4690">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="EB1D36">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Wrapper>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Wrapper>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: "10px" }} /> Great Learning
        </ContactItem>
        <ContactItem>
          <ContactPhoneIcon style={{ marginRight: "10px" }} /> +91 01234 56789
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: "10px" }} /> contact@suraj.dev
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
