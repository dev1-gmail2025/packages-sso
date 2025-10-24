import { User } from '../user/user.entities';
import { LogoutType, ResetPasswordType, ForgotPasswordType } from './auth.enum';

export interface ForgotPasswordDto {
  phone?: string;
  email?: string;
  type: ForgotPasswordType;
}

export interface GenerateTokenVerifyEmailDto {
  email: string;
  password: string;
}

export interface LoginDto {
  phone: string;
  password: string;
}

export interface LogoutDto {
  type: LogoutType;
  refreshToken?: string;
}

export interface RefreshTokenDto {
  refreshToken: string;
}

export interface RegisterDto {
  email: string;
  password: string;
}

export interface ResetPasswordDto {
  token: string;
  password: string;
  type: ResetPasswordType;
}

export interface SubscribeUnsubscribeTopicDto {
  fcmToken: string;
}

export interface VerifyOtpDto {
  phone: string;
  otp: string;
}

export interface ResponseAuth {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface ResponseFcm {
  fcmToken: string;
}

export interface TokenObject {
  token: string;
}
