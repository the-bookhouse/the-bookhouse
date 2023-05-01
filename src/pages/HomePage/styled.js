import styled from "styled-components";

export const HomeContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const BooksContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 11vh;
`

export const Book = styled.div`
  width: 210px;
  height: 400px;
  margin-right: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
  gap: 8px;
  
  img {
    width: 100%;
    height: 100%;
  }

  h1{
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    white-space: nowrap;
    
  }

  p {
    font-size: 20px;
  }
`

export const Buy = styled.button`
  width: 50%;
  height: 7%;
  background: green;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`
