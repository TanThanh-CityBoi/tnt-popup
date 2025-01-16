import { consumerConst } from '../utils';
import { GatewayInfo, DeviceInfo, GatewayToken } from '../entities';

export const _DEVICE: consumerConst<DeviceInfo> = [
  'DEVICE',
  '_DEVICE',
  DeviceInfo,
];
export const _DEVICE_INFO: consumerConst<DeviceInfo> = [
  'DEVICE',
  '_DEVICE_INFO',
  DeviceInfo,
];
export const _GATEWAY_INFO: consumerConst<GatewayInfo> = [
  'DEVICE',
  '_GATEWAY_INFO',
  GatewayInfo,
];
export const _GATEWAY_TOKEN: consumerConst<GatewayToken> = [
  'DEVICE',
  '_GATEWAY_TOKEN',
  GatewayInfo,
];
