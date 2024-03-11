export interface UserType {
  name: string,
  email: string,
  lists: string[],
  date: Date,
}

export interface ListType {
  created: string,
  name: string,
  date: Date,
  budget: number,
  items: string[],
}

export interface ItemType {
  created: string,
  name: string,
  value: number,
  belong: string,
  date: Date,
}

export interface ErrorType {
  value: string
}