import styled from "styled-components";

const Container =  styled.div`
  ${({border}) => border ? "border:1px solid #ccc;" : "" }
  margin: 20px 10px;
  padding: 5px 10px;
  border-radius: 8px;
  >table {
    > td{
      border: 0;
    }
    > th{
      border: 0;
    }
    > tr{
      border: 0;
    }
  }
`
export default Container;