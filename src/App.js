import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import "./App.css";

function App() {
  const [imgHeight, setImgHeight] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const [activePointer, setActivePointer] = useState({
    pointer1:false,
    pointer2:false,
    pointer3:false,
    pointer4:false,
    pointer5:false,
    pointer6:false,
    pointer7:false,
    pointer8:false,
  });
  const refImg = useRef();
  const refPointer1 = useRef();
  const refPointer2 = useRef();
  const refPointer3 = useRef();
  const refPointer4 = useRef();
  const refPointer5 = useRef();
  const refPointer6 = useRef();
  const refPointer7 = useRef();
  const refPointer8 = useRef();

  useEffect(() => {
    setImgHeight(refImg.current.offsetHeight);
    setImgWidth(refImg.current.offsetWidth);
  }, [refImg])

  useEffect(() => {
    console.log(activePointer)
  }, [activePointer])
  
  return (
    <Container className="App">
      <ResizerContainer>
        <ImgContainer>
          <Img src={"img.jpeg"} alt="logo" ref={refImg}/>
          <Draggable
            ref={refPointer1}
            bounds={"parent"}
            onStart={() => setActivePointer(pre => ({...pre, pointer1:true}))}
            onStop={(d) => {console.log(refPointer1.current.offsetHeight)}}
            >
            <Pointer1 className={activePointer.pointer1 ? "active" : ""}/>
          </Draggable>

          <Draggable
            ref={refPointer2}
            bounds={"parent"}
            onStop={(d) => {
              console.log(refPointer2);
            }}
            positionOffset={{ x: '0%', y: "0%" }}
          >
            <Pointer2 />
          </Draggable>
          <Draggable
            ref={refPointer3}
            bounds={"parent"}
            onStop={(d) => {
              console.log(d);
            }}
          >
            <Pointer3 />
          </Draggable>
          <Draggable
            ref={refPointer4}
            bounds={"parent"}
            onStop={(d) => {
              console.log(d);
            }}
          >
            <Pointer4 />
          </Draggable>
          <Draggable
            ref={refPointer5}
            bounds={"parent"}
            onStop={(d) => {
              console.log(d);
            }}
          >
            <Pointer5 />
          </Draggable>
          <Draggable
            ref={refPointer6}
            bounds={"parent"}
            onStop={(d) => {
              console.log(d);
            }}
          >
            <Pointer6 />
          </Draggable>
          <Draggable
            ref={refPointer7}
            bounds={"parent"}
            onStop={(d) => {
              console.log(d);
            }}
          >
            <Pointer7 />
          </Draggable>
          <Draggable
            ref={refPointer8}
            bounds={"parent"}
            onStop={(d) => {
              console.log(d);
            }}
          >
            <Pointer8 />
          </Draggable>
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
  min-width: 42rem;
  position: relative;
  /* padding: 1rem; */
  /* background: red; */
`;

const ImgContainer = styled.div`
  min-height: 0rem;
  width: 42rem;
  border: 0.5px solid gray;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  padding: 1rem;
  clip-path: polygon(
    0% 0%,
    50% 0%,
    100% 0%,
    100% 50%,
    100% 100%,
    50% 100%,
    0% 100%,
    0% 50%
  );
  vertical-align: middle;
`;

const Pointer1 = styled.div`
  position: absolute;
  left: 0%;
  top: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background: teal;
  &.active {
    z-index: 1;
  }
`;
const Pointer2 = styled.div`
  position: absolute;
  left: 47%;
  top: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background: red;
`;
const Pointer3 = styled.div`
  position: absolute;
  left: 95%;
  top: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background: pink;
`;
const Pointer4 = styled.div`
  position: absolute;
  left: 95%;
  top: 47%;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background: yellow;
`;
const Pointer5 = styled.div`
  position: absolute;
  left: 95%;
  top: 90%;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background: orange;
`;
const Pointer6 = styled.div`
  position: absolute;
  left: 47%;
  top: 90%;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background: brown;
`;
const Pointer7 = styled.div`
  position: absolute;
  left: 0%;
  top: 90%;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background: peachpuff;
`;
const Pointer8 = styled.div`
  position: absolute;
  left: 0%;
  top: 47%;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background: aquamarine;
`;
