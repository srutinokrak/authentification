import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient("mongodb+srv://chotu:YurfHWA1dGM5lf6Q@cluster0.m4xd1qi.mongodb.net/?appName=Cluster0");

const db = client.db();
console.log(db);
export const auth = betterAuth({
    emailAndPassword: { 
    enabled: true, 
  }, 
  
    database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
});