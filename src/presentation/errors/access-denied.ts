export class AccessDeniedError extends Error {
  constructor () {
    super('Access Denied. Check if token is provided correctly!')
    this.name = 'AccessDeniedError'
  }
}
