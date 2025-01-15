import { ImageRequireSource } from 'react-native'

declare global {
  interface NodeRequire {
    (id: `${string}.png`): ImageRequireSource
    (id: string): any
  }
}
