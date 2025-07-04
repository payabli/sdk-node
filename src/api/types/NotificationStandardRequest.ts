/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Payabli from "../index";

/**
 * Information about the standard notification configuration (email, sms, web).
 */
export interface NotificationStandardRequest {
    content?: Payabli.NotificationStandardRequestContent;
    frequency: Payabli.NotificationStandardRequestFrequency;
    /** Get near-instant notifications via email, SMS, or webhooks for important events like new payment disputes, merchant activations, fraud alerts, approved transactions, settlement history, vendor payouts, and more. Use webhooks with notifications to get real-time updates and automate operations based on key those key events. See [Notifications](/developer-guides/notifications-and-webhooks-overview#notifications) for more. */
    method: Payabli.NotificationStandardRequestMethod;
    ownerId?: Payabli.Ownerid | undefined;
    ownerType: Payabli.Ownertype;
    status?: Payabli.Statusnotification | undefined;
    /**
     * Specify the notification target.
     *
     * - For method=email the expected value is a list of email addresses separated by semicolon.
     * - For method=sms the expected value is a list of phone numbers separated by semicolon.
     * - For method=web the expected value is a valid and complete URL. Webhooks support only standard HTTP ports: 80, 443, 8080, or 4443.
     */
    target: string;
}
