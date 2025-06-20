/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Payabli from "../index";

export interface PayabliApiResponseNotifications {
    /**
     * If `isSuccess` = true, `responseData` contains the notification identifier.
     *
     * If `isSuccess` = false, `responseData` contains the reason for the error.
     */
    isSuccess?: Payabli.IsSuccess;
    pageIdentifier?: Payabli.PageIdentifier;
    responseCode?: Payabli.Responsecode;
    /** When the request was successful, this contains the notification ID, or `nID` used to manage the notifcation. */
    responseData?: Payabli.PayabliApiResponseNotificationsResponseData;
    responseText?: Payabli.ResponseText;
}
