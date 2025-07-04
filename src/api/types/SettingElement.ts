/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Payabli from "../index";

export interface SettingElement {
    enabled?: Payabli.Enabled;
    /** Fields to display on the reciept. */
    fields?: Payabli.DisplayProperty[];
    order?: Payabli.Order | undefined;
    /** When `true`, Payabli automatically sends the receipt to the payor email address. */
    sendAuto?: boolean;
    /** When `true`, you must send the reciept to the payor manually using the [/MoneyIn/sendreceipt/\{transId\}](/api-reference/moneyin/send-receipt-for-transaction) endpoint. */
    sendManual?: boolean;
}
