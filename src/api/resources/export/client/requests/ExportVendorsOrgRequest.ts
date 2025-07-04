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
export interface ExportVendorsOrgRequest {
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
     * Collection of field names, conditions, and values used to filter the query.
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
     * - method   (in, nin, eq, ne)
     * - enrollmentStatus   (in, nin, eq, ne)
     * - status   (in, nin, eq, ne)
     * - vendorNumber  (ct, nct, eq, ne)
     * - name   (ct, nct, eq, ne)
     * - ein   (ct, nct, eq, ne)
     * - phone   (ct, nct, eq, ne)
     * - email   (ct, nct, eq, ne)
     * - address   (ct, nct, eq, ne)
     * - city   (ct, nct, eq, ne)
     * - state   (ct, nct, eq, ne)
     * - country   (ct, nct, eq, ne)
     * - zip   (ct, nct, eq, ne)
     * - mcc   (ct, nct, eq, ne)
     * - locationCode   (ct, nct, eq, ne)
     * - paypointLegal  (ne, eq, ct, nct)
     * - paypointDba  (ne, eq, ct, nct)
     * - orgName  (ne, eq, ct, nct)
     *
     * List of comparison accepted - enclosed between parentheses:
     * - eq or empty => equal
     * - gt => greater than
     * - ge => greater or equal
     * - lt => less than
     * - le => less or equal
     * - ne => not equal
     * - ct => contains
     * - nct => not contains
     * - in => inside array separated by "|"
     * - nin => not inside array separated by "|"
     *
     * List of parameters accepted:
     * - limitRecord : max number of records for query (default="20", "0" or negative value for all)
     * - fromRecord : initial record in query
     *
     * Example: netAmount(gt)=20  return all records with netAmount greater than 20.00
     */
    parameters?: Record<string, string | undefined>;
}
