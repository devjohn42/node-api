import { UserModel } from '../models/users'

// GET Methods

export const getUsers = () => UserModel.find()

export const getUserByEmail = (email: string) => {
  return UserModel.findOne({ email })
}

export const getUserById = (id: string) => UserModel.findById(id)

export const getUserBySessionToken = (sessionToken: string) => {
  return UserModel.findOne({ 'authentication.sessionToken': sessionToken })
}

// POST Method

export const createUser = (values: Record<string, any>) => {
  return new UserModel(values).save().then((user) => user.toObject)
}

// UPDATE/PATCH Method

export const updateUserById = (id: string, values: Record<string, any>) => {
  return UserModel.findByIdAndUpdate(id, values)
}
// DELETE Method

export const deleteUserById = (id: string) => {
  return UserModel.findByIdAndDelete({ _id: id })
}
