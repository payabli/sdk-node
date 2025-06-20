/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Payabli from "../index";

export interface QueryPayoutTransactionRecordsItem {
    BatchNumber?: Payabli.Batchnumber | undefined;
    /** Events associated with this transaction. */
    Bills?: Payabli.BillPayOutData[];
    CardToken?: string;
    /** Object referencing paper check image. */
    CheckData?: Payabli.FileContent;
    /** Paper check number related to payout transaction. */
    CheckNumber?: string;
    /** Any comment or description for payout transaction. */
    Comments?: Payabli.Comments | undefined;
    /** Timestamp when the payment was created, in UTC. */
    CreatedAt?: Payabli.CreatedAt;
    EntryName?: Payabli.Entrypointfield;
    /** Events associated with this transaction. */
    Events?: Payabli.QueryTransactionEvents[];
    externalPaypointID?: Payabli.ExternalPaypointId | undefined;
    /** Service fee or sub-charge applied. */
    FeeAmount?: number;
    Gateway?: Payabli.Gatewayfield | undefined;
    /** Identifier of payout transaction. */
    IdOut?: number;
    /** Timestamp when payment record was updated. */
    LastUpdated?: Payabli.LastModified | undefined;
    /** Net amount paid. */
    NetAmount?: Payabli.Netamountnullable | undefined;
    ParentOrgName?: Payabli.OrgParentName;
    PaymentData?: Payabli.QueryPayoutTransactionRecordsItemPaymentData;
    PaymentId?: Payabli.Paymentid | undefined;
    /** The payment method for the transaction. */
    PaymentMethod?: string;
    /** Status of payout transaction. See [Payout Transaction Statuses](guides/money-out-statuses#payout-transaction-statuses) for a full reference. */
    PaymentStatus?: string;
    PaypointDbaname?: Payabli.Dbaname | undefined;
    /** Paypoint legal name. */
    PaypointLegalname?: Payabli.Legalname | undefined;
    Source?: Payabli.Source | undefined;
    /** Internal status of transaction. */
    Status?: number;
    /** Transaction total amount (including service fee or sub-charge). */
    TotalAmount?: number;
    /** Vendor related to the payout transaction. */
    Vendor?: Payabli.VendorQueryRecord;
}
