import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import AppButton from '@components/Button'
import RedButton from '@components/RedButton'
import Onboard1 from '@assets/onboard1'
import Onboard2 from '@assets/onboard2'

export default function Onboard() {
  const [screen, setScreen] = React.useState(1)

  const handleScreen = () => {
    if (screen === 1) {
      setScreen(2)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {screen === 1 && (
          <>
            <Onboard1 />
            <Text style={styles.title}>{`Buy & Trade Top Stock`}</Text>
          </>
        )}
        {screen === 2 && (
          <>
            <Onboard2 />
            <Text style={styles.title}>Get Started with Tradebase</Text>
          </>
        )}
        <Text style={styles.text}>{`A place that provides you with the world's top stocks that you can buy and trade`}</Text>
      </View>
      <AppButton title={screen === 1 ? 'Next' : 'Get Started'} onPress={handleScreen} />
      {screen === 2 && (
        <RedButton title='Sign in' onPress={handleScreen} style={styles.button} />
      )}
    </View>
  )
}