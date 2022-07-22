import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #B2A4FF;
  // color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over Rs. 500</Container>;
};

export default Announcement;