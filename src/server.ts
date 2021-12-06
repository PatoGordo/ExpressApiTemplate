import app from "@/app";

const serverPort = 3001;

app.listen(serverPort, () => {
  console.log(`[SERVER] 🏃 Running localhost:${serverPort}`);
});
