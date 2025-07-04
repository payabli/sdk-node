/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Payabli from "../index";

export interface PayabliPages {
    AdditionalData?: Payabli.AdditionalData;
    /** Array of credential objects with active services for the page */
    credentials?: Payabli.PayabliCredentials[];
    /** Timestamp of last access to page structure */
    lastAccess?: string;
    /** Sections of page */
    pageContent?: Payabli.PageContent;
    pageIdentifier?: Payabli.PageIdentifier;
    /** Settings of page */
    pageSettings?: Payabli.PageSetting;
    /** Flag indicating if page is active to accept payments. `0` for false, `1` for true. */
    published?: number;
    /** Sections of payment receipt */
    receiptContent?: Payabli.ReceiptContent;
    /** Page identifier. Must be unique in platform. */
    subdomain?: Payabli.Subdomain | undefined;
    /** Total amount to pay in this page */
    totalAmount?: number;
    /** Base64 encoded image of Captcha associated to this page load */
    validationCode?: string;
}
