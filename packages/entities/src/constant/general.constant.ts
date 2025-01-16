import { consumerConst } from '../utils';
import {
  City,
  Club,
  Country,
  District,
  PaymentMethod,
  GeneralSetting,
  PaymentMethodGroup,
} from '../entities';

export const _GENERAL: consumerConst<City> = ['GENERAL', '', City];
export const _CITY: consumerConst<City> = ['GENERAL', '_CITY', City];
export const _CLUB: consumerConst<Club> = ['GENERAL', '_CLUB', Club];
export const _COUNTRY: consumerConst<Country> = [
  'GENERAL',
  '_COUNTRY',
  Country,
];
export const _DISTRICT: consumerConst<District> = [
  'GENERAL',
  '_DISTRICT',
  District,
];
export const _PAYMENT_METHOD: consumerConst<PaymentMethod> = [
  'GENERAL',
  '_PAYMENT_METHOD',
  PaymentMethod,
];
export const _GENERAL_SETTING: consumerConst<GeneralSetting> = [
  'GENERAL',
  '_GENERAL_SETTING',
  GeneralSetting,
];
export const _PAYMENT_METHOD_GROUP: consumerConst<PaymentMethodGroup> = [
  'GENERAL',
  '_PAYMENT_METHOD_GROUP',
  PaymentMethodGroup,
];
