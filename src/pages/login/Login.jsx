import React from 'react'
import LoginContainer from './Login.style'
import meal from "../../assets/meal.svg"
const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>
          {"<CW"}Recipe
        </Header>
        <StyledForm>
          <StyledInput>
          </StyledInput>
          <StyledButton>Login</StyledButton>
        </StyledForm>
      </FormContainer>

    </LoginContainer>
  )
}

export default Login