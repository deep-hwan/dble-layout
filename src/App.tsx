import { useRef } from "react";
import { Button, Flex, Grid, Layer, TouchableOpacity, Txt } from "./package";

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
      padding={{ all: 20 }}
    >
      <Flex align="center">
        <Txt txtColor="#fff">asd</Txt>
        <Txt txtColor="#fff">hh</Txt>
        <TouchableOpacity color="#fff">11</TouchableOpacity>
        <Button ref={tabRef}>Tab</Button>
      </Flex>

      <Grid sizes={{ maxWidth: 200 }} templateColumns="repeat(3, 1fr)" gap={20}>
        <Flex>
          <Txt>1</Txt>
          <Txt>2</Txt>
          <Txt>3</Txt>
        </Flex>

        <Flex>
          <Txt>1</Txt>
          <Txt>2</Txt>
          <Txt>3</Txt>
        </Flex>

        <Flex>
          <Txt>1</Txt>
          <Txt>2</Txt>
          <Txt>3</Txt>
        </Flex>
      </Grid>
    </Layer>
  );
}
