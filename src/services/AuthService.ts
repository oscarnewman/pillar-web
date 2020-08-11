import Axios from 'axios'

export class AuthService {
  async login(email: string, password: string, { server = true } = {}) {
    Axios.defaults.withCredentials = true
    if (server) {
      await Axios.post(`/api/login`, {
        email,
        password,
      })
    } else {
      await this.establishCSRFProtection()

      const res = await Axios.post(`${process.env.API_URL}/auth/login`, {
        email,
        password,
      })

      return res.data.data
    }
  }

  public establishCSRFProtection(): Promise<any> {
    Axios.defaults.withCredentials = true
    return Axios.get(`${process.env.API_URL}/sanctum/csrf-cookie`)
  }
}
