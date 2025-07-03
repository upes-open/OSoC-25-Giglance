import { env } from "@/env";
import app from "@/server/server";
import dotenv from 'dotenv';
dotenv.config();
const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});