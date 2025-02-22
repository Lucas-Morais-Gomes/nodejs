import { redis } from '../redis/client'

interface inviteLinkParams {
  subscriberId: string
}

export async function inviteLink({ subscriberId }: inviteLinkParams) {
  await redis.hincrby('referral:access-count', subscriberId, 1)
}
