import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import "./App.css";

function App() {
  const [imgHeight, setImgHeight] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const [activePointer, setActivePointer] = useState({
    pointer1: false,
    pointer2: false,
    pointer3: false,
    pointer4: false,
    pointer5: false,
    pointer6: false,
    pointer7: false,
    pointer8: false,
  });
  const [cornors, setCornors] = useState({
    pointer1: {
      X: 0,
      Y: 0,
    },
    pointer2: {
      X: 50,
      Y: 0,
    },
    pointer3: {
      X: 100,
      Y: 0,
    },
    pointer4: {
      X: 100,
      Y: 50,
    },
    pointer5: {
      X: 100,
      Y: 100,
    },
    pointer6: {
      X: 50,
      Y: 100,
    },
    pointer7: {
      X: 0,
      Y: 100,
    },
    pointer8: {
      X: 0,
      Y: 50,
    },
  });
  const [loaded, setLoaded] = useState(false);
  const [image, setImage] = useState(null);
  const refCanvas = useRef();
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
    if(image){
      console.log("Repicked")
      console.log("Width", refImg.current.offsetHeight);
    console.log(refImg.current.offsetWidth);
      setImgHeight(refImg.current.offsetHeight);
      setImgWidth(refImg.current.offsetWidth);
    }
  }, [refImg, loaded, image]);

  useEffect(() => {
    
    // console.log(activePointer);
  }, [activePointer, image]);

  return (
    <Container className="App">
      <canvas ref={refCanvas} width={"40rem"} style={{ resize: "contain" }} />
     {image &&  <ImgContainer height={imgHeight} width={imgWidth}>
        <Img
          src={URL.createObjectURL(image)}
          alt="logo"
          ref={refImg}
          polygon={cornors}
          onLoad={() => setLoaded(true)}
        />
         <PointerContainer width={imgWidth} height={imgHeight}>
          <Draggable
            ref={refPointer1}
            bounds={"parent"}
            onStart={() =>
              setActivePointer((pre) => ({
                pointer1: true,
                pointer2: false,
                pointer3: false,
                pointer4: false,
                pointer5: false,
                pointer6: false,
                pointer7: false,
                pointer8: false,
              }))
            }
            onDrag={(e) => {
              const X = ((0 + refPointer1.current.state.x) / imgWidth) * 100;
              const Y = ((0 + refPointer1.current.state.y) / imgHeight) * 100;

              console.log(X, Y);
              setCornors({
                ...cornors,
                pointer1: {
                  X,
                  Y,
                },
              });
            }}
          >
            <Pointer1 className={activePointer.pointer1 ? "active" : ""} />
          </Draggable>
          <Draggable
            ref={refPointer2}
            bounds={"parent"}
            onStart={() =>
              setActivePointer((pre) => ({
                pointer1: false,
                pointer2: true,
                pointer3: false,
                pointer4: false,
                pointer5: false,
                pointer6: false,
                pointer7: false,
                pointer8: false,
              }))
            }
            onDrag={(e) => {
              const X =
                ((imgWidth * 0.5 + refPointer2.current.state.x) / imgWidth) *
                100;
              const Y = ((0 + refPointer2.current.state.y) / imgHeight) * 100;
              setCornors({
                ...cornors,
                pointer2: {
                  X,
                  Y,
                },
              });
            }}
          >
            <Pointer2 className={activePointer.pointer2 ? "active" : ""} />
          </Draggable>
          <Draggable
            ref={refPointer3}
            bounds={"parent"}
            onStart={() =>
              setActivePointer((pre) => ({
                pointer1: false,
                pointer2: false,
                pointer3: true,
                pointer4: false,
                pointer5: false,
                pointer6: false,
                pointer7: false,
                pointer8: false,
              }))
            }
            onDrag={(e) => {
              const X =
                ((imgWidth + refPointer3.current.state.x) / imgWidth) * 100;
              const Y = ((0 + refPointer3.current.state.y) / imgHeight) * 100;
              setCornors({
                ...cornors,
                pointer3: {
                  X,
                  Y,
                },
              });
            }}
          >
            <Pointer3 className={activePointer.pointer3 ? "active" : ""} />
          </Draggable>
          <Draggable
            ref={refPointer4}
            bounds={"parent"}
            onStart={() =>
              setActivePointer((pre) => ({
                pointer1: false,
                pointer2: false,
                pointer3: false,
                pointer4: true,
                pointer5: false,
                pointer6: false,
                pointer7: false,
                pointer8: false,
              }))
            }
            onDrag={(e) => {
              const X =
                ((imgWidth + refPointer4.current.state.x) / imgWidth) * 100;
              const Y =
                ((imgHeight * 0.5 + refPointer4.current.state.y) / imgHeight) *
                100;
              setCornors({
                ...cornors,
                pointer4: {
                  X,
                  Y,
                },
              });
            }}
          >
            <Pointer4 className={activePointer.pointer4 ? "active" : ""} />
          </Draggable>
          <Draggable
            ref={refPointer5}
            bounds={"parent"}
            onStart={() =>
              setActivePointer((pre) => ({
                pointer1: false,
                pointer2: false,
                pointer3: false,
                pointer4: false,
                pointer5: true,
                pointer6: false,
                pointer7: false,
                pointer8: false,
              }))
            }
            onDrag={(e) => {
              const X =
                ((imgWidth + refPointer5.current.state.x) / imgWidth) * 100;
              const Y =
                ((imgHeight + refPointer5.current.state.y) / imgHeight) * 100;
              setCornors({
                ...cornors,
                pointer5: {
                  X,
                  Y,
                },
              });
            }}
          >
            <Pointer5 className={activePointer.pointer5 ? "active" : ""} />
          </Draggable>
          <Draggable
            ref={refPointer6}
            bounds={"parent"}
            onStart={() =>
              setActivePointer((pre) => ({
                pointer1: false,
                pointer2: false,
                pointer3: false,
                pointer4: false,
                pointer5: false,
                pointer6: true,
                pointer7: false,
                pointer8: false,
              }))
            }
            onDrag={(e) => {
              const X =
                ((imgWidth * 0.5 + refPointer6.current.state.x) / imgWidth) *
                100;
              const Y =
                ((imgHeight + refPointer6.current.state.y) / imgHeight) * 100;
              setCornors({
                ...cornors,
                pointer6: {
                  X,
                  Y,
                },
              });
            }}
          >
            <Pointer6 className={activePointer.pointer6 ? "active" : ""} />
          </Draggable>
          <Draggable
            ref={refPointer7}
            bounds={"parent"}
            onStart={() =>
              setActivePointer((pre) => ({
                pointer1: false,
                pointer2: false,
                pointer3: false,
                pointer4: false,
                pointer5: false,
                pointer6: false,
                pointer7: true,
                pointer8: false,
              }))
            }
            onDrag={(e) => {
              const X = ((0 + refPointer7.current.state.x) / imgWidth) * 100;
              const Y =
                ((imgHeight + refPointer7.current.state.y) / imgHeight) * 100;
              setCornors({
                ...cornors,
                pointer7: {
                  X,
                  Y,
                },
              });
            }}
          >
            <Pointer7 className={activePointer.pointer7 ? "active" : ""} />
          </Draggable>
          <Draggable
            ref={refPointer8}
            bounds={"parent"}
            onStart={() =>
              setActivePointer((pre) => ({
                pointer1: false,
                pointer2: false,
                pointer3: false,
                pointer4: false,
                pointer5: false,
                pointer6: false,
                pointer7: false,
                pointer8: true,
              }))
            }
            onDrag={(e) => {
              const X = ((0 + refPointer8.current.state.x) / imgWidth) * 100;
              const Y =
                ((imgHeight * 0.5 + refPointer8.current.state.y) / imgHeight) *
                100;
              setCornors({
                ...cornors,
                pointer8: {
                  X,
                  Y,
                },
              });
            }}
          >
            <Pointer8 className={activePointer.pointer8 ? "active" : ""} />
          </Draggable>
        </PointerContainer>
      </ImgContainer>}
      <ButtonContainer>
      <button
        onClick={() => {
          if(image){
          const ctx = refCanvas.current.getContext("2d");
          refCanvas.current.width = imgWidth;
          refCanvas.current.height = imgHeight;
          ctx.beginPath();
          ctx.moveTo(
            (cornors.pointer1.X * imgWidth) / 100,
            (cornors.pointer1.Y * imgHeight) / 100
          );
          ctx.lineTo(
            (cornors.pointer2.X * imgWidth) / 100,
            (cornors.pointer2.Y * imgHeight) / 100
          );
          ctx.lineTo(
            (cornors.pointer3.X * imgWidth) / 100,
            (cornors.pointer3.Y * imgHeight) / 100
          );
          ctx.lineTo(
            (cornors.pointer4.X * imgWidth) / 100,
            (cornors.pointer4.Y * imgHeight) / 100
          );
          ctx.lineTo(
            (cornors.pointer5.X * imgWidth) / 100,
            (cornors.pointer5.Y * imgHeight) / 100
          );
          ctx.lineTo(
            (cornors.pointer6.X * imgWidth) / 100,
            (cornors.pointer6.Y * imgHeight) / 100
          );
          ctx.lineTo(
            (cornors.pointer7.X * imgWidth) / 100,
            (cornors.pointer7.Y * imgHeight) / 100
          );
          ctx.lineTo(
            (cornors.pointer8.X * imgWidth) / 100,
            (cornors.pointer8.Y * imgHeight) / 100
          );
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(refImg.current, 0, 0, imgWidth, imgHeight);
          console.log(refCanvas.current.toDataURL("image/png"));
        }

        }}
      >
        Crop
      </button>
      <input type={"file"} onChange={(e) => {
          setLoaded(false)
          setImage(e.target.files[0])
        }}/>
      </ButtonContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 200vh;
  width: 100vw;
  display: flex;
  /* background-color: teal; */
  /* justify-content: center; */
  margin-top: 5%;
  align-items: center;
  overflow-x: hidden;
  flex-direction: column;
`;

const ImgContainer = styled.div`
  min-height: 5rem;
  max-height: 42rem;
  width: ${(props) => props.width + 20}px;
  margin-block: 1rem;
  height: ${(props) => props.height + 20}px;
  position: relative;
  display: flex;
  border: 1px solid black;
`;

const Img = styled.img`
  max-width: 40rem;
  margin-inline: 1rem;
  max-height: 40rem;
  /* max-height: 100%; */
  align-self: center;
  clip-path: polygon(
    ${(props) => props.polygon.pointer1.X + "%"}
      ${(props) => props.polygon.pointer1.Y + "%"},
    ${(props) => props.polygon.pointer2.X + "%"}
      ${(props) => props.polygon.pointer2.Y + "%"},
    ${(props) => props.polygon.pointer3.X + "%"}
      ${(props) => props.polygon.pointer3.Y + "%"},
    ${(props) => props.polygon.pointer4.X + "%"}
      ${(props) => props.polygon.pointer4.Y + "%"},
    ${(props) => props.polygon.pointer5.X + "%"}
      ${(props) => props.polygon.pointer5.Y + "%"},
    ${(props) => props.polygon.pointer6.X + "%"}
      ${(props) => props.polygon.pointer6.Y + "%"},
    ${(props) => props.polygon.pointer7.X + "%"}
      ${(props) => props.polygon.pointer7.Y + "%"},
    ${(props) => props.polygon.pointer8.X + "%"}
      ${(props) => props.polygon.pointer8.Y + "%"}
  );
  /* padding: 2rem; */
  /* vertical-align: middle; */
`;

const PointerContainer = styled.div`
  width: ${(props) => props.width + 20}px;
  min-height: 5rem;
  max-height: 42rem;
  height: ${(props) => props.height + 20}px;
  position: absolute;
  background-color: transparent;
  /* border: 1px solid blue;  */
`;

const Pointer1 = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background: teal;
  &.active {
    z-index: 1;
  }
`;
const Pointer2 = styled.div`
  position: absolute;
  left: 50%;
  top: 0%;
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background: red;
  &.active {
    z-index: 1;
  }
`;
const Pointer3 = styled.div`
  position: absolute;
  right: 0;
  top: 0%;
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background: pink;
  &.active {
    z-index: 1;
  }
`;
const Pointer4 = styled.div`
  position: absolute;
  left: 97%;
  top: 47%;
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background: yellow;
  &.active {
    z-index: 1;
  }
`;
const Pointer5 = styled.div`
  position: absolute;
  left: 97%;
  top: 95%;
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background: orange;
  &.active {
    z-index: 1;
  }
`;
const Pointer6 = styled.div`
  position: absolute;
  left: 50%;
  top: 95%;
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background: brown;
  &.active {
    z-index: 1;
  }
`;
const Pointer7 = styled.div`
  position: absolute;
  right: 97%;
  top: 95%;
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background: peachpuff;
  &.active {
    z-index: 1;
  }
`;
const Pointer8 = styled.div`
  position: absolute;
  right: 97.5%;
  top: 50%;
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background: aquamarine;
  &.active {
    z-index: 1;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 40rem;
  justify-content: space-between;
`