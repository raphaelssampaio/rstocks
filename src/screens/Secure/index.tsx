import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import { OnboardRouteNames } from '../../router/routeNames'
import NavigationService from '@router/NavigationService'
import Title from '@components/Title'
import SecComponent from '@components/SecComponent'
import AppButton from '@components/Button'

export default function Secure() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SecComponent />
        <Title
          title={`Secure your account`}
          text={`One way we keep your account secure is\n with 2-step verification, which requires\nyour phone number.`}
          textStyles={styles.text}
          titleStyles={styles.text}
        />
      </View>
      <AppButton
        title='Continue'
        onPress={() => { }}
      />
    </View>
  )
}