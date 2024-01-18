import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  justify-content: center;

  @media (min-width: 425px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const ContainerItems = styled.div`

  margin: 15px;
  padding: 0.25em 1em;
`;

export {
    Container, ContainerItems
}