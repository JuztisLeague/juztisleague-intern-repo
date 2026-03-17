# Understanding Key Libraries Used in Focus Bear

Focus Bear is built on a comprehensive set of React Native libraries that work together to deliver a smooth and reliable productivity experience. The @react-navigation suite handles all screen transitions and bottom tab navigation, while react-native-vector-icons and @rneui/themed keep the UI consistent with scalable icons and pre-built components. Redux, redux-thunk, and redux-persist manage the app's global state, handle async operations, and save data locally via AsyncStorage so nothing is lost when the app closes. Axios and axios-retry handle all backend communication with automatic retry support on poor connections, while Pusher WebSocket maintains a real-time channel for instant server-to-app event delivery. Security and authentication are covered by react-native-auth0 for standard login flows and react-native-apple-authentication for Sign in with Apple on iOS. Background reminders and timers are kept alive by react-native-background-fetch and react-native-background-timer, with react-native-reanimated and react-native-gesture-handler ensuring all animations and touch interactions run smoothly on the native thread. Multi-language support is powered by i18next, react-i18next, and react-native-localize, which automatically detect the device's locale and display the correct language, while Sentry and PostHog round out the app by silently tracking crashes and user behaviour to help the team monitor and continuously improve the app.

Three libraries and their purpose:

- **Redux** – Acts as the app's central data store, holding all important information like user habits and settings in one place so every screen stays in sync.
- **Axios** – Handles all communication between the app and its backend server by sending and receiving data through HTTP requests.
- **Sentry** – Quietly monitors the app for crashes and errors, automatically capturing full details and sending them to the development team's dashboard.


Three unfamiliar libraries and how they work:

- **Pusher WebSocket** – Keeps a persistent two-way connection open between the app and the server so the server can instantly push events like reminders or sync updates to the app the moment they happen, instead of the app repeatedly asking if anything is new.

- **react-native-reanimated** – Moves animation logic directly onto the native UI thread so transitions and interactions run smoothly at up to 120fps, solving the common problem of animations stuttering when the JavaScript thread is busy.

- **react-native-background-fetch** – Allows the app to schedule and run tasks like triggering habit reminders or syncing data even when the user has closed or minimized the app, which is essential for a productivity app like Focus Bear, where timely background notifications are a core part of the experience

# Reflection

Redux-Persist saves the Redux store to the device's local storage so that all app data, like user habits, settings, and progress, is automatically restored when the app restarts, making it essential for any app where losing data between sessions would frustrate users. React-native-background-fetch differs from a normal timer in that a regular timer only works while the app is open and active, whereas background-fetch is specifically designed to wake the app up and run scheduled tasks like syncing data or triggering reminders even when the app is closed, or the device is idle, which is critical for Focus Bear's habit and break reminder system. 

Auth0 is used instead of manual authentication because building a secure login system from scratch is extremely complex and risky. Auth0 handles everything, including token management, session security, password resets, and social logins out of the box, saving the team significant development time while ensuring industry-standard security that would be very difficult to replicate manually. PostHog helps improve the user experience in Focus Bear by automatically tracking how users move through the app — which features they use most, where they drop off, and how they interact with onboarding, giving the development team real data to make informed decisions about what to fix, improve, or build next. While both Sentry and PostHog are monitoring tools, they serve very different purposes — Sentry is used when something goes wrong, capturing crashes, errors, and exceptions so developers can debug and fix technical issues, whereas PostHog is used to understand normal user behaviour and measure how well features are working, meaning you'd reach for Sentry when investigating a bug and PostHog when evaluating a product decision. React-native-localize detects the user's device language and region settings and passes that information to i18next, which then uses it to look up the correct translation file and display all app text in the appropriate language. 

The two libraries work hand in hand, with react-native-localize acting as the detector and i18next acting as the translator. If one library had to be replaced, a strong candidate would be @rneui/themed while it provides convenient pre-built components, it can be limiting in terms of customization and design flexibility, and replacing it with a more flexible styling solution like NativeWind (which brings Tailwind CSS utility classes to React Native) would give the team much greater control over the app's visual design without sacrificing development speed.


