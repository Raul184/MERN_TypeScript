export interface Video {
  description: string;
  title: string,
  url: string,
  updateAt?: string,
  createdAt?: string;
  _id?: string
}

export interface Params {
  id: string;
}