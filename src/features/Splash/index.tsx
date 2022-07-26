import React from 'react'
import { View, Text } from 'react-native'
import SplashSquares from '@assets/splashSquares'
import Icon from '@assets/icon'
import styles from './styles'
import { useEffect } from 'react'
import { OnboardRouteNames } from '../../router/routeNames'
import NavigationService from '@router/NavigationService'

export default function Splash() {
  useEffect(() => {
    setTimeout(() => {
      NavigationService.navigate(OnboardRouteNames.ONBOARD_SCREEN)
    }, 4000)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon />
        <Text style={styles.title}>RStocks</Text>
      </View>
      <SplashSquares style={styles.image} />
    </View>
  )
}