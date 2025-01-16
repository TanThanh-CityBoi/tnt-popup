# CONFIG-MODULE

<!-- PROJECT SHIELDS -->
<!--------------------->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]


<!-- PROJECT LOGO -->
<br />
<img align="right" alt="GIF" src="https://raw.githubusercontent.com/devSouvik/devSouvik/master/gif3.gif" width="400"/>
<div align="center">
  <img align="center" alt="LOGO" src="https://cldup.com/Rg6WLgqccB.svg" width="200"/>
  <h3 align="center">CONFIG_MODULE</h3>
  <p align="center">
    TNT-Topup Packages
    <br />
  </p>
</div>
<br />

<!------------------------- BODY ----------------------------->

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#development">Development setup</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!---------------------------------------  About The Project ------------------------------------------------->
## About The Project
* Supports packages built-in transport layer implementations, which are responsible for transmitting data between gateway and service
* where to store and get entities.

Packages:
* consumer-gateway
* consumer-service
* entities

<!--------------------------------------- Getting Started ------------------------------------------------->

## Getting Started

### Prerequisites
You must use a personal access token with the appropriate scopes to publish and install packages.
1. Create a personal access token with following permissions
![image](https://user-images.githubusercontent.com/71745181/195557669-e524a72c-060a-4563-871e-59522fd4a764.png)
2. Authenticate to GitHub Packages.
* Run command
```sh
$ npm login --scope=@tnt-topup --registry=https://npm.pkg.github.com
```
```
> Username: YOUR-USERNAME
> Password: GH-PERSONAL-ACCESS-TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```
### Installation

1. npm:
```sh
npm install @tnt-topup/[@PACKAGE_NAME]
```
2. yarn:
```sh
yarn add @tnt-topup/[@PACKAGE_NAME]
```

## Development

## Contact

<!-- MARKDOWN LINKS & IMAGES -->
<!----------------------------->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/tnt-topup/config-module/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/tnt-topup/config-module/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/tnt-topup/config-module/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/tnt-topup/config-module/issues

<!--------------------------------------------------->

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
