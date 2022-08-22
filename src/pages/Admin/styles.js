import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 24px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const BoxRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  .Selector {
    width: 50%;
    margin-left: 24px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 16px;
`;

export const TextInput = styled.input.attrs({
  spellCheck: false,
})`
  width: 100%;
  height: 56px;
  background-color: #dcdcdc;
  border-radius: 12px;
  padding: 0 24px;
  margin: 12px 0;
  transition: all 0.2s ease-in-out;
  color: #000;
  font-family: "Poppins", sans-serif;
  font-weight: bold;

  &&::placeholder {
    color: #999999;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
  }

  &&:focus {
    box-shadow: 0px 0px 4px #000000aa;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 56px;
  background-color: ${({ isLoading }) => (isLoading ? "#a52a2aaa" : "#a52a2a")};
  border-radius: 12px;
  padding: 0 24px;
  margin: 12px 0;
  transition: all 0.2s ease-in-out;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #a52a2aaa;
  }

  &:active {
    transform: scale(1.02);
    background-color: red;
  }
`;

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-title {
    font-size: 28px;
    color: red;
  }
`;

export const LoginForm = styled.div`
  background-color: #fa8072aa;
  width: 80%;
  max-width: 400px;
  border-radius: 24px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 16px gray;
`;
