import * as Font from 'expo-font'

export async function bootstrap() {
  await Font.loadAsync({
    'open-regular': require('./../assets/fonts/Oranienbaum-Regular.ttf'),
    'open-italic': require('./../assets/fonts/Rochester-Regular.ttf')
  })
}
