import styled from "styled-components";
import Footer from "./components/Footer";
import Card from "./components/Card";

const Container = styled.div`
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--very-dark-blue);
`;

function App() {
  return (
    <>
      <Container>
        <Card />
      </Container>
      <Footer />
    </>
  );
}

export default App;
