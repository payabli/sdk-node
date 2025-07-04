/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         endDate: "2023-05-23",
 *         startDate: "2023-03-23"
 *     }
 */
export interface BasicStatsRequest {
    /**
     * Used with `custom` mode. The end date for the range.
     * Valid formats:
     *   - YYYY-mm-dd
     *   - YYYY/mm/dd
     *   - mm-dd-YYYY
     *   - mm/dd/YYYY
     */
    endDate?: string;
    /**
     * List of parameters.
     */
    parameters?: Record<string, string | undefined>;
    /**
     * Used with `custom` mode. The start date for the range.
     * Valid formats:
     *    - YYYY-mm-dd
     *    - YYYY/mm/dd
     *    -  mm-dd-YYYY
     *    - mm/dd/YYYY
     */
    startDate?: string;
}
