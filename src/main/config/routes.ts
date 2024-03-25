import { Express, Router } from 'express'
import fg from 'fast-glob'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  fg.sync('../routes/**routes.{ts,js}', {
    cwd: __dirname,
    ignore: [
      '**/*.spec.*',
      '**/*.test.*'
    ]
  }).map(async file => (await import(file)).default(router))
}
