

export interface id {
  jwt: string
}
export interface User {
  userId: string,
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  createUser: string,
  readUser: string,
  deleteUser: string,
  updateUser: string,
  createMachine: string,
  searchMachine: string,
  startMachine: string,
  stopMachine: string,
  restartMachine: string,
  destroyMachine: string
}

export interface Machines {
  id: string,
  name: string,
  status: string,
  createdBy: string,
  active: string,
  destroy: string

}

export interface Error{
  operation: string,
  machineId: string,
  date: string,
  message: string
}






