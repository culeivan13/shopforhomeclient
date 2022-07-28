import styled from "styled-components";
import { useState } from "react";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/3457292/pexels-photo-3457292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  @media only screen and (max-width: 480px) {
    width: 90%;
  } ;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 20%;
  border: 2px solid black;
  padding: 10px;
  background-color: white;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  @media only screen and (max-width: 480px) {
    width: 40%;
  } ;
`;

const Message = styled.div`
  font-weight: bold;
  color: red;
`;

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const registerUser = async () => {
      try {
        const mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (
          firstname === "" ||
          lastname === "" ||
          email === "" ||
          contact === "" ||
          address === "" ||
          password === ""
        ) {
          setMessage(
            "One or more field is left empty. Please provide all the details"
          );
          return;
        } else if (password.length < 6) {
          setMessage("Password must be minimum 6 characters long.");
          return;
        } else if (!email.match(mailformat)) {
          setMessage("Please enter a valid email address.");
          return;
        }
        const res = await publicRequest.post(`/auth/register`, {
          firstname,
          lastname,
          email,
          password,
          address,
          contact,
        });
        console.log(res);
        setMessage("Registered successfully");
      } catch (err) {
        if (err.response.data.code === 11000) {
          setMessage(
            "Email already taken. Try again with a different email id."
          );
        } else {
          setMessage(
            "Error while registering. All the fields are required. Try again"
          );
        }
      }
    };
    registerUser();
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        {message && <Message>{message}</Message>}
        <Form>
          <Input
            placeholder="firstname"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <Input
            placeholder="lastname"
            onChange={(e) => setLastname(e.target.value)}
          />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required={true}
          />
          <Input
            placeholder="address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            placeholder="contact number"
            onChange={(e) => setContact(e.target.value)}
          />
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          {/* <Input placeholder="confirm password" /> */}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleRegister}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
