export interface Repository {
  name: string
  description: string
  visibility: string //"public" | "private"
  homepage: string
  url: string
  clone_url: string
  topics: string[]
}