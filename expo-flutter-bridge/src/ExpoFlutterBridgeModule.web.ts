// import { registerWebModule, NativeModule } from 'expo';

// import { ExpoFlutterBridgeModuleEvents } from './ExpoFlutterBridge.types';

// class ExpoFlutterBridgeModule extends NativeModule<ExpoFlutterBridgeModuleEvents> {
//   PI = Math.PI;
//   async setValueAsync(value: string): Promise<void> {
//     this.emit('onChange', { value });
//   }
//   hello() {
//     return 'Hello world! 👋';
//   }
// }

// export default registerWebModule(ExpoFlutterBridgeModule, 'ExpoFlutterBridgeModule');

import { requireNativeModule } from "expo";

export interface ExpoFlutterBridgeModule {
  openCounter:() => void;
}

const FlutterBridge = requireNativeModule<ExpoFlutterBridgeModule>('ExpoFlutterBridge');

export default FlutterBridge;

