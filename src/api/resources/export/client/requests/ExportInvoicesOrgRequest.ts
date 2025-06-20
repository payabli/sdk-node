/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
 *         fromRecord: 251,
 *         limitRecord: 1000
 *     }
 */
export interface ExportInvoicesOrgRequest {
    columnsExport?: string;
    /**
     * The number of records to skip before starting to collect the result set.
     */
    fromRecord?: number;
    /**
     * The number of records to return for the query. The maximum is 30,000 records. When this parameter isn't sent, the API returns up to 25,000 records.
     */
    limitRecord?: number;
    /**
     * Collection of field names, conditions, and values used to filter the query
     *
     * <Info>
     *   **You must remove `parameters=` from the request before you send it, otherwise Payabli will ignore the filters.**
     *
     *   Because of a technical limitation, you can't make a request that includes filters from the API console on this page. The response won't be filtered. Instead, copy the request, remove `parameters=` and run the request in a different client.
     *
     *   For example:
     *
     *   --url https://api-sandbox.payabli.com/api/Query/transactions/org/236?parameters=totalAmount(gt)=1000&limitRecord=20
     *
     *   should become:
     *
     *   --url https://api-sandbox.payabli.com/api/Query/transactions/org/236?totalAmount(gt)=1000&limitRecord=20
     * </Info>
     *
     * See [Filters and Conditions Reference](/developer-guides/reporting-filters-and-conditions-reference) for help.
     *
     * List of field names accepted:
     *  - invoiceDate (gt, ge, lt, le, eq, ne)
     *  - dueDate (gt, ge, lt, le, eq, ne)
     *  - sentDate (gt, ge, lt, le, eq, ne)
     *  - frequency  (in, nin,ne, eq)
     *  - invoiceType   (eq, ne)
     *  - payTerms   (in, nin, eq, ne)
     *  - paypointId  (ne, eq)
     *  - totalAmount  (gt, ge, lt, le, eq, ne)
     *  - paidAmount  (gt, ge, lt, le, eq, ne)
     *  - status   (in, nin, eq, ne)
     *  - invoiceNumber   (ct, nct, eq, ne)
     *  - purchaseOrder   (ct, nct, eq, ne)
     *  - itemProductCode (ct, nct)
     *  - itemDescription (ct, nct)
     *  - customerFirstname   (ct, nct, eq, ne)
     *  - customerLastname    (ct, nct, eq, ne)
     *  - customerName   (ct, nct)
     *  - customerId  (eq, ne)
     *  - customerNumber  (ct, nct, eq, ne)
     *  - customerCompanyname    (ct, nct, eq, ne)
     *  - customerAddress (ct, nct, eq, ne)
     *  - customerCity    (ct, nct, eq, ne)
     *  - customerZip (ct, nct, eq, ne)
     *  - customerState (ct, nct, eq, ne)
     *  - customerCountry (ct, nct, eq, ne)
     *  - customerPhone (ct, nct, eq, ne)
     *  - customerEmail (ct, nct, eq, ne)
     *  - customerShippingAddress (ct, nct, eq, ne)
     *  - customerShippingCity    (ct, nct, eq, ne)
     *  - customerShippingZip (ct, nct, eq, ne)
     *  - customerShippingState (ct, nct, eq, ne)
     *  - customerShippingCountry (ct, nct, eq, ne)
     *  - orgId  (eq)
     *  - paylinkId  (ne, eq)
     *  - paypointLegal  (ne, eq, ct, nct)
     *  - paypointDba  (ne, eq, ct, nct)
     *  - orgName  (ne, eq, ct, nct)
     *  - additional-xxx  (ne, eq, ct, nct) where xxx is the additional field name
     *
     * List of comparison accepted - enclosed between parentheses:
     *  - eq or empty => equal
     *  - gt => greater than
     *  - ge => greater or equal
     *  - lt => less than
     *  - le => less or equal
     *  - ne => not equal
     *  - ct => contains
     *  - nct => not contains
     *  - in => inside array
     *  - nin => not inside array
     *
     * List of parameters accepted:
     *  - limitRecord : max number of records for query (default="20", "0" or negative value for all)
     *  - fromRecord : initial record in query
     *
     * Example: totalAmount(gt)=20  return all records with totalAmount greater than 20.00
     */
    parameters?: Record<string, string | undefined>;
}
