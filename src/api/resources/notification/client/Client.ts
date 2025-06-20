/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Payabli from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Notification {
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

export class Notification {
    constructor(protected readonly _options: Notification.Options = {}) {}

    /**
     * Create a new notification or autogenerated report.
     *
     * @param {Payabli.AddNotificationRequest} request
     * @param {Notification.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Payabli.BadRequestError}
     * @throws {@link Payabli.UnauthorizedError}
     * @throws {@link Payabli.InternalServerError}
     * @throws {@link Payabli.ServiceUnavailableError}
     *
     * @example
     *     await client.notification.addNotification({
     *         content: {
     *             eventType: "CreatedApplication"
     *         },
     *         frequency: "untilcancelled",
     *         method: "web",
     *         ownerId: "236",
     *         ownerType: 0,
     *         status: 1,
     *         target: "https://webhook.site/2871b8f8-edc7-441a-b376-98d8c8e33275"
     *     })
     *
     * @example
     *     await client.notification.addNotification({
     *         content: {
     *             eventType: "Report",
     *             fileFormat: "json",
     *             reportName: "Transaction",
     *             timeZone: -5,
     *             transactionId: "0"
     *         },
     *         frequency: "biweekly",
     *         method: "report-email",
     *         ownerId: "236",
     *         ownerType: 0,
     *         status: 1,
     *         target: "admin@example.com"
     *     })
     */
    public addNotification(
        request: Payabli.AddNotificationRequest,
        requestOptions?: Notification.RequestOptions,
    ): core.HttpResponsePromise<Payabli.PayabliApiResponseNotifications> {
        return core.HttpResponsePromise.fromPromise(this.__addNotification(request, requestOptions));
    }

    private async __addNotification(
        request: Payabli.AddNotificationRequest,
        requestOptions?: Notification.RequestOptions,
    ): Promise<core.WithRawResponse<Payabli.PayabliApiResponseNotifications>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.PayabliEnvironment.Sandbox,
                "Notification",
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
            return {
                data: _response.body as Payabli.PayabliApiResponseNotifications,
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
                throw new errors.PayabliTimeoutError("Timeout exceeded when calling POST /Notification.");
            case "unknown":
                throw new errors.PayabliError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Deletes a single notification or autogenerated report.
     *
     * @param {string} nId - Notification ID.
     * @param {Notification.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Payabli.BadRequestError}
     * @throws {@link Payabli.UnauthorizedError}
     * @throws {@link Payabli.InternalServerError}
     * @throws {@link Payabli.ServiceUnavailableError}
     *
     * @example
     *     await client.notification.deleteNotification("1717")
     */
    public deleteNotification(
        nId: string,
        requestOptions?: Notification.RequestOptions,
    ): core.HttpResponsePromise<Payabli.PayabliApiResponseNotifications> {
        return core.HttpResponsePromise.fromPromise(this.__deleteNotification(nId, requestOptions));
    }

    private async __deleteNotification(
        nId: string,
        requestOptions?: Notification.RequestOptions,
    ): Promise<core.WithRawResponse<Payabli.PayabliApiResponseNotifications>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.PayabliEnvironment.Sandbox,
                `Notification/${encodeURIComponent(nId)}`,
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
                data: _response.body as Payabli.PayabliApiResponseNotifications,
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
                throw new errors.PayabliTimeoutError("Timeout exceeded when calling DELETE /Notification/{nId}.");
            case "unknown":
                throw new errors.PayabliError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Retrieves a single notification or autogenerated report's details.
     *
     * @param {string} nId - Notification ID.
     * @param {Notification.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Payabli.BadRequestError}
     * @throws {@link Payabli.UnauthorizedError}
     * @throws {@link Payabli.InternalServerError}
     * @throws {@link Payabli.ServiceUnavailableError}
     *
     * @example
     *     await client.notification.getNotification("1717")
     */
    public getNotification(
        nId: string,
        requestOptions?: Notification.RequestOptions,
    ): core.HttpResponsePromise<Payabli.NotificationQueryRecord> {
        return core.HttpResponsePromise.fromPromise(this.__getNotification(nId, requestOptions));
    }

    private async __getNotification(
        nId: string,
        requestOptions?: Notification.RequestOptions,
    ): Promise<core.WithRawResponse<Payabli.NotificationQueryRecord>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.PayabliEnvironment.Sandbox,
                `Notification/${encodeURIComponent(nId)}`,
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
            return { data: _response.body as Payabli.NotificationQueryRecord, rawResponse: _response.rawResponse };
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
                throw new errors.PayabliTimeoutError("Timeout exceeded when calling GET /Notification/{nId}.");
            case "unknown":
                throw new errors.PayabliError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Update a notification or autogenerated report.
     *
     * @param {string} nId - Notification ID.
     * @param {Payabli.UpdateNotificationRequest} request
     * @param {Notification.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Payabli.BadRequestError}
     * @throws {@link Payabli.UnauthorizedError}
     * @throws {@link Payabli.InternalServerError}
     * @throws {@link Payabli.ServiceUnavailableError}
     *
     * @example
     *     await client.notification.updateNotification("1717", {
     *         content: {
     *             eventType: "ApprovedPayment"
     *         },
     *         frequency: "untilcancelled",
     *         method: "email",
     *         ownerId: "136",
     *         ownerType: 0,
     *         status: 1,
     *         target: "newemail@email.com"
     *     })
     */
    public updateNotification(
        nId: string,
        request: Payabli.UpdateNotificationRequest,
        requestOptions?: Notification.RequestOptions,
    ): core.HttpResponsePromise<Payabli.PayabliApiResponseNotifications> {
        return core.HttpResponsePromise.fromPromise(this.__updateNotification(nId, request, requestOptions));
    }

    private async __updateNotification(
        nId: string,
        request: Payabli.UpdateNotificationRequest,
        requestOptions?: Notification.RequestOptions,
    ): Promise<core.WithRawResponse<Payabli.PayabliApiResponseNotifications>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.PayabliEnvironment.Sandbox,
                `Notification/${encodeURIComponent(nId)}`,
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
                data: _response.body as Payabli.PayabliApiResponseNotifications,
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
                throw new errors.PayabliTimeoutError("Timeout exceeded when calling PUT /Notification/{nId}.");
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
