import { env } from "@/env";
import app from "@/server/server";

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});