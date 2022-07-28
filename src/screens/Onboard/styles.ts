import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    paddingBottom: 60,
    alignItems: 'center',
    paddingHorizontal: 24
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3FF'
  },
  title: {
    fontFamily: 'EudoxusSans-Regular',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    marginBottom: 24,
    marginTop: 50,
    color: '#03314B'
  },
  text: {
    fontFamily: 'EudoxusSans-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    color: '#8198A5',
    marginHorizontal: 24
  },
  image: {
    alignSelf: 'center'
  },
  button: {
    marginTop: 16
  }
})