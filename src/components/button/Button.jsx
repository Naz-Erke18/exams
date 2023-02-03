import React, { memo } from "react";
import styled from "styled-components";

const Button = ({ children, onClick }) => {
  return (
    <div>
      <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
    </div>
  );
};

export default memo(Button);

const ButtonStyled = styled.button`
  background-color: #7171e9;
  color: white;
  border: none;
  width: 60px;
  height: 30px;
  border-radius: 3px;
  margin-right: 10px;
  margin-top: 15rem;
`;
