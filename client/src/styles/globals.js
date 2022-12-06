import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

   *{
     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     box-sizing: border-box;
     margin: 0;
     padding: 0;
     
   
   }
   button:hover{
     cursor: pointer;
   }
   body{
     overflow-x: hidden;
     background-color: #F9F0F0;
   }

   .customButton {
  width: 100%;
  height: 30px;
  text-align: center;
  color: #357ffc;
  background-color: white;
  border-radius: 50px;
  border: 2px solid #357ffc;
  font-weight: 550;
  margin-left: 1rem;
}
#ql-editor {
  min-height: inherit;
  max-width: 906px;
 width: 100%;
 display: flex;
 flex-direction: column;
 

 //background-color: blue;
 @media screen and (max-width: 1200px) {
    //background-color:purple;
    max-width:800px;
  }
  @media screen and (max-width: 1100px) {
   // background-color:cyan;
    max-width:700px;
  }
  @media screen and (max-width: 1000px) {
    //background-color:orange;
    max-width:630px;
  }
  @media screen and (max-width: 970px) {
    //background-color:yellowgreen;
    max-width:610px;
  }
  @media screen and (max-width: 920px) {
    //background-color:yellow;
    max-width:570px;
  }
  @media screen and (max-width: 870px) {
   // background-color:yellowgreen;
    max-width:536px;
  }
  @media screen and (max-width: 840px) {
   // background-color:olivedrab;
    max-width:520px;
  }
}
`;
