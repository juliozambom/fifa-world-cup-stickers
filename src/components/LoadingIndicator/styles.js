import styled from "styled-components";

export const Loading = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid #e5e5e5aa;
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 1s infinite;
  margin-right: 8px;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
