import styled from 'styled-components';

const ContactFormContainer = styled.form`
  margin-bottom: 25px;
  margin-left: 40px;

  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const Label = styled.label`
  padding: 0;
  color: #555;
`;

const Title = styled.h3`
  text-align: start;
`;

const Input = styled.input`
  width: 250px;
  border: solid 3px rgb(96, 149, 255);
  border-radius: 5px;
  box-shadow: rgb(216, 227, 237) 2px 2px 5px 5px;
  height: 100%;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);

  
  }
`;

const Button = styled.button`
  width: 150px;
  border: solid 3px rgb(96, 149, 255);
  border-radius: 5px;
  box-shadow: rgb(216, 227, 237) 2px 2px 5px 5px;
  height: 100%;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);

  &:hover,
  :focus {
    background-color: rgb(96, 149, 255);
    color: rgb(255, 255, 255);
  }
`;

export { ContactFormContainer, Label, Input, Button, Title };
