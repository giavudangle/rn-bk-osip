import React from "react";

import LoginScreen from './login';

import NewsScreen from './news'
import EventScreen from './event';
import ManagementEventScreen from './management-events';
import ProfileScreen from './profile';
import SettingScreen from "./setting";

// export const Login = () => <LoginScreen name="Login" />;
export const News = () => <NewsScreen name="News" />;
export const Event = () => <EventScreen name="Events" />;
export const ManagementEvent = () => <ManagementEventScreen name="QR" />;
export const Profile = () => <ProfileScreen name="Profile" />;
export const Setting = () => <SettingScreen name="Setting" />;