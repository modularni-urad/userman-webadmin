import UserMan from './components/userlist.js'
import formconfig from './formconfig.js'
import { ROUTE_NAME } from './consts.js'

export function createMenu (user) {
  return user.groups.indexOf('user_admins') >= 0
    ? { label: 'uživatelé', to: { name: ROUTE_NAME } }
    : null
}

export async function setupRoutes (routes, path, cfg, initConfig) {

  Object.assign(cfg, { 
    conf: formconfig
  })

  await initConfig(cfg)

  routes.push({ 
    path, 
    name: ROUTE_NAME, 
    component: UserMan, 
    props: route => {
      return { query: route.query, cfg }
    }
  })
}