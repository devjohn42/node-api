import { UserModel } from 'server/database/models/users'

// GET Methods

export const getUsers = () => UserModel.find()

export const getUserByEmail = (email: string) => {
  UserModel.findOne({ email })
}

export const getUserBySessionToken = (sessionToken: string) => {
  UserModel.findOne({ 'authentication.sessionToken': sessionToken })
}

export const getUserById = (id: string) => UserModel.findById(id)

// POST Method

export const createUser = (values: Record<string, any>) => {
  new UserModel(values).save().then((user) => user.toObject)
}

// UPDATE/PATCH Method

export const updateUserById = (id: string, values: Record<string, any>) => {
  UserModel.findByIdAndUpdate(id, values)
}
// DELETE Method

export const deleteUserById = (id: string) => {
  UserModel.findByIdAndDelete({ _id: id })
}
