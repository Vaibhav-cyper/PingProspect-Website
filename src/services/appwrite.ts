import { Client, Databases, Query } from "appwrite";

class Service {
  endpoint = import.meta.env.VITE_ENDPOINT;
  projectId = import.meta.env.VITE_PROJECTID;
  databases: any;
  databaseId = import.meta.env.VITE_DATABASEID;
  collectionId = import.meta.env.VITE_COLLECTIONID;
  client = new Client();
  
  constructor() {
    this.client.setEndpoint(this.endpoint).setProject(this.projectId);
    this.databases = new Databases(this.client);
  }

  async GetPost(slug: string) {
    try {
        return await this.databases.getDocument(
            this.databaseId, // databaseId
            this.collectionId, // collectionId
            slug, // documentId
        );
    } catch (error) {
        console.log("Appwrite Error :: Get Post ::" ,error);
        return false;
    }
  }
  async ListPost(queries =[Query.equal("Status", ["Live"])]) {
    try {
        return await this.databases.listDocuments(
            this.databaseId, // databaseId
            this.collectionId, // collectionId
            queries, // queries
        );
    } catch (error) {
        console.log("Appwrite Error :: List Post ::" ,error);
        return false;
    }
  }

}


export const service = new Service();