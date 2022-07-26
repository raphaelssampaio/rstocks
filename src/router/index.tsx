import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList, RouteType, RouteTypeProps } from './types'
import { LoginRouteNames, OnboardRouteNames } from './routeNames'
import Splash from '@features/Splash'
import Onboard from '@features/Onboard'
import Login from '@features/Login'
import SignUp from '@features/SignUp'
import { navigationRef } from './NavigationService'


const Stack = createNativeStackNavigator<RootStackParamList>()

const noHeader = { headerShown: false, animation: 'fade' }

const loginStack: RouteType<RouteTypeProps>[] = [
  { name: LoginRouteNames.SPLASH_SCREEN, component: Splash, options: noHeader },
  { name: LoginRouteNames.LOGIN_SCREEN, component: Login, options: noHeader },

]

const onboardStack: RouteType<RouteTypeProps>[] = [
  { name: OnboardRouteNames.ONBOARD_SCREEN, component: Onboard, options: noHeader },
  { name: OnboardRouteNames.SIGN_UP, component: SignUp, options: noHeader }
]

const generateStack = (stackArray: RouteType<RouteTypeProps>[]) => (
  stackArray.map((item, index) => (
    <Stack.Screen name={item.name} component={item.component} key={index} options={item.options} />
  ))
)

export default function Router() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={LoginRouteNames.SPLASH_SCREEN}>
        {generateStack(loginStack)}
        {generateStack(onboardStack)}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

