<template>
  <b-modal :model-value="$consent.isOpened" :can-cancel="false" :width="640">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h2>
            {{
              computedLocale === 'de'
                ? 'Cookie-Einstellungen'
                : 'Cookie Settings'
            }}
          </h2>
          <p v-if="computedLocale === 'de'">
            Indem du Cookies akzeptierst hilfst du mir, die
            Benutzerfreundlichkeit zu verbessern, Benutzertraffic zu messen und
            das Nutzerverhalten bzw. -bedürfnisse besser zu verstehen.
          </p>
          <p v-else>
            By accepting cookies, you help me to improve your browsing
            experience, to measure traffic, and to understand user behavior and
            needs.
          </p>
          <p v-if="computedLocale === 'de'">
            Für Details siehe die
            <b-button class="is-link" @click="openPrivacyPolicy">
              Datenschutzerklärung </b-button
            >.
          </p>
          <p v-else>
            See the
            <b-button class="is-link" @click="openPrivacyPolicy">
              privacy policy
            </b-button>
            for details.
          </p>
          <hr />
          <form @submit.prevent="submit">
            <b-field
              :message="
                computedLocale === 'de'
                  ? 'Diese Cookies werden für den Betrieb der Website benötigt'
                  : 'These cookies are needed to keep the website running.'
              "
            >
              <b-switch :model-value="true" disabled>{{
                computedLocale === 'de'
                  ? 'Essenzielle Cookies'
                  : 'Essential cookies'
              }}</b-switch>
            </b-field>
            <b-field
              :message="
                computedLocale === 'de'
                  ? 'Diese Cookies werden zum Ergeben anonymer Nutzerstatistiken benötigt.'
                  : 'These cookies are needed to collect anonymous user statistics.'
              "
            >
              <b-switch v-model="editedSettings.statistics">{{
                computedLocale === 'de'
                  ? 'Statistik-Cookies'
                  : 'Statistics cookies'
              }}</b-switch>
            </b-field>
            <div class="buttons is-right">
              <b-button name="save" native-type="submit">{{
                computedLocale === 'de'
                  ? 'Einstellungen speichern'
                  : 'Save settings'
              }}</b-button>
              <b-button
                name="accept-all"
                native-type="submit"
                type="is-primary"
                >{{
                  computedLocale === 'de'
                    ? 'Alle Cookies akzeptieren'
                    : 'Accept all cookies'
                }}</b-button
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  computed: {
    computedLocale() {
      return this.locale || this.$i18n?.locale || 'en'
    },
    isOpened() {
      return this.$consent.isOpened
    },
  },
  data: () => ({
    editedSettings: {},
  }),
  methods: {
    openPrivacyPolicy() {
      return this.$buefy.modal.open({
        component: 'b-card-modal',
        parent: this,
        props: { inner: 'app-privacy-policy' },
      })
    },
    submit($event) {
      if ($event.submitter.name === 'accept-all') {
        this.editedSettings.statistics = true
      }

      return (this.$consent.settings = this.editedSettings)
    },
  },
  mounted() {
    if (Object.keys(this.$consent.settings).length === 0) {
      this.$consent.open()
    }
  },
  props: {
    locale: String,
  },
  watch: {
    isOpened: {
      handler() {
        if (this.isOpened) {
          this.editedSettings = { statistics: false, ...this.$consent.settings }
        }
      },
      immediate: true,
    },
  },
}
</script>
