import { Button, Divider, Layer, Skeleton, TouchableOpacity, Txt } from './package';

export default function App() {
  return (
    <Layer as='section' flex={{ align: 'center', direction: 'column', gap: 20 }} padding={{ all: 20 }}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Layer as='li' flex={{ direction: 'row', gap: 10, align: 'center' }} sizes={{ width: 'auto' }}>
          <Skeleton width={50} height={50} borderRadius={100} />

          <Layer flex={{ direction: 'column', gap: '6px' }} sizes={{ width: 'auto' }}>
            <Skeleton width={120} height={10} borderRadius={5} />
            <Skeleton width={200} height={18} borderRadius={6} />
          </Layer>
        </Layer>
      ))}

      <Divider mq={{ w438: { height: 3 } }} />

      <Layer
        flex={{ direction: 'row', gap: 10, align: 'center' }}
        sizes={{ width: 'auto' }}
        mq={{
          w438: {
            flex: { direction: 'column', gap: 10 },
          },
        }}
      >
        <Skeleton width={50} height={50} borderRadius={100} />

        <Layer flex={{ direction: 'column', gap: 4 }} mq={{ w600: { flex: { align: 'center' } } }}>
          <Txt
            txtSize={15}
            txtWeight='medium'
            mq={{
              w768: { txtSize: 16 },
              w438: { txtSize: 13 },
            }}
          >
            테스트 개발자
          </Txt>
          <Txt txtColor='#999' txtSize={13}>
            만나서 반가워용
          </Txt>

          <TouchableOpacity
            sizes={{ width: '100%' }}
            mq={{
              w768: { padding: { all: 5 }, txtSize: 12 },
              w438: { padding: { vertical: 6, horizontal: 12 }, margin: { top: 10 }, background: { fill: '#f6f7fc' } },
            }}
            onClick={() => {}}
            _hover={{ background: { fill: '#f0f0f0' } }}
          >
            더보기
          </TouchableOpacity>
        </Layer>
      </Layer>

      <Button
        borderRadius={20}
        txtSize={16}
        sizes={{ width: '100%', height: 54 }}
        mq={{
          w1080: {
            txtSize: 18,
            sizes: { width: 'auto', height: 'auto' },
            border: { stroke: 5, color: '#f6f8fc', position: 'all' },
          },
          w768: { txtSize: 22, border: { stroke: 2, color: '#000', position: 'all' } },
          w438: {
            txtSize: 15,
            backgroundFill: '#f6f8fc',
            txtColor: 'blue',
            border: { stroke: 1, color: '#b0bcd6' },
          },
        }}
      >
        제출하기
      </Button>
    </Layer>
  );
}
