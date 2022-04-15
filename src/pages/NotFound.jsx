import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
border: 1px solid rgb(32, 233, 223);
border-radius: 5px;
background-color: #D98880;
color: rgb(197, 197, 197);
font-size: 14px;
padding: 8px 16px;
margin: 5px;
`;

const Paragraph = styled.p`
  font-size: 70px;
  color: white;
  text-align: center;
`;

const NotFound = () => (
  <Div>
    <Paragraph> ⛔️ ERROR 404 ⛔️ </Paragraph>
    <Paragraph>This page was not found </Paragraph>
  </Div>
);

export default NotFound;