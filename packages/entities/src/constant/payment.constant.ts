import { consumerConst } from '../utils';
import { PaymentVnpayLog, PaymentVnpayToken } from '../entities';

export const _PAYMENT: consumerConst<PaymentVnpayLog> = [
  'PAYMENT',
  '',
  PaymentVnpayLog,
];
export const _PAYMENT_VNPAY_LOG: consumerConst<PaymentVnpayLog> = [
  'PAYMENT',
  '_PAYMENT_VNPAY_LOG',
  PaymentVnpayLog,
];
export const _PAYMENT_VNPAY_TOKEN: consumerConst<PaymentVnpayToken> = [
  'PAYMENT',
  '_PAYMENT_VNPAY_TOKEN',
  PaymentVnpayToken,
];
