import { CommonActions, createNavigationContainerRef } from '@react-navigation/native'
import { RootStackParamList } from './types'

export const navigationRef = createNavigationContainerRef<RootStackParamList>()

function navigate<RouteName extends keyof RootStackParamList>(...args: undefined extends RootStackParamList[RouteName] ? [screen: RouteName] | [screen: RouteName, params: RootStackParamList[RouteName]] : [screen: RouteName, params: RootStackParamList[RouteName]]): void {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...args)
  }
}

function reset<RouteName extends keyof RootStackParamList>(...args: undefined extends RootStackParamList[RouteName] ? [screen: RouteName] | [screen: RouteName, params: RootStackParamList[RouteName]] : [screen: RouteName, params: RootStackParamList[RouteName]]): void {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: args[0], params: args[1] }
        ]
      })
    )
  }
}

function goBack(): void {
  if (navigationRef.canGoBack() && navigationRef.isReady()) {
    navigationRef.goBack()
  }
}

export default {
  navigate,
  reset,
  goBack
}
