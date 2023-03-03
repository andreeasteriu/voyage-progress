import styled from "@emotion/styled";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;

  label {
    width: 100%;
    font-size: 16px;
    margin-bottom: 10px;
  }

  input[type="text"],
  input[type="datetime-local"] {
    font-family: arial;
    width: 100%;
    font-size: 18px;
    padding: 8px;
    margin-bottom: 20px;
    border-radius: 4px;
    border: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  button[type="submit"] {
    width: 100%;
    font-size: 18px;
    padding: 8px 20px;
    border-radius: 4px;
    border: none;
    background-color: #0077cc;
    color: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;

    &:hover {
      background-color: #005fa3;
    }
  }
`;

export const Container = styled.div`
  max-width: 400px;
  margin: auto 0;
  padding: 20px;
`;
