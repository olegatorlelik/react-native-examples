const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');
const defaultConfig = getDefaultConfig(__dirname);
const {
  resolver: {sourceExts, assetExts},
} = defaultConfig;

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = wrapWithReanimatedMetroConfig({
  resolver: {
    assetExts: (assetExts ?? []).filter(ext => ext !== 'svg'),
    sourceExts: [...(sourceExts ?? []), 'svg'],
  },
});

module.exports = mergeConfig(defaultConfig, config);
