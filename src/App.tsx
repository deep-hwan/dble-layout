import { useRef } from "react";
import { Button, Flex, Layer, Padding, TouchableOpacity, Txt } from "./package";

export default function App() {
  const ref = useRef(null);
  const tabRef = useRef(null);
  const ttRef = useRef(null);

  console.log("tt", ttRef.current);
  // useEffect(() => {
  //   console.log("layer", ref.current);
  //   console.log("tabRef", tabRef.current);
  // }, []);

  return (
    <Layer
      as="nav"
      ref={ref}
      flex={{ flex: 1 }}
      sizes={{ width: "100%", height: "100vh" }}
      background={{ fill: "#000" }}
    >
      <Padding all={40} _hover={{ all: 200 }}>
        <Flex align="center" gap={50}>
          <Txt txtColor="#fff">asd</Txt>
          <Txt txtColor="#fff">hh</Txt>
          <TouchableOpacity color="#fff">11</TouchableOpacity>
          <Button ref={tabRef}>Tab</Button>
          <Txt css={{ padding: 20, fontSize: 30 }}>1</Txt>
        </Flex>
      </Padding>
    </Layer>
  );
}
