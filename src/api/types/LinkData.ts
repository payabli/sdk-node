/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Payabli from "../index";

export interface LinkData {
    ro?: Payabli.ReadOnly | undefined;
    rq?: Payabli.RequiredElement;
    /**
     * The type of validation applied to the field. Available values:
     * - text
     * - alpha
     * - ein
     * - url
     * - phone
     * - alphanumeric
     * - zipcode
     * - numbers
     * - float
     * - ssn
     * - email
     * - routing
     */
    validator?: string;
    value?: Payabli.ValueTemplates | undefined;
}
