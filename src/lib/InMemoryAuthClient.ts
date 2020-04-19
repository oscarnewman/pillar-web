type InMemoryToken = null | {
  token: string
  expires: Date
}

let inMemoryToken: InMemoryToken = null

export function init() {
  window.addEventListener('storage', syncLogout)
}

export function logout() {
  inMemoryToken = null
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now().toString())
}

function syncLogout(event: StorageEvent) {
  if (event.key === 'logout') {
    console.log('logged out from storage!')
    // Router.push('/login')
  }
}

export function storeLogin(token: InMemoryToken) {
  inMemoryToken = token
}

export function getToken(): string | null {
  return inMemoryToken?.token
}
export function loggedIn(): boolean {
  return !!inMemoryToken
}
