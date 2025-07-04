/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Payabli from "../index";

export interface BillQueryRecord2BillApprovalsItem {
    /** Indicates whether the bill has been approved. `0` is false, and `1` is true. */
    approved?: number;
    /** Timestamp of when the approval was made, in UTC. */
    approvedTime?: Payabli.Datetimenullable | undefined;
    /** Additional comments on the approval. */
    comments?: string;
    /** The approving user's email address. */
    email?: Payabli.Email | undefined;
    /** The approving user's ID. */
    Id?: number;
}
