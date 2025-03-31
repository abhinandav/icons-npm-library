# Panorah Icons

A customizable set of SVG icons for React Native using `react-native-svg`.

## 📦 Installation

First, install the package:

```bash
npm install panorah-icons
# or
yarn add panorah-icons
```
Make sure you also have react-native-svg installed:

``` bash
npm install react-native-svg
```

## 📦 Usage

Import individual icons

```bash
import { Likes, Assign } from 'panorah-icons';

<Likes width={24} height={24} color="#FF6B00" />
```

Use the <Icon /> component

```bash
import { Icon } from 'panorah-icons';

<Icon name="Likes" width={24} height={24} color="#FF6B00" />
<Icon name="Assign" variant="filled" badge="3" badgeColor="green" />
```