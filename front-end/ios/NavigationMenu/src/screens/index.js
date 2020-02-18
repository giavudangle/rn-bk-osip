import React from "react";

import LoginScreen from './login';

import NewsScreen from './news'
import EventScreen from './event';
import RegisterEventScreen from './event-register';
import ManagementEventScreen from './management-events';
import ProfileScreen from './profile';
import SettingScreen from "./setting";

export const Login = (navigation) => <LoginScreen {...navigation} name="Login" />;
export const News = (navigation) => <NewsScreen {...navigation} name="News" />;
export const Event = (navigation) => <EventScreen {...navigation} name="Events" />;
export const RegisterEvent = (navigation) => <RegisterEventScreen {...navigation} name="RegisterEvents" />;
export const ManagementEvent = (navigation) => <ManagementEventScreen {...navigation} name="QR" />;
export const Profile = (navigation) => <ProfileScreen {...navigation} name="Profile" />;
export const Setting = (navigation) => <SettingScreen {...navigation} name="Setting" />;