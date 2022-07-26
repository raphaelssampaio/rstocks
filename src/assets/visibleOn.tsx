import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export default function VisibleOn(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.982 21C6.484 21 2 16.513 2 12.018 2 7.521 6.483 3 11.982 3 17.483 3 22 7.513 22 12.018 22 16.521 17.482 21 11.982 21zm.01-4a5 5 0 010-10C14.74 7 17 9.26 17 12.009 17 14.759 14.74 17 11.991 17z'
        fill='#9EA3AE'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9 12.005A3 3 0 0011.995 15 3.01 3.01 0 0015 12.005 3.018 3.018 0 0011.995 9 3.002 3.002 0 009 12.005z'
        fill='#121826'
      />
    </Svg>
  )
}
