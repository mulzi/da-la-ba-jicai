import { Auth } from '../services/auth'

export default async function (context) {
  const auth = new Auth(context)
  await auth.checkAndRefreshToken()
}
