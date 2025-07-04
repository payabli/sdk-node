/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Payabli from "../index";

export interface Contacts {
    /** Contact email address. */
    contactEmail?: Payabli.Email | undefined;
    /** Contact name. */
    contactName?: string;
    /** Contact phone number. */
    contactPhone?: string;
    /** Contact title. */
    contactTitle?: string;
    additionalData?: Payabli.AdditionalDataString | undefined;
}
