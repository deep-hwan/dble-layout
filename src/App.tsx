import { useRef } from "react";
import { Layer, Padding, Text } from "./package";

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
      background={{ fill: "#fff" }}
    >
      <Padding all={40}>
        <Text
          maxW={500}
          size={50}
          weight="bold"
          color="#000"
          lineHeight={1.5}
          whiteSpace="nowrap"
          ellipsis={{ isActive: true, line: 1 }}
        >
          안녕나의 디자몬 아구몬이야
        </Text>
      </Padding>
    </Layer>
  );
}
