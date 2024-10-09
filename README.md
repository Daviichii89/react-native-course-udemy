# React-Native

It’s a library like React-DOM that’s used with React.

UNDER THE HOOD

React + React Native App compile to Real Native App (Views are compiled (i.e the JSX code / components - not the JavaScript logic)

Components are compiled

| Web Browser
(react-dom) | Native Component
(Android) | Native Component
(iOS) | React Native JSX |
| --- | --- | --- | --- |
| <div> | android.View | UIView | <View> |
| <input | EditText | UITextField | <TextInput> |

React Native maps (and compiles) re-usable components to respective platform equivalents.

Creating a New React Native App

| Expo CLI (”Expo”) | React Native CLI |
| --- | --- |
| 3rd-party service (free!) | By the React Native team & community |
| Managed app development | Bare-bone development (you need to set up way more) |
| Very convenient, less friction | Less convenience features |
| You can leave the Expo ecosystem any time | Easier integration with native source code |

Using Expo its easier and you can switch (”eject”) any time to React Native without Expo.

Styling React Native Apps

There is no CSS!

Use inline styles or stylesheet objects

Written in Javascript (i.e in the JS code files, next to the component code)