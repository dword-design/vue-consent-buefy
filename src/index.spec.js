import { delay, endent } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginPuppeteer from '@dword-design/tester-plugin-puppeteer'
import testerPluginTmpDir from '@dword-design/tester-plugin-tmp-dir'
import packageName from 'depcheck-package-name'
import { execaCommand } from 'execa'
import nuxtDevReady from 'nuxt-dev-ready'
import outputFiles from 'output-files'
import kill from 'tree-kill-promise'

export default tester(
  {
    async modal() {
      await outputFiles({
        'components/app-privacy-policy.vue': endent`
          <template>
            <div class="content">
              <h2>Privacy policy</h2>
              <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.</p>
              <p>Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            </div>
          </template>
        `,
        'nuxt.config.js': endent`
          export default {
            css: ['@dword-design/nuxt-buefy/style'],
            modules: ['${packageName`@dword-design/nuxt-buefy`}'],
          }
        `,
        'pages/index.vue': endent`
          <template>
            <self />
          </template>

          <script>
          import Self from '../../src/index.vue'

          export default {
            components: {
              Self,
            },
          }
          </script>
        `,
        'plugins/vue-consent.js': endent`
          import VueConsent from '${packageName`@dword-design/vue-consent`}'

          import { defineNuxtPlugin } from '#imports'

          export default defineNuxtPlugin(({ vueApp }) => vueApp.use(VueConsent, {
            services: {
              googleAnalytics: { id: 'foo' },
            },
          }))
        `,
      })

      const nuxt = execaCommand('nuxt dev', {
        env: { NODE_ENV: 'development' },
      })
      try {
        await nuxtDevReady()
        await this.page.setViewport({
          height: 875,
          width: 1400,
        })
        await this.page.goto('http://localhost:3000')

        const modal = await this.page.waitForSelector('.modal')
        await delay(150)
        expect(await this.page.screenshot()).toMatchImageSnapshot(this)

        const privacyPolicyButton = await modal.$(
          'button::-p-text(privacy policy)',
        )
        await privacyPolicyButton.click()
        await delay(150)
        expect(await this.page.screenshot()).toMatchImageSnapshot(this)
        await this.page.mouse.click(10, 10)
        await this.page.waitForSelector('body > .modal', { hidden: true })
        await this.page.click('button[name=accept-all]')
        await delay(150)
        await this.page.waitForSelector('.modal', { hidden: true })
      } finally {
        await kill(nuxt.pid)
      }
    },
  },
  [testerPluginTmpDir(), testerPluginPuppeteer()],
)
