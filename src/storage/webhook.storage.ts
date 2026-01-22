import { Webhook } from "../types/webhook";

let webhooks: Webhook[] = [];

export const webhookStorage = {
  save(webhook: Webhook): void {
    webhooks.push(webhook);
  },

  getAll(): Webhook[] {
    return webhooks;
  },

  getById(id: string): Webhook | undefined {
    return webhooks.find((w) => w.id === id);
  },

  clear(): void {
    webhooks = [];
  },
};
