import { css } from '@emotion/css';
import Flex from './package/widgets/Flex';
import Layer from './package/widgets/Layer';

export default function App() {
  return (
    <Layer
      display='grid'
      // grid={{ templateColumns: 'repeat(2, 1fr)', templateRows: 'repeat(5, 1fr)' }}
      flex={{ align: 'center', crossAlign: 'center', gap: 20 }}
      position={{ type: 'fixed', left: 0, top: 0 }}
      zIndex={100}
      borderRadius={80}
      background={{
        fill: '#f0f9fc',
      }}
      shadow={{ x: 0, y: 10, blur: 50, color: 'red' }}
      mq={{
        w768: {
          gradient: {
            colors: [
              { color: 'red', stop: 0 },
              { color: 'blue', stop: 100 },
            ],
            degree: 90,
          },
          display: 'flex',
          flex: { direction: 'column', crossAlign: 'center', align: 'start' },
          borderRadius: '20px 20px 80px',
          border: { stroke: 1, color: 'red', position: 'all', shape: 'solid' },
          sizes: { minHeight: 500, width: 500 },
        },
      }}
    >
      <Flex
        direction='column'
        className='box'
        gap={10}
        flex={1} // 변경된 flex 값
        onClick={() => alert('clicked')}
      >
        <Box bg='red' />
        <Box bg='blue' />
      </Flex>

      <Flex
        direction='column'
        className='box'
        gap={10}
        flex={1} // 변경된 flex 값
        onClick={() => alert('clicked')}
      >
        <Box bg='red' />
        <Box bg='blue' />
      </Flex>

      <Flex
        direction='column'
        className='box'
        onClick={() => alert('clicked')}
        gap={10}
        flex={2} // 변경된 flex 값
      >
        <Box bg='green' />
        <Box bg='yellow' />
      </Flex>
    </Layer>
  );
}

const Box = ({ bg }: { bg: string }) => (
  <div
    className={css({
      width: 40,
      minWidth: 40,
      maxWidth: 40,
      height: 40,
      minHeight: 40,
      maxHeight: 40,
      backgroundColor: bg,
    })}
  ></div>
);
