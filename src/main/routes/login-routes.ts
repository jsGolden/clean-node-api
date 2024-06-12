import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeSignupController } from '../factories/controllers/signup/signup-factory'
import { makeLoginController } from '../factories/controllers/login/login-factory'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignupController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
