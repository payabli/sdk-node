/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Payabli from "../index";

export interface PayabliApiResponse0ResponseData {
    AuthCode?: Payabli.Authcode | undefined;
    avsResponseText?: Payabli.Avsresponsetext | undefined;
    CustomerId?: Payabli.Customeridtrans | undefined;
    cvvResponseText?: Payabli.Cvvresponsetext | undefined;
    methodReferenceId?: Payabli.MethodReferenceId | undefined;
    ReferenceId?: Payabli.Referenceidtrans;
    ResultCode?: Payabli.ResultCode;
    ResultText?: Payabli.Resulttext;
}
