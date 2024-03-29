<p align="center">
  <img width="620px"src="https://raw.githubusercontent.com/Gapur/firebase-push-notifications/main/src/demo.gif">
</p>

# Firebase Push Notifications

Push Notifications With React And Firebase

How to receive push notifications

Push notifications are small pop-up messages sent to a user's device or web app that appear even when the app is not open. They can alert real-time updates or changes to their upcoming plans, bookings, deliveries, and other time-sensitive topics.

So I'm interested how we can easily add receiving push notifications to our web app. In today's tutorial, I'm going to do it through Firebase Cloud Messaging (FCM). It is a cross-platform messaging solution that lets you reliably send messages at no cost.

## Getting Started

1. Clone this repository

```
git clone git@github.com:samuelemarazzita/firebase-push-notifications-react.git
```

2. Install dependencies

```
npm install
```

3. Change values

Create the .env and fill all values with your FCM tokens.

```
REACT_APP_ENV=XXX
REACT_APP_API_KEY=XXX
REACT_APP_AUTH_DOMAIN=XXX
REACT_APP_PROJECT_ID=XXX
REACT_APP_STORAGE_BUCKET=XXX
REACT_APP_MESSAGING_SENDER_ID=XXX
REACT_APP_APP_ID=XXX
REACT_APP_VAPID_KEY=XXX
```

4. Launch app

```
npm run start # for npm
```

## How to contribute?

1. Fork this repo
2. Clone your fork
3. Code 🤓
4. Test your changes
5. Submit a PR!
