import React from 'react'
import { LoginContainer, FormContainer, StyledImg, Header, StyledInput, StyledForm, StyledButton } from './Login.style'
import meal from "../../assets/meal.svg"
import { useNavigate } from 'react-router-dom'


const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("-1")
  }

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>
          Shady's Receipe
        </Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput placeholder='Enter User Name' type="text" />
          <StyledInput placeholder='Enter Password' type="password" />
          <StyledButton type='submit'>LOGIN
          </StyledButton>

        </StyledForm>

      </FormContainer>
    </LoginContainer>
  )
}

export default Login