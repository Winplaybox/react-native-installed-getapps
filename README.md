
# react-native-installed-getapps [![npm](https://img.shields.io/npm/v/react-native-installed-getapps.svg)](https://www.npmjs.com/package/react-native-installed-getapps)

## Getting started

`$ npm install react-native-installed-getapps --save`

### Mostly automatic installation

`$ react-native link react-native-installed-getapps`

### Manual installation



#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.winplaybox.installedgetapps.RNInstalledGetAppsPackage;` to the imports at the top of the file
  - Add `new RNInstalledGetAppsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-installed-getapps'
  	project(':react-native-installed-getapps').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-installed-getapps/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-installed-getapps')
  	```


## Methods

#### 1 - getApps()
#### 2 - getNonSystemApps()
#### 3 - getSystemApps()

## Return Result 

- packageName
- versionName
- versionCode
- firstInstallTime
- lastUpdateTime
- appName
- icon // Base64
- apkDir
- size // Bytes


## Usage
```javascript
import RNInstalledGetApps from 'react-native-installed-getapps';


RNInstalledGetApps.getApps()
      .then(apps => {
        this.setState({apps})
      })
      .catch(error => {
        alert(error);
      });

```
