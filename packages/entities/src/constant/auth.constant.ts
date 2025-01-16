import { consumerConst } from '../utils';
import {
  Account,
  AccessLog,
  AccountActivation,
  AccountChangeLog,
  AccountDetail,
  AccountDevice,
  AccountFingerprint,
  AccountSetting,
  AccountToken,
  Permission,
  PermissionGroup,
  Role,
  RolePermission,
  SystemPermission,
} from '../entities/';

export const _AUTH: consumerConst<Account> = ['AUTH', '', Account];
export const _ROLE: consumerConst<Role> = ['AUTH', '_ROLE', Role];
export const _ACCOUNT: consumerConst<Account> = ['AUTH', '_ACCOUNT', Account];
export const _ACCESS_LOG: consumerConst<AccessLog> = [
  'AUTH',
  '_ACCESS_LOG',
  AccessLog,
];
export const _PERMISSION: consumerConst<Permission> = [
  'AUTH',
  '_PERMISSION',
  Permission,
];
export const _ACCOUNT_TOKEN: consumerConst<AccountToken> = [
  'AUTH',
  '_ACCOUNT_TOKEN',
  AccountToken,
];
export const _ACCOUNT_DETAIL: consumerConst<AccountDetail> = [
  'AUTH',
  '_ACCOUNT_DETAIL',
  AccountDetail,
];
export const _ACCOUNT_DEVICE: consumerConst<AccountDevice> = [
  'AUTH',
  '_ACCOUNT_DEVICE',
  AccountDevice,
];
export const _ROLE_PERMISSION: consumerConst<RolePermission> = [
  'AUTH',
  '_ROLE_PERMISSION',
  RolePermission,
];
export const _ACCOUNT_SETTING: consumerConst<AccountSetting> = [
  'AUTH',
  '_ACCOUNT_SETTING',
  AccountSetting,
];
export const _PERMISSION_GROUP: consumerConst<PermissionGroup> = [
  'AUTH',
  '_PERMISSION_GROUP',
  PermissionGroup,
];
export const _ACCOUNT_CHANGE_LOG: consumerConst<AccountChangeLog> = [
  'AUTH',
  '_ACCOUNT_CHANGE_LOG',
  AccountChangeLog,
];
export const _SYSTEM_PERMISSION: consumerConst<SystemPermission> = [
  'AUTH',
  '_SYSTEM_PERMISSION',
  SystemPermission,
];
export const _ACCOUNT_ACTIVATION: consumerConst<AccountActivation> = [
  'AUTH',
  '_ACCOUNT_ACTIVATION',
  AccountActivation,
];
export const _ACCOUNT_FINGERPRINT: consumerConst<AccountFingerprint> = [
  'AUTH',
  '_ACCOUNT_FINGERPRINT',
  AccountFingerprint,
];
