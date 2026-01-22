import { Request, Response } from "express";
import { webhookStorage } from "../storage/webhook.storage";
import { Webhook, WebhookInput } from "../types/webhook";

export const receiveWebhook = (req: Request, res: Response) => {
  const input = req.body as WebhookInput;

  const webhook: Webhook = {
    id: Math.random().toString(36).substring(7),
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
