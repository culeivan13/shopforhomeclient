import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCall";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/2079436/pexels-photo-2079436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 30%;
  border: 2px solid black;
  padding: 10px;
  background-color: white;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
`;

const Register = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
          {error && <Error>Authentication failed. Please try again.</Error>}
          <Register><Link to="/register" style={{ textDecoration: "none" }}>CREATE A NEW ACCOUNT</Link></Register>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;