const { withDangerousMod } = require('@expo/config-plugins')
const fs = require('fs')
const path = require('path')
const { parseStringPromise, Builder } = require('xml2js')

module.exports = config => {
  return withDangerousMod(config, [
    'android',
    async config => {
      const manifestPath = path.join(
        config.modRequest.platformProjectRoot,
        'app',
        'src',
        'debug',
        'AndroidManifest.xml',
      )
      const manifestContents = await fs.promises.readFile(manifestPath, 'utf8')
      const androidManifest = await parseStringPromise(manifestContents)

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

      const builder = new Builder()
      const newManifestContents = builder.buildObject(androidManifest)
      await fs.promises.writeFile(manifestPath, newManifestContents)

      return config
    },
  ])
}
