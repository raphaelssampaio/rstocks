import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

interface ITitleProps {
  title: string
  text: string
  textStyles?: object
  titleStyles?: object
}

export default function Title(props: ITitleProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, props.titleStyles]}>{props.title}</Text>
      <Text style={[styles.text, props.textStyles]}>{props.text}</Text>
    </View>
  )
}
