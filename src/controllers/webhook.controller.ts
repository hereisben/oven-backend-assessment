import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { webhookStorage } from "../storage/webhook.storage";
import { Webhook } from "../types/webhook";

export const receiveWebhook = (req: Request, res: Response) => {
  const input = req.body as { source: string; event: string; payload: unknown };

  const webhook: Webhook = {
    id: randomUUID(),
    source: input.source,
    event: input.event,
    payload: input.payload,
    receivedAt: new Date(),
  };

  webhookStorage.save(webhook);

  res.json({
    id: webhook.id,
    message: "Webhook received",
  });
};
