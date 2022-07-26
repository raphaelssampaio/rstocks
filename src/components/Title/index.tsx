import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

interface ITitleProps {
  title: string
  text: string
}

export default function Title(props: ITitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}
