import {
  GetListNotificationDto,
  GetListNotificationSettingDto,
  UpdateNotificationDto,
  UpdateNotificationSettingDto,
} from './notification.interface';
import { Notification, NotificationSetting } from './notification.entities';
import { ResList } from '../../common/interfaces/res-list.interface';
import { axiosRequestOffice } from '../../common/config/axios.config';

export interface ResSubscribeTopic {
  fcmToken: string;
}

export const updateNotification = async (body: UpdateNotificationDto) =>
  await axiosRequestOffice.put('notification', body);

export const getListNotification = async (params: GetListNotificationDto): Promise<ResList<Notification>> =>
  await axiosRequestOffice.get('notification', { params });

export const updateNotificationSetting = async (id: string, body: UpdateNotificationSettingDto) =>
  await axiosRequestOffice.put('notification-setting/' + id, body);

export const getListNotificationSetting = async (
  params: GetListNotificationSettingDto,
): Promise<ResList<NotificationSetting>> =>
  await axiosRequestOffice.get('notification-setting', {
    params,
  });

export const subscribeTopicByToken = async (token: string): Promise<ResSubscribeTopic> =>
  await axiosRequestOffice.post('notification/subscribe-topic', { token });

export const unSubscribeTopicByToken = async (token: string) =>
  await axiosRequestOffice.post('notification/un-subscribe-topic', { token });
