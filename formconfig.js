import {STATUS_LABELS} from './consts.js'

export default [{
  name: 'id',
  fieldcomponent: true,
  sortable: true
}, {
  name: 'username',
  component: "dyn-input",
  label: "uživ.jméno",
  rules: "required",
  fieldcomponent: true, 
  sortable: true
}, {
  name: 'name',
  component: "dyn-input",
  label: "jméno",
  rules: "required",
  fieldcomponent: true, 
  sortable: true
}, {
  name: 'email',
  component: "dyn-input",
  label: "email",
  rules: "required",
  fieldcomponent: true, 
  sortable: true
},
//  {
//   name: 'password',
//   component: "dyn-input",
//   label: 'heslo',
//   rules: "required"
// }, 
{
  name: "status",
  component: "dyn-select",
  options: _.map(STATUS_LABELS, (v, k) => { 
    return { value: k, text: v }
  }),
  label: "status",
  fieldcomponent: true, sortable: true
}, {
  name: 'created', label: 'vytvořen', fieldcomponent: 'date', sortable: true
}]
