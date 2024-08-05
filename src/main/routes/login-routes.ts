import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeSignupController } from '@/main/factories/controllers/login/signup/signup-factory'
import { makeLoginController } from '@/main/factories/controllers/login/login/login-factory'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignupController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
