import { useRef } from "react";
import {
  Background,
  Button,
  Divider,
  Flex,
  Grid,
  Padding,
  Skeleton,
  Spacing,
  Text,
} from "./package";
import Layer from "./package/widgets/Layer";
import TouchableOpacity from "./package/widgets/TouchableOpacity";

export default function App() {
  const ref = useRef(null);
  const tabRef = useRef<HTMLButtonElement>(null);
  const ttRef = useRef<HTMLDivElement>(null);
  const skRef = useRef<HTMLDivElement>(null);

  return (
    <Layer
      as="section"
      fill="#f2f3fa"
      flex={1}
      h="100vh"
      padding={{ all: 60 }}
      margin={{ top: 20 }}
      border={{ stroke: 2, color: "#000" }}
      _mq={{ w1080: { padding: { all: 20 } } }}
    >
      <Padding all={0} ref={ttRef}>
        <TouchableOpacity>버튼이야</TouchableOpacity>

        <Flex
          h="100%"
          as="ul"
          ref={ttRef}
          direc="row"
          gap={25}
          _mq={{
            w600: { direc: "column" },
          }}
        >
          <Text
            size={50}
            weight="bold"
            color="#000"
            lineHeight={1.5}
            whiteSpace="nowrap"
            padding={{ all: 50 }}
            _mq={{ w600: { size: 15, padding: { all: 0 } } }}
          >
            안녕나의 디자몬 아구몬이야
          </Text>

          <Grid
            templateColumns="repeat(3, 1fr)"
            _mq={{ w600: { templateColumns: "repeat(2, 1fr)" } }}
          >
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
          </Grid>
        </Flex>
      </Padding>

      <Button _mq={{ w1080: { w: "100%" } }}>asda</Button>

      <Divider
        h={10}
        color="#000"
        _mq={{ w1080: { h: 50, color: "#ccc" }, w600: { h: 20 } }}
      />

      <Spacing size={10} _mq={{ w1080: { size: 50 } }} />

      <Padding all={10} _mq={{ w1080: { all: 0 } }}>
        <Flex
          direc="row"
          justify="space-between"
          _mq={{
            w600: { direc: "column" },
          }}
        >
          <TouchableOpacity
            w="auto"
            gap={20}
            padding={{ all: 20 }}
            fill="#f0f0f0"
            _mq={{
              w600: {
                direc: "column",
                w: "100%",
              },
            }}
          >
            <Skeleton w={100} h={100} />

            <Background fill="#fff" w="auto">
              <Flex w="auto" direc="column" align="start" gap={10}>
                <Text>안녕</Text>
                <Text>나의 이름은 정재환이고 나는 프론트엔드 개발자야</Text>
              </Flex>
            </Background>
          </TouchableOpacity>

          <TouchableOpacity
            w="auto"
            gap={20}
            padding={{ all: 20 }}
            fill="#f0f0f0"
          >
            <Skeleton w={100} h={100} />

            <Background fill="#fff" w="auto">
              <Flex w="auto" direc="column" align="start" gap={10}>
                <Text>안녕</Text>
                <Text>나의 이름은 정재환이고 나는 프론트엔드 개발자야</Text>
              </Flex>
            </Background>
          </TouchableOpacity>
        </Flex>
      </Padding>
    </Layer>
  );
}
