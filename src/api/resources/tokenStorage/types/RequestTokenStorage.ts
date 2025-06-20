/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Payabli from "../../../index";

export interface RequestTokenStorage {
    /** Object describing the Customer/Payor owner of payment method. Required for POST requests. Which fields are required depends on the paypoint's custom identifier settings. */
    customerData?: Payabli.PayorDataRequest;
    /** Entrypoint identifier. Required for POST requests. */
    entryPoint?: Payabli.Entrypointfield;
    /** When `true`, if tokenization fails, Payabli will attempt an authorization transaction to request a permanent token for the card. If the authorization is successful, the card will be tokenized and the authorization will be voided automatically. */
    fallbackAuth?: boolean;
    /** The amount for the `fallbackAuth` transaction. Defaults to one dollar (`100`). */
    fallbackAuthAmount?: number;
    /** Custom description for stored payment method. */
    methodDescription?: string;
    /** Information about the payment method for the transaction. */
    paymentMethod?: Payabli.RequestTokenStoragePaymentMethod;
    /** Custom identifier to indicate the source for the request */
    source?: Payabli.Source | undefined;
    subdomain?: Payabli.Subdomain | undefined;
}
