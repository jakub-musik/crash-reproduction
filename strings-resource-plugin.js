const { withStringsXml } = require('@expo/config-plugins')
const appConfig = require('./app.json')

module.exports = config => {
  return withStringsXml(config, async config => {
    const strings = config.modResults

    // Ensure resources exists
    if (!strings.resources) {
      strings.resources = {}
    }

    // Ensure string array exists
    if (!strings.resources.string) {
      strings.resources.string = []
    }

    // Add the blob provider authority string
    strings.resources.string.push({
      $: {
        name: 'blob_provider_authority',
      },
      _: appConfig.expo.android.package,
    })

    return config
  })
}
