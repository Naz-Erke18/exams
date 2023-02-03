import React, { useReducer, useState } from "react";
import styled from "styled-components";
import Button from "../button/Button";
import Input from "../input/Input";

const inptReduser = (state, action) => {
  
  if (action.type === "Pluse") {
    return {
      value: +state.value + action.payload,
    };
  }

  if (action.type === "Minus") {
    return {
      value: +state.value - action.payload,
    };
  }

  if (action.type === "Increase") {
    return {
      value: +state.value * action.payload,
    };
  }

  if (action.type === "!Increase") {
    return {
      value: +state.value / action.payload,
    };
  }
};

const Main = () => {
  const [input, setInput] = useState("");
  const [state, dispatch] = useReducer(inptReduser, { value: "" });
  console.log(state);

  const changeHandlerInput1 = (event) => {
    setInput(event.target.value);
  };

  const pluseHandler = () => {
    dispatch({ type: "Pluse", payload: +input });
    setInput("");
  };

  const minusHandler = () => {
    dispatch({ type: "Minus", payload: +input });
    setInput("");
  };

  const increaseHandler = () => {
    dispatch({ type: "Increase", payload: +input });
    setInput("");
  };

  const Handler = () => {
    dispatch({ type: "!Increase", payload: +input });
    setInput("");
  };

  return (
    <div>
      <Input
        inputType={"number"}
        value={input}
        onChange={changeHandlerInput1}
      />
      <StyledContainer>
        <Button onClick={pluseHandler}>+</Button>
        <Button onClick={minusHandler}>-</Button>
        <Button onClick={increaseHandler}>*</Button>
        <Button onClick={Handler}>/</Button>
      </StyledContainer>

      <Title>{state.value}</Title>
    </div>
  );
};

export default Main;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled.h1`
  color: rgb(113, 113, 233);
  display: flex;
  justify-content: center;
`;
