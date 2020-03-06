# CodeCopy

> Because copy to clipboard buttons should exist on every code snippet.

![Banner](https://cloud.githubusercontent.com/assets/398893/25569224/c3e7a724-2dc7-11e7-9ff4-7861c7876028.png)

## Install

This browser extension available for:

| <a href="https://chrome.google.com/webstore/detail/codecopy/fkbfebkcoelajmhanocgppanfoojcdmg"><img src="https://cloud.githubusercontent.com/assets/398893/15528951/e9f5dc0a-21fd-11e6-86e7-8a0cad6e7548.png" width="48px" height="48px" alt="Chrome logo"></a> | <a href="https://addons.mozilla.org/en-US/firefox/addon/codecopy/"><img src="https://cloud.githubusercontent.com/assets/398893/15528952/ea095cc6-21fd-11e6-9aae-d67479edd442.png" width="48px" height="48px" alt="Firefox logo"></a> |
|:---:|:---:|
| [Chrome](https://chrome.google.com/webstore/detail/codecopy/fkbfebkcoelajmhanocgppanfoojcdmg) | [Firefox](https://addons.mozilla.org/en-US/firefox/addon/codecopy/) |

## Supported sites

Works with:

* [GitHub](https://github.com/)
* [MDN](https://developer.mozilla.org/)
* [Gist](https://gist.github.com/)
* [StackOverflow](http://stackoverflow.com/)
* [StackExchange](https://stackexchange.com/sites)
* [npm](https://www.npmjs.com/)
* [Medium](https://medium.com/)

[And more](https://github.com/zenorocha/codecopy/blob/7c638611f7ad01d923361f7fedfe3933b35e114c/dist/manifest.json#L27).

If you want to add a new site, feel free to send a pull request :)

### Custom domains

You can also enable CodeCopy on custom domains or Github Enterprise.
Right click on CodeCopy's icon in the the toolbar  and select **Enable CodeCopy on this domain**.

## Preview

![Preview](https://cloud.githubusercontent.com/assets/398893/25569031/5840911a-2dc3-11e7-8445-a5b0867ceec7.png)

## Setup

Install dependencies:

```
npm install
```

Compile scripts and styles:

```
npm start
```

## Testing

###### Chrome

1. Navigate to `chrome://extensions`

2. Click on `Load unpacked extension...`

3. Select the `dist` folder

###### Firefox

1. Navigate to `about:debugging`

2. Click on `Load temporary Add-on`

3. Select the `manifest.json` inside the `dist` folder

###### Opera

1. Navigate to `extensions`

2. Click on `Developer Mode`

3. Click on `Load unpacked extension...`

4. Select the `dist` folder

## License

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha
