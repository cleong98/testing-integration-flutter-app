// Reexport the native module. On web, it will be resolved to ExpoFlutterBridgeModule.web.ts
// and on native platforms to ExpoFlutterBridgeModule.ts
export * from './ExpoFlutterBridge.types';
export { default } from './ExpoFlutterBridgeModule';
export { default as ExpoFlutterBridgeView } from './ExpoFlutterBridgeView';
