export const authHeaders = (headers = {}) => {
  const token =
    !!localStorage.getItem('user_login') && JSON.parse(localStorage.getItem('user_login')).auth.user.token

  return token ? { Authorization: token, ...headers } : { ...headers }
}

// export const getProfile = () => {
//   return localStorage.getItem('user_login') && JSON.parse(localStorage.getItem('user_login'))?.auth?.user?.profile
// }
//
export const isLoggedIn = () => {
  return !!localStorage.getItem('user_login') && !!JSON.parse(localStorage.getItem('user_login')).auth.user.token
}
//
// export const isAdmin = () => {
//   return (
//     !!localStorage.getItem('user_login') &&
//     JSON.parse(localStorage.getItem('user_login'))?.auth?.user?.profile?.role === 1
//   )
// }

export const removeAuthenticated = () => {
  localStorage.removeItem('user_login')
}
