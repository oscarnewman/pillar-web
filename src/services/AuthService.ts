import Axios from 'axios'

export class AuthService {
  async login(email: string, password: string) {
    try {
      Axios.defaults.withCredentials = true
      await this.establishCSRFProtection()

      const res = await Axios.post(`${process.env.API_URL}/auth/login`, {
        email,
        password,
      })

      return res.data.data
    } catch (error) {
      console.error(error.response.data)
      return null
    }
  }

  private establishCSRFProtection(): Promise<any> {
    return Axios.get(`${process.env.API_URL}/sanctum/csrf-cookie`)
  }
}
