/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         fromRecord: 251,
 *         limitRecord: 0,
 *         sortBy: "desc(field_name)"
 *     }
 */
export interface ListApplicationsRequest {
    /**
     * The number of records to skip before starting to collect the result set.
     */
    fromRecord?: number;
    /**
     * Max number of records to return for the query. Use `0` or negative value to return all records.
     */
    limitRecord?: number;
    /**
     * Collection of field names, conditions, and values used to filter the query
     *
     * See [Filters and Conditions Reference](/developer-guides/reporting-filters-and-conditions-reference) for help.
     *
     * List of field names accepted:
     * - createdAt (gt, ge, lt, le, eq, ne)
     * - startDate (gt, ge, lt, le, eq, ne)
     * - dbaname (ct, nct)
     * - legalname (ct, nct)
     * - ein (ct, nct)
     * - address (ct, nct)
     * - city (ct, nct)
     * - state (ct, nct)
     * - phone (ct, nct)
     * - mcc (ct, nct)
     * - owntype (ct, nct)
     * - ownerName (ct, nct)
     * - contactName (ct, nct)
     * - status (in, nin, eq,ne)
     * - orgParentname (ct, nct)
     * -  externalpaypointID  (ct, nct, eq, ne)
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
     * - in => inside array
     * - nin => not inside array
     */
    parameters?: Record<string, string | undefined>;
    /**
     * The field name to use for sorting results. Use `desc(field_name)` to sort descending by `field_name`, and use `asc(field_name)` to sort ascending by `field_name`.
     */
    sortBy?: string;
}
