import { ADMIN_GROUP_NAME } from '../consts.js'

export default {
  props: ['query', 'cfg', 'row'],
  computed: {
    muzuUpravit: function () {
      return this.$store.getters.isMember(ADMIN_GROUP_NAME)
    }
  },
  methods: {
    doEdit: function () {
      const query = Object.assign({}, this.query, { _detail: this.row.id })
      this.$router.replace({ query })
    },
    setPwd: function (i) {
      const newPwd = prompt('zadej nove heslo')
      if (! newPwd) return
      const url = this.cfg.chpasswdUrl + i.id
      const data = { password: newPwd }
      this.$store.dispatch('send', { method: 'put', url, data }).then(res => {
        this.$store.dispatch('toast', { message: 'uloženo' })
      }).catch(err => this.$store.dispatch('onerror', err))
    }
  },
  template: `
  <td>
    <b-button-group v-if="muzuUpravit">
      <b-button size="sm" variant="primary" @click="doEdit(row)">
        <i class="fas fa-edit"></i> upravit
      </b-button>
      <b-button size="sm" variant="secondary" @click="setPwd(row)">
        <i class="fas fa-edit"></i> nastavit heslo
      </b-button>
    </b-button-group>
  </td>
  `
}
