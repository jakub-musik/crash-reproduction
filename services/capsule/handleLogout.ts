import { getCapsule } from './capsule'

export const handleLogout = async () => {
  const capsule = await getCapsule('handleLogout')
  await capsule.clearStorage()
  await capsule.logout(false)
}
