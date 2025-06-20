/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Payabli from "../index";

/**
 * Details about the Google Pay service status.
 */
export interface GooglePayStatusData {
    /** Any error message related to Google Pay's activation status. */
    errorMessage?: string;
    metadata?: Payabli.GooglePayMetadata;
}
