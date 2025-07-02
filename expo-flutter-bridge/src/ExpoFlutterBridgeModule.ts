

// declare class ExpoFlutterBridgeModule extends NativeModule<ExpoFlutterBridgeModuleEvents> {
//   PI: number;
//   hello(): string;
//   setValueAsync(value: string): Promise<void>;
// }


// // This call loads the native module object from the JSI.
// export default requireNativeModule<ExpoFlutterBridgeModule>('ExpoFlutterBridge');

import { requireNativeModule } from "expo";

export interface ExpoFlutterBridgeModule {
  openCounter:() => void;
}

const FlutterBridge = requireNativeModule<ExpoFlutterBridgeModule>('ExpoFlutterBridge');

export default FlutterBridge;
