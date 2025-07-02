import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoFlutterBridgeViewProps } from './ExpoFlutterBridge.types';

const NativeView: React.ComponentType<ExpoFlutterBridgeViewProps> =
  requireNativeView('ExpoFlutterBridge');

export default function ExpoFlutterBridgeView(props: ExpoFlutterBridgeViewProps) {
  return <NativeView {...props} />;
}
