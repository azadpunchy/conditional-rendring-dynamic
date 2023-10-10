export const platforms = [
  {
    android: {
      android: {
        chat: { url: "1kotlin-app-url", description: "Chat application" },
        one2one: {
          url: "kotlinOne2One",
          description: "one to one call",
        },
        one2many: { url: "kotlinOne2Many", description: "broadcasting app" },
        many2many: { url: "kotlinM2M", description: "private group call" },
        // combined: { url: "5kotlin-app-url", description: "download" },
        // ok: { url: "6kotlin-app-url", description: "download" },
        // bye: { url: "7kotlin-app-url", description: "download" },
      },
      // ios: { null: "null" },
    },
  },
  {
    swift: {
      // android: { null: "null" },
      ios: {
        chat: { url: "1ios-app-url", description: "download" },
        one2one: { url: "2ios-app-url", description: "download" },
        one2many: { url: "3ios-app-url", description: "download" },
        many2many: { url: "4ios-app-url", description: "download" },
        combined: { url: "5ios-app-url", description: "download" },
      },
    },
  },
  {
    flutter: {
      android: {
        chat: { url: "1flutter-app-url", description: "chat application" },
        one2one: { url: "2flutter-app-url", description: "one to one call" },
        one2many: { url: "3flutter-app-url", description: "download" },
        many2many: {
          url: "4flutter-app-url",
          description: "private group chat",
        },
        combined: { url: "5flutter-app-url", description: "download" },
      },
      ios: {
        chat: { url: "1flutter-app-url-ios", description: "download" },
        one2one: {
          url: "2flutter-app-url-ios",
          description: "download",
        },
        one2many: {
          url: "3flutter-app-url-ios",
          description: "download",
        },
        many2many: {
          url: "4flutter-app-url-ios",
          description: "download",
        },
        combined: {
          url: "5flutter-app-url-ios",
          description: "download",
        },
      },
    },
  },
  {
    javascript: {
      web: {
        meeting: {
          url: "https://meeting.vdotok.com",
          description: "Conference Call",
        },
        meet: {
          url: "https://meet.vdotok.com",
          description: "Conference Call + chat",
        },
        chat: {
          url: "https://chat.vdotok.com",
          description: "chat application",
        },
        // rOne2One: {
        //   url: "https://react-one2one.vdotok.com",
        //   description: "calling app p2p/media",
        // },
        many2many: {
          url: "https://many2many.vdotok.com",
          description: "many2many calling app",
        },
        one2one: {
          url: "https://one2one.vdotok.com",
          description: "one2one calling application",
        },
        one2many: {
          url: "https://one2many.vdotok.com",
          description: "public broadcast",
        },
        vdotokPlugin: {
          url: "https://plugin.vdotok.dev",
          description: "Live Shopping plugin",
        },
      },
    },
  },
];
