import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Onboard: undefined
  Splash: undefined
  Login: undefined
  SignUp: undefined
  Secure: undefined
}

export interface RouteType<Props> {
  name: keyof RootStackParamList
  component: React.ComponentType<Props>
  options: object
}

export interface RouteTypeProps {
  route: any
  navigation: NativeStackNavigationProp<RootStackParamList> | any
}
