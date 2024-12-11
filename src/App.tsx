import { css } from '@emotion/css';
import { Divider } from './package/widgets/Divider';
import Flex from './package/widgets/Flex';
import Layer from './package/widgets/Layer';
import { Skeleton } from './package/widgets/Skeleton';
import { Spacing } from './package/widgets/Spacing';

export default function App() {
  return (
    <>
      <Layer
        as='header'
        flex={{ align: 'center', crossAlign: 'center', gap: 20 }}
        zIndex={100}
        borderRadius={80}
        background={{ fill: '#222' }}
        padding={{ vertical: 40, horizontal: 60 }}
        margin={{ bottom: 60 }}
      >
        <Skeleton
          mq={{ w768: { width: 100 }, w1080: { width: 200, height: 200 }, w438: { width: 300, borderRadius: 20 } }}
        />
        <Spacing size={20} />
        <Skeleton height={50} primaryColor='#222222' />
      </Layer>

      <Divider
        color='#000'
        spacing={{ vertical: 50, horizontal: 50 }}
        mq={{
          w768: { height: 100, color: '#a22525', spacing: { vertical: 100 } },
          w600: { height: 10, color: '#ccc', spacing: { vertical: 200 } },
        }}
      />

      <Spacing
        size={50}
        mq={{
          w1200: { size: 500 },
          w768: { size: 200, direction: 'row' },
          w600: { size: 100 },
          w438: { size: 50 },
        }}
      />
      <Layer
        display='grid'
        // grid={{ templateColumns: 'repeat(2, 1fr)', templateRows: 'repeat(5, 1fr)' }}
        flex={{ align: 'center', crossAlign: 'center', gap: 20 }}
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
    </>
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
