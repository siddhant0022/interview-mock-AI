import { defineConfig } from "drizzle-kit";

export default{
  schema:"./lib/schema.js",
  dialect: "postgresql",
  dbCredentials:{
    url:'postgresql://interviewdb_owner:7wGHVmlc8YsC@ep-soft-morning-a5syd6t3.us-east-2.aws.neon.tech/interviewdb?sslmode=require',
  }
 
};
