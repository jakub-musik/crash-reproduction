const { withAndroidManifest } = require('@expo/config-plugins')

module.exports = config => {
  return withAndroidManifest(config, async config => {
    const androidManifest = config.modResults
    const mainApplication = androidManifest.manifest.application[0]

    // Initialize provider array if it doesn't exist
    if (!mainApplication.provider) {
      mainApplication.provider = []
    }

    // Add the BlobProvider
    mainApplication.provider.push({
      $: {
        'android:name': 'com.facebook.react.modules.blob.BlobProvider',
        'android:authorities': '@string/blob_provider_authority',
        'android:exported': 'false',
      },
    })

    return config
  })
}
