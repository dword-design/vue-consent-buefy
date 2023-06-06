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
        'nuxt.config.js': endent`
          export default {
            css: ['@dword-design/nuxt-buefy/style.scss'],
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

      const nuxt = execaCommand('nuxt dev')
      try {
        await nuxtDevReady()
        await this.page.goto('http://localhost:3000')
        await this.page.waitForSelector('.modal')
        await delay(150)
        expect(await this.page.screenshot()).toMatchImageSnapshot(this)
        await this.page.click('button[name=accept-all]')
        await this.page.waitForSelector('.modal', { hidden: true })
      } finally {
        await kill(nuxt.pid)
      }
    },
  },
  [testerPluginTmpDir(), testerPluginPuppeteer()],
)
