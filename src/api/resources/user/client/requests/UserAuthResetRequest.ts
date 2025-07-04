/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Payabli from "../../../../index";

/**
 * @example
 *     {}
 */
export interface UserAuthResetRequest {
    /** The user's email address. */
    email?: Payabli.Email | undefined;
    /** Identifier for entrypoint originating the request (used by front-end apps) */
    entry?: string;
    /**
     * Type of entry identifier: 0 - partner, 2 - paypoint
     * used by front-end apps, required if an Entry is indicated.
     */
    entryType?: number;
}
