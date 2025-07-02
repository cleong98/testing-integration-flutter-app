import * as React from 'react';

import { ExpoFlutterBridgeViewProps } from './ExpoFlutterBridge.types';

export default function ExpoFlutterBridgeView(props: ExpoFlutterBridgeViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
