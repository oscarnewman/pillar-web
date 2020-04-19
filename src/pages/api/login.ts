import { AuthService } from './../../services/AuthService'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(400)
  }
  const auth = new AuthService()
  await auth.login(req.body.email, req.body.password, { server: false })
  res.status(204)
}
