# Navigation in React Native using React Navigation

**Stack** - this type of navigation is like a deck of cards, where it pushes a screen on top of the current one. This one is usually used in Settings and Edit Profile.

**Tab** - This type of navigation is a set of parallel sections where it switches between screens via a bar. This is usually used on the main app navigation, such as Home, Profile, and Search.

**Drawer** - This type of navigation is a hidden side menu that slides out from the side. This is usually used in Settings, Filters, or secondary navigation links.

React Navigation handles screen transitions differently, and it depends on the type of Stack you use. For example, if you use Native Stack, it is used for native platform primitives. For JS Stack, it is implemented entirely using JavaScript.

To implement deep linking, you need to configure the native side and then define the linking configuration and pass it to the NavigationContainer
