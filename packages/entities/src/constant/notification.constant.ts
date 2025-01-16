import { consumerConst } from '../utils';
import {
  Action,
  AppTemplate,
  SmsTemplate,
  MailTemplate,
  NotificationSent,
} from '../entities';
export const _NOTIFICATION: consumerConst<Action> = [
  'NOTIFICATION',
  '',
  Action,
];
export const _ACTION: consumerConst<Action> = [
  'NOTIFICATION',
  '_ACTION',
  Action,
];
export const _APP_TEMPLATE: consumerConst<AppTemplate> = [
  'NOTIFICATION',
  '_APP_TEMPLATE',
  AppTemplate,
];
export const _SMS_TEMPLATE: consumerConst<SmsTemplate> = [
  'NOTIFICATION',
  '_SMS_TEMPLATE',
  SmsTemplate,
];
export const _MAIL_TEMPLATE: consumerConst<MailTemplate> = [
  'NOTIFICATION',
  '_MAIL_TEMPLATE',
  MailTemplate,
];
export const _NOTIFICATION_SENT: consumerConst<NotificationSent> = [
  'NOTIFICATION',
  '_NOTIFICATION_SENT',
  NotificationSent,
];
