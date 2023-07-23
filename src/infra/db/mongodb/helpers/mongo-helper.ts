import { MongoClient, Collection, InsertOneResult } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map (result: InsertOneResult<Document>, data: any): any {
    return {
      id: result.insertedId.toString(),
      ...data
    }
  }
}
