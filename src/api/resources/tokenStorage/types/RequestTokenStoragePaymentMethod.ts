/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Payabli from "../../../index";

/**
 * Information about the payment method for the transaction.
 */
export type RequestTokenStoragePaymentMethod =
    /**
     * Tokenize a card payment method. */
    | Payabli.TokenizeCard
    /**
     * Tokenize an ACH payment method. */
    | Payabli.TokenizeAch
    /**
     * Converts a temporary token to a permanent token.  */
    | Payabli.ConvertToken;
