import { BaseEntity } from '../../common/interfaces/base-entity.interface';
import { PageOptionsDto } from '../../common/interfaces/page-options.interface';

import {
  Gender,
  OrgUnitStatus,
  OrgUnitType,
  PositionStatus,
  PositionSubManager,
  PositionType,
  UserBankName,
  UserCitizenIdentificationPlace,
  UserCultureLevel,
  UserEducationLevel,
  UserEthnic,
  UserLevel,
  UserMaritalStatus,
  UserMovementApproveType,
  UserMovementStatus,
  UserMovementType,
  UserOfficialStatus,
  UserPositionType,
  UserReligion,
  UserResignType,
  UserStatus,
  UserType,
} from './user.enum';

export interface Position extends BaseEntity {
  id: string;
  name: string;
  status: PositionStatus;
  type: PositionType;
  parentId: string;
  parent: Position;
  description?: string;
  children: Position[];
  isManager: boolean;
  subManager: PositionSubManager;
  task?: string;
  authority?: string;
  level?: number;
}

export interface OrgUnit extends BaseEntity {
  id: string;
  name: string;
  description: string;
  type: OrgUnitType;
  status: OrgUnitStatus;
  totalMember: number;
  parentId: string;
  parent: OrgUnit;
  children: OrgUnit[];
  managerId: string;
  manager: User;
  permission: boolean;
  projectTaskId?: string;
  divisionId?: string;
  subManagers: SubManager[];
}

export interface UserOrgUnitPosition extends BaseEntity {
  userId: string;
  user: User;
  positionId: string;
  position: Position;
  orgUnitId: string;
  orgUnit: OrgUnit;
  orgUnits: OrgUnit[];
  id: string;
  subManagers: SubManager[];
  positionType: UserPositionType;
  manager: string;
  isOldData?: boolean;
  orgUnitData?: OrgUnit;
}
export interface avatarUser {
  id: string;
  name: string;
  url: string;
}
export interface User extends BaseEntity {
  code: string;
  name: string;
  gender: Gender;
  dateOnboard: Date;
  email: string;
  internalPhones: string[];
  phone: string;
  level: UserLevel;
  birthday: Date;
  address: string;
  tempAddress: string;
  educationLevel: UserEducationLevel;
  major: string;
  cultureLevel: UserCultureLevel;
  dateWorkEnd: Date;
  resignType: UserResignType;
  resignReason: string;
  cccd: string;
  citizenIdentificationDate: Date;
  citizenIdentificationPlace: UserCitizenIdentificationPlace;
  passportNumber: string;
  passportDate: Date;
  passportPlace: string;
  passportValidityDate: Date;
  ethnicity: UserEthnic;
  religion: UserReligion;
  maritalStatus: UserMaritalStatus;
  taxCode: string;
  socialInsuranceNumber: string;
  bankAccountNumber: string;
  bankBranch: string;
  bankName: UserBankName;
  tenure: number;
  relativeName: string;
  relativePhone: string;
  url: string;
  type: UserType;
  status: UserStatus;
  password: string;
  officialStatus: UserOfficialStatus;
  userOrgUnitPositions: UserOrgUnitPosition[];
  managedOrgUnits: OrgUnit[];
  userApprovers: UserMovementApprover[];
  userMovements: UserMovement[];
  userNotifications: UserMovementNotify[];
  subManagers: SubManager[];

  //Bổ sung từ FE
  managers?: {
    [key: string]: OrgUnitData;
  };
  orgUnits?: OrgUnit[];
  permission: boolean;
  position?: Position;
  numberPermission?: number;
  codeClock: string;
}
interface Manager {
  orgUnitId: string;
  orgUnitName: string;
  managerId: string;
  managerName: string;
  managerEmail: string;
  level: number;
  url: string;
  type: number;
}

interface OrgUnitData {
  orgUnitName: string;
  positionName: string;
  nearestManagers: Manager[];
}

interface PositionValueDto {
  id: string;
  orgName: string;
  positionName: string;
}
export interface OrgUnitValueDto {
  id: string;
  orgName: string;
  positionName: string;
  divisionName: string;
  departmentName: string;
  partName: string;
  teamsName: string[];
}

export interface MovementValueDto {
  position?: PositionValueDto;
  orgUnit?: OrgUnitValueDto;
  user?: User;
}

export interface UserMovement extends BaseEntity {
  oldValue: MovementValueDto;
  newValue?: MovementValueDto;
  reason: string;
  reasonReject: string;
  dateAppointment: Date;
  type: UserMovementType;
  userId: string;

  userMovementApprovers: UserMovementApprover[];
  orgUnitId: string;
  orgUnit: OrgUnit;
  positionId: string;
  position: Position;
  user: User;
  status?: UserMovementStatus;
  statusMovement?: UserMovementStatus;
  createdBy: {
    id: string;
    name: string;
    code?: string;
    url: string;
    userOrgUnitPositions: UserOrgUnitPosition[];
  };
}
export interface UserMovementDetail extends User {
  orgUnit: OrgUnit;
}

export interface UserMovementApprover extends BaseEntity {
  status: UserMovementStatus;
  statusMovement: UserMovementStatus;
  reasonReject: string;
  approvedAt: Date;
  userMovementId: string;
  userMovement: UserMovement;
  approveId: string;
  approver: User;
  url: string;
  isMe?: boolean;
  approvers: UserMovementApprover[];
  name: string;
  userOrgUnitPositions: UserOrgUnitPosition[];
}

export interface UserMovementApproverDetail {
  id: string;
  status: string;
  approveType: UserMovementApproveType;
  reasonReject: string | null;
  approvedAt: string | null;
  approver: {
    id: string;
    code: string;
    name: string;
    url: string | null;
    userOrgUnitPositions?: UserOrgUnitPosition[];
  };
}

export interface UserMovementOrgUnitDetail {
  id: string;
  orgName: string;
  partName?: string;
  teamsName?: string[];
  divisionName?: string;
  positionName?: string;
  departmentName?: string;
}

export interface UserMovementPositionDetail {
  id: string;
  orgName: string;
  positionName: string;
}

export interface UserMovementOldValueDetail {
  orgUnit: UserMovementOrgUnitDetail;
  position: UserMovementPositionDetail;
  user: User;
  subManagers: SubManager[];
}

export interface UserMovementNewOrgUnit {
  id: string;
  createdById: string | null;
  updatedById: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  name: string;
  description: string;
  type: number;
  status: string;
  totalMember: number;
  parentId: string | null;
  managerId: string | null;
}

export interface UserMovementOrgUnitSimple {
  id: string;
  name: string;
  type: number;
}

export interface UserMovementPositionSimple {
  id: string;
  name: string;
}

export interface UserMovementDetailApi {
  id: string;
  type: string;
  oldValue: UserMovementOldValueDetail;
  reason: string;
  reasonReject?: string | null;
  rejectionReason?: string | null;
  status: UserMovementStatus;
  dateAppointment: string;
  user: User;
  orgUnit: UserMovementOrgUnitSimple;
  position: UserMovementPositionSimple;
  createdBy: User;
  approvers: UserMovementApproverDetail[];
  newValue: UserMovementNewOrgUnit[];
  approveId: string;
  approverStatus: UserMovementStatus;
  manager: boolean;
  newValueHistory: UserMovementOldValueDetail;
  file: string;
  createdAt: string;
  cancelledValue?: User;
  cancelledAt?: Date;
  updatedAt?: Date;
}

export interface UserHistoryData {
  id: string;
  code: string;
  name: string;
  userMovements: UserMovement[];
}

export interface UserByUnit extends PageOptionsDto {
  isRelations: boolean;
  orgUnitIds: string[];
}
export interface UserMovementNotify extends PageOptionsDto {
  userMovementId: string;
  userIds: string[];
}
export interface SubManager {
  id?: string;
  name?: string;
  type?: number;
  orgUnitId?: string;
  orgUnitParentId?: string;
  orgUnit?: OrgUnit;
  user?: User;
}

export interface UserHistoryItem {
  id: string;
  updatedAt: string;
  createdBy: {
    id: string;
    name: string;
    url: string;
  };
}

export interface UserMovementHistoryData {
  userMovementHistory: UserHistoryItem;
  changes: UserMovementHistoryChange[];
}

export interface UserMovementHistoryChange {
  field: string;
  label: string;
  reasonOld: string;
  reasonNew: string;
  dateAppointmentOld: string;
  dateAppointmentNew: string;
  fileOld: string;
  fileNew: string;
}

export interface UserInformationHistoryChange {
  field: string;
  old: string;
  new: string;
}

export interface UserInformationHistoryData {
  userHistory: UserHistoryItem;
  changes: UserInformationHistoryChange[];
}
