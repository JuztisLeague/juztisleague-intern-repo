# Handling Gestures and Animations in React Native

**Animated**  - it is a built-in that, by default, calculates the next frame of an animation on the JavaScript thread. It also sends it over the bridge to the UI thread.

**react-native-reanimated** - This is a library that uses Worklets, which are small pieces of JavaScript that are compiled and run directly on the UI thread.

In order to improve performance, you must do Native integration and Synchronous Communication. In this way, it hooks it into the native platform's gesture recognition system. The gesture data also stays on the UI thread.

**Buttons** - you use buttons when the actions are critical, the user needs to see what to click, and one time trigger.

**Gestures** - you use this once the action is repetitive or frequent, also it maximizes screen real estate and the action involves continuous control.

InteractionManager.runAfterInteractions is necessary because it allows youto schedlue long-running work to start only after all active animations and interaction are finished.
