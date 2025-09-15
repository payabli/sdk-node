# Payabli TypeScript Library

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-Built%20with%20Fern-brightgreen)](https://buildwithfern.com?utm_source=github&utm_medium=github&utm_campaign=readme&utm_source=https%3A%2F%2Fgithub.com%2Fpayabli%2Fsdk-node)
[![npm shield](https://img.shields.io/npm/v/@payabli/sdk-node)](https://www.npmjs.com/package/@payabli/sdk-node)

If you’re a software company, you’re a payments company™

## Documentation

API reference documentation is available [here](https://docs.payabli.com/).

## Installation

```sh
npm i -s @payabli/sdk-node
```

## Reference

A full reference for this library is available [here](https://github.com/payabli/sdk-node/blob/HEAD/./reference.md).

## Usage

Instantiate and use the client with the following:

```typescript
import { PayabliClient } from "@payabli/sdk-node";

const client = new PayabliClient({ apiKey: "YOUR_API_KEY" });
await client.moneyIn.getpaid({
    body: {
        customerData: {
            customerId: 4440,
        },
        entryPoint: "f743aed24a",
        ipaddress: "255.255.255.255",
        paymentDetails: {
            serviceFee: 0,
            totalAmount: 100,
        },
        paymentMethod: {
            cardcvv: "999",
            cardexp: "02/27",
            cardHolder: "Kassiane Cassian",
            cardnumber: "4111111111111111",
            cardzip: "12345",
            initiator: "payor",
            method: "card",
        },
    },
});
```

## Request And Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply import them with the
following namespace:

```typescript
import { Payabli } from "@payabli/sdk-node";

const request: Payabli.AddBillRequest = {
    ...
};
```

## Exception Handling

When the API returns a non-success status code (4xx or 5xx response), a subclass of the following error
will be thrown.

```typescript
import { PayabliError } from "@payabli/sdk-node";

try {
    await client.moneyIn.getpaid(...);
} catch (err) {
    if (err instanceof PayabliError) {
        console.log(err.statusCode);
        console.log(err.message);
        console.log(err.body);
        console.log(err.rawResponse);
    }
}
```

## Advanced

### Additional Headers

If you would like to send additional headers as part of the request, use the `headers` request option.

```typescript
const response = await client.moneyIn.getpaid(..., {
    headers: {
        'X-Custom-Header': 'custom value'
    }
});
```

### Additional Query String Parameters

If you would like to send additional query string parameters as part of the request, use the `queryParams` request option.

```typescript
const response = await client.moneyIn.getpaid(..., {
    queryParams: {
        'customQueryParamKey': 'custom query param value'
    }
});
```

### Retries

The SDK is instrumented with automatic retries with exponential backoff. A request will be retried as long
as the request is deemed retryable and the number of retry attempts has not grown larger than the configured
retry limit (default: 2).

A request is deemed retryable when any of the following HTTP status codes is returned:

- [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
- [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
- [5XX](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) (Internal Server Errors)

Use the `maxRetries` request option to configure this behavior.

```typescript
const response = await client.moneyIn.getpaid(..., {
    maxRetries: 0 // override maxRetries at the request level
});
```

### Timeouts

The SDK defaults to a 60 second timeout. Use the `timeoutInSeconds` option to configure this behavior.

```typescript
const response = await client.moneyIn.getpaid(..., {
    timeoutInSeconds: 30 // override timeout to 30s
});
```

### Aborting Requests

The SDK allows users to abort requests at any point by passing in an abort signal.

```typescript
const controller = new AbortController();
const response = await client.moneyIn.getpaid(..., {
    abortSignal: controller.signal
});
controller.abort(); // aborts the request
```

### Access Raw Response Data

The SDK provides access to raw response data, including headers, through the `.withRawResponse()` method.
The `.withRawResponse()` method returns a promise that results to an object with a `data` and a `rawResponse` property.

```typescript
const { data, rawResponse } = await client.moneyIn.getpaid(...).withRawResponse();

console.log(data);
console.log(rawResponse.headers['X-My-Header']);
```

### Runtime Compatibility

The SDK works in the following runtimes:

- Node.js 18+
- Vercel
- Cloudflare Workers
- Deno v1.25+
- Bun 1.0+
- React Native

### Customizing Fetch Client

The SDK provides a way for you to customize the underlying HTTP client / Fetch function. If you're running in an
unsupported environment, this provides a way for you to break glass and ensure the SDK works.

```typescript
import { PayabliClient } from "@payabli/sdk-node";

const client = new PayabliClient({
    ...
    fetcher: // provide your implementation here
});
```

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically.
Additions made directly to this library would have to be moved over to our generation code,
otherwise they would be overwritten upon the next generated release. Feel free to open a PR as
a proof of concept, but know that we will not be able to merge it as-is. We suggest opening
an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
