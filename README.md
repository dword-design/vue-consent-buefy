<!-- TITLE/ -->
# @dword-design/vue-consent-buefy
<!-- /TITLE -->

<!-- BADGES/ -->
  <p>
    <a href="https://npmjs.org/package/@dword-design/vue-consent-buefy">
      <img
        src="https://img.shields.io/npm/v/@dword-design/vue-consent-buefy.svg"
        alt="npm version"
      >
    </a><img src="https://img.shields.io/badge/os-linux%20%7C%C2%A0macos%20%7C%C2%A0windows-blue" alt="Linux macOS Windows compatible"><a href="https://github.com/dword-design/vue-consent-buefy/actions">
      <img
        src="https://github.com/dword-design/vue-consent-buefy/workflows/build/badge.svg"
        alt="Build status"
      >
    </a><a href="https://codecov.io/gh/dword-design/vue-consent-buefy">
      <img
        src="https://codecov.io/gh/dword-design/vue-consent-buefy/branch/master/graph/badge.svg"
        alt="Coverage status"
      >
    </a><a href="https://david-dm.org/dword-design/vue-consent-buefy">
      <img src="https://img.shields.io/david/dword-design/vue-consent-buefy" alt="Dependency status">
    </a><img src="https://img.shields.io/badge/renovate-enabled-brightgreen" alt="Renovate enabled"><br/><a href="https://gitpod.io/#https://github.com/dword-design/vue-consent-buefy">
      <img
        src="https://gitpod.io/button/open-in-gitpod.svg"
        alt="Open in Gitpod"
        width="114"
      >
    </a><a href="https://www.buymeacoffee.com/dword">
      <img
        src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
        alt="Buy Me a Coffee"
        width="114"
      >
    </a><a href="https://paypal.me/SebastianLandwehr">
      <img
        src="https://sebastianlandwehr.com/images/paypal.svg"
        alt="PayPal"
        width="163"
      >
    </a><a href="https://www.patreon.com/dworddesign">
      <img
        src="https://sebastianlandwehr.com/images/patreon.svg"
        alt="Patreon"
        width="163"
      >
    </a>
</p>
<!-- /BADGES -->

<!-- DESCRIPTION/ -->

<!-- /DESCRIPTION -->

<!-- INSTALL/ -->
## Install via a package manager

```bash
# npm
$ npm install @dword-design/vue-consent-buefy

# Yarn
$ yarn add @dword-design/vue-consent-buefy
```

Add to local components:

```html
<script>
import BConsent from '@dword-design/vue-consent-buefy'

export default {
  components: {
    BConsent,
  },
}
</script>
```

Or register as a global component:

```js
import BConsent from '@dword-design/vue-consent-buefy'

app.component('BConsent', BConsent)
```

Or register as a plugin:

```js
import BConsent from '@dword-design/vue-consent-buefy'

app.use(BConsent)
```

## Install via CDN

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="https://unpkg.com/@dword-design/vue-consent-buefy"></script>
```
<!-- /INSTALL -->

<!-- LICENSE/ -->
## Contribute

Are you missing something or want to contribute? Feel free to file an [issue](https://github.com/dword-design/vue-consent-buefy/issues) or a [pull request](https://github.com/dword-design/vue-consent-buefy/pulls)! ⚙️

## Support

Hey, I am Sebastian Landwehr, a freelance web developer, and I love developing web apps and open source packages. If you want to support me so that I can keep packages up to date and build more helpful tools, you can donate here:

<p>
  <a href="https://www.buymeacoffee.com/dword">
    <img
      src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
      alt="Buy Me a Coffee"
      width="114"
    >
  </a>&nbsp;If you want to send me a one time donation. The coffee is pretty good 😊.<br/>
  <a href="https://paypal.me/SebastianLandwehr">
    <img
      src="https://sebastianlandwehr.com/images/paypal.svg"
      alt="PayPal"
      width="163"
    >
  </a>&nbsp;Also for one time donations if you like PayPal.<br/>
  <a href="https://www.patreon.com/dworddesign">
    <img
      src="https://sebastianlandwehr.com/images/patreon.svg"
      alt="Patreon"
      width="163"
    >
  </a>&nbsp;Here you can support me regularly, which is great so I can steadily work on projects.
</p>

Thanks a lot for your support! ❤️

## License

[MIT License](https://opensource.org/licenses/MIT) © [Sebastian Landwehr](https://sebastianlandwehr.com)
<!-- /LICENSE -->
