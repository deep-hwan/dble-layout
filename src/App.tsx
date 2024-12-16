import { css } from '@emotion/css';
import { Divider } from './package/widgets/Divider';
import Layer from './package/widgets/Layer';
import { Skeleton } from './package/widgets/Skeleton';
import { Spacing } from './package/widgets/Spacing';
import Txt from './package/widgets/Txt';

export default function App() {
  return (
    <>
      <Layer
        as='div'
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

      <>
        <Txt
          as='h2'
          txtAlign='center'
          txtDecoration='underline'
          sizes={{ maxWidth: 500 }}
          background={{ fill: '#f8f8f8' }}
          // userSelect='none'
          padding={{ vertical: 20, horizontal: 40 }}
          margin={{ vertical: 50 }}
          mq={{
            w600: {
              txtSize: 20,
              txtColor: '#999',
              padding: { vertical: 60, horizontal: 20 },
              ellipsis: { isActive: false },
              background: { fill: '#f8f8f8' },
              opacity: 0.5,
            },
            w768: { txtColor: '#000', txtSize: 35, txtDecoration: 'none', background: { fill: '#fff' } },
          }}
          onClick={() => {}}
          _hover={{ txtColor: '#eee' }}
          ellipsis={{ isActive: true, line: 1 }}
        >
          e2468qdsafna@asd.comasd-2asd
        </Txt>
      </>

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
