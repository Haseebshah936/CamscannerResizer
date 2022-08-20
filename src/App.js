import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <Container className="App">
      <ResizerContainer>
        <ImgContainer>
          <Img src={"img.jpg"} alt="logo" />
          <Pointer1 draggable onMouseDown={() => {}} onDr/>
          <Pointer2 />
          <Pointer3 />
          <Pointer4 />
          <Pointer5 />
          <Pointer6 />
          <Pointer7 />
          <Pointer8 />
        </ImgContainer>
      </ResizerContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  /* background-color: teal; */
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const ResizerContainer = styled.div`
  min-width: 40rem;
  position: relative;
  padding: 1rem;
  /* background: red; */
`;

const ImgContainer = styled.div`
  min-height: 0rem;
  width: 40rem;
  border: 0.5px solid gray;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
  vertical-align: middle;
`;

const Pointer1 = styled.div`
  position: absolute;
  top: 0;
  left: 0%;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background: aquamarine;
`;
const Pointer2 = styled.div`
  position: absolute;
  top: 0;
  left: 47%;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background: aquamarine;
`;
const Pointer3 = styled.div`
  position: absolute;
  top: 0;
  left: 95%;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background: aquamarine;
`;
const Pointer4 = styled.div`
  position: absolute;
  top: 47%;
  left: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background: aquamarine;
`;
const Pointer5 = styled.div`
  position: absolute;
  top: 93%;
  left: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background: aquamarine;
`;
const Pointer6 = styled.div`
  position: absolute;
  top: 93%;
  left: 47%;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background: aquamarine;
`;
const Pointer7 = styled.div`
  position: absolute;
  top: 93%;
  left: 95%;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background: aquamarine;
`;
const Pointer8 = styled.div`
  position: absolute;
  top: 47%;
  left: 95%;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background: aquamarine;
`;
