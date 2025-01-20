import { useRef } from "react";
import {
  Button,
  Flex,
  Layer,
  Padding,
  Skeleton,
  TouchableOpacity,
  Txt,
} from "./package";

export default function App() {
  const ref = useRef(null);
  const tabRef = useRef<HTMLButtonElement>(null);
  const ttRef = useRef<HTMLDivElement>(null);
  const skRef = useRef<HTMLDivElement>(null);

  return (
    <Layer
      as="nav"
      ref={ref}
      flex={{ flex: 1 }}
      sizes={{ width: "100%", height: "100vh" }}
      background={{ fill: "#000" }}
    >
      <Padding all={40} _hover={{ all: 200 }}>
        <Flex align="center" gap={50} ref={ttRef}>
          <Skeleton ref={skRef} height={50} />
          <Txt txtColor="#fff">asd</Txt>
          <Txt txtColor="#fff">hh</Txt>
          <TouchableOpacity ref={tabRef} color="#fff">
            TouchableOpacity
          </TouchableOpacity>
          <Button>Tab</Button>
          <Txt css={{ padding: 20, fontSize: 30 }}>1</Txt>
        </Flex>
      </Padding>
    </Layer>
  );
}
