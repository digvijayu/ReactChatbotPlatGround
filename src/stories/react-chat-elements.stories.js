import React from "react";
import { action } from "@storybook/addon-actions";
import {
  ChatItem,
  MessageBox,
  SystemMessage,
  MessageList,
  ChatList,
  Input,
  Button,
  Popup,
  SideBar,
  Navbar,
  Dropdown,
  Avatar,
  LocationMessage,
  SpotifyMessage,
  MeetingItem,
  MeetingList,
} from "react-chat-elements";
import "react-chat-elements/dist/main.css";

export default {
  title: "react-chat-elements",
};

const imageSrc = "https://loremflickr.com/32/32";

const ChatItemTemplate = (args) => (
  <ChatItem {...args} onClick={action("clicked")} />
);
export const ChatItemStory = ChatItemTemplate.bind({});
ChatItemStory.args = {
  avatar: imageSrc,
  alt: "Reactjs",
  title: "Facebook",
  subtitle: "What are you doing?",
  date: new Date(),
  unread: 0,
};

const MessageBoxTemplate = (args) => <MessageBox {...args} />;
export const MessageBoxStory = MessageBoxTemplate.bind({});
MessageBoxStory.args = {
  position: "left",
  type: "photo",
  text: "react.svg",
  data: {
    uri: imageSrc,
    status: {
      click: false,
      loading: 0,
    },
  },
};

const SystemMessageTemplate = (args) => <SystemMessage {...args} />;
export const SystemMessageStory = SystemMessageTemplate.bind({});
SystemMessageStory.args = {
  text: "end of conversation",
};

const MessageListTemplate = (args) => <MessageList {...args} />;
export const MessageListStory = MessageListTemplate.bind({});
MessageListStory.args = {
  className: "message-list",
  lockable: true,
  toBottomHeight: "100%",
  dataSource: [
    {
      position: "right",
      type: "text",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      date: new Date(),
    },
    {
      position: "left",
      type: "text",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit left",
      date: new Date(),
    },
  ],
};

const ChatListTemplate = (args) => <ChatList {...args} />;
export const ChatListStory = ChatListTemplate.bind({});
ChatListStory.args = {
  className: "chat-list",
  dataSource: [
    {
      avatar: imageSrc,
      alt: "Reactjs",
      title: "Facebook",
      subtitle: "What are you doing?",
      date: new Date(),
      unread: 0,
    },
    {
      avatar: imageSrc,
      alt: "Reactjs",
      title: "Facebook",
      subtitle: "What are you doing?",
      date: new Date(),
      unread: 0,
    },
    {
      avatar: imageSrc,
      alt: "Reactjs",
      title: "Facebook",
      subtitle: "What are you doing?",
      date: new Date(),
      unread: 0,
    },
    {
      avatar: imageSrc,
      alt: "Reactjs",
      title: "Facebook",
      subtitle: "What are you doing?",
      date: new Date(),
      unread: 0,
    },
  ],
};

const InputTemplate = (args) => (
  <Input
    {...args}
    rightButtons={<Button color="white" backgroundColor="black" text="Send" />}
  />
);
export const InputStory = InputTemplate.bind({});
InputStory.args = {
  placeholder: "Type here...",
  multiline: true,
};

const ButtonTemplate = (args) => (
  <Button {...args} onClick={action("button clicked")} />
);
export const ButtonStory = ButtonTemplate.bind({});
ButtonStory.args = {
  text: "Click here",
};

const PopupTemplate = (args) => <Popup {...args} />;
export const PopupStory = PopupTemplate.bind({});
PopupStory.args = {
  show: true,
  header: "Lorem ipsum dolor sit amet.",
  headerButtons: [
    {
      type: "transparent",
      color: "black",
      text: "close",
      onClick: () => {
        action("header button click");
      },
    },
  ],
  text:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem animi veniam voluptas eius!",
  footerButtons: [
    {
      color: "white",
      backgroundColor: "#ff5e3e",
      text: "close",
    },
    {
      color: "white",
      backgroundColor: "lightgreen",
      text: "open",
    },
  ],
};

const SideBarTemplate = (args) => (
  <SideBar
    top={<div>'TOP' area</div>}
    center={<div>'CENTER' area</div>}
    bottom={<div>'BOTTOM' area</div>}
  />
);
export const SideBarStory = SideBarTemplate.bind({});

const NavbarTemplate = (args) => (
  <Navbar
    top={<div>'TOP' area</div>}
    center={<div>'CENTER' area</div>}
    bottom={<div>'BOTTOM' area</div>}
  />
);
export const NavbarStory = NavbarTemplate.bind({});

const DropdownTemplate = (args) => <Dropdown {...args} />;
export const DropdownStory = DropdownTemplate.bind({});
DropdownStory.args = {
  buttonProps: {
    text: "Dropdown",
  },
  items: [
    {
      icon: {
        component: <div>asd</div>,
        float: "left",
        color: "red",
        size: 22,
      },
      text: "lorem",
    },
    {
      icon: {
        component: imageSrc,
        float: "left",
        color: "purple",
        size: 22,
      },
      text: "ipsum",
    },
    {
      text: "dolor",
    },
  ],
};

const AvatarTemplate = (args) => <Avatar {...args} />;
export const AvatarStory = AvatarTemplate.bind({});
AvatarStory.args = {
  src: imageSrc,
  alt: "logo",
  size: "large",
  type: "circle flexible",
};

const LocationMessageTemplate = (args) => (
  <LocationMessage
    data={{
      latitude: "37.773972",
      longitude: "-122.431297",
      // staticURL: '<optional>',
      // mapURL: '<optional>'
    }}
  />
);
export const LocationMessageStory = LocationMessageTemplate.bind({});
LocationMessageStory.args = {
  data: {
    latitude: "37.773972",
    longitude: "-122.431297",
  },
};

const SpotifyMessageTemplate = (args) => (
  <SpotifyMessage {...args} onReplyMessageClick={action("clicked")} />
);
export const SpotifyMessageStory = SpotifyMessageTemplate.bind({});
SpotifyMessageStory.args = {
  reply: {
    photoURL: imageSrc,
    title: "elit magna",
    titleColor: "#8717ae",
    message: "Aliqua amet incididunt id nostrud",
  },
  position: "left",
  type: "text",
  text:
    "Tempor duis do voluptate enim duis velit veniam aute ullamco dolore duis irure.",
};

const MeetingItemTemplate = (args) => <MeetingItem {...args} />;
export const MeetingItemStory = MeetingItemTemplate.bind({});
MeetingItemStory.args = {
  subject: "New Release!!!",
  avatars: [
    {
      src: imageSrc,
    },
    {
      src: imageSrc,
    },
    {
      src: imageSrc,
    },
    {
      src: imageSrc,
    },
  ],
  onMeetingClick: console.log,
  onShareClick: console.log,
  onCloseClick: console.log,
};

const MeetingListTemplate = (args) => <MeetingList {...args} />;
export const MeetingListStory = MeetingListTemplate.bind({});
MeetingListStory.args = {
  className: "meeting-list",
  dataSource: [
    {
      id: "1",
      subject: "New Release",
      date: new Date(),
      avatars: [
        {
          src: imageSrc,
        },
        {
          src: imageSrc,
        },
        {
          src: imageSrc,
        },
        {
          src: imageSrc,
        },
      ],
    },
    {
      id: "2",
      subject: "New Release",
      date: new Date(),
      avatars: [
        {
          src: imageSrc,
        },
        {
          src: imageSrc,
        },
      ],
    },
    {
      id: "3",
      subject: "New Release",
      date: new Date(),
      avatars: [
        {
          src: imageSrc,
        },

        {
          src: imageSrc,
        },
        {
          src: imageSrc,
        },
      ],
    },
  ],
};
