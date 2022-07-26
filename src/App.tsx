import { NativeBaseProvider } from 'native-base'
import React from 'react'
import Router from './router'

export default function App() {
  return (
    <NativeBaseProvider>
      <Router />
    </NativeBaseProvider>
  )
}