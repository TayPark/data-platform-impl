import express from "express";
import dotenv from "dotenv";
import { v4 } from "uuid";
import { randomBytes } from "crypto";
import { logger } from './logger'

dotenv.config();

const PORT = parseInt(process.env.PORT || "3000");

const app = express();
app.use(express.json());

app.get("/get", async (req: express.Request, res: express.Response) => {
  const { params, query, originalUrl, headers, ip } = req;
  const userId = randomBytes(16).toString("hex");
  
  const payload = {
    result: 1,
    requestId: v4(),
    headers: {
      ...headers,
      originalUrl,
      ip,
      query,
    },
    data: {
      userId,
      ...params,
    },
  }
  
  logger.info(payload);

  return res.status(200).json(payload);
});

app.post("/post", async (req: express.Request, res: express.Response) => {
  const { body, originalUrl, headers, ip } = req;
  const userId = randomBytes(16).toString("hex");

  const payload = {
    result: 1,
    requestId: v4(),
    headers: {
      ...headers,
      originalUrl,
      ip,
    },
    data: {
      userId,
      ...body,
    },
  }

  logger.info(payload);

  return res.status(200).json(payload);
});

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
