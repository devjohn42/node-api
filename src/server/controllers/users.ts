import { Request, Response } from 'express'
import { deleteUserById, getUsers } from '../database/providers/users'

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsers()

    return res.status(200).json(users)
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const deleteUser = await deleteUserById(id)

    return res.json(deleteUser)
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
}
