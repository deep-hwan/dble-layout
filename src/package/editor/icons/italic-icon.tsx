/** @jsxImportSource @emotion/react */

export function ItalicIcon({ fill = '#555' }: { fill?: string }) {
  return (
    <svg width='12' height='16' viewBox='0 0 12 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_122_70)'>
        <path
          d='M11.6 0H2.4C2.18 0 2 0.18 2 0.4V2.2C2 2.64 2.36 3 2.8 3H5.41L3.53 13H0.8C0.36 13 0 13.36 0 13.8V15.6C0 15.82 0.18 16 0.4 16H9.6C9.82 16 10 15.82 10 15.6V13.8C10 13.36 9.64 13 9.2 13H6.59L8.47 3H11.21C11.65 3 12.01 2.64 12.01 2.2V0.4C12.01 0.18 11.83 0 11.61 0H11.6Z'
          fill={fill}
          css={{
            transition: '0.25s ease-in-out',
          }}
        />
      </g>
      <defs>
        <clipPath id='clip0_122_70'>
          <rect width='12' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}
