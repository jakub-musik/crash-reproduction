import { CapsuleMobile, Environment } from '@usecapsule/react-native-wallet'

const apiKey = process.env.EXPO_PUBLIC_CAPSULE_API_KEY

if (!apiKey) {
  throw new Error('Missing Capsule API Key')
}

// eslint-disable-next-line functional/no-let -- singleton
let globalCapsule: null | CapsuleMobile = null

export const getCapsule = async (source: string) => {
  console.log('getCapsule', source)
  if (!globalCapsule) {
    globalCapsule = new CapsuleMobile(
      Environment.BETA,
      apiKey,
      undefined,
      {
        disableWorkers: false,
        // supportedWalletTypes: {
        //   [WalletType.EVM]: true,
        // },
      },
    )

    await globalCapsule.init()
  }

  return globalCapsule
}
