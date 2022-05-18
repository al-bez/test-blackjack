import React, { useState } from "react";
import styled from "styled-components";
import Chat from "./chat";

export const ProfileIcon = styled(({ src, enabled, ...props }) => {
  const [className, setClassName] = useState(enabled ? "enabled-icon" : "disabled-icon");

  return (
    <button
      onClick={() => {
        const newClassName = className === "enabled-icon" ? "disabled-icon" : "enabled-icon";
        setClassName(newClassName);
      }}
      {...props}
    >
      <img className={className} src={src} alt="icon" />
    </button>
  );
})`
  min-width: 50px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #21242e;
  border-radius: 26px;
  border: none;
  cursor: pointer;

  .enabled-icon {
    filter: var(--on-filter);
  }
  .disabled-icon {
    filter: var(--off-filter);
  }

  @media screen and (max-width: 428px) {
    min-width: 30px;
    min-height: 30px;

    img {
      width: 12px !important;
      height: 12px !important;
    }
  }
`;

const ProfileButtons = styled(({ notification, messages, ...props }) => {
  return (
    <div {...props}>
      <ProfileIcon enabled={notification} src="images/icons/notification.svg" />
      <ProfileIcon enabled={messages} src="images/icons/message.svg" />
    </div>
  );
})`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const ProfileActivity = styled(({ activity, ...props }) => {
  const [activityEnabled, setActivityEnabled] = useState(activity);
  const [className, setClassName] = useState(activity ? "enabled-activity" : "disabled-activity");

  return (
    <div
      onClick={() => {
        const newClassName =
          className === "enabled-activity" ? "disabled-activity" : "enabled-activity";
        setClassName(newClassName);
        setActivityEnabled(!activityEnabled);
      }}
      {...props}
    >
      <img className={className} src="images/profile/avatar01.png" alt="avatar" />
      <ProfileIcon enabled={activityEnabled} src="images/icons/activity.svg" />
    </div>
  );
})`
  display: flex;
  align-items: center;
  background-color: #21242e;
  border-radius: 26px;
  border: 1px solid #1b1d24;
  cursor: pointer;

  .enabled-activity {
    order: 2;
  }

  .disabled-activity {
    order: -1;
  }

  @media screen and (max-width: 428px) {
    display: inline-flex;

    img {
      width: 30px;
      height: 30px;
    }
  }
`;

const ProfileSettings = styled(({ settings, ...props }) => {
  return (
    <div {...props}>
      <ProfileActivity activity={settings.activity} />
      <ProfileButtons notification={settings.notification} messages={settings.messages} />
    </div>
  );
})`
  display: flex;
  align-items: center;
  gap: 80px;
`;

const SettingsContainer = styled.div`
  background-color: #191b20;
  border-radius: 35px;
  padding: 9px 0 9px 9px;
  width: 100%;
  margin-bottom: 13px;
`;

const Profile = styled(({ profileSettings, ...props }) => {
  return (
    <div {...props}>
      <SettingsContainer>
        <ProfileSettings settings={profileSettings} />
      </SettingsContainer>
      <Chat />
    </div>
  );
})`
  position: fixed;
  right: 30px;
  top: 12px;
  margin-top: 0px;

  @media screen and (max-width: 428px) {
    display: none;
  }
`;

export default Profile;
