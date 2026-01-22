import { Router } from "express";
import { receiveWebhook } from "../controllers/webhook.controller";
import { validateBody } from "../middleware/validateBody";
import { webhookInputSchema } from "../validators/webhook.schema";

const router = Router();

router.post("/webhooks", validateBody(webhookInputSchema), receiveWebhook);

export default router;
