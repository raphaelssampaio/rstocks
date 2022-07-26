import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg'

export default function Icon(props: SvgProps) {
  return (
    <Svg
      width={154}
      height={137}
      viewBox='0 0 154 137'
      fill='none'
      {...props}
    >
      <G clipPath='url(#clip0_2_1257)'>
        <Path
          d='M153.7 37.2V118c0 3.3-.9 6.4-2.5 9.1-3.1 5.2-8.8 8.7-15.3 8.7H25.1c-18.3 0-25.8-23.6-10.7-34.1l31.9-22.2 21.6-15 34.6-24.1L127 23.2c11.3-7.8 26.7.2 26.7 14z'
          fill='#3500D4'
        />
        <Path
          opacity={0.24}
          d='M153.7 37.2V118c0 3.3-.9 6.4-2.5 9.1-3.1 5.2-8.8 8.7-15.3 8.7H74.3c-16.8-13.1-27.7-33.4-28-56.3l21.6-15 34.6-24.1L127 23.2c11.3-7.8 26.7.2 26.7 14z'
          fill='#E9E9FB'
        />
        <Path
          opacity={0.24}
          d='M153.7 37.2v74.7c-29.7-9-51.3-36.6-51.3-69.2v-2.3L127 23.2c11.3-7.8 26.7.2 26.7 14z'
          fill='#F61C7A'
        />
        <Path
          d='M62.5 100.8H43.9c-1.6 0-2.9 1.3-2.9 2.9v33h24.5v-33c0-1.6-1.4-2.9-3-2.9zM96.9 89.7H78.3c-1.6 0-2.9 1.3-2.9 2.9v44.1h24.5v-44c-.1-1.7-1.4-3-3-3zM131.2 77.7h-18.6c-1.6 0-2.9 1.3-2.9 2.9v56.1h24.5v-56c-.1-1.7-1.4-3-3-3z'
          fill='#fff'
        />
        <Path
          d='M118.6 1.6L95.4 0l6.1 8.5C92.5 16.3 0 90.2 0 90.2l107-73.9 6 8.4 5.6-23.1z'
          fill='#3500D4'
        />
      </G>
      <Defs>
        <ClipPath id='clip0_2_1257'>
          <Path fill='#fff' d='M0 0H153.7V136.7H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  )
}