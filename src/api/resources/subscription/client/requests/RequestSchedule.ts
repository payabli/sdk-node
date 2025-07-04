/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Payabli from "../../../../index";

/**
 * @example
 *     {
 *         body: {
 *             customerData: {
 *                 customerId: 4440
 *             },
 *             entryPoint: "f743aed24a",
 *             paymentDetails: {
 *                 serviceFee: 0,
 *                 totalAmount: 100
 *             },
 *             paymentMethod: {
 *                 cardcvv: "123",
 *                 cardexp: "02/25",
 *                 cardHolder: "John Cassian",
 *                 cardnumber: "4111111111111111",
 *                 cardzip: "37615",
 *                 initiator: "payor",
 *                 method: "card"
 *             },
 *             scheduleDetails: {
 *                 endDate: "03-20-2025",
 *                 frequency: "weekly",
 *                 planId: 1,
 *                 startDate: "09-20-2024"
 *             }
 *         }
 *     }
 *
 * @example
 *     {
 *         body: {
 *             customerData: {
 *                 customerId: 4440
 *             },
 *             entryPoint: "f743aed24a",
 *             paymentDetails: {
 *                 serviceFee: 0,
 *                 totalAmount: 100
 *             },
 *             paymentMethod: {
 *                 achAccount: "3453445666",
 *                 achAccountType: "Checking",
 *                 achCode: "PPD",
 *                 achHolder: "John Cassian",
 *                 achHolderType: "personal",
 *                 achRouting: "021000021",
 *                 method: "ach"
 *             },
 *             scheduleDetails: {
 *                 endDate: "03-20-2025",
 *                 frequency: "weekly",
 *                 planId: 1,
 *                 startDate: "09-20-2024"
 *             }
 *         }
 *     }
 *
 * @example
 *     {
 *         body: {
 *             customerData: {
 *                 customerId: 4440
 *             },
 *             entryPoint: "f743aed24a",
 *             paymentDetails: {
 *                 serviceFee: 0,
 *                 totalAmount: 100
 *             },
 *             paymentMethod: {
 *                 initiator: "merchant",
 *                 storedMethodId: "4000e8c6-3add-4200-8ac2-9b8a4f8b1639-1323",
 *                 storedMethodUsageType: "recurring"
 *             },
 *             scheduleDetails: {
 *                 endDate: "03-20-2025",
 *                 frequency: "weekly",
 *                 planId: 1,
 *                 startDate: "09-20-2024"
 *             }
 *         }
 *     }
 */
export interface RequestSchedule {
    forceCustomerCreation?: Payabli.ForceCustomerCreation | undefined;
    idempotencyKey?: Payabli.IdempotencyKey | undefined;
    body: Payabli.SubscriptionRequestBody;
}
