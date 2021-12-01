import app from "@/app";

const serverPort = 3000;

app.listen(serverPort, () => {
  console.log(`[SERVER] 🏃 Running localhost:${serverPort}`);
});
