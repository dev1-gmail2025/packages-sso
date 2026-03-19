const SIZE_LARGE = 32;
const SIZE_MEDIUM = 26;
const SIZE_SMALL = 18;
const SIZE_EXTRA_SMALL = 20;
const SIZE_AVATAR_GROUP = 80;

export const SIZE_AVATAR_CHAT_PERSON = 40;
export const SIZE_EXTRA_LARGE = 36;
export const SIZE_ONLINE_STATUS = 8;
export type SizeProps =
  | 'extra_small'
  | 'small'
  | 'medium'
  | 'large'
  | 'extra_large'
  | 'avatar_group'
  | 'online_status'
  | 'avatar_chat_person';

export const MAP_SIZE: Record<string, { width: number; height: number }> = {
  large: { width: SIZE_LARGE, height: SIZE_LARGE },
  medium: { width: SIZE_MEDIUM, height: SIZE_MEDIUM },
  small: { width: SIZE_SMALL, height: SIZE_SMALL },
  extra_small: { width: SIZE_EXTRA_SMALL, height: SIZE_EXTRA_SMALL },
  extra_large: { width: SIZE_EXTRA_LARGE, height: SIZE_EXTRA_LARGE },
  avatar_group: { width: SIZE_AVATAR_GROUP, height: SIZE_AVATAR_GROUP },
  online_status: { width: SIZE_ONLINE_STATUS, height: SIZE_ONLINE_STATUS },
  avatar_chat_person: { width: SIZE_AVATAR_CHAT_PERSON, height: SIZE_AVATAR_CHAT_PERSON },
};

export enum StatusAvatar {
  PENDING = 'Đang chờ',
  APPROVED = 'Đã phê duyệt',
  REJECTED = 'Đã từ chối',
}
