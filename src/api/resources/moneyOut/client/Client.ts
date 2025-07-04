/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Payabli from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace MoneyOut {
    export interface Options {
        environment?: core.Supplier<environments.PayabliEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        apiKey?: core.Supplier<string | undefined>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class MoneyOut {
    constructor(protected readonly _options: MoneyOut.Options = {}) {}

    /**
     * Authorizes transaction for payout. Authorized transactions aren't flagged for settlement until captured. Use `referenceId` returned in the response to capture the transaction.
     *
     * @param {Payabli.RequestOutAuthorize} request
     * @param {MoneyOut.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Payabli.BadRequestError}
     * @throws {@link Payabli.UnauthorizedError}
     * @throws {@link Payabli.InternalServerError}
     * @throws {@link Payabli.ServiceUnavailableError}
     *
     * @example
     *     await client.moneyOut.authorizeOut({
     *         body: {
     *             entryPoint: "48acde49",
     *             invoiceData: [{
     *                     billId: 123
     *                 }],
     *             orderDescription: "Window Painting",
     *             paymentDetails: {
     *                 totalAmount: 47
     *             },
     *             paymentMethod: {
     *                 method: "managed"
     *             },
     *             vendorData: {
     *                 vendorNumber: "7895433"
     *             }
     *         }
     *     })
     *
     * @example
     *     await client.moneyOut.authorizeOut({
     *         body: {
     *             entryPoint: "48acde49",
     *             invoiceData: [{
     *                     billId: 123,
     *                     attachments: [{
     *                             filename: "bill.pdf",
     *                             ftype: "pdf",
     *                             furl: "https://example.com/bill.pdf"
     *                         }]
     *                 }],
     *             orderDescription: "Window Painting",
     *             paymentDetails: {
     *                 totalAmount: 47
     *             },
     *             paymentMethod: {
     *                 method: "managed"
     *             },
     *             vendorData: {
     *                 vendorNumber: "7895433"
     *             }
     *         }
     *     })
     */
    public authorizeOut(
        request: Payabli.RequestOutAuthorize,
        requestOptions?: MoneyOut.RequestOptions,
    ): core.HttpResponsePromise<Payabli.PayabliApiResponse11> {
        return core.HttpResponsePromise.fromPromise(this.__authorizeOut(request, requestOptions));
    }

    private async __authorizeOut(
        request: Payabli.RequestOutAuthorize,
        requestOptions?: MoneyOut.RequestOptions,
    ): Promise<core.WithRawResponse<Payabli.PayabliApiResponse11>> {
        const { allowDuplicatedBills, doNotCreateBills, forceVendorCreation, idempotencyKey, body: _body } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (allowDuplicatedBills != null) {
            _queryParams["allowDuplicatedBills"] = allowDuplicatedBills.toString();
        }

        if (doNotCreateBills != null) {
            _queryParams["doNotCreateBills"] = doNotCreateBills.toString();
        }

        if (forceVendorCreation != null) {
            _queryParams["forceVendorCreation"] = forceVendorCreation.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.PayabliEnvironment.Sandbox,
                "MoneyOut/authorize",
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@payabli/sdk-node",
                "X-Fern-SDK-Version": "0.0.107",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                idempotencyKey: idempotencyKey != null ? idempotencyKey : undefined,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Payabli.PayabliApiResponse11, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Payabli.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 401:
                    throw new Payabli.UnauthorizedError(_response.error.body as unknown, _response.rawResponse);
                case 500:
                    throw new Payabli.InternalServerError(_response.error.body as unknown, _response.rawResponse);
                case 503:
                    throw new Payabli.ServiceUnavailableError(
                        _response.error.body as Payabli.PayabliApiResponse,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.PayabliError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PayabliError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.PayabliTimeoutError("Timeout exceeded when calling POST /MoneyOut/authorize.");
            case "unknown":
                throw new errors.PayabliError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Cancels an array of payout transactions.
     *
     * @param {string[]} request
     * @param {MoneyOut.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Payabli.BadRequestError}
     * @throws {@link Payabli.UnauthorizedError}
     * @throws {@link Payabli.InternalServerError}
     * @throws {@link Payabli.ServiceUnavailableError}
     *
     * @example
     *     await client.moneyOut.cancelAllOut(["2-29", "2-28", "2-27"])
     */
    public cancelAllOut(
        request: string[],
        requestOptions?: MoneyOut.RequestOptions,
    ): core.HttpResponsePromise<Payabli.CaptureAllOutResponse> {
        return core.HttpResponsePromise.fromPromise(this.__cancelAllOut(request, requestOptions));
    }

    private async __cancelAllOut(
        request: string[],
        requestOptions?: MoneyOut.RequestOptions,
    ): Promise<core.WithRawResponse<Payabli.CaptureAllOutResponse>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.PayabliEnvironment.Sandbox,
                "MoneyOut/cancelAll",
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@payabli/sdk-node",
                "X-Fern-SDK-Version": "0.0.107",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Payabli.CaptureAllOutResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Payabli.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 401:
                    throw new Payabli.UnauthorizedError(_response.error.body as unknown, _response.rawResponse);
                case 500:
                    throw new Payabli.InternalServerError(_response.error.body as unknown, _response.rawResponse);
                case 503:
                    throw new Payabli.ServiceUnavailableError(
                        _response.error.body as Payabli.PayabliApiResponse,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.PayabliError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PayabliError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.PayabliTimeoutError("Timeout exceeded when calling POST /MoneyOut/cancelAll.");
            case "unknown":
                throw new errors.PayabliError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Cancel a payout transaction by ID.
     *
     * @param {string} referenceId - The ID for the payout transaction.
     * @param {MoneyOut.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Payabli.BadRequestError}
     * @throws {@link Payabli.UnauthorizedError}
     * @throws {@link Payabli.InternalServerError}
     * @throws {@link Payabli.ServiceUnavailableError}
     *
     * @example
     *     await client.moneyOut.cancelOut("129-219")
     */
    public cancelOut(
        referenceId: string,
        requestOptions?: MoneyOut.RequestOptions,
    ): core.HttpResponsePromise<Payabli.PayabliApiResponse0000> {
        return core.HttpResponsePromise.fromPromise(this.__cancelOut(referenceId, requestOptions));
    }

    private async __cancelOut(
        referenceId: string,
        requestOptions?: MoneyOut.RequestOptions,
    ): Promise<core.WithRawResponse<Payabli.PayabliApiResponse0000>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.PayabliEnvironment.Sandbox,
                `MoneyOut/cancel/${encodeURIComponent(referenceId)}`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@payabli/sdk-node",
                "X-Fern-SDK-Version": "0.0.107",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Payabli.PayabliApiResponse0000, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Payabli.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 401:
                    throw new Payabli.UnauthorizedError(_response.error.body as unknown, _response.rawResponse);
                case 500:
                    throw new Payabli.InternalServerError(_response.error.body as unknown, _response.rawResponse);
                case 503:
                    throw new Payabli.ServiceUnavailableError(
                        _response.error.body as Payabli.PayabliApiResponse,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.PayabliError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PayabliError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.PayabliTimeoutError(
                    "Timeout exceeded when calling GET /MoneyOut/cancel/{referenceId}.",
                );
            case "unknown":
                throw new errors.PayabliError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Captures an array of authorized payout transactions for settlement.
     *
     * @param {Payabli.CaptureAllOutRequest} request
     * @param {MoneyOut.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Payabli.BadRequestError}
     * @throws {@link Payabli.UnauthorizedError}
     * @throws {@link Payabli.InternalServerError}
     * @throws {@link Payabli.ServiceUnavailableError}
     *
     * @example
     *     await client.moneyOut.captureAllOut({
     *         body: ["2-29", "2-28", "2-27"]
     *     })
     */
    public captureAllOut(
        request: Payabli.CaptureAllOutRequest,
        requestOptions?: MoneyOut.RequestOptions,
    ): core.HttpResponsePromise<Payabli.CaptureAllOutResponse> {
        return core.HttpResponsePromise.fromPromise(this.__captureAllOut(request, requestOptions));
    }

    private async __captureAllOut(
        request: Payabli.CaptureAllOutRequest,
        requestOptions?: MoneyOut.RequestOptions,
    ): Promise<core.WithRawResponse<Payabli.CaptureAllOutResponse>> {
        const { idempotencyKey, body: _body } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.PayabliEnvironment.Sandbox,
                "MoneyOut/captureAll",
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@payabli/sdk-node",
                "X-Fern-SDK-Version": "0.0.107",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                idempotencyKey: idempotencyKey != null ? idempotencyKey : undefined,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Payabli.CaptureAllOutResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Payabli.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 401:
                    throw new Payabli.UnauthorizedError(_response.error.body as unknown, _response.rawResponse);
                case 500:
                    throw new Payabli.InternalServerError(_response.error.body as unknown, _response.rawResponse);
                case 503:
                    throw new Payabli.ServiceUnavailableError(
                        _response.error.body as Payabli.PayabliApiResponse,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.PayabliError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PayabliError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.PayabliTimeoutError("Timeout exceeded when calling POST /MoneyOut/captureAll.");
            case "unknown":
                throw new errors.PayabliError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Captures a single authorized payout transaction by ID.
     *
     * @param {string} referenceId - The ID for the payout transaction.
     * @param {Payabli.CaptureOutRequest} request
     * @param {MoneyOut.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Payabli.BadRequestError}
     * @throws {@link Payabli.UnauthorizedError}
     * @throws {@link Payabli.InternalServerError}
     * @throws {@link Payabli.ServiceUnavailableError}
     *
     * @example
     *     await client.moneyOut.captureOut("129-219")
     */
    public captureOut(
        referenceId: string,
        request: Payabli.CaptureOutRequest = {},
        requestOptions?: MoneyOut.RequestOptions,
    ): core.HttpResponsePromise<Payabli.PayabliApiResponse11> {
        return core.HttpResponsePromise.fromPromise(this.__captureOut(referenceId, request, requestOptions));
    }

    private async __captureOut(
        referenceId: string,
        request: Payabli.CaptureOutRequest = {},
        requestOptions?: MoneyOut.RequestOptions,
    ): Promise<core.WithRawResponse<Payabli.PayabliApiResponse11>> {
        const { idempotencyKey } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.PayabliEnvironment.Sandbox,
                `MoneyOut/capture/${encodeURIComponent(referenceId)}`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@payabli/sdk-node",
                "X-Fern-SDK-Version": "0.0.107",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                idempotencyKey: idempotencyKey != null ? idempotencyKey : undefined,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Payabli.PayabliApiResponse11, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Payabli.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 401:
                    throw new Payabli.UnauthorizedError(_response.error.body as unknown, _response.rawResponse);
                case 500:
                    throw new Payabli.InternalServerError(_response.error.body as unknown, _response.rawResponse);
                case 503:
                    throw new Payabli.ServiceUnavailableError(
                        _response.error.body as Payabli.PayabliApiResponse,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.PayabliError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PayabliError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.PayabliTimeoutError(
                    "Timeout exceeded when calling GET /MoneyOut/capture/{referenceId}.",
                );
            case "unknown":
                throw new errors.PayabliError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Returns details for a processed money out transaction.
     *
     * @param {string} transId - ReferenceId for the transaction (PaymentId).
     * @param {MoneyOut.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Payabli.BadRequestError}
     * @throws {@link Payabli.UnauthorizedError}
     * @throws {@link Payabli.BadRequestError}
     * @throws {@link Payabli.UnauthorizedError}
     * @throws {@link Payabli.InternalServerError}
     * @throws {@link Payabli.ServiceUnavailableError}
     *
     * @example
     *     await client.moneyOut.payoutDetails("45-as456777hhhhhhhhhh77777777-324")
     */
    public payoutDetails(
        transId: string,
        requestOptions?: MoneyOut.RequestOptions,
    ): core.HttpResponsePromise<Payabli.BillDetailResponse> {
        return core.HttpResponsePromise.fromPromise(this.__payoutDetails(transId, requestOptions));
    }

    private async __payoutDetails(
        transId: string,
        requestOptions?: MoneyOut.RequestOptions,
    ): Promise<core.WithRawResponse<Payabli.BillDetailResponse>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.PayabliEnvironment.Sandbox,
                `MoneyOut/details/${encodeURIComponent(transId)}`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@payabli/sdk-node",
                "X-Fern-SDK-Version": "0.0.107",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Payabli.BillDetailResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Payabli.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 401:
                    throw new Payabli.UnauthorizedError(_response.error.body as unknown, _response.rawResponse);
                case 400:
                    throw new Payabli.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 401:
                    throw new Payabli.UnauthorizedError(_response.error.body as unknown, _response.rawResponse);
                case 500:
                    throw new Payabli.InternalServerError(_response.error.body as unknown, _response.rawResponse);
                case 503:
                    throw new Payabli.ServiceUnavailableError(
                        _response.error.body as Payabli.PayabliApiResponse,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.PayabliError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PayabliError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.PayabliTimeoutError("Timeout exceeded when calling GET /MoneyOut/details/{transId}.");
            case "unknown":
                throw new errors.PayabliError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Retrieves vCard details for a single card in an entrypoint.
     *
     * @param {string} cardToken - ID for a virtual card.
     * @param {MoneyOut.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Payabli.BadRequestError}
     * @throws {@link Payabli.UnauthorizedError}
     * @throws {@link Payabli.InternalServerError}
     * @throws {@link Payabli.ServiceUnavailableError}
     *
     * @example
     *     await client.moneyOut.vCardGet("20230403315245421165")
     */
    public vCardGet(
        cardToken: string,
        requestOptions?: MoneyOut.RequestOptions,
    ): core.HttpResponsePromise<Payabli.VCardGetResponse> {
        return core.HttpResponsePromise.fromPromise(this.__vCardGet(cardToken, requestOptions));
    }

    private async __vCardGet(
        cardToken: string,
        requestOptions?: MoneyOut.RequestOptions,
    ): Promise<core.WithRawResponse<Payabli.VCardGetResponse>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.PayabliEnvironment.Sandbox,
                `MoneyOut/vcard/${encodeURIComponent(cardToken)}`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@payabli/sdk-node",
                "X-Fern-SDK-Version": "0.0.107",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Payabli.VCardGetResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Payabli.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 401:
                    throw new Payabli.UnauthorizedError(_response.error.body as unknown, _response.rawResponse);
                case 500:
                    throw new Payabli.InternalServerError(_response.error.body as unknown, _response.rawResponse);
                case 503:
                    throw new Payabli.ServiceUnavailableError(
                        _response.error.body as Payabli.PayabliApiResponse,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.PayabliError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PayabliError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.PayabliTimeoutError("Timeout exceeded when calling GET /MoneyOut/vcard/{cardToken}.");
            case "unknown":
                throw new errors.PayabliError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Retrieve the image of a check associated with a processed transaction.
     * The check image is returned in the response body as a base64-encoded string.
     * The check image is only available for payouts that have been processed.
     *
     * @param {string} assetName - Name of the check asset to retrieve. This is returned as `filename` in the `CheckData` object
     *                             in the response when you make a GET request to `/MoneyOut/details/{transId}`.
     *                             ```
     *                                 "CheckData": {
     *                                   "ftype": "PDF",
     *                                   "filename": "check133832686289732320_01JKBNZ5P32JPTZY8XXXX000000.pdf",
     *                                   "furl": "",
     *                                   "fContent": ""
     *                               }
     *                             ```
     * @param {MoneyOut.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Payabli.BadRequestError}
     * @throws {@link Payabli.UnauthorizedError}
     * @throws {@link Payabli.InternalServerError}
     * @throws {@link Payabli.ServiceUnavailableError}
     *
     * @example
     *     await client.moneyOut.getCheckImage("check133832686289732320_01JKBNZ5P32JPTZY8XXXX000000.pdf")
     */
    public getCheckImage(
        assetName: string,
        requestOptions?: MoneyOut.RequestOptions,
    ): core.HttpResponsePromise<string> {
        return core.HttpResponsePromise.fromPromise(this.__getCheckImage(assetName, requestOptions));
    }

    private async __getCheckImage(
        assetName: string,
        requestOptions?: MoneyOut.RequestOptions,
    ): Promise<core.WithRawResponse<string>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.PayabliEnvironment.Sandbox,
                `MoneyOut/checkimage/${encodeURIComponent(assetName)}`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@payabli/sdk-node",
                "X-Fern-SDK-Version": "0.0.107",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as string, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Payabli.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 401:
                    throw new Payabli.UnauthorizedError(_response.error.body as unknown, _response.rawResponse);
                case 500:
                    throw new Payabli.InternalServerError(_response.error.body as unknown, _response.rawResponse);
                case 503:
                    throw new Payabli.ServiceUnavailableError(
                        _response.error.body as Payabli.PayabliApiResponse,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.PayabliError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PayabliError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.PayabliTimeoutError(
                    "Timeout exceeded when calling GET /MoneyOut/checkimage/{assetName}.",
                );
            case "unknown":
                throw new errors.PayabliError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { requestToken: apiKeyValue };
    }
}
