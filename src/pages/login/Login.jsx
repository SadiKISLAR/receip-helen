import React from 'react'
import { LoginContainer, FormContainer, StyledImg, Header, StyledInput, StyledForm, StyledButton } from './Login.style'
import meal from "../../assets/meal.svg"
import { useNavigate } from 'react-router-dom'


const Login = () => {

  const navigate = useNavigate();

  const userInfo = {
    username: "Ahmet"
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo))
    navigate(-1)
  }

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>Shady's Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput placeholder="Enter username" type="text" />
          <StyledInput placeholder="Enter Password" type="password" />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login