const appName = 'full-stack-test'

export const saveToken = (token) => {
  localStorage.setItem(appName, token)
}

export const getToken = () => {
  return JSON.parse(localStorage.getItem(appName))
}

export const deleteToken = () => {
  localStorage.removeItem(appName)
}