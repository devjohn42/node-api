import { NextFunction, Request, Response } from 'express'
import { get, merge } from 'lodash'

import { getUserBySessionToken } from '../database/providers/users'

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const sessionToken = req.cookies.NODE_API_AUTH

    if (!sessionToken) {
      return res.sendStatus(403)
    }

    const existingUser = await getUserBySessionToken(sessionToken)

    if (!existingUser) {
      res.sendStatus(403)
    }

    merge(req, { identity: existingUser })
    return next()
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
}

export const isOwner = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const currenteUserId = get(req, 'identity._id') as string

    if (!currenteUserId) {
      return res.sendStatus(403)
    }

    if (currenteUserId.toString() !== id) {
      return res.sendStatus(403)
    }

    next()
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
}
