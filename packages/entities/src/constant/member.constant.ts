import { consumerConst } from '../utils';
import {
  GroupInfo,
  MemberInfo,
  MemberGroup,
  GroupInvitation,
} from '../entities';

export const _MEMBER: consumerConst<GroupInfo> = ['MEMBER', '', GroupInfo];
export const _GROUP_INFO: consumerConst<GroupInfo> = [
  'MEMBER',
  '_GROUP_INFO',
  GroupInfo,
];
export const _MEMBER_INFO: consumerConst<MemberInfo> = [
  'MEMBER',
  '_MEMBER_INFO',
  MemberInfo,
];
export const _MEMBER_GROUP: consumerConst<MemberGroup> = [
  'MEMBER',
  '_MEMBER_GROUP',
  MemberGroup,
];
export const _GROUP_INVITATION: consumerConst<GroupInvitation> = [
  'MEMBER',
  '_GROUP_INVITATION',
  GroupInvitation,
];
