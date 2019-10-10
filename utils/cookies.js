export const DEVICE_ID = '_did'

export const USER_INFO = 'user-info'

export const USER_TOKEN = 'user-token'

export const DAY_MAX_AGE = 60 * 60 * 24

export function getDeviceId (cookies) {
  return cookies.get(DEVICE_ID, { parseJSON: false })
}

export function setDeviceId (cookies, deviceId) {
  cookies.set(DEVICE_ID, deviceId, { path: '/', maxAge: DAY_MAX_AGE * 1000 })
}

export function getUserToken (cookies) {
  return cookies.get(USER_TOKEN)
}

export function setUserToken (cookies, userToken) {
  const token = {
    accessToken: userToken.access_token,
    refreshToken: userToken.refresh_token,
    expiresIn: userToken.expires_in,
    expiredAt: new Date().getTime() + userToken.expires_in * 1000 - 2 * 60 * 1000
  }
  cookies.set(USER_TOKEN, JSON.stringify(token), { path: '/', maxAge: DAY_MAX_AGE * 29 })
}

export function getUserInfo (cookies) {
  return cookies.get(USER_INFO)
}

export function setUserInfo (cookies, userInfo) {
  cookies.set(USER_INFO, JSON.stringify(userInfo), { path: '/', maxAge: DAY_MAX_AGE * 29 })
}
