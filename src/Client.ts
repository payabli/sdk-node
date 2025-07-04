/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Bill } from "./api/resources/bill/client/Client";
import { Boarding } from "./api/resources/boarding/client/Client";
import { ChargeBacks } from "./api/resources/chargeBacks/client/Client";
import { CheckCapture } from "./api/resources/checkCapture/client/Client";
import { Cloud } from "./api/resources/cloud/client/Client";
import { Customer } from "./api/resources/customer/client/Client";
import { Export } from "./api/resources/export/client/Client";
import { HostedPaymentPages } from "./api/resources/hostedPaymentPages/client/Client";
import { Import } from "./api/resources/import/client/Client";
import { Invoice } from "./api/resources/invoice/client/Client";
import { LineItem } from "./api/resources/lineItem/client/Client";
import { MoneyIn } from "./api/resources/moneyIn/client/Client";
import { MoneyOut } from "./api/resources/moneyOut/client/Client";
import { Notification } from "./api/resources/notification/client/Client";
import { Ocr } from "./api/resources/ocr/client/Client";
import { Organization } from "./api/resources/organization/client/Client";
import { PaymentLink } from "./api/resources/paymentLink/client/Client";
import { PaymentMethodDomain } from "./api/resources/paymentMethodDomain/client/Client";
import { Paypoint } from "./api/resources/paypoint/client/Client";
import { Query } from "./api/resources/query/client/Client";
import { Statistic } from "./api/resources/statistic/client/Client";
import { Subscription } from "./api/resources/subscription/client/Client";
import { Templates } from "./api/resources/templates/client/Client";
import { TokenStorage } from "./api/resources/tokenStorage/client/Client";
import { User } from "./api/resources/user/client/Client";
import { Vendor } from "./api/resources/vendor/client/Client";
import { Wallet } from "./api/resources/wallet/client/Client";

export declare namespace PayabliClient {
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

export class PayabliClient {
    protected _bill: Bill | undefined;
    protected _boarding: Boarding | undefined;
    protected _chargeBacks: ChargeBacks | undefined;
    protected _checkCapture: CheckCapture | undefined;
    protected _cloud: Cloud | undefined;
    protected _customer: Customer | undefined;
    protected _export: Export | undefined;
    protected _hostedPaymentPages: HostedPaymentPages | undefined;
    protected _import: Import | undefined;
    protected _invoice: Invoice | undefined;
    protected _lineItem: LineItem | undefined;
    protected _moneyIn: MoneyIn | undefined;
    protected _moneyOut: MoneyOut | undefined;
    protected _notification: Notification | undefined;
    protected _ocr: Ocr | undefined;
    protected _organization: Organization | undefined;
    protected _paymentLink: PaymentLink | undefined;
    protected _paymentMethodDomain: PaymentMethodDomain | undefined;
    protected _paypoint: Paypoint | undefined;
    protected _query: Query | undefined;
    protected _statistic: Statistic | undefined;
    protected _subscription: Subscription | undefined;
    protected _templates: Templates | undefined;
    protected _tokenStorage: TokenStorage | undefined;
    protected _user: User | undefined;
    protected _vendor: Vendor | undefined;
    protected _wallet: Wallet | undefined;

    constructor(protected readonly _options: PayabliClient.Options = {}) {}

    public get bill(): Bill {
        return (this._bill ??= new Bill(this._options));
    }

    public get boarding(): Boarding {
        return (this._boarding ??= new Boarding(this._options));
    }

    public get chargeBacks(): ChargeBacks {
        return (this._chargeBacks ??= new ChargeBacks(this._options));
    }

    public get checkCapture(): CheckCapture {
        return (this._checkCapture ??= new CheckCapture(this._options));
    }

    public get cloud(): Cloud {
        return (this._cloud ??= new Cloud(this._options));
    }

    public get customer(): Customer {
        return (this._customer ??= new Customer(this._options));
    }

    public get export(): Export {
        return (this._export ??= new Export(this._options));
    }

    public get hostedPaymentPages(): HostedPaymentPages {
        return (this._hostedPaymentPages ??= new HostedPaymentPages(this._options));
    }

    public get import(): Import {
        return (this._import ??= new Import(this._options));
    }

    public get invoice(): Invoice {
        return (this._invoice ??= new Invoice(this._options));
    }

    public get lineItem(): LineItem {
        return (this._lineItem ??= new LineItem(this._options));
    }

    public get moneyIn(): MoneyIn {
        return (this._moneyIn ??= new MoneyIn(this._options));
    }

    public get moneyOut(): MoneyOut {
        return (this._moneyOut ??= new MoneyOut(this._options));
    }

    public get notification(): Notification {
        return (this._notification ??= new Notification(this._options));
    }

    public get ocr(): Ocr {
        return (this._ocr ??= new Ocr(this._options));
    }

    public get organization(): Organization {
        return (this._organization ??= new Organization(this._options));
    }

    public get paymentLink(): PaymentLink {
        return (this._paymentLink ??= new PaymentLink(this._options));
    }

    public get paymentMethodDomain(): PaymentMethodDomain {
        return (this._paymentMethodDomain ??= new PaymentMethodDomain(this._options));
    }

    public get paypoint(): Paypoint {
        return (this._paypoint ??= new Paypoint(this._options));
    }

    public get query(): Query {
        return (this._query ??= new Query(this._options));
    }

    public get statistic(): Statistic {
        return (this._statistic ??= new Statistic(this._options));
    }

    public get subscription(): Subscription {
        return (this._subscription ??= new Subscription(this._options));
    }

    public get templates(): Templates {
        return (this._templates ??= new Templates(this._options));
    }

    public get tokenStorage(): TokenStorage {
        return (this._tokenStorage ??= new TokenStorage(this._options));
    }

    public get user(): User {
        return (this._user ??= new User(this._options));
    }

    public get vendor(): Vendor {
        return (this._vendor ??= new Vendor(this._options));
    }

    public get wallet(): Wallet {
        return (this._wallet ??= new Wallet(this._options));
    }
}
