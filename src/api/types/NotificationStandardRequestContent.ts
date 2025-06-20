/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Payabli from "../index";

export interface NotificationStandardRequestContent {
    /** The notification's event name. */
    eventType?: Payabli.NotificationStandardRequestContentEventType;
    /** Array of pairs key:value to insert in request body to target in **method** = *web*. */
    internalData?: Payabli.KeyValueDuo[];
    /** Used internally to reference the entity or object generating the event. */
    transactionId?: string;
    /** Array of pairs key:value to insert in header of request to target in **method** = *web*. */
    webHeaderParameters?: Payabli.KeyValueDuo[];
}
