export default `
<ValidationObserver v-slot="{ invalid }">
  <form @submit.prevent="handleSubmit">
    <div class="row">
      <div class="col-sm-12">

        <validation-provider rules="required" v-slot="{ errors }">
          <b-form-group :state="errors.length === 0" label="Jméno"
            label-for="name-input" :invalid-feedback="errors[0]"
          >
            <b-form-input id="name-input" v-model="name"
              :state="errors.length === 0" :disabled="disabled">
            </b-form-input>
          </b-form-group>
        </validation-provider>

      </div>
    </div>

    <div class="row">
      <div class="col-sm-3">
        <validation-provider rules="required" v-slot="{ errors }">
          <b-form-group :state="errors.length === 0" label="Username"
            label-for="username-input" :invalid-feedback="errors[0]"
          >
            <b-form-input id="username-input" v-model="username"
            :state="errors.length === 0" :disabled="disabled">
            </b-form-input>
          </b-form-group>
        </validation-provider>
      </div>

      <div class="col-sm-3">
        <validation-provider rules="required" v-slot="{ errors }">
          <b-form-group :state="errors.length === 0" label="Email"
            label-for="email-input" :invalid-feedback="errors[0]"
          >
            <b-form-input id="email-input" v-model="email"
            :state="errors.length === 0" :disabled="disabled">
            </b-form-input>
          </b-form-group>
        </validation-provider>
      </div>

      <div class="col-sm-3">
        <validation-provider rules="required" v-slot="{ errors }">
          <b-form-group :state="errors.length === 0" label="Heslo"
            label-for="password-input" :invalid-feedback="errors[0]"
          >
            <b-form-input type="password" id="password-input" v-model="password"
            :state="errors.length === 0" :disabled="disabled">
            </b-form-input>
          </b-form-group>
        </validation-provider>
      </div>

      <div class="col-sm-3">
        <validation-provider rules="required" v-slot="{ errors }">
          <b-form-group :state="errors.length === 0" label="Status"
            label-for="status-input" :invalid-feedback="errors[0]"
          >
            <b-form-select id="status-input" v-model="status"
            :state="errors.length === 0" :options="statusOpts" :disabled="disabled">
            </b-form-select>
          </b-form-group>
        </validation-provider>
      </div>

    </div>

    <b-button v-if="!disabled" type="submit" class="mt-3" block :disabled="invalid">
      Save
    </b-button>
  </form>
</ValidationObserver>
`
