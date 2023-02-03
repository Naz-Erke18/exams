import React, { memo } from "react";
import styled from "styled-components";

const Input = ({ inputType, value, onChange }) => {
  return (
    <Div>
      <input type={inputType} value={value} onChange={onChange} />
    </Div>
  );
};

export default memo(Input);

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  height: 30px;
`;
