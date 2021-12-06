import app from "@/app";
import serverless from "serverless-http";

const serverPort = 3001;

serverless(app);
