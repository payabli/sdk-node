/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Payabli from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Customer {
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

export class Customer {
    constructor(protected readonly _options: Customer.Options = {}) {}

    /**
     * Creates a customer in an entrypoint. An identifier is required to create customer records. Change your identifier settings in Settings > Custom Fields in PartnerHub.
     * If you don't include an identifier, the record is rejected.
     *
     * @param {Payabli.Entrypointfield} entry
     * @param {Payabli.AddCustomerRequest} request
     * @param {Customer.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Payabli.BadRequestError}
     * @throws {@link Payabli.UnauthorizedError}
     * @throws {@link Payabli.InternalServerError}
     * @throws {@link Payabli.ServiceUnavailableError}
     *
     * @example
     *     await client.customer.addCustomer("8cfec329267", {
     *         body: {
     *             customerNumber: "12356ACB",
     *             firstname: "Irene",
     *             lastname: "Canizales",
     *             address1: "123 Bishop's Trail",
     *             city: "Mountain City",
     *             state: "TN",
     *             zip: "37612",
     *             country: "US",
     *             email: "irene@canizalesconcrete.com",
     *             identifierFields: ["email"],
     *             timeZone: -5
     *         }
     *     })
     */
    public addCustomer(
        entry: Payabli.Entrypointfield,
        request: Payabli.AddCustomerRequest,
        requestOptions?: Customer.RequestOptions,
    ): core.HttpResponsePromise<Payabli.PayabliApiResponseCustomerQuery> {
        return core.HttpResponsePromise.fromPromise(this.__addCustomer(entry, request, requestOptions));
    }

    private async __addCustomer(
        entry: Payabli.Entrypointfield,
        request: Payabli.AddCustomerRequest,
        requestOptions?: Customer.RequestOptions,
    ): Promise<core.WithRawResponse<Payabli.PayabliApiResponseCustomerQuery>> {
        const { forceCustomerCreation, replaceExisting, idempotencyKey, body: _body } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (forceCustomerCreation != null) {
            _queryParams["forceCustomerCreation"] = forceCustomerCreation.toString();
        }

        if (replaceExisting != null) {
            _queryParams["replaceExisting"] = replaceExisting.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.PayabliEnvironment.Sandbox,
                `Customer/single/${encodeURIComponent(entry)}`,
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
            return {
                data: _response.body as Payabli.PayabliApiResponseCustomerQuery,
                rawResponse: _response.rawResponse,
            };
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
                throw new errors.PayabliTimeoutError("Timeout exceeded when calling POST /Customer/single/{entry}.");
            case "unknown":
                throw new errors.PayabliError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Delete a customer record.
     *
     * @param {number} customerId - Payabli-generated customer ID. Maps to "Customer ID" column in PartnerHub.
     * @param {Customer.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Payabli.BadRequestError}
     * @throws {@link Payabli.UnauthorizedError}
     * @throws {@link Payabli.InternalServerError}
     * @throws {@link Payabli.ServiceUnavailableError}
     *
     * @example
     *     await client.customer.deleteCustomer(998)
     */
    public deleteCustomer(
        customerId: number,
        requestOptions?: Customer.RequestOptions,
    ): core.HttpResponsePromise<Payabli.PayabliApiResponse00Responsedatanonobject> {
        return core.HttpResponsePromise.fromPromise(this.__deleteCustomer(customerId, requestOptions));
    }

    private async __deleteCustomer(
        customerId: number,
        requestOptions?: Customer.RequestOptions,
    ): Promise<core.WithRawResponse<Payabli.PayabliApiResponse00Responsedatanonobject>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.PayabliEnvironment.Sandbox,
                `Customer/${encodeURIComponent(customerId)}`,
            ),
            method: "DELETE",
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
            return {
                data: _response.body as Payabli.PayabliApiResponse00Responsedatanonobject,
                rawResponse: _response.rawResponse,
            };
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
                throw new errors.PayabliTimeoutError("Timeout exceeded when calling DELETE /Customer/{customerId}.");
            case "unknown":
                throw new errors.PayabliError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Retrieves a customer's record and details.
     *
     * @param {number} customerId - Payabli-generated customer ID. Maps to "Customer ID" column in PartnerHub.
     * @param {Customer.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Payabli.BadRequestError}
     * @throws {@link Payabli.UnauthorizedError}
     * @throws {@link Payabli.InternalServerError}
     * @throws {@link Payabli.ServiceUnavailableError}
     *
     * @example
     *     await client.customer.getCustomer(998)
     */
    public getCustomer(
        customerId: number,
        requestOptions?: Customer.RequestOptions,
    ): core.HttpResponsePromise<Payabli.CustomerQueryRecords> {
        return core.HttpResponsePromise.fromPromise(this.__getCustomer(customerId, requestOptions));
    }

    private async __getCustomer(
        customerId: number,
        requestOptions?: Customer.RequestOptions,
    ): Promise<core.WithRawResponse<Payabli.CustomerQueryRecords>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.PayabliEnvironment.Sandbox,
                `Customer/${encodeURIComponent(customerId)}`,
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
            return { data: _response.body as Payabli.CustomerQueryRecords, rawResponse: _response.rawResponse };
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
                throw new errors.PayabliTimeoutError("Timeout exceeded when calling GET /Customer/{customerId}.");
            case "unknown":
                throw new errors.PayabliError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Links a customer to a transaction by ID.
     *
     * @param {number} customerId - Payabli-generated customer ID. Maps to "Customer ID" column in PartnerHub.
     * @param {string} transId - ReferenceId for the transaction (PaymentId).
     * @param {Customer.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Payabli.BadRequestError}
     * @throws {@link Payabli.UnauthorizedError}
     * @throws {@link Payabli.InternalServerError}
     * @throws {@link Payabli.ServiceUnavailableError}
     *
     * @example
     *     await client.customer.linkCustomerTransaction(998, "45-as456777hhhhhhhhhh77777777-324")
     */
    public linkCustomerTransaction(
        customerId: number,
        transId: string,
        requestOptions?: Customer.RequestOptions,
    ): core.HttpResponsePromise<Payabli.PayabliApiResponse00Responsedatanonobject> {
        return core.HttpResponsePromise.fromPromise(
            this.__linkCustomerTransaction(customerId, transId, requestOptions),
        );
    }

    private async __linkCustomerTransaction(
        customerId: number,
        transId: string,
        requestOptions?: Customer.RequestOptions,
    ): Promise<core.WithRawResponse<Payabli.PayabliApiResponse00Responsedatanonobject>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.PayabliEnvironment.Sandbox,
                `Customer/link/${encodeURIComponent(customerId)}/${encodeURIComponent(transId)}`,
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
            return {
                data: _response.body as Payabli.PayabliApiResponse00Responsedatanonobject,
                rawResponse: _response.rawResponse,
            };
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
                    "Timeout exceeded when calling GET /Customer/link/{customerId}/{transId}.",
                );
            case "unknown":
                throw new errors.PayabliError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Sends the consent opt-in email to the customer email address in the customer record.
     *
     * @param {number} customerId - Payabli-generated customer ID. Maps to "Customer ID" column in PartnerHub.
     * @param {Customer.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Payabli.BadRequestError}
     * @throws {@link Payabli.UnauthorizedError}
     * @throws {@link Payabli.InternalServerError}
     * @throws {@link Payabli.ServiceUnavailableError}
     *
     * @example
     *     await client.customer.requestConsent(998)
     */
    public requestConsent(
        customerId: number,
        requestOptions?: Customer.RequestOptions,
    ): core.HttpResponsePromise<Payabli.PayabliApiResponse00Responsedatanonobject> {
        return core.HttpResponsePromise.fromPromise(this.__requestConsent(customerId, requestOptions));
    }

    private async __requestConsent(
        customerId: number,
        requestOptions?: Customer.RequestOptions,
    ): Promise<core.WithRawResponse<Payabli.PayabliApiResponse00Responsedatanonobject>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.PayabliEnvironment.Sandbox,
                `Customer/${encodeURIComponent(customerId)}/consent`,
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
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: _response.body as Payabli.PayabliApiResponse00Responsedatanonobject,
                rawResponse: _response.rawResponse,
            };
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
                    "Timeout exceeded when calling POST /Customer/{customerId}/consent.",
                );
            case "unknown":
                throw new errors.PayabliError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Update a customer record. Include only the fields you want to change.
     *
     * @param {number} customerId - Payabli-generated customer ID. Maps to "Customer ID" column in PartnerHub.
     * @param {Payabli.CustomerData} request
     * @param {Customer.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Payabli.BadRequestError}
     * @throws {@link Payabli.UnauthorizedError}
     * @throws {@link Payabli.InternalServerError}
     * @throws {@link Payabli.ServiceUnavailableError}
     *
     * @example
     *     await client.customer.updateCustomer(998, {
     *         firstname: "Irene",
     *         lastname: "Canizales",
     *         address1: "145 Bishop's Trail",
     *         city: "Mountain City",
     *         state: "TN",
     *         zip: "37612",
     *         country: "US"
     *     })
     */
    public updateCustomer(
        customerId: number,
        request: Payabli.CustomerData,
        requestOptions?: Customer.RequestOptions,
    ): core.HttpResponsePromise<Payabli.PayabliApiResponse00Responsedatanonobject> {
        return core.HttpResponsePromise.fromPromise(this.__updateCustomer(customerId, request, requestOptions));
    }

    private async __updateCustomer(
        customerId: number,
        request: Payabli.CustomerData,
        requestOptions?: Customer.RequestOptions,
    ): Promise<core.WithRawResponse<Payabli.PayabliApiResponse00Responsedatanonobject>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.PayabliEnvironment.Sandbox,
                `Customer/${encodeURIComponent(customerId)}`,
            ),
            method: "PUT",
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
            return {
                data: _response.body as Payabli.PayabliApiResponse00Responsedatanonobject,
                rawResponse: _response.rawResponse,
            };
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
                throw new errors.PayabliTimeoutError("Timeout exceeded when calling PUT /Customer/{customerId}.");
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
