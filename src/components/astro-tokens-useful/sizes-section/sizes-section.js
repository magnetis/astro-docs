import React from "react";
import styled from "styled-components";

const size = {
  quark: 4,
  nano: 8,
  micro: 12,
  mini: 16,
  tiny: 20,
  smaller: 24,
  small: 32,
  medium: 40,
  large: 48,
  larger: 56,
  great: 64,
  broad: 72,
  huge: 88,
  giant: 120,
  vast: 160,
  massive: 200,
};

const Square = styled.div`
  ${({width}) => `width:${width}px;` }
  ${({height}) => `height:${height}px;` }
  background-color: #ccc;
  border: 1px solid grey;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SquareContainer = styled.div`
  margin: 20px 20px;
`
const SquareTitle = styled.div`
  margin-bottom: 5px;
  color: #616161;
`

export default function SizeSection({ section }) {
  const keys = Object.keys(size);
  return <Container> {keys.map(key => 
    <SquareContainer>
      <SquareTitle>
        {key}
      </SquareTitle>
      <Square width={size[key]} height={size[key]}/>
    </SquareContainer>)}
  </Container>;
}