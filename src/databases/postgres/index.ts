import { createConnection } from "typeorm";

createConnection().then(() => {
  console.log("[DATABASE] 📂 Connection Created!");
});
