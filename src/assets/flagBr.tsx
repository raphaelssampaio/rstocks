import React from 'react'
import Svg, { G, Path, Circle, SvgProps } from 'react-native-svg'

export default function FlagBr(props: SvgProps) {
  return (
    <Svg
      width={512}
      height={336}
      viewBox='0 0 512 336'
      {...props}
    >
      <G fill='none'>
        <Path
          d='M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z'
          fill='#73AF00'
        />
        <Path
          d='M251.41 47.208L65.354 160.459c-5.651 3.439-5.651 11.641 0 15.081L251.41 288.792a8.828 8.828 0 009.18 0l186.057-113.251c5.651-3.439 5.651-11.641 0-15.081L260.59 47.208a8.828 8.828 0 00-9.18 0z'
          fill='#FFE15A'
        />
        <Circle fill='#41479B' cx={256} cy={168} r={70.621} />
        <Path
          d='M195.401 131.873a70.117 70.117 0 00-7.605 18.077c39.149-2.946 97.062 8.006 133.922 43.773a70.114 70.114 0 004.59-19.522c-38.061-32.033-90.68-43.424-130.907-42.328zm63.524 60.226l1.88 5.638 5.943.046c.769.006 1.088.988.47 1.445l-4.781 3.531 1.793 5.666c.232.734-.604 1.341-1.229.893l-4.835-3.456-4.835 3.456c-.626.448-1.461-.159-1.229-.893l1.793-5.666-4.781-3.531c-.619-.457-.3-1.439.469-1.445l5.943-.046 1.88-5.638c.243-.73 1.275-.73 1.519 0zm23.099 14.585l.809 2.426 2.558.02a.345.345 0 01.202.622l-2.058 1.519.771 2.439a.344.344 0 01-.529.384l-2.081-1.487-2.081 1.487a.344.344 0 01-.529-.384l.771-2.439-2.058-1.519a.345.345 0 01.202-.622l2.558-.02.809-2.426a.346.346 0 01.656 0zm-33.086-25.295l.809 2.426 2.558.02a.345.345 0 01.202.622l-2.058 1.519.771 2.439a.344.344 0 01-.529.384l-2.081-1.487-2.081 1.487a.344.344 0 01-.529-.384l.771-2.439-2.058-1.519a.345.345 0 01.202-.622l2.558-.02.809-2.426a.346.346 0 01.656 0zm-44.808-2.942l.809 2.426 2.558.02a.345.345 0 01.202.622l-2.058 1.519.771 2.439a.344.344 0 01-.529.384l-2.081-1.487-2.081 1.487a.344.344 0 01-.529-.384l.771-2.439-2.058-1.519a.345.345 0 01.202-.622l2.558-.02.809-2.426c.107-.314.551-.314.656 0zm37.484 27.399l.809 2.426 2.558.02a.345.345 0 01.202.622l-2.058 1.519.771 2.439a.344.344 0 01-.529.384l-2.081-1.487-2.081 1.487a.344.344 0 01-.529-.384l.771-2.439-2.058-1.519a.345.345 0 01.202-.622l2.558-.02.809-2.426c.107-.313.552-.313.656 0zm-20.624-29.092l.662 1.984 2.092.017c.27.002.383.348.166.509l-1.683 1.242.631 1.994a.282.282 0 01-.433.314l-1.702-1.216-1.702 1.216a.282.282 0 01-.433-.314l.631-1.994-1.683-1.242a.282.282 0 01.166-.509l2.092-.017.662-1.984a.281.281 0 01.534 0zm62.829-40.961l.828 2.482 2.616.02a.352.352 0 01.206.636l-2.104 1.554.789 2.495a.352.352 0 01-.541.393l-2.129-1.522-2.129 1.522a.352.352 0 01-.541-.393l.789-2.495-2.104-1.554a.352.352 0 01.206-.636l2.616-.02.828-2.482a.353.353 0 01.67 0zm-76.807 28.823l.662 1.984 2.092.017c.27.002.383.348.166.509l-1.683 1.242.631 1.994a.282.282 0 01-.433.314l-1.702-1.216-1.702 1.216a.282.282 0 01-.433-.314l.631-1.994-1.683-1.242a.282.282 0 01.166-.509l2.092-.017.662-1.984a.281.281 0 01.534 0zm10.1 27.964l1.002 3.006 3.168.024c.41.003.58.526.25.77l-2.549 1.882.956 3.02a.427.427 0 01-.655.476l-2.578-1.842-2.578 1.842a.427.427 0 01-.655-.476l.956-3.02-2.549-1.882a.427.427 0 01.25-.77l3.168-.024 1.002-3.006c.133-.388.683-.388.812 0zm77.791 14.734l.63 1.891 1.993.015a.268.268 0 01.158.484l-1.603 1.184.601 1.9c.078.246-.202.449-.413.299l-1.621-1.159-1.622 1.159a.269.269 0 01-.413-.299l.601-1.9-1.603-1.184a.268.268 0 01.158-.484l1.993-.015.63-1.891c.083-.245.43-.245.511 0zm6.974-14.43l.809 2.426 2.558.02a.345.345 0 01.202.622l-2.058 1.519.771 2.439a.344.344 0 01-.529.384l-2.081-1.487-2.081 1.487a.344.344 0 01-.529-.384l.771-2.439-2.058-1.519a.345.345 0 01.202-.622l2.558-.02.809-2.426a.346.346 0 01.656 0z'
          fill='#F5F5F5'
        />
      </G>
    </Svg>
  )
}
