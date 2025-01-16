import { consumerConst } from '../utils';
import {
  AccessRule,
  PaymentPlan,
  PointPackage,
  AccessRuleGroup,
  PaymentPlanGroup,
  PaymentPlanMethod,
  PointPackageMethod,
  AccessRuleCondition,
} from '../entities';

export const _GLOBAL: consumerConst<AccessRule> = ['GLOBAL', '', AccessRule];
export const _ACCESS_RULE: consumerConst<AccessRule> = [
  'GLOBAL',
  '_ACCESS_RULE',
  AccessRule,
];
export const _PAYMENT_PLAN: consumerConst<PaymentPlan> = [
  'GLOBAL',
  '_PAYMENT_PLAN',
  PaymentPlan,
];
export const _POINT_PACKAGE: consumerConst<PointPackage> = [
  'GLOBAL',
  '_POINT_PACKAGE',
  PointPackage,
];
export const _ACCESS_RULE_GROUP: consumerConst<AccessRuleGroup> = [
  'GLOBAL',
  '_ACCESS_RULE_GROUP',
  AccessRuleGroup,
];
export const _PAYMENT_PLAN_GROUP: consumerConst<PaymentPlanGroup> = [
  'GLOBAL',
  '_PAYMENT_PLAN_GROUP',
  PaymentPlanGroup,
];
export const _PAYMENT_PLAN_METHOD: consumerConst<PaymentPlanMethod> = [
  'GLOBAL',
  '_PAYMENT_PLAN_METHOD',
  PaymentPlanMethod,
];
export const _POINT_PACKAGE_METHOD: consumerConst<PointPackageMethod> = [
  'GLOBAL',
  '_POINT_PACKAGE_METHOD',
  PointPackageMethod,
];
export const _ACCESS_RULE_CONDITION: consumerConst<AccessRuleCondition> = [
  'GLOBAL',
  '_ACCESS_RULE_CONDITION',
  AccessRuleCondition,
];
