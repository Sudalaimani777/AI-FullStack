# 📱 React Native & Expo Mobile Development

Welcome to the **React Native & Expo Mobile Development Hub**, a production-focused guide for building cross-platform native iOS and Android mobile applications using **React Native**, **Expo Go**, **Flexbox Layouts**, **Core Mobile Components**, and **Native Event APIs**.

---

## 📂 Repository Architecture

```text
ReactNative/
├── 📁 1-ReactNativeFundamentals/                    # Core components, Expo setup & mobile environment
├── 📁 2-AdvancedReactNativeAndStateManagement/      # Advanced state, navigation, FlatList & gestures
└── 📁 3-ServerCommunicationandDeployment/           # API integration, AsyncStorage & EAS build deployment
```

---

## 📚 Section Breakdown & Core Concepts

### 🟢 1. React Native Fundamentals (`1-ReactNativeFundamentals`)
React Native allows web developers to build native mobile apps for iOS and Android using React and JavaScript.

#### Environment Setup with Expo Go
Expo is the recommended framework for cross-platform development:
```bash
# 1. Initialize a new Expo project
npx create-expo-app@latest MyMobileApp

# 2. Navigate to project folder
cd MyMobileApp

# 3. Start Expo development server
npx expo start
```
*Scan the QR code in terminal using **Expo Go** (Android) or **Camera App** (iOS) to test on a physical device.*

---

### 🔵 2. Core Native Components

#### `<View>` Component
The fundamental container building block (counterpart to HTML `<div>`).
- **Flexbox Layout**: Uses Flexbox by default (`flexDirection: 'column'`, `justifyContent`, `alignItems`).
- **Responder System**: Handles touch gestures (`onStartShouldSetResponder`, `onResponderMove`, `hitSlop`).
- **Accessibility**: Includes `accessible`, `accessibilityLabel`, `accessibilityRole`, and `importantForAccessibility`.

#### `<Text>` Component
The required element for displaying text strings in React Native.
- **Rule**: Strings **cannot** be rendered directly in JSX without a `<Text>` wrapper.
- **Text Props**: `numberOfLines`, `ellipsizeMode="tail"`, `selectable={true}`, `allowFontScaling`.

#### `<TextInput>` Component
Enables keyboard text input from physical or virtual device keyboards.
- **`onChangeText` vs. `onChange`**:
  - `onChangeText={(text) => setVal(text)}`: Passes the raw string payload directly (95% of use cases).
  - `onChange={(e) => setVal(e.nativeEvent.text)}`: Emits full native event wrapper metadata.

```tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function MobileForm() {
    const [name, setName] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Your Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Type here..."
                value={name}
                onChangeText={setName}
            />
            {name ? <Text style={styles.greeting}>Hello, {name}!</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5'
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    input: {
        height: 48,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: '#fff'
    },
    greeting: {
        marginTop: 15,
        fontSize: 16,
        color: '#007AFF'
    }
});
```

---

### 🟣 3. Advanced State & Navigation (`2-AdvancedReactNativeAndStateManagement`)
- **Performance Lists**: Rendering large datasets using `<FlatList>` and `<SectionList>` with `keyExtractor` and windowing.
- **Mobile Navigation**: Client navigation via **Expo Router** / **React Navigation** (Stack, Bottom Tabs, Drawer).
- **Gestures & Touchables**: `<TouchableOpacity>`, `<Pressable>`, `<TouchableHighlight>`.

---

### 🔴 4. Server Communication & Deployment (`3-ServerCommunicationandDeployment`)
- **API Fetching**: Connecting native apps to REST API backends via `Axios` or `fetch()`.
- **Persistent Storage**: Client storage using `@react-native-async-storage/async-storage`.
- **EAS Build & Deployment**: Building `.apk` / `.aab` for Google Play Store and `.ipa` for Apple App Store using **Expo Application Services (EAS)**.

---

## 🛠️ Quickstart Guide

To run the fundamentals mobile application:

```bash
# Navigate to 1-ReactNativeFundamentals
cd 1-ReactNativeFundamentals

# Install dependencies
npm install

# Start Expo dev server
npx expo start
```

Press `a` to open Android Emulator, `i` to open iOS Simulator, or scan the QR code using the **Expo Go** app on your physical smartphone.

---

*Part of the Mobile & Full-Stack Development Workspace.*
