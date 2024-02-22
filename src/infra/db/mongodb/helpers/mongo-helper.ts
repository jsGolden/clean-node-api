import { MongoClient, Collection, InsertOneResult, Document, ObjectId } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  uri: null as unknown as string,

  async connect (uri: string | undefined): Promise<void> {
    this.uri = String(uri)
    this.client = await MongoClient.connect(String(uri))
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  async isConnected () {
    return !!this.client && !!this.client.topology && this.client.topology.isConnected()
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client || !this.isConnected()) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  },

  map: {
    insert (result: InsertOneResult<Document>, data: any): any {
      if (data._id) delete data._id
      return {
        id: result.insertedId.toString(),
        ...data
      }
    },
    find <T extends Document | null>(result: T) {
      if (!result) return result
      const mappedResult = {
        ...result,
        id: result._id
      }
      if (delete mappedResult._id) delete mappedResult._id
      return mappedResult
    },
    stringToObjectId (value: string): ObjectId {
      return new ObjectId(value)
    }
  }
}
