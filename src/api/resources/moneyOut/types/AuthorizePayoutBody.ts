/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Payabli from "../../../index";

export interface AuthorizePayoutBody {
    accountId?: Payabli.Accountid | undefined;
    entryPoint: Payabli.Entrypointfield;
    /** Array of bills associated to the transaction */
    invoiceData?: Payabli.BillPayOutDataRequest[];
    orderDescription?: Payabli.Orderdescription | undefined;
    orderId?: Payabli.Orderid | undefined;
    /** Object containing payment details. */
    paymentDetails: Payabli.RequestOutAuthorizePaymentDetails;
    paymentMethod?: Payabli.VendorPaymentMethod;
    source?: Payabli.Source | undefined;
    subdomain?: Payabli.Subdomain | undefined;
    subscriptionId?: Payabli.Subscriptionid;
    /** Object containing vendor data. */
    vendorData: Payabli.RequestOutAuthorizeVendorData;
}
