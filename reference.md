# Reference
## Bill
<details><summary><code>client.bill.<a href="/src/api/resources/bill/client/Client.ts">addBill</a>(entry, { ...params }) -> Payabli.BillResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a bill in an entrypoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bill.addBill("8cfec329267", {
    body: {
        billNumber: "ABC-123",
        netAmount: 3762.87,
        billDate: "2024-07-01",
        dueDate: "2024-07-01",
        comments: "Deposit for materials",
        billItems: [{
                itemProductCode: "M-DEPOSIT",
                itemProductName: "Materials deposit",
                itemDescription: "Deposit for materials",
                itemCommodityCode: "010",
                itemUnitOfMeasure: "SqFt",
                itemCost: 5,
                itemQty: 1,
                itemMode: 0,
                itemCategories: ["deposits"],
                itemTotalAmount: 123,
                itemTaxAmount: 7,
                itemTaxRate: 0.075
            }],
        mode: 0,
        accountingField1: "MyInternalId",
        vendor: {
            vendorNumber: "1234-A"
        },
        endDate: "2024-07-01",
        frequency: "monthly",
        terms: "NET30",
        status: -99,
        attachments: [{
                ftype: "pdf",
                filename: "my-doc.pdf",
                furl: "https://mysite.com/my-doc.pdf"
            }]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.AddBillRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bill.<a href="/src/api/resources/bill/client/Client.ts">deleteAttachedFromBill</a>(idBill, filename, { ...params }) -> Payabli.BillResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a file attached to a bill.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bill.deleteAttachedFromBill(285, "0_Bill.pdf");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**idBill:** `number` — Payabli ID for the bill. Get this ID by querying `/api/Query/bills/` for the entrypoint or the organization.
    
</dd>
</dl>

<dl>
<dd>

**filename:** `string` 

The filename in Payabli. Filename is `zipName` in response to a
request to `/api/Invoice/{idInvoice}`. Here, the filename is
`0_Bill.pdf`. 

```json
  "DocumentsRef": {
    "zipfile": "inva_269.zip",
    "filelist": [
      {
        "originalName": "Bill.pdf",
        "zipName": "0_Bill.pdf",
        "descriptor": null
      }
    ]
  }
  ```
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.DeleteAttachedFromBillRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bill.<a href="/src/api/resources/bill/client/Client.ts">deleteBill</a>(idBill) -> Payabli.BillResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a bill by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bill.deleteBill(285);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**idBill:** `number` — Payabli ID for the bill. Get this ID by querying `/api/Query/bills/` for the entrypoint or the organization.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bill.<a href="/src/api/resources/bill/client/Client.ts">editBill</a>(idBill, { ...params }) -> Payabli.EditBillResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a bill by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bill.editBill(285, {
    netAmount: 3762.87,
    billDate: "2025-07-01"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**idBill:** `number` — Payabli ID for the bill. Get this ID by querying `/api/Query/bills/` for the entrypoint or the organization.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.BillOutData` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bill.<a href="/src/api/resources/bill/client/Client.ts">getAttachedFromBill</a>(idBill, filename, { ...params }) -> Payabli.FileContent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a file attached to a bill, either as a binary file or as a Base64-encoded string.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bill.getAttachedFromBill(285, "0_Bill.pdf", {
    returnObject: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**idBill:** `number` — Payabli ID for the bill. Get this ID by querying `/api/Query/bills/` for the entrypoint or the organization.
    
</dd>
</dl>

<dl>
<dd>

**filename:** `string` 

The filename in Payabli. Filename is `zipName` in response to a request to `/api/Invoice/{idInvoice}`. Here, the filename is `0_Bill.pdf``. 
"DocumentsRef": {
  "zipfile": "inva_269.zip",
  "filelist": [
    {
      "originalName": "Bill.pdf",
      "zipName": "0_Bill.pdf",
      "descriptor": null
    }
  ]
}
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.GetAttachedFromBillRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bill.<a href="/src/api/resources/bill/client/Client.ts">getBill</a>(idBill) -> Payabli.GetBillResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a bill by ID from an entrypoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bill.getBill(285);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**idBill:** `number` — Payabli ID for the bill. Get this ID by querying `/api/Query/bills/` for the entrypoint or the organization.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bill.<a href="/src/api/resources/bill/client/Client.ts">listBills</a>(entry, { ...params }) -> Payabli.BillQueryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of bills for an entrypoint. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bill.listBills("8cfec329267", {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListBillsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bill.<a href="/src/api/resources/bill/client/Client.ts">listBillsOrg</a>(orgId, { ...params }) -> Payabli.BillQueryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of bills for an organization. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bill.listBillsOrg(123, {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListBillsOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bill.<a href="/src/api/resources/bill/client/Client.ts">modifyApprovalBill</a>(idBill, { ...params }) -> Payabli.ModifyApprovalBillResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Modify the list of users the bill is sent to for approval.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bill.modifyApprovalBill(285, ["string"]);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**idBill:** `number` — Payabli ID for the bill. Get this ID by querying `/api/Query/bills/` for the entrypoint or the organization.
    
</dd>
</dl>

<dl>
<dd>

**request:** `string[]` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bill.<a href="/src/api/resources/bill/client/Client.ts">sendToApprovalBill</a>(idBill, { ...params }) -> Payabli.BillResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send a bill to a user or list of users to approve.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bill.sendToApprovalBill(285, {
    idempotencyKey: "6B29FC40-CA47-1067-B31D-00DD010662DA",
    body: ["string"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**idBill:** `number` — Payabli ID for the bill. Get this ID by querying `/api/Query/bills/` for the entrypoint or the organization.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.SendToApprovalBillRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.bill.<a href="/src/api/resources/bill/client/Client.ts">setApprovedBill</a>(idBill, approved, { ...params }) -> Payabli.SetApprovedBillResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Approve or disapprove a bill by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bill.setApprovedBill(285, "true");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**idBill:** `number` — Payabli ID for the bill. Get this ID by querying `/api/Query/bills/` for the entrypoint or the organization.
    
</dd>
</dl>

<dl>
<dd>

**approved:** `string` — String representing the approved status. Accepted values: 'true' or 'false'.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.SetApprovedBillRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BillClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Boarding
<details><summary><code>client.boarding.<a href="/src/api/resources/boarding/client/Client.ts">addApplication</a>({ ...params }) -> Payabli.PayabliApiResponse00Responsedatanonobject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a boarding application in an organization. This endpoint requires an application API token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.boarding.addApplication({
    services: {
        ach: {},
        card: {
            acceptAmex: true,
            acceptDiscover: true,
            acceptMastercard: true,
            acceptVisa: true
        }
    },
    annualRevenue: 1000,
    averageBillSize: "500",
    averageMonthlyBill: "5650",
    avgmonthly: 1000,
    baddress: "123 Walnut Street",
    baddress1: "Suite 103",
    bankData: {},
    bcity: "New Vegas",
    bcountry: "US",
    binperson: 60,
    binphone: 20,
    binweb: 20,
    bstate: "FL",
    bsummary: "Brick and mortar store that sells office supplies",
    btype: "Limited Liability Company",
    bzip: "33000",
    contacts: [{
            contactEmail: "herman@hermanscoatings.com",
            contactName: "Herman Martinez",
            contactPhone: "3055550000",
            contactTitle: "Owner"
        }],
    creditLimit: "creditLimit",
    dbaName: "Sunshine Gutters",
    ein: "123456789",
    faxnumber: "1234567890",
    highticketamt: 1000,
    legalName: "Sunshine Services, LLC",
    license: "2222222FFG",
    licstate: "CA",
    maddress: "123 Walnut Street",
    maddress1: "STE 900",
    mcc: "7777",
    mcity: "Johnson City",
    mcountry: "US",
    mstate: "TN",
    mzip: "37615",
    orgId: 123,
    ownership: [{
            oaddress: "33 North St",
            ocity: "Any City",
            ocountry: "US",
            odriverstate: "CA",
            ostate: "CA",
            ownerdob: "01/01/1990",
            ownerdriver: "CA6677778",
            owneremail: "test@email.com",
            ownername: "John Smith",
            ownerpercent: 100,
            ownerphone1: "555888111",
            ownerphone2: "555888111",
            ownerssn: "123456789",
            ownertitle: "CEO",
            ozip: "55555"
        }],
    phonenumber: "1234567890",
    processingRegion: "US",
    recipientEmail: "josephray@example.com",
    recipientEmailNotification: true,
    resumable: true,
    signer: {
        address: "33 North St",
        address1: "STE 900",
        city: "Bristol",
        country: "US",
        dob: "01/01/1976",
        email: "test@email.com",
        name: "John Smith",
        phone: "555888111",
        ssn: "123456789",
        state: "TN",
        zip: "55555",
        pciAttestation: true,
        signedDocumentReference: "https://example.com/signed-document.pdf",
        attestationDate: "04/20/2025",
        signDate: "04/20/2025",
        additionalData: "{\"deviceId\":\"499585-389fj484-3jcj8hj3\",\"session\":\"fifji4-fiu443-fn4843\",\"timeWithCompany\":\"6 Years\"}"
    },
    startdate: "01/01/1990",
    taxFillName: "Sunshine LLC",
    templateId: 22,
    ticketamt: 1000,
    website: "www.example.com",
    whenCharged: "When Service Provided",
    whenDelivered: "Over 30 Days",
    whenProvided: "30 Days or Less",
    whenRefunded: "30 Days or Less"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.AddApplicationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BoardingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.boarding.<a href="/src/api/resources/boarding/client/Client.ts">deleteApplication</a>(appId) -> Payabli.PayabliApiResponse00Responsedatanonobject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a boarding application by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.boarding.deleteApplication(352);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**appId:** `number` — Boarding application ID. 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BoardingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.boarding.<a href="/src/api/resources/boarding/client/Client.ts">getApplication</a>(appId) -> Payabli.ApplicationDetailsRecord</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details for a boarding application by ID. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.boarding.getApplication(352);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**appId:** `number` — Boarding application ID.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BoardingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.boarding.<a href="/src/api/resources/boarding/client/Client.ts">getApplicationByAuth</a>(xId, { ...params }) -> Payabli.ApplicationQueryRecord</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a boarding application by authentication information. This endpoint requires an `application` API token. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.boarding.getApplicationByAuth("17E", {
    email: "admin@email.com",
    referenceId: "n6UCd1f1ygG7"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**xId:** `string` — The application ID in Hex format. Find this at the end of the boarding link URL returned in a call to api/Boarding/applink/{appId}/{mail2}. For example in:  `https://boarding-sandbox.payabli.com/boarding/externalapp/load/17E`, the xId is `17E`. 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.RequestAppByAuth` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BoardingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.boarding.<a href="/src/api/resources/boarding/client/Client.ts">getByIdLinkApplication</a>(boardingLinkId) -> Payabli.BoardingLinkQueryRecord</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves details for a boarding link, by ID. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.boarding.getByIdLinkApplication(91);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**boardingLinkId:** `number` — The boarding link ID. You can find this at the end of the boarding link reference name. For example `https://boarding.payabli.com/boarding/app/myorgaccountname-00091`. The ID is `91`.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BoardingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.boarding.<a href="/src/api/resources/boarding/client/Client.ts">getByTemplateIdLinkApplication</a>(templateId) -> Payabli.BoardingLinkQueryRecord</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details for a boarding link using the boarding template ID. This endpoint requires an application API token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.boarding.getByTemplateIdLinkApplication(80);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**templateId:** `number` — The boarding template ID. You can find this at the end of the boarding template URL in PartnerHub. Example: `https://partner-sandbox.payabli.com/myorganization/boarding/edittemplate/80`. Here, the template ID is `80`.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BoardingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.boarding.<a href="/src/api/resources/boarding/client/Client.ts">getExternalApplication</a>(appId, mail2, { ...params }) -> Payabli.PayabliApiResponse00</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a link and the verification code used to log into an existing boarding application. You can also use this endpoint to send a link and referenceId for an existing boarding application to an email address. The recipient can use the referenceId and email address to access and edit the application.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.boarding.getExternalApplication(352, "mail2");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**appId:** `number` — Boarding application ID. 
    
</dd>
</dl>

<dl>
<dd>

**mail2:** `string` — Email address used to access the application. If `sendEmail` parameter is true, a link to the application is sent to this email address.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.GetExternalApplicationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BoardingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.boarding.<a href="/src/api/resources/boarding/client/Client.ts">getLinkApplication</a>(boardingLinkReference) -> Payabli.BoardingLinkQueryRecord</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details for a boarding link, by reference name. This endpoint requires an application API token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.boarding.getLinkApplication("myorgaccountname-00091");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**boardingLinkReference:** `string` — The boarding link reference name. You can find this at the end of the boarding link URL. For example `https://boarding.payabli.com/boarding/app/myorgaccountname-00091`
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BoardingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.boarding.<a href="/src/api/resources/boarding/client/Client.ts">listApplications</a>(orgId, { ...params }) -> Payabli.QueryBoardingAppsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of boarding applications for an organization. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.boarding.listApplications(123, {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListApplicationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BoardingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.boarding.<a href="/src/api/resources/boarding/client/Client.ts">listBoardingLinks</a>(orgId, { ...params }) -> Payabli.QueryBoardingLinksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return a list of boarding links for an organization. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.boarding.listBoardingLinks(123, {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListBoardingLinksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BoardingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.boarding.<a href="/src/api/resources/boarding/client/Client.ts">updateApplication</a>(appId, { ...params }) -> Payabli.PayabliApiResponse00Responsedatanonobject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a boarding application by ID. This endpoint requires an application API token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.boarding.updateApplication(352, {});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**appId:** `number` — Boarding application ID. 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ApplicationData` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BoardingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ChargeBacks
<details><summary><code>client.chargeBacks.<a href="/src/api/resources/chargeBacks/client/Client.ts">addResponse</a>(Id, { ...params }) -> Payabli.AddResponseResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a response to a chargeback or ACH return.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chargeBacks.addResponse(1000000, {
    idempotencyKey: "6B29FC40-CA47-1067-B31D-00DD010662DA"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**Id:** `number` — ID of the chargeback or return record.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ResponseChargeBack` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChargeBacksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.chargeBacks.<a href="/src/api/resources/chargeBacks/client/Client.ts">getChargeback</a>(Id) -> Payabli.ChargebackQueryRecords</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a chargeback record and its details.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chargeBacks.getChargeback(1000000);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**Id:** `number` — ID of the chargeback or return record. This is returned as `chargebackId` in the [RecievedChargeback](/developers/developer-guides/webhook-payloads#receivedChargeback) and [ReceivedAchReturn](/developers/developer-guides/webhook-payloads#receivedachreturn) webhook notifications.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChargeBacksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.chargeBacks.<a href="/src/api/resources/chargeBacks/client/Client.ts">getChargebackAttachment</a>(Id, fileName) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a chargeback attachment file by its file name.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chargeBacks.getChargebackAttachment(1000000, "fileName");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**Id:** `number` — The ID of chargeback or return record.
    
</dd>
</dl>

<dl>
<dd>

**fileName:** `string` — The chargeback attachment's file name.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChargeBacksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## CheckCapture
<details><summary><code>client.checkCapture.<a href="/src/api/resources/checkCapture/client/Client.ts">checkProcessing</a>({ ...params }) -> Payabli.CheckCaptureResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Captures a check for Remote Deposit Capture (RDC) using the provided check images and details. This endpoint handles the OCR extraction of check data including MICR, routing number, account number, and amount. See the [RDC guide](/developers/developer-guides/pay-in-rdc) for more details.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkCapture.checkProcessing({
    entryPoint: "47abcfea12",
    frontImage: "/9j/4AAQSkZJRgABAQEASABIAAD...",
    rearImage: "/9j/4AAQSkZJRgABAQEASABIAAD...",
    checkAmount: 12550
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.CheckCaptureRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CheckCaptureClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Cloud
<details><summary><code>client.cloud.<a href="/src/api/resources/cloud/client/Client.ts">addDevice</a>(entry, { ...params }) -> Payabli.AddDeviceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Register a cloud device to an entrypoint. See [Devices Quickstart](/developers/developer-guides/devices-quickstart#devices-quickstart) for a complete guide.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cloud.addDevice("8cfec329267", {
    registrationCode: "YS7DS5",
    description: "Front Desk POS"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.DeviceEntry` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CloudClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cloud.<a href="/src/api/resources/cloud/client/Client.ts">historyDevice</a>(entry, deviceId) -> Payabli.CloudQueryApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the registration history for a device. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cloud.historyDevice("8cfec329267", "WXGDWB");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**deviceId:** `string` — ID of the cloud device. 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CloudClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cloud.<a href="/src/api/resources/cloud/client/Client.ts">listDevice</a>(entry, { ...params }) -> Payabli.CloudQueryApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of cloud devices registered to an entrypoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cloud.listDevice("8cfec329267");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListDeviceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CloudClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.cloud.<a href="/src/api/resources/cloud/client/Client.ts">removeDevice</a>(entry, deviceId) -> Payabli.RemoveDeviceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove a cloud device from an entrypoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.cloud.removeDevice("8cfec329267", "6c361c7d-674c-44cc-b790-382b75d1xxx");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**deviceId:** `string` — ID of the cloud device. 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CloudClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Customer
<details><summary><code>client.customer.<a href="/src/api/resources/customer/client/Client.ts">addCustomer</a>(entry, { ...params }) -> Payabli.PayabliApiResponseCustomerQuery</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a customer in an entrypoint. An identifier is required to create customer records. Change your identifier settings in Settings > Custom Fields in PartnerHub. 
If you don't include an identifier, the record is rejected.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customer.addCustomer("8cfec329267", {
    body: {
        customerNumber: "12356ACB",
        firstname: "Irene",
        lastname: "Canizales",
        address1: "123 Bishop's Trail",
        city: "Mountain City",
        state: "TN",
        zip: "37612",
        country: "US",
        email: "irene@canizalesconcrete.com",
        identifierFields: ["email"],
        timeZone: -5
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `Payabli.Entrypointfield` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.AddCustomerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customer.<a href="/src/api/resources/customer/client/Client.ts">deleteCustomer</a>(customerId) -> Payabli.PayabliApiResponse00Responsedatanonobject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a customer record.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customer.deleteCustomer(998);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customerId:** `number` — Payabli-generated customer ID. Maps to "Customer ID" column in PartnerHub. 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customer.<a href="/src/api/resources/customer/client/Client.ts">getCustomer</a>(customerId) -> Payabli.CustomerQueryRecords</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a customer's record and details.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customer.getCustomer(998);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customerId:** `number` — Payabli-generated customer ID. Maps to "Customer ID" column in PartnerHub. 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customer.<a href="/src/api/resources/customer/client/Client.ts">linkCustomerTransaction</a>(customerId, transId) -> Payabli.PayabliApiResponse00Responsedatanonobject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Links a customer to a transaction by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customer.linkCustomerTransaction(998, "45-as456777hhhhhhhhhh77777777-324");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customerId:** `number` — Payabli-generated customer ID. Maps to "Customer ID" column in PartnerHub. 
    
</dd>
</dl>

<dl>
<dd>

**transId:** `string` — ReferenceId for the transaction (PaymentId).
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customer.<a href="/src/api/resources/customer/client/Client.ts">requestConsent</a>(customerId) -> Payabli.PayabliApiResponse00Responsedatanonobject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sends the consent opt-in email to the customer email address in the customer record.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customer.requestConsent(998);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customerId:** `number` — Payabli-generated customer ID. Maps to "Customer ID" column in PartnerHub. 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customer.<a href="/src/api/resources/customer/client/Client.ts">updateCustomer</a>(customerId, { ...params }) -> Payabli.PayabliApiResponse00Responsedatanonobject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a customer record. Include only the fields you want to change.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customer.updateCustomer(998, {
    firstname: "Irene",
    lastname: "Canizales",
    address1: "145 Bishop's Trail",
    city: "Mountain City",
    state: "TN",
    zip: "37612",
    country: "US"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customerId:** `number` — Payabli-generated customer ID. Maps to "Customer ID" column in PartnerHub. 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.CustomerData` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomerClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Export
<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportApplications</a>(format, orgId, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of boarding applications for an organization. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportApplications("csv", 123, {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportApplicationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportBatchDetails</a>(format, entry, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint is deprecated. Export batch details for a paypoint. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportBatchDetails("csv", "8cfec329267", {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportBatchDetailsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportBatchDetailsOrg</a>(format, orgId, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint is deprecated. Export batch details for an organization. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportBatchDetailsOrg("csv", 123, {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportBatchDetailsOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportBatches</a>(format, entry, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of batches for an entrypoint. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportBatches("csv", "8cfec329267", {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportBatchesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportBatchesOrg</a>(format, orgId, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of batches for an organization. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportBatchesOrg("csv", 123, {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportBatchesOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportBatchesOut</a>(format, entry, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of money out batches for a paypoint. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportBatchesOut("csv", "8cfec329267", {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportBatchesOutRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportBatchesOutOrg</a>(format, orgId, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of money out batches for an organization. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportBatchesOutOrg("csv", 123, {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportBatchesOutOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportBills</a>(format, entry, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of bills for an entrypoint. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportBills("csv", "8cfec329267", {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportBillsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportBillsOrg</a>(format, orgId, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of bills for an organization. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportBillsOrg("csv", 123, {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportBillsOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportChargebacks</a>(format, entry, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of chargebacks and ACH returns for an entrypoint. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportChargebacks("csv", "8cfec329267", {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportChargebacksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportChargebacksOrg</a>(format, orgId, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of chargebacks and ACH returns for an organization. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportChargebacksOrg("csv", 123, {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportChargebacksOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportCustomers</a>(format, entry, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of customers for an entrypoint. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportCustomers("csv", "8cfec329267", {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportCustomersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportCustomersOrg</a>(format, orgId, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exports a list of customers for an organization. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportCustomersOrg("csv", 123, {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportCustomersOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportInvoices</a>(format, entry, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export list of invoices for an entrypoint. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportInvoices("csv", "8cfec329267", {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportInvoicesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportInvoicesOrg</a>(format, orgId, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of invoices for an organization. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportInvoicesOrg("csv", 123, {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportInvoicesOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportOrganizations</a>(format, orgId, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of child organizations (suborganizations) for a parent organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportOrganizations("csv", 123, {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportOrganizationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportPayout</a>(format, entry, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of payouts and their statuses for an entrypoint. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportPayout("csv", "8cfec329267", {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportPayoutRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportPayoutOrg</a>(format, orgId, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of payouts and their details for an organization. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportPayoutOrg("csv", 123, {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportPayoutOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportPaypoints</a>(format, orgId, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of paypoints in an organization. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportPaypoints("csv", 123, {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportPaypointsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportSettlements</a>(format, entry, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of settled transactions for an entrypoint. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportSettlements("csv", "8cfec329267", {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportSettlementsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportSettlementsOrg</a>(format, orgId, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of settled transactions for an organization. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportSettlementsOrg("csv", 123, {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportSettlementsOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportSubscriptions</a>(format, entry, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of subscriptions for an entrypoint. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportSubscriptions("csv", "8cfec329267", {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportSubscriptionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportSubscriptionsOrg</a>(format, orgId, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of subscriptions for an organization. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportSubscriptionsOrg("csv", 123, {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportSubscriptionsOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportTransactions</a>(format, entry, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of transactions for an entrypoint in a file in XLXS or CSV format. Use filters to limit results. If you don't specify a date range in the request, the last two months of data are returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportTransactions("csv", "8cfec329267", {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportTransactionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportTransactionsOrg</a>(format, orgId, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of transactions for an org in a file in XLSX or CSV format. Use filters to limit results. If you don't specify a date range in the request, the last two months of data are returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportTransactionsOrg("csv", 123, {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportTransactionsOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportTransferDetails</a>(format, entry, transferId, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of transfer details for an entrypoint. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportTransferDetails("csv", "8cfec329267", 1000000, {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**transferId:** `number` — Transfer identifier.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportTransferDetailsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportTransfers</a>(entry, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of transfers for an entrypoint. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportTransfers("8cfec329267", {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportTransfersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportVendors</a>(format, entry, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of vendors for an entrypoint. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportVendors("csv", "8cfec329267", {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportVendorsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">exportVendorsOrg</a>(format, orgId, { ...params }) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a list of vendors for an organization. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.exportVendorsOrg("csv", 123, {
    columnsExport: "BatchDate:Batch_Date,PaypointName:Legal_name",
    fromRecord: 251,
    limitRecord: 1000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**format:** `Payabli.ExportFormat1` — Format for the export, either XLSX or CSV. 
    
</dd>
</dl>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ExportVendorsOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## HostedPaymentPages
<details><summary><code>client.hostedPaymentPages.<a href="/src/api/resources/hostedPaymentPages/client/Client.ts">loadPage</a>(entry, subdomain) -> Payabli.PayabliPages</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Loads all of a payment page's details including `pageIdentifier` and `validationCode`. This endpoint requires an `application` API token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hostedPaymentPages.loadPage("8cfec329267", "pay-your-fees-1");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**subdomain:** `string` — Payment page identifier. The subdomain value is the last part of the payment page URL. For example, in`https://paypages-sandbox.payabli.com/513823dc10/pay-your-fees-1`, the subdomain is `pay-your-fees-1`.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HostedPaymentPagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hostedPaymentPages.<a href="/src/api/resources/hostedPaymentPages/client/Client.ts">newPage</a>(entry, { ...params }) -> Payabli.PayabliApiResponse00Responsedatanonobject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Creates a new payment page for a paypoint. 
Note: this operation doesn't create a new paypoint, just a payment page for an existing paypoint. Paypoints are created by the Payabli team when a boarding application is approved.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hostedPaymentPages.newPage("8cfec329267", {
    idempotencyKey: "6B29FC40-CA47-1067-B31D-00DD010662DA",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.NewPageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HostedPaymentPagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hostedPaymentPages.<a href="/src/api/resources/hostedPaymentPages/client/Client.ts">savePage</a>(entry, subdomain, { ...params }) -> Payabli.PayabliApiResponse00Responsedatanonobject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a payment page in a paypoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hostedPaymentPages.savePage("8cfec329267", "pay-your-fees-1", {});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**subdomain:** `string` — Payment page identifier. The subdomain value is the last part of the payment page URL. For example, in`https://paypages-sandbox.payabli.com/513823dc10/pay-your-fees-1`, the subdomain is `pay-your-fees-1`.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.PayabliPages` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HostedPaymentPagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Import
<details><summary><code>client.import.<a href="/src/api/resources/import/client/Client.ts">importBills</a>(entry, { ...params }) -> Payabli.PayabliApiResponseImport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Import a list of bills from a CSV file. See the [Import Guide](/developers/developer-guides/bills-add#import-bills) for more help and an example file.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.import.importBills("8cfec329267", {
    file: fs.createReadStream("/path/to/your/file")
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ImportBillsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ImportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.import.<a href="/src/api/resources/import/client/Client.ts">importCustomer</a>(entry, { ...params }) -> Payabli.PayabliApiResponseImport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Import a list of customers from a CSV file. See the [Import Guide](/developers/developer-guides/entities-customers#import-customers) for more help and example files.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.import.importCustomer("8cfec329267", {
    file: fs.createReadStream("/path/to/your/file")
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `Payabli.Entrypointfield` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ImportCustomerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ImportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.import.<a href="/src/api/resources/import/client/Client.ts">importVendor</a>(entry, { ...params }) -> Payabli.PayabliApiResponseImport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Import a list of vendors from a CSV file. See the [Import Guide](/developers/developer-guides/entities-vendors#import-vendors) for more help and example files.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.import.importVendor("8cfec329267", {
    file: fs.createReadStream("/path/to/your/file")
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `Payabli.Entrypointfield` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ImportVendorRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ImportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Invoice
<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">addInvoice</a>(entry, { ...params }) -> Payabli.InvoiceResponseWithoutData</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an invoice in an entrypoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.addInvoice("8cfec329267", {
    body: {
        customerData: {
            firstName: "Tamara",
            lastName: "Bagratoni",
            customerNumber: "3"
        },
        invoiceData: {
            items: [{
                    itemProductName: "Adventure Consult",
                    itemDescription: "Consultation for Georgian tours",
                    itemCost: 100,
                    itemQty: 1,
                    itemMode: 1,
                    itemTotalAmount: 1
                }, {
                    itemProductName: "Deposit ",
                    itemDescription: "Deposit for trip planning",
                    itemCost: 882.37,
                    itemQty: 1,
                    itemTotalAmount: 1
                }],
            invoiceDate: "2025-10-19",
            invoiceType: 0,
            invoiceStatus: 1,
            frequency: "onetime",
            invoiceAmount: 982.37,
            discount: 10,
            invoiceNumber: "INV-3"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.AddInvoiceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">deleteAttachedFromInvoice</a>(idInvoice, filename) -> Payabli.InvoiceResponseWithoutData</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an invoice that's attached to a file.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.deleteAttachedFromInvoice(23548884, "0_Bill.pdf");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**idInvoice:** `number` — Invoice ID
    
</dd>
</dl>

<dl>
<dd>

**filename:** `string` 

The filename in Payabli. Filename is `zipName` in response to a request to `/api/Invoice/{idInvoice}`. Here, the filename is `0_Bill.pdf``. 
"DocumentsRef": {
  "zipfile": "inva_269.zip",
  "filelist": [
    {
      "originalName": "Bill.pdf",
      "zipName": "0_Bill.pdf",
      "descriptor": null
    }
  ]
}
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">deleteInvoice</a>(idInvoice) -> Payabli.InvoiceResponseWithoutData</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a single invoice from an entrypoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.deleteInvoice(23548884);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**idInvoice:** `number` — Invoice ID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">editInvoice</a>(idInvoice, { ...params }) -> Payabli.InvoiceResponseWithoutData</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates details for a single invoice in an entrypoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.editInvoice(332, {
    body: {
        invoiceData: {
            items: [{
                    itemProductName: "Deposit",
                    itemDescription: "Deposit for trip planning",
                    itemCost: 882.37,
                    itemQty: 1
                }],
            invoiceDate: "2025-10-19",
            invoiceAmount: 982.37,
            invoiceNumber: "INV-6"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**idInvoice:** `number` — Invoice ID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.EditInvoiceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">getAttachedFileFromInvoice</a>(idInvoice, filename, { ...params }) -> Payabli.FileContent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a file attached to an invoice.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.getAttachedFileFromInvoice(1, "filename");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**idInvoice:** `number` — Invoice ID
    
</dd>
</dl>

<dl>
<dd>

**filename:** `string` 

The filename in Payabli. Filename is `zipName` in the response to a request to `/api/Invoice/{idInvoice}`. Here, the filename is `0_Bill.pdf``. 
```
  "DocumentsRef": {
    "zipfile": "inva_269.zip",
    "filelist": [
      {
        "originalName": "Bill.pdf",
        "zipName": "0_Bill.pdf",
        "descriptor": null
      }
    ]
  }
  ```
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.GetAttachedFileFromInvoiceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">getInvoice</a>(idInvoice) -> Payabli.GetInvoiceRecord</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a single invoice by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.getInvoice(23548884);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**idInvoice:** `number` — Invoice ID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">getInvoiceNumber</a>(entry) -> Payabli.InvoiceNumberResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the next available invoice number for a paypoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.getInvoiceNumber("8cfec329267");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">listInvoices</a>(entry, { ...params }) -> Payabli.QueryInvoiceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of invoices for an entrypoint. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.listInvoices("8cfec329267", {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListInvoicesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">listInvoicesOrg</a>(orgId, { ...params }) -> Payabli.QueryInvoiceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of invoices for an org. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.listInvoicesOrg(123, {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListInvoicesOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">sendInvoice</a>(idInvoice, { ...params }) -> Payabli.SendInvoiceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sends an invoice from an entrypoint via email.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.sendInvoice(23548884, {
    attachfile: true,
    mail2: "tamara@example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**idInvoice:** `number` — Invoice ID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.SendInvoiceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">getInvoicePdf</a>(idInvoice) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a single invoice in PDF format.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.getInvoicePdf(23548884);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**idInvoice:** `number` — Invoice ID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoiceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## LineItem
<details><summary><code>client.lineItem.<a href="/src/api/resources/lineItem/client/Client.ts">addItem</a>(entry, { ...params }) -> Payabli.PayabliApiResponse6</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds products and services to an entrypoint's catalog. These are used as line items for invoicing and transactions. In the response, "responseData" displays the item's code.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lineItem.addItem("47cae3d74", {
    body: {
        itemProductCode: "M-DEPOSIT",
        itemProductName: "Materials deposit",
        itemDescription: "Deposit for materials",
        itemCommodityCode: "010",
        itemUnitOfMeasure: "SqFt",
        itemCost: 12.45,
        itemQty: 1,
        itemMode: 0
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.AddItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LineItemClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lineItem.<a href="/src/api/resources/lineItem/client/Client.ts">deleteItem</a>(lineItemId) -> Payabli.DeleteItemResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an item.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lineItem.deleteItem(700);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**lineItemId:** `number` — ID for the line item (also known as a product, service, or item).
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LineItemClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lineItem.<a href="/src/api/resources/lineItem/client/Client.ts">getItem</a>(lineItemId) -> Payabli.LineItemQueryRecord</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an item by ID. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lineItem.getItem(700);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**lineItemId:** `number` — ID for the line item (also known as a product, service, or item).
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LineItemClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lineItem.<a href="/src/api/resources/lineItem/client/Client.ts">listLineItems</a>(entry, { ...params }) -> Payabli.QueryResponseItems</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of line items and their details from an entrypoint. Line items are also known as items, products, and services. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lineItem.listLineItems("8cfec329267", {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListLineItemsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LineItemClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.lineItem.<a href="/src/api/resources/lineItem/client/Client.ts">updateItem</a>(lineItemId, { ...params }) -> Payabli.PayabliApiResponse6</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an item.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lineItem.updateItem(700, {
    itemCost: 12.45,
    itemQty: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**lineItemId:** `number` — ID for the line item (also known as a product, service, or item).
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.LineItem` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LineItemClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## MoneyIn
<details><summary><code>client.moneyIn.<a href="/src/api/resources/moneyIn/client/Client.ts">authorize</a>({ ...params }) -> Payabli.AuthResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Authorize a card transaction. This returns an authorization code and reserves funds for the merchant. Authorized transactions aren't flagged for settlement until [captured](/developers/api-reference/moneyin/capture-an-authorized-transaction).
Only card transactions can be authorized. This endpoint can't be used for ACH transactions.
<Tip>
  Consider migrating to the [v2 Authorize endpoint](/developers/api-reference/moneyinV2/authorize-a-transaction) to take advantage of unified response codes and improved response consistency.
</Tip>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyIn.authorize({
    body: {
        customerData: {
            customerId: 4440
        },
        entryPoint: "f743aed24a",
        ipaddress: "255.255.255.255",
        paymentDetails: {
            serviceFee: 0,
            totalAmount: 100
        },
        paymentMethod: {
            cardcvv: "999",
            cardexp: "02/27",
            cardHolder: "John Cassian",
            cardnumber: "4111111111111111",
            cardzip: "12345",
            initiator: "payor",
            method: "card"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.RequestPaymentAuthorize` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyInClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyIn.<a href="/src/api/resources/moneyIn/client/Client.ts">capture</a>(transId, amount) -> Payabli.CaptureResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Warning>
  This endpoint is deprecated and will be sunset on November 24, 2025. Migrate to [POST `/capture/{transId}`](/developers/api-reference/moneyin/capture-an-authorized-transaction)`.
</Warning>
  
  Capture an [authorized
transaction](/developers/api-reference/moneyin/authorize-a-transaction) to complete the transaction and move funds from the customer to merchant account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyIn.capture("10-7d9cd67d-2d5d-4cd7-a1b7-72b8b201ec13", 0);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transId:** `string` — ReferenceId for the transaction (PaymentId).
    
</dd>
</dl>

<dl>
<dd>

**amount:** `number` — Amount to be captured. The amount can't be greater the original total amount of the transaction. `0` captures the total amount authorized in the transaction. Partial captures aren't supported.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyInClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyIn.<a href="/src/api/resources/moneyIn/client/Client.ts">captureAuth</a>(transId, { ...params }) -> Payabli.CaptureResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Capture an [authorized transaction](/developers/api-reference/moneyin/authorize-a-transaction) to complete the transaction and move funds from the customer to merchant account. 

You can use this endpoint to capture both full and partial amounts of the original authorized transaction. See [Capture an authorized transaction](/developers/developer-guides/pay-in-auth-and-capture) for more information about this endpoint.

<Tip>
Consider migrating to the [v2 Capture endpoint](/developers/api-reference/moneyinV2/capture-an-authorized-transaction) to take advantage of unified response codes and improved response consistency.
</Tip>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyIn.captureAuth("10-7d9cd67d-2d5d-4cd7-a1b7-72b8b201ec13", {
    paymentDetails: {
        totalAmount: 105,
        serviceFee: 5
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transId:** `string` — ReferenceId for the transaction (PaymentId).
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.CaptureRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyInClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyIn.<a href="/src/api/resources/moneyIn/client/Client.ts">credit</a>({ ...params }) -> Payabli.PayabliApiResponse0</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Make a temporary microdeposit in a customer account to verify the customer's ownership and access to the target account. Reverse the microdeposit with `reverseCredit`.

This feature must be enabled by Payabli on a per-merchant basis. Contact support for help. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyIn.credit({
    idempotencyKey: "6B29FC40-CA47-1067-B31D-00DD010662DA",
    customerData: {
        billingAddress1: "5127 Linkwood ave",
        customerNumber: "100"
    },
    entrypoint: "my-entrypoint",
    paymentDetails: {
        serviceFee: 0,
        totalAmount: 1
    },
    paymentMethod: {
        achAccount: "88354454",
        achAccountType: "Checking",
        achHolder: "John Smith",
        achRouting: "021000021",
        method: "ach"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.RequestCredit` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyInClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyIn.<a href="/src/api/resources/moneyIn/client/Client.ts">details</a>(transId) -> Payabli.TransactionQueryRecordsCustomer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a processed transaction's details.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyIn.details("45-as456777hhhhhhhhhh77777777-324");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transId:** `string` — ReferenceId for the transaction (PaymentId).
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyInClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyIn.<a href="/src/api/resources/moneyIn/client/Client.ts">getpaid</a>({ ...params }) -> Payabli.PayabliApiResponseGetPaid</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Make a single transaction. This method authorizes and captures a payment in one step.

  <Tip>
  Consider migrating to the [v2 Make a transaction endpoint](/developers/api-reference/moneyinV2/make-a-transaction) to take advantage of unified response codes and improved response consistency.
  </Tip>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyIn.getpaid({
    body: {
        customerData: {
            customerId: 4440
        },
        entryPoint: "f743aed24a",
        ipaddress: "255.255.255.255",
        paymentDetails: {
            serviceFee: 0,
            totalAmount: 100
        },
        paymentMethod: {
            cardcvv: "999",
            cardexp: "02/27",
            cardHolder: "John Cassian",
            cardnumber: "4111111111111111",
            cardzip: "12345",
            initiator: "payor",
            method: "card"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.RequestPayment` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyInClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyIn.<a href="/src/api/resources/moneyIn/client/Client.ts">reverse</a>(transId, amount) -> Payabli.ReverseResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

A reversal either refunds or voids a transaction independent of the transaction's settlement status. Send a reversal request for a transaction, and Payabli automatically determines whether it's a refund or void. You don't need to know whether the transaction is settled or not.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyIn.reverse("10-3ffa27df-b171-44e0-b251-e95fbfc7a723", 0);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transId:** `string` — ReferenceId for the transaction (PaymentId).
    
</dd>
</dl>

<dl>
<dd>

**amount:** `number` 


Amount to reverse from original transaction, minus any service fees charged on the original transaction.

The amount provided can't be greater than the original total amount of the transaction, minus service fees. For example, if a transaction was $90 plus a $10 service fee, you can reverse up to $90. 

An amount equal to zero will refunds the total amount authorized minus any service fee.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyInClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyIn.<a href="/src/api/resources/moneyIn/client/Client.ts">refund</a>(transId, amount) -> Payabli.RefundResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Refund a transaction that has settled and send money back to the account holder. If a transaction hasn't been settled, void it instead.

  <Tip>
  Consider migrating to the [v2 Refund endpoint](/developers/api-reference/moneyinV2/refund-a-settled-transaction) to take advantage of unified response codes and improved response consistency.
  </Tip>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyIn.refund("10-3ffa27df-b171-44e0-b251-e95fbfc7a723", 0);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transId:** `string` — ReferenceId for the transaction (PaymentId).
    
</dd>
</dl>

<dl>
<dd>

**amount:** `number` 


Amount to refund from original transaction, minus any service fees charged on the original transaction. 

The amount provided can't be greater than the original total amount of the transaction, minus service fees. For example, if a transaction was \$90 plus a \$10 service fee, you can refund up to \$90.

An amount equal to zero will refund the total amount authorized minus any service fee.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyInClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyIn.<a href="/src/api/resources/moneyIn/client/Client.ts">refundWithInstructions</a>(transId, { ...params }) -> Payabli.RefundWithInstructionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Refunds a settled transaction with split instructions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyIn.refundWithInstructions("10-3ffa27df-b171-44e0-b251-e95fbfc7a723", {
    idempotencyKey: "8A29FC40-CA47-1067-B31D-00DD010662DB",
    source: "api",
    orderDescription: "Materials deposit",
    amount: 100,
    refundDetails: {
        splitRefunding: [{
                originationEntryPoint: "7f1a381696",
                accountId: "187-342",
                description: "Refunding undelivered materials",
                amount: 60
            }, {
                originationEntryPoint: "7f1a381696",
                accountId: "187-343",
                description: "Refunding deposit for undelivered materials",
                amount: 40
            }]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transId:** `string` — ReferenceId for the transaction (PaymentId).
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.RequestRefund` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyInClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyIn.<a href="/src/api/resources/moneyIn/client/Client.ts">reverseCredit</a>(transId) -> Payabli.PayabliApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Reverse microdeposits that are used to verify customer account ownership and access. The `transId` value is returned in the success response for the original credit transaction made with `api/MoneyIn/makecredit`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyIn.reverseCredit("45-as456777hhhhhhhhhh77777777-324");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transId:** `string` — ReferenceId for the transaction (PaymentId).
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyInClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyIn.<a href="/src/api/resources/moneyIn/client/Client.ts">sendReceipt2Trans</a>(transId, { ...params }) -> Payabli.ReceiptResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send a payment receipt for a transaction.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyIn.sendReceipt2Trans("45-as456777hhhhhhhhhh77777777-324", {
    email: "example@email.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transId:** `string` — ReferenceId for the transaction (PaymentId).
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.SendReceipt2TransRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyInClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyIn.<a href="/src/api/resources/moneyIn/client/Client.ts">validate</a>({ ...params }) -> Payabli.ValidateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Validates a card number without running a transaction or authorizing a charge.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyIn.validate({
    idempotencyKey: "6B29FC40-CA47-1067-B31D-00DD010662DA",
    entryPoint: "entry132",
    paymentMethod: {
        method: "card",
        cardnumber: "4360000001000005",
        cardexp: "12/29",
        cardzip: "14602-8328",
        cardHolder: "Dianne Becker-Smith"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.RequestPaymentValidate` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyInClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyIn.<a href="/src/api/resources/moneyIn/client/Client.ts">void</a>(transId) -> Payabli.VoidResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancel a transaction that hasn't been settled yet. Voiding non-captured authorizations prevents future captures. If a transaction has been settled, refund it instead.

  <Tip>
  Consider migrating to the [v2 Void endpoint](/developers/api-reference/moneyinV2/void-a-transaction) to take advantage of unified response codes and improved response consistency.
  </Tip>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyIn.void("10-3ffa27df-b171-44e0-b251-e95fbfc7a723");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transId:** `string` — ReferenceId for the transaction (PaymentId).
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyInClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyIn.<a href="/src/api/resources/moneyIn/client/Client.ts">getpaidv2</a>({ ...params }) -> Payabli.V2TransactionResponseWrapper</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Make a single transaction. This method authorizes and captures a payment in one step. This is the v2 version of the `api/MoneyIn/getpaid` endpoint, and returns the unified response format. See [Pay In unified response codes reference](/guides/pay-in-unified-response-codes-reference) for more information.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyIn.getpaidv2({
    body: {
        customerData: {
            customerId: 4440
        },
        entryPoint: "f743aed24a",
        ipaddress: "255.255.255.255",
        paymentDetails: {
            serviceFee: 0,
            totalAmount: 100
        },
        paymentMethod: {
            cardcvv: "999",
            cardexp: "02/27",
            cardHolder: "John Cassian",
            cardnumber: "4111111111111111",
            cardzip: "12345",
            initiator: "payor",
            method: "card"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.RequestPaymentV2` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyInClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyIn.<a href="/src/api/resources/moneyIn/client/Client.ts">authorizev2</a>({ ...params }) -> Payabli.V2TransactionResponseWrapper</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Authorize a card transaction. This returns an authorization code and reserves funds for the merchant. Authorized transactions aren't flagged for settlement until captured. This is the v2 version of the `api/MoneyIn/authorize` endpoint, and returns the unified response format. See [Pay In unified response codes reference](/guides/pay-in-unified-response-codes-reference) for more information.

**Note**: Only card transactions can be authorized. This endpoint can't be used for ACH transactions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyIn.authorizev2({
    body: {
        customerData: {
            customerId: 4440
        },
        entryPoint: "f743aed24a",
        ipaddress: "255.255.255.255",
        paymentDetails: {
            serviceFee: 0,
            totalAmount: 100
        },
        paymentMethod: {
            cardcvv: "999",
            cardexp: "02/27",
            cardHolder: "John Cassian",
            cardnumber: "4111111111111111",
            cardzip: "12345",
            initiator: "payor",
            method: "card"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.RequestPaymentAuthorizeV2` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyInClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyIn.<a href="/src/api/resources/moneyIn/client/Client.ts">capturev2</a>(transId, { ...params }) -> Payabli.V2TransactionResponseWrapper</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Capture an authorized transaction to complete the transaction and move funds from the customer to merchant account. This is the v2 version of the `api/MoneyIn/capture/{transId}` endpoint, and returns the unified response format. See [Pay In unified response codes reference](/guides/pay-in-unified-response-codes-reference) for more information.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyIn.capturev2("10-7d9cd67d-2d5d-4cd7-a1b7-72b8b201ec13", {
    paymentDetails: {
        totalAmount: 105,
        serviceFee: 5
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transId:** `string` — ReferenceId for the transaction (PaymentId).
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.CaptureRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyInClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyIn.<a href="/src/api/resources/moneyIn/client/Client.ts">refundv2</a>(transId) -> Payabli.V2TransactionResponseWrapper</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Give a full refund for a transaction that has settled and send money back to the account holder. To perform a partial refund, see [Partially refund a transaction](developers/api-reference/moneyinV2/partial-refund-a-settled-transaction).

This is the v2 version of the refund endpoint, and returns the unified response format. See [Pay In unified response codes reference](/guides/pay-in-unified-response-codes-reference) for more information.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyIn.refundv2("10-3ffa27df-b171-44e0-b251-e95fbfc7a723");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transId:** `string` — ReferenceId for the transaction (PaymentId).
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyInClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyIn.<a href="/src/api/resources/moneyIn/client/Client.ts">refundv2Amount</a>(transId, amount) -> Payabli.V2TransactionResponseWrapper</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Refund a transaction that has settled and send money back to the account holder. If `amount` is omitted or set to 0, performs a full refund. When a non-zero `amount` is provided, this endpoint performs a partial refund.

This is the v2 version of the refund endpoint, and returns the unified response format. See [Pay In unified response codes reference](/guides/pay-in-unified-response-codes-reference) for more information.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyIn.refundv2Amount("10-3ffa27df-b171-44e0-b251-e95fbfc7a723", 0);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transId:** `string` — ReferenceId for the transaction (PaymentId).
    
</dd>
</dl>

<dl>
<dd>

**amount:** `number` — Amount to refund from original transaction, minus any service fees charged on the original transaction. If omitted or set to 0, performs a full refund.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyInClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyIn.<a href="/src/api/resources/moneyIn/client/Client.ts">voidv2</a>(transId) -> Payabli.V2TransactionResponseWrapper</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancel a transaction that hasn't been settled yet. Voiding non-captured authorizations prevents future captures. This is the v2 version of the `api/MoneyIn/void/{transId}` endpoint, and returns the unified response format. See [Pay In unified response codes reference](/guides/pay-in-unified-response-codes-reference) for more information.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyIn.voidv2("10-3ffa27df-b171-44e0-b251-e95fbfc7a723");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transId:** `string` — ReferenceId for the transaction (PaymentId).
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyInClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## MoneyOut
<details><summary><code>client.moneyOut.<a href="/src/api/resources/moneyOut/client/Client.ts">authorizeOut</a>({ ...params }) -> Payabli.AuthCapturePayoutResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Authorizes transaction for payout. Authorized transactions aren't flagged for settlement until captured. Use `referenceId` returned in the response to capture the transaction. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyOut.authorizeOut({
    body: {
        entryPoint: "48acde49",
        invoiceData: [{
                billId: 54323
            }],
        orderDescription: "Window Painting",
        paymentDetails: {
            totalAmount: 47,
            unbundled: false
        },
        paymentMethod: {
            method: "managed"
        },
        vendorData: {
            vendorNumber: "7895433"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.MoneyOutTypesRequestOutAuthorize` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyOutClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyOut.<a href="/src/api/resources/moneyOut/client/Client.ts">cancelAllOut</a>({ ...params }) -> Payabli.CaptureAllOutResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels an array of payout transactions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyOut.cancelAllOut(["2-29", "2-28", "2-27"]);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `string[]` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyOutClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyOut.<a href="/src/api/resources/moneyOut/client/Client.ts">cancelOutGet</a>(referenceId) -> Payabli.PayabliApiResponse0000</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancel a payout transaction by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyOut.cancelOutGet("129-219");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**referenceId:** `string` — The ID for the payout transaction. 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyOutClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyOut.<a href="/src/api/resources/moneyOut/client/Client.ts">cancelOutDelete</a>(referenceId) -> Payabli.PayabliApiResponse0000</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancel a payout transaction by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyOut.cancelOutDelete("129-219");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**referenceId:** `string` — The ID for the payout transaction. 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyOutClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyOut.<a href="/src/api/resources/moneyOut/client/Client.ts">captureAllOut</a>({ ...params }) -> Payabli.CaptureAllOutResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Captures an array of authorized payout transactions for settlement. The maximum number of transactions that can be captured in a single request is 500.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyOut.captureAllOut({
    body: ["2-29", "2-28", "2-27"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.CaptureAllOutRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyOutClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyOut.<a href="/src/api/resources/moneyOut/client/Client.ts">captureOut</a>(referenceId, { ...params }) -> Payabli.AuthCapturePayoutResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Captures a single authorized payout transaction by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyOut.captureOut("129-219");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**referenceId:** `string` — The ID for the payout transaction. 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.CaptureOutRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyOutClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyOut.<a href="/src/api/resources/moneyOut/client/Client.ts">payoutDetails</a>(transId) -> Payabli.BillDetailResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns details for a processed money out transaction.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyOut.payoutDetails("45-as456777hhhhhhhhhh77777777-324");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transId:** `string` — ReferenceId for the transaction (PaymentId).
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyOutClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyOut.<a href="/src/api/resources/moneyOut/client/Client.ts">vCardGet</a>(cardToken) -> Payabli.VCardGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves vCard details for a single card in an entrypoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyOut.vCardGet("20230403315245421165");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**cardToken:** `string` — ID for a virtual card.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyOutClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyOut.<a href="/src/api/resources/moneyOut/client/Client.ts">sendVCardLink</a>({ ...params }) -> Payabli.OperationResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sends a virtual card link via email to the vendor associated with the `transId`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyOut.sendVCardLink({
    transId: "01K33Z6YQZ6GD5QVKZ856MJBSC"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.SendVCardLinkRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyOutClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyOut.<a href="/src/api/resources/moneyOut/client/Client.ts">getCheckImage</a>(assetName) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the image of a check associated with a processed transaction. 
The check image is returned in the response body as a base64-encoded string. 
The check image is only available for payouts that have been processed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyOut.getCheckImage("check133832686289732320_01JKBNZ5P32JPTZY8XXXX000000.pdf");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**assetName:** `string` 

Name of the check asset to retrieve. This is returned as `filename` in the `CheckData` object 
in the response when you make a GET request to `/MoneyOut/details/{transId}`.
```
    "CheckData": {
      "ftype": "PDF",
      "filename": "check133832686289732320_01JKBNZ5P32JPTZY8XXXX000000.pdf",
      "furl": "",
      "fContent": ""
  }
```
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyOutClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.moneyOut.<a href="/src/api/resources/moneyOut/client/Client.ts">updateCheckPaymentStatus</a>(transId, checkPaymentStatus) -> Payabli.PayabliApiResponse00Responsedatanonobject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the status of a processed check payment transaction. This endpoint handles the status transition, updates related bills, creates audit events, and triggers notifications.

The transaction must meet all of the following criteria:
- **Status**: Must be in Processing or Processed status.
- **Payment method**: Must be a check payment method.

### Allowed status values

| Value | Status | Description |
|-------|--------|-------------|
| `0` | Cancelled/Voided | Cancels the check transaction. Reverts associated bills to their previous state (Approved or Active), creates "Cancelled" events, and sends a `payout_transaction_voidedcancelled` notification if the notification is enabled. |
| `5` | Paid | Marks the check transaction as paid. Updates associated bills to "Paid" status, creates "Paid" events, and sends a `payout_transaction_paid` notification if the notification is enabled. |
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.moneyOut.updateCheckPaymentStatus("TRANS123456", "5");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transId:** `string` — The Payabli transaction ID for the check payment.
    
</dd>
</dl>

<dl>
<dd>

**checkPaymentStatus:** `Payabli.AllowedCheckPaymentStatus` — The new status to apply to the check transaction. To mark a check as `Paid`, send 5. To mark a check as `Cancelled`, send 0.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MoneyOutClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Notification
<details><summary><code>client.notification.<a href="/src/api/resources/notification/client/Client.ts">addNotification</a>({ ...params }) -> Payabli.PayabliApiResponseNotifications</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new notification or autogenerated report. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notification.addNotification({
    content: {
        eventType: "CreatedApplication"
    },
    frequency: "untilcancelled",
    method: "web",
    ownerId: "236",
    ownerType: 0,
    status: 1,
    target: "https://webhook.site/2871b8f8-edc7-441a-b376-98d8c8e33275"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.AddNotificationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.notification.<a href="/src/api/resources/notification/client/Client.ts">deleteNotification</a>(nId) -> Payabli.PayabliApiResponseNotifications</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a single notification or autogenerated report.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notification.deleteNotification("1717");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**nId:** `string` — Notification ID. 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.notification.<a href="/src/api/resources/notification/client/Client.ts">getNotification</a>(nId) -> Payabli.NotificationQueryRecord</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a single notification or autogenerated report's details.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notification.getNotification("1717");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**nId:** `string` — Notification ID. 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.notification.<a href="/src/api/resources/notification/client/Client.ts">updateNotification</a>(nId, { ...params }) -> Payabli.PayabliApiResponseNotifications</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a notification or autogenerated report. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notification.updateNotification("1717", {
    content: {
        eventType: "ApprovedPayment"
    },
    frequency: "untilcancelled",
    method: "email",
    ownerId: "136",
    ownerType: 0,
    status: 1,
    target: "newemail@email.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**nId:** `string` — Notification ID. 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.UpdateNotificationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.notification.<a href="/src/api/resources/notification/client/Client.ts">getReportFile</a>(Id) -> Payabli.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a copy of a generated report by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notification.getReportFile(1000000);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**Id:** `number` — Report ID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Notificationlogs
<details><summary><code>client.notificationlogs.<a href="/src/api/resources/notificationlogs/client/Client.ts">searchNotificationLogs</a>({ ...params }) -> Payabli.NotificationLog[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search notification logs with filtering and pagination.
  - Start date and end date cannot be more than 30 days apart
  - Either `orgId` or `paypointId` must be provided

This endpoint requires the `notifications_create` OR `notifications_read` permission.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notificationlogs.searchNotificationLogs({
    PageSize: 20,
    body: {
        startDate: "2024-01-01T00:00:00Z",
        endDate: "2024-01-31T23:59:59Z",
        orgId: 12345,
        notificationEvent: "ActivatedMerchant",
        succeeded: true
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.SearchNotificationLogsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationlogsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.notificationlogs.<a href="/src/api/resources/notificationlogs/client/Client.ts">getNotificationLog</a>(uuid) -> Payabli.NotificationLogDetail</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get detailed information for a specific notification log entry.
This endpoint requires the `notifications_create` OR `notifications_read` permission.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notificationlogs.getNotificationLog("550e8400-e29b-41d4-a716-446655440000");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**uuid:** `string` — The notification log entry.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationlogsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.notificationlogs.<a href="/src/api/resources/notificationlogs/client/Client.ts">retryNotificationLog</a>(uuid) -> Payabli.NotificationLogDetail</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retry sending a specific notification.

**Permissions:** notifications_create
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notificationlogs.retryNotificationLog("550e8400-e29b-41d4-a716-446655440000");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**uuid:** `string` — Unique id
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationlogsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.notificationlogs.<a href="/src/api/resources/notificationlogs/client/Client.ts">bulkRetryNotificationLogs</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retry sending multiple notifications (maximum 50 IDs).
This is an async process, so use the search endpoint again to check the notification status.

This endpoint requires the `notifications_create` permission.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notificationlogs.bulkRetryNotificationLogs(["550e8400-e29b-41d4-a716-446655440000", "550e8400-e29b-41d4-a716-446655440001", "550e8400-e29b-41d4-a716-446655440002"]);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.BulkRetryRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationlogsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ocr
<details><summary><code>client.ocr.<a href="/src/api/resources/ocr/client/Client.ts">ocrDocumentForm</a>(typeResult, { ...params }) -> Payabli.PayabliApiResponseOcr</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use this endpoint to upload an image file for OCR processing. The accepted file formats include PDF, JPG, JPEG, PNG, and GIF. Specify the desired type of result (either 'bill' or 'invoice') in the path parameter `typeResult`. The response will contain the OCR processing results, including extracted data such as bill number, vendor information, bill items, and more.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ocr.ocrDocumentForm("typeResult", {});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**typeResult:** `Payabli.TypeResult` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.FileContentImageOnly` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OcrClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ocr.<a href="/src/api/resources/ocr/client/Client.ts">ocrDocumentJson</a>(typeResult, { ...params }) -> Payabli.PayabliApiResponseOcr</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use this endpoint to submit a Base64-encoded image file for OCR processing. The accepted file formats include PDF, JPG, JPEG, PNG, and GIF. Specify the desired type of result (either 'bill' or 'invoice') in the path parameter `typeResult`. The response will contain the OCR processing results, including extracted data such as bill number, vendor information, bill items, and more.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ocr.ocrDocumentJson("typeResult", {});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**typeResult:** `Payabli.TypeResult` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.FileContentImageOnly` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OcrClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Organization
<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">addOrganization</a>({ ...params }) -> Payabli.AddOrganizationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an organization under a parent organization. This is also referred to as a suborganization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.addOrganization({
    idempotencyKey: "6B29FC40-CA47-1067-B31D-00DD010662DA",
    billingInfo: {
        achAccount: "123123123",
        achRouting: "123123123",
        billingAddress: "123 Walnut Street",
        billingCity: "Johnson City",
        billingCountry: "US",
        billingState: "TN",
        billingZip: "37615"
    },
    contacts: [{
            contactEmail: "herman@hermanscoatings.com",
            contactName: "Herman Martinez",
            contactPhone: "3055550000",
            contactTitle: "Owner"
        }],
    hasBilling: true,
    hasResidual: true,
    orgAddress: "123 Walnut Street",
    orgCity: "Johnson City",
    orgCountry: "US",
    orgEntryName: "pilgrim-planner",
    orgId: "123",
    orgLogo: {
        fContent: "TXkgdGVzdCBmaWxlHJ==...",
        filename: "my-doc.pdf",
        ftype: "pdf",
        furl: "https://mysite.com/my-doc.pdf"
    },
    orgName: "Pilgrim Planner",
    orgParentId: 236,
    orgState: "TN",
    orgTimezone: -5,
    orgType: 0,
    orgWebsite: "www.pilgrimageplanner.com",
    orgZip: "37615",
    replyToEmail: "email@example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.AddOrganizationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrganizationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">deleteOrganization</a>(orgId) -> Payabli.DeleteOrganizationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an organization by ID. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.deleteOrganization(123);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrganizationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">editOrganization</a>(orgId, { ...params }) -> Payabli.EditOrganizationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an organization's details by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.editOrganization(123, {
    contacts: [{
            contactEmail: "herman@hermanscoatings.com",
            contactName: "Herman Martinez",
            contactPhone: "3055550000",
            contactTitle: "Owner"
        }],
    orgAddress: "123 Walnut Street",
    orgCity: "Johnson City",
    orgCountry: "US",
    orgEntryName: "pilgrim-planner",
    orgId: "123",
    orgName: "Pilgrim Planner",
    orgState: "TN",
    orgTimezone: -5,
    orgType: 0,
    orgWebsite: "www.pilgrimageplanner.com",
    orgZip: "37615"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.OrganizationData` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrganizationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">getBasicOrganization</a>(entry) -> Payabli.OrganizationQueryRecord</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an organization's basic information by entry name (entrypoint identifier).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.getBasicOrganization("8cfec329267");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrganizationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">getBasicOrganizationById</a>(orgId) -> Payabli.OrganizationQueryRecord</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an organizations basic details by org ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.getBasicOrganizationById(123);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrganizationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">getOrganization</a>(orgId) -> Payabli.OrganizationQueryRecord</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves details for an organization by ID. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.getOrganization(123);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrganizationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">getSettingsOrganization</a>(orgId) -> Payabli.SettingsQueryRecord</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves an organization's settings.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.getSettingsOrganization(123);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrganizationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## PaymentLink
<details><summary><code>client.paymentLink.<a href="/src/api/resources/paymentLink/client/Client.ts">addPayLinkFromInvoice</a>(idInvoice, { ...params }) -> Payabli.PayabliApiResponsePaymentLinks</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generates a payment link for an invoice from the invoice ID. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentLink.addPayLinkFromInvoice(23548884, {
    mail2: "jo@example.com; ceo@example.com",
    body: {
        contactUs: {
            emailLabel: "Email",
            enabled: true,
            header: "Contact Us",
            order: 0,
            paymentIcons: true,
            phoneLabel: "Phone"
        },
        invoices: {
            enabled: true,
            invoiceLink: {
                enabled: true,
                label: "View Invoice",
                order: 0
            },
            order: 0,
            viewInvoiceDetails: {
                enabled: true,
                label: "Invoice Details",
                order: 0
            }
        },
        logo: {
            enabled: true,
            order: 0
        },
        messageBeforePaying: {
            enabled: true,
            label: "Please review your payment details",
            order: 0
        },
        notes: {
            enabled: true,
            header: "Additional Notes",
            order: 0,
            placeholder: "Enter any additional notes here",
            value: ""
        },
        page: {
            description: "Complete your payment securely",
            enabled: true,
            header: "Payment Page",
            order: 0
        },
        paymentButton: {
            enabled: true,
            label: "Pay Now",
            order: 0
        },
        paymentMethods: {
            allMethodsChecked: true,
            enabled: true,
            header: "Payment Methods",
            methods: {
                amex: true,
                applePay: true,
                discover: true,
                eCheck: true,
                mastercard: true,
                visa: true
            },
            order: 0,
            settings: {
                applePay: {
                    buttonStyle: "black",
                    buttonType: "pay",
                    language: "en-US"
                }
            }
        },
        payor: {
            enabled: true,
            fields: [{
                    display: true,
                    fixed: true,
                    identifier: true,
                    label: "Full Name",
                    name: "fullName",
                    order: 0,
                    required: true,
                    validation: "alpha",
                    value: "",
                    width: 0
                }],
            header: "Payor Information",
            order: 0
        },
        review: {
            enabled: true,
            header: "Review Payment",
            order: 0
        },
        settings: {
            color: "#000000",
            customCssUrl: "https://example.com/custom.css",
            language: "en",
            pageLogo: {
                fContent: "PHN2ZyB2aWV3Qm94PSIwIDAgODAwIDEwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPCEtLSBCYWNrZ3JvdW5kIC0tPgogIDxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iMTAwMCIgZmlsbD0id2hpdGUiLz4KICAKICA8IS0tIENvbXBhbnkgSGVhZGVyIC0tPgogIDx0ZXh0IHg9IjQwIiB5PSI2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzJjM2U1MCI+R3J1enlhIEFkdmVudHVyZSBPdXRmaXR0ZXJzPC90ZXh0PgogIDxsaW5lIHgxPSI0MCIgeTE9IjgwIiB4Mj0iNzYwIiB5Mj0iODAiIHN0cm9rZT0iIzJjM2U1MCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgCiAgPCEtLSBDb21wYW55IERldGFpbHMgLS0+CiAgPHRleHQgeD0iNDAiIHk9IjExMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMzQ0OTVlIj4xMjMgTW91bnRhaW4gVmlldyBSb2FkPC90ZXh0PgogIDx0ZXh0IHg9IjQwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzM0NDk1ZSI+VGJpbGlzaSwgR2VvcmdpYSAwMTA1PC90ZXh0PgogIDx0ZXh0IHg9IjQwIiB5PSIxNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzM0NDk1ZSI+VGVsOiArOTk1IDMyIDEyMyA0NTY3PC90ZXh0PgogIDx0ZXh0IHg9IjQwIiB5PSIxNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzM0NDk1ZSI+RW1haWw6IGluZm9AZ3J1enlhYWR2ZW50dXJlcy5jb208L3RleHQ+CgogIDwhLS0gSW52b2ljZSBUaXRsZSAtLT4KICA8dGV4dCB4PSI2MDAiIHk9IjExMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzJjM2U1MCI+SU5WT0lDRTwvdGV4dD4KICA8dGV4dCB4PSI2MDAiIHk9IjE0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMzQ0OTVlIj5EYXRlOiAxMi8xMS8yMDI0PC90ZXh0PgogIDx0ZXh0IHg9IjYwMCIgeT0iMTYwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMzNDQ5NWUiPkludm9pY2UgIzogR1JaLTIwMjQtMTEyMzwvdGV4dD4KCiAgPCEtLSBCaWxsIFRvIFNlY3Rpb24gLS0+CiAgPHRleHQgeD0iNDAiIHk9IjIyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzJjM2U1MCI+QklMTCBUTzo8L3RleHQ+CiAgPHJlY3QgeD0iNDAiIHk9IjIzNSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSI4MCIgZmlsbD0iI2Y3ZjlmYSIvPgogIDx0ZXh0IHg9IjUwIiB5PSIyNjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzM0NDk1ZSI+W0N1c3RvbWVyIE5hbWVdPC90ZXh0PgogIDx0ZXh0IHg9IjUwIiB5PSIyODAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzM0NDk1ZSI+W0FkZHJlc3MgTGluZSAxXTwvdGV4dD4KICA8dGV4dCB4PSI1MCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMzNDQ5NWUiPltDaXR5LCBDb3VudHJ5XTwvdGV4dD4KCiAgPCEtLSBUYWJsZSBIZWFkZXJzIC0tPgogIDxyZWN0IHg9IjQwIiB5PSIzNDAiIHdpZHRoPSI3MjAiIGhlaWdodD0iMzAiIGZpbGw9IiMyYzNlNTAiLz4KICA8dGV4dCB4PSI1MCIgeT0iMzYwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSI+RGVzY3JpcHRpb248L3RleHQ+CiAgPHRleHQgeD0iNDUwIiB5PSIzNjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIj5RdWFudGl0eTwvdGV4dD4KICA8dGV4dCB4PSI1NTAiIHk9IjM2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiPlJhdGU8L3RleHQ+CiAgPHRleHQgeD0iNjgwIiB5PSIzNjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIj5BbW91bnQ8L3RleHQ+CgogIDwhLS0gVGFibGUgUm93cyAtLT4KICA8cmVjdCB4PSI0MCIgeT0iMzcwIiB3aWR0aD0iNzIwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZjdmOWZhIi8+CiAgPHRleHQgeD0iNTAiIHk9IjM5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMzQ0OTVlIj5Nb3VudGFpbiBDbGltYmluZyBFcXVpcG1lbnQgUmVudGFsPC90ZXh0PgogIDx0ZXh0IHg9IjQ1MCIgeT0iMzkwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMzNDQ5NWUiPjE8L3RleHQ+CiAgPHRleHQgeD0iNTUwIiB5PSIzOTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzM0NDk1ZSI+JDI1MC4wMDwvdGV4dD4KICA8dGV4dCB4PSI2ODAiIHk9IjM5MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMzQ0OTVlIj4kMjUwLjAwPC90ZXh0PgoKICA8cmVjdCB4PSI0MCIgeT0iNDAwIiB3aWR0aD0iNzIwIiBoZWlnaHQ9IjMwIiBmaWxsPSJ3aGl0ZSIvPgogIDx0ZXh0IHg9IjUwIiB5PSI0MjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzM0NDk1ZSI+R3VpZGVkIFRyZWsgUGFja2FnZSAtIDIgRGF5czwvdGV4dD4KICA8dGV4dCB4PSI0NTAiIHk9IjQyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMzQ0OTVlIj4xPC90ZXh0PgogIDx0ZXh0IHg9IjU1MCIgeT0iNDIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMzNDQ5NWUiPiQ0MDAuMDA8L3RleHQ+CiAgPHRleHQgeD0iNjgwIiB5PSI0MjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzM0NDk1ZSI+JDQwMC4wMDwvdGV4dD4KCiAgPHJlY3QgeD0iNDAiIHk9IjQzMCIgd2lkdGg9IjcyMCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2Y3ZjlmYSIvPgogIDx0ZXh0IHg9IjUwIiB5PSI0NTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzM0NDk1ZSI+U2FmZXR5IEVxdWlwbWVudCBQYWNrYWdlPC90ZXh0PgogIDx0ZXh0IHg9IjQ1MCIgeT0iNDUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMzNDQ5NWUiPjE8L3RleHQ+CiAgPHRleHQgeD0iNTUwIiB5PSI0NTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzM0NDk1ZSI+JDE1MC4wMDwvdGV4dD4KICA8dGV4dCB4PSI2ODAiIHk9IjQ1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMzQ0OTVlIj4kMTUwLjAwPC90ZXh0PgoKICA8IS0tIFRvdGFscyAtLT4KICA8bGluZSB4MT0iNDAiIHkxPSI0ODAiIHgyPSI3NjAiIHkyPSI0ODAiIHN0cm9rZT0iIzJjM2U1MCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPHRleHQgeD0iNTUwIiB5PSI1MTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzNDQ5NWUiPlN1YnRvdGFsOjwvdGV4dD4KICA8dGV4dCB4PSI2ODAiIHk9IjUxMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMzQ0OTVlIj4kODAwLjAwPC90ZXh0PgogIDx0ZXh0IHg9IjU1MCIgeT0iNTM1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMzQ0OTVlIj5UYXggKDE4JSk6PC90ZXh0PgogIDx0ZXh0IHg9IjY4MCIgeT0iNTM1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMzNDQ5NWUiPiQxNDQuMDA8L3RleHQ+CiAgPHRleHQgeD0iNTUwIiB5PSI1NzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMyYzNlNTAiPlRvdGFsOjwvdGV4dD4KICA8dGV4dCB4PSI2ODAiIHk9IjU3MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzJjM2U1MCI+JDk0NC4wMDwvdGV4dD4KCiAgPCEtLSBQYXltZW50IFRlcm1zIC0tPgogIDx0ZXh0IHg9IjQwIiB5PSI2NDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMyYzNlNTAiPlBheW1lbnQgVGVybXM8L3RleHQ+CiAgPHRleHQgeD0iNDAiIHk9IjY3MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMzQ0OTVlIj5QYXltZW50IGlzIGR1ZSB3aXRoaW4gMzAgZGF5czwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iNjkwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMzNDQ5NWUiPlBsZWFzZSBpbmNsdWRlIGludm9pY2UgbnVtYmVyIG9uIHBheW1lbnQ8L3RleHQ+CgogIDwhLS0gQmFuayBEZXRhaWxzIC0tPgogIDx0ZXh0IHg9IjQwIiB5PSI3MzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMyYzNlNTAiPkJhbmsgRGV0YWlsczwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iNzYwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMzNDQ5NWUiPkJhbms6IEJhbmsgb2YgR2VvcmdpYTwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iNzgwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMzNDQ5NWUiPklCQU46IEdFMTIzNDU2Nzg5MDEyMzQ1Njc4PC90ZXh0PgogIDx0ZXh0IHg9IjQwIiB5PSI4MDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzM0NDk1ZSI+U1dJRlQ6IEJBR0FHRTIyPC90ZXh0PgoKICA8IS0tIEZvb3RlciAtLT4KICA8bGluZSB4MT0iNDAiIHkxPSI5MDAiIHgyPSI3NjAiIHkyPSI5MDAiIHN0cm9rZT0iIzJjM2U1MCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPHRleHQgeD0iNDAiIHk9IjkzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjN2Y4YzhkIj5UaGFuayB5b3UgZm9yIGNob29zaW5nIEdydXp5YSBBZHZlbnR1cmUgT3V0Zml0dGVyczwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iOTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM3ZjhjOGQiPnd3dy5ncnV6eWFhZHZlbnR1cmVzLmNvbTwvdGV4dD4KPC9zdmc+Cg==",
                filename: "logo.jpg",
                ftype: "jpg",
                furl: ""
            },
            redirectAfterApprove: true,
            redirectAfterApproveUrl: "https://example.com/success"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**idInvoice:** `number` — Invoice ID
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.PayLinkDataInvoice` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLinkClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentLink.<a href="/src/api/resources/paymentLink/client/Client.ts">addPayLinkFromBill</a>(billId, { ...params }) -> Payabli.PayabliApiResponsePaymentLinks</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generates a payment link for a bill from the bill ID. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentLink.addPayLinkFromBill(23548884, {
    mail2: "jo@example.com; ceo@example.com",
    body: {
        contactUs: {
            emailLabel: "Email",
            enabled: true,
            header: "Contact Us",
            order: 0,
            paymentIcons: true,
            phoneLabel: "Phone"
        },
        logo: {
            enabled: true,
            order: 0
        },
        messageBeforePaying: {
            enabled: true,
            label: "Please review your payment details",
            order: 0
        },
        notes: {
            enabled: true,
            header: "Additional Notes",
            order: 0,
            placeholder: "Enter any additional notes here",
            value: ""
        },
        page: {
            description: "Get paid securely",
            enabled: true,
            header: "Payment Page",
            order: 0
        },
        paymentButton: {
            enabled: true,
            label: "Pay Now",
            order: 0
        },
        paymentMethods: {
            allMethodsChecked: true,
            enabled: true,
            header: "Payment Methods",
            methods: {
                amex: true,
                applePay: true,
                discover: true,
                eCheck: true,
                mastercard: true,
                visa: true
            },
            order: 0
        },
        payor: {
            enabled: true,
            fields: [{
                    display: true,
                    fixed: true,
                    identifier: true,
                    label: "Full Name",
                    name: "fullName",
                    order: 0,
                    required: true,
                    validation: "alpha",
                    value: "",
                    width: 0
                }],
            header: "Payor Information",
            order: 0
        },
        review: {
            enabled: true,
            header: "Review Payment",
            order: 0
        },
        settings: {
            color: "#000000",
            language: "en"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**billId:** `number` — The Payabli ID for the bill.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.PayLinkDataBill` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLinkClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentLink.<a href="/src/api/resources/paymentLink/client/Client.ts">deletePayLinkFromId</a>(payLinkId) -> Payabli.PayabliApiResponsePaymentLinks</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a payment link by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentLink.deletePayLinkFromId("payLinkId");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**payLinkId:** `string` — ID for the payment link.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLinkClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentLink.<a href="/src/api/resources/paymentLink/client/Client.ts">getPayLinkFromId</a>(paylinkId) -> Payabli.GetPayLinkFromIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a payment link by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentLink.getPayLinkFromId("paylinkId");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**paylinkId:** `string` — ID for payment link
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLinkClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentLink.<a href="/src/api/resources/paymentLink/client/Client.ts">pushPayLinkFromId</a>(payLinkId, { ...params }) -> Payabli.PayabliApiResponsePaymentLinks</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send a payment link to the specified email addresses or phone numbers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentLink.pushPayLinkFromId("payLinkId", {
    channel: "sms"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**payLinkId:** `string` — ID for the payment link.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.PushPayLinkRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLinkClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentLink.<a href="/src/api/resources/paymentLink/client/Client.ts">refreshPayLinkFromId</a>(payLinkId, { ...params }) -> Payabli.PayabliApiResponsePaymentLinks</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Refresh a payment link's content after an update.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentLink.refreshPayLinkFromId("payLinkId");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**payLinkId:** `string` — ID for the payment link.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.RefreshPayLinkFromIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLinkClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentLink.<a href="/src/api/resources/paymentLink/client/Client.ts">sendPayLinkFromId</a>(payLinkId, { ...params }) -> Payabli.PayabliApiResponsePaymentLinks</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sends a payment link to the specified email addresses. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentLink.sendPayLinkFromId("payLinkId", {
    mail2: "jo@example.com; ceo@example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**payLinkId:** `string` — ID for the payment link.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.SendPayLinkFromIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLinkClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentLink.<a href="/src/api/resources/paymentLink/client/Client.ts">updatePayLinkFromId</a>(payLinkId, { ...params }) -> Payabli.PayabliApiResponsePaymentLinks</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a payment link's details.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentLink.updatePayLinkFromId("332-c277b704-1301", {
    notes: {
        enabled: true,
        header: "Additional Notes",
        order: 0,
        placeholder: "Enter any additional notes here",
        value: ""
    },
    paymentButton: {
        enabled: true,
        label: "Pay Now",
        order: 0
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**payLinkId:** `string` — ID for the payment link.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.PayLinkUpdateData` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLinkClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentLink.<a href="/src/api/resources/paymentLink/client/Client.ts">addPayLinkFromBillLotNumber</a>(lotNumber, { ...params }) -> Payabli.PayabliApiResponsePaymentLinks</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generates a vendor payment link for a specific bill lot number. This allows you to pay all bills with the same lot number for a vendor with a single payment link.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentLink.addPayLinkFromBillLotNumber("LOT-2024-001", {
    entryPoint: "billing",
    vendorNumber: "VENDOR-123",
    mail2: "customer@example.com; billing@example.com",
    amountFixed: "true",
    body: {
        contactUs: {
            emailLabel: "Email",
            enabled: true,
            header: "Contact Us",
            order: 0,
            paymentIcons: true,
            phoneLabel: "Phone"
        },
        logo: {
            enabled: true,
            order: 0
        },
        messageBeforePaying: {
            enabled: true,
            label: "Please review your payment details",
            order: 0
        },
        notes: {
            enabled: true,
            header: "Additional Notes",
            order: 0,
            placeholder: "Enter any additional notes here",
            value: ""
        },
        page: {
            description: "Get paid securely",
            enabled: true,
            header: "Payment Page",
            order: 0
        },
        paymentButton: {
            enabled: true,
            label: "Pay Now",
            order: 0
        },
        paymentMethods: {
            allMethodsChecked: true,
            enabled: true,
            header: "Payment Methods",
            methods: {
                amex: true,
                applePay: true,
                discover: true,
                eCheck: true,
                mastercard: true,
                visa: true
            },
            order: 0
        },
        payor: {
            enabled: true,
            fields: [{
                    display: true,
                    fixed: true,
                    identifier: true,
                    label: "Full Name",
                    name: "fullName",
                    order: 0,
                    required: true,
                    validation: "alpha",
                    value: "",
                    width: 0
                }],
            header: "Payor Information",
            order: 0
        },
        review: {
            enabled: true,
            header: "Review Payment",
            order: 0
        },
        settings: {
            color: "#000000",
            language: "en"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**lotNumber:** `string` — Lot number of the bills to pay. All bills with this lot number will be included.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.PayLinkDataOut` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLinkClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## PaymentMethodDomain
<details><summary><code>client.paymentMethodDomain.<a href="/src/api/resources/paymentMethodDomain/client/Client.ts">addPaymentMethodDomain</a>({ ...params }) -> Payabli.AddPaymentMethodDomainApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a payment method domain to an organization or paypoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethodDomain.addPaymentMethodDomain({
    domainName: "checkout.example.com",
    entityId: 109,
    entityType: "paypoint",
    applePay: {
        isEnabled: true
    },
    googlePay: {
        isEnabled: true
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.AddPaymentMethodDomainRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodDomainClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentMethodDomain.<a href="/src/api/resources/paymentMethodDomain/client/Client.ts">cascadePaymentMethodDomain</a>(domainId) -> Payabli.PaymentMethodDomainGeneralResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cascades a payment method domain to all child entities. All paypoints and suborganization under this parent will inherit this domain and its settings.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethodDomain.cascadePaymentMethodDomain("pmd_b8237fa45c964d8a9ef27160cd42b8c5");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**domainId:** `string` — The payment method domain's ID in Payabli.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodDomainClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentMethodDomain.<a href="/src/api/resources/paymentMethodDomain/client/Client.ts">deletePaymentMethodDomain</a>(domainId) -> Payabli.DeletePaymentMethodDomainResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a payment method domain. You can't delete an inherited domain, you must delete a domain at the organization level.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethodDomain.deletePaymentMethodDomain("pmd_b8237fa45c964d8a9ef27160cd42b8c5");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**domainId:** `string` — The payment method domain's ID in Payabli.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodDomainClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentMethodDomain.<a href="/src/api/resources/paymentMethodDomain/client/Client.ts">getPaymentMethodDomain</a>(domainId) -> Payabli.PaymentMethodDomainApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the details for a payment method domain.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethodDomain.getPaymentMethodDomain("pmd_b8237fa45c964d8a9ef27160cd42b8c5");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**domainId:** `string` — The payment method domain's ID in Payabli.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodDomainClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentMethodDomain.<a href="/src/api/resources/paymentMethodDomain/client/Client.ts">listPaymentMethodDomains</a>({ ...params }) -> Payabli.ListPaymentMethodDomainsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of payment method domains that belong to a PSP, organization, or paypoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethodDomain.listPaymentMethodDomains({
    entityId: 1147,
    entityType: "paypoint"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.ListPaymentMethodDomainsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodDomainClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentMethodDomain.<a href="/src/api/resources/paymentMethodDomain/client/Client.ts">updatePaymentMethodDomain</a>(domainId, { ...params }) -> Payabli.PaymentMethodDomainGeneralResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a payment method domain's configuration values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethodDomain.updatePaymentMethodDomain("pmd_b8237fa45c964d8a9ef27160cd42b8c5", {
    applePay: {
        isEnabled: false
    },
    googlePay: {
        isEnabled: false
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**domainId:** `string` — The payment method domain's ID in Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.UpdatePaymentMethodDomainRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodDomainClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paymentMethodDomain.<a href="/src/api/resources/paymentMethodDomain/client/Client.ts">verifyPaymentMethodDomain</a>(domainId) -> Payabli.PaymentMethodDomainGeneralResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Verify a new payment method domain. If verification is successful, Apple Pay is automatically activated for the domain.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethodDomain.verifyPaymentMethodDomain("pmd_b8237fa45c964d8a9ef27160cd42b8c5");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**domainId:** `string` — The payment method domain's ID in Payabli.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodDomainClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Paypoint
<details><summary><code>client.paypoint.<a href="/src/api/resources/paypoint/client/Client.ts">getBasicEntry</a>(entry) -> Payabli.GetBasicEntryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the basic details for a paypoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paypoint.getBasicEntry("8cfec329267");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaypointClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paypoint.<a href="/src/api/resources/paypoint/client/Client.ts">getBasicEntryById</a>(IdPaypoint) -> Payabli.GetBasicEntryByIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the basic details for a paypoint by ID. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paypoint.getBasicEntryById("198");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**IdPaypoint:** `string` — Paypoint ID. You can find this value by querying `/api/Query/paypoints/{orgId}`
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaypointClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paypoint.<a href="/src/api/resources/paypoint/client/Client.ts">getEntryConfig</a>(entry, { ...params }) -> Payabli.GetEntryConfigResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the details for a single paypoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paypoint.getEntryConfig("8cfec329267");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.GetEntryConfigRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaypointClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paypoint.<a href="/src/api/resources/paypoint/client/Client.ts">getPage</a>(entry, subdomain) -> Payabli.PayabliPages</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the details for single payment page for a paypoint. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paypoint.getPage("8cfec329267", "pay-your-fees-1");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**subdomain:** `string` — Payment page identifier. The subdomain value is the last portion of the payment page URL. For example, in`https://paypages-sandbox.payabli.com/513823dc10/pay-your-fees-1`, the subdomain is `pay-your-fees-1`.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaypointClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paypoint.<a href="/src/api/resources/paypoint/client/Client.ts">removePage</a>(entry, subdomain) -> Payabli.PayabliApiResponseGeneric2Part</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a payment page in a paypoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paypoint.removePage("8cfec329267", "pay-your-fees-1");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**subdomain:** `string` — Payment page identifier. The subdomain value is the last portion of the payment page URL. For example, in`https://paypages-sandbox.payabli.com/513823dc10/pay-your-fees-1`, the subdomain is `pay-your-fees-1`.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaypointClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paypoint.<a href="/src/api/resources/paypoint/client/Client.ts">saveLogo</a>(entry, { ...params }) -> Payabli.PayabliApiResponse00Responsedatanonobject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a paypoint logo. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paypoint.saveLogo("8cfec329267", {});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.FileContent` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaypointClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paypoint.<a href="/src/api/resources/paypoint/client/Client.ts">settingsPage</a>(entry) -> Payabli.SettingsQueryRecord</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves an paypoint's basic settings like custom fields, identifiers, and invoicing settings.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paypoint.settingsPage("8cfec329267");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaypointClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.paypoint.<a href="/src/api/resources/paypoint/client/Client.ts">migrate</a>({ ...params }) -> Payabli.MigratePaypointResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Migrates a paypoint to a new parent organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paypoint.migrate({
    entryPoint: "473abc123def",
    newParentOrganizationId: 123,
    notificationRequest: {
        notificationUrl: "https://webhook-test.yoursie.com",
        webHeaderParameters: [{
                key: "testheader",
                value: "1234567890"
            }]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.PaypointMoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaypointClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Query
<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listBatchDetails</a>(entry, { ...params }) -> Payabli.QueryBatchesDetailResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of batches and their details, including settled and
unsettled transactions for a paypoint. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listBatchDetails("8cfec329267", {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `Payabli.Entry` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListBatchDetailsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listBatchDetailsOrg</a>(orgId, { ...params }) -> Payabli.QueryResponseSettlements</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of batches and their details, including settled and unsettled transactions for an organization. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listBatchDetailsOrg(123, {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListBatchDetailsOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listBatches</a>(entry, { ...params }) -> Payabli.QueryBatchesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of batches for a paypoint. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listBatches("8cfec329267", {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `Payabli.Entry` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListBatchesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listBatchesOrg</a>(orgId, { ...params }) -> Payabli.QueryBatchesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of batches for an org. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listBatchesOrg(123, {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListBatchesOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listBatchesOut</a>(entry, { ...params }) -> Payabli.QueryBatchesOutResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of MoneyOut batches for a paypoint. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listBatchesOut("8cfec329267", {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `Payabli.Entry` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListBatchesOutRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listBatchesOutOrg</a>(orgId, { ...params }) -> Payabli.QueryBatchesOutResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of MoneyOut batches for an org. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listBatchesOutOrg(123, {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListBatchesOutOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listChargebacks</a>(entry, { ...params }) -> Payabli.QueryChargebacksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of chargebacks and returned transactions for a paypoint. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listChargebacks("8cfec329267", {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `Payabli.Entry` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListChargebacksRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listChargebacksOrg</a>(orgId, { ...params }) -> Payabli.QueryChargebacksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of chargebacks and returned transactions for an org. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listChargebacksOrg(123, {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListChargebacksOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listCustomers</a>(entry, { ...params }) -> Payabli.QueryCustomerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of customers for a paypoint. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listCustomers("8cfec329267", {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `Payabli.Entry` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListCustomersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listCustomersOrg</a>(orgId, { ...params }) -> Payabli.QueryCustomerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of customers for an org. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listCustomersOrg(123, {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListCustomersOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listNotificationReports</a>(entry, { ...params }) -> Payabli.QueryResponseNotificationReports</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of all reports generated in the last 60 days for a single entrypoint. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listNotificationReports("8cfec329267", {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `Payabli.Entry` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListNotificationReportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listNotificationReportsOrg</a>(orgId, { ...params }) -> Payabli.QueryResponseNotificationReports</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of all reports generated in the last 60 days for an organization. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listNotificationReportsOrg(123, {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListNotificationReportsOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listNotifications</a>(entry, { ...params }) -> Payabli.QueryResponseNotifications</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of notifications for an entrypoint. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listNotifications("8cfec329267", {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `Payabli.Entry` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListNotificationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listNotificationsOrg</a>(orgId, { ...params }) -> Payabli.QueryResponseNotifications</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return a list of notifications for an organization. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listNotificationsOrg(123, {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListNotificationsOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listOrganizations</a>(orgId, { ...params }) -> Payabli.ListOrganizationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of an organization's suborganizations and their full details such as orgId, users, and settings. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listOrganizations(123, {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListOrganizationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listPayout</a>(entry, { ...params }) -> Payabli.QueryPayoutTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of money out transactions (payouts) for a paypoint. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listPayout("8cfec329267", {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `Payabli.Entry` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListPayoutRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listPayoutOrg</a>(orgId, { ...params }) -> Payabli.QueryPayoutTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of money out transactions (payouts) for an organization. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listPayoutOrg(123, {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListPayoutOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listPaypoints</a>(orgId, { ...params }) -> Payabli.QueryEntrypointResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of paypoints in an organization. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listPaypoints(123, {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListPaypointsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listSettlements</a>(entry, { ...params }) -> Payabli.QueryResponseSettlements</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of settled transactions for a paypoint. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listSettlements("8cfec329267", {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `Payabli.Entry` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListSettlementsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listSettlementsOrg</a>(orgId, { ...params }) -> Payabli.QueryResponseSettlements</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of settled transactions for an organization. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listSettlementsOrg(123, {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListSettlementsOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listSubscriptions</a>(entry, { ...params }) -> Payabli.QuerySubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of subscriptions for a single paypoint. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listSubscriptions("8cfec329267", {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `Payabli.Entry` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListSubscriptionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listSubscriptionsOrg</a>(orgId, { ...params }) -> Payabli.QuerySubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of subscriptions for a single org. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listSubscriptionsOrg(123, {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListSubscriptionsOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listTransactions</a>(entry, { ...params }) -> Payabli.QueryResponseTransactions</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of transactions for a paypoint. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
By default, this endpoint returns only transactions from the last 60 days. To query transactions outside of this period, include `transactionDate` filters.
For example, this request parameters filter for transactions between April 01, 2024 and April 09, 2024. 
``` curl --request GET \
  --url https://sandbox.payabli.com/api/Query/transactions/org/1?limitRecord=20&fromRecord=0&transactionDate(ge)=2024-04-01T00:00:00&transactionDate(le)=2024-04-09T23:59:59\
  --header 'requestToken: <api-key>'

  ```
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listTransactions("8cfec329267", {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `Payabli.Entry` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListTransactionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listTransactionsOrg</a>(orgId, { ...params }) -> Payabli.QueryResponseTransactions</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


Retrieve a list of transactions for an organization. Use filters to
limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.


By default, this endpoint returns only transactions from the last 60 days. To query transactions outside of this period, include `transactionDate` filters.

For example, this request parameters filter for transactions between April 01, 2024 and April 09, 2024. 

```
curl --request GET \
  --url https://sandbox.payabli.com/api/Query/transactions/org/1?limitRecord=20&fromRecord=0&transactionDate(ge)=2024-04-01T00:00:00&transactionDate(le)=2024-04-09T23:59:59\
  --header 'requestToken: <api-key>'

  ```
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listTransactionsOrg(123, {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListTransactionsOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listTransferDetails</a>(entry, transferId, { ...params }) -> Payabli.QueryTransferDetailResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of transfer details records for a paypoint. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listTransferDetails("47862acd", 123456);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `Payabli.Entry` 
    
</dd>
</dl>

<dl>
<dd>

**transferId:** `number` — The numeric identifier for the transfer, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListTransfersPaypointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listTransfers</a>(entry, { ...params }) -> Payabli.TransferQueryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of transfers for a paypoint. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listTransfers("47862acd", {
    fromRecord: 0,
    limitRecord: 20
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `Payabli.Entry` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListTransfersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listTransfersOrg</a>({ ...params }) -> Payabli.TransferQueryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of transfers for an org. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listTransfersOrg({
    orgId: 123,
    fromRecord: 0,
    limitRecord: 20
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.ListTransfersRequestOrg` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listTransfersOutOrg</a>(orgId, { ...params }) -> Payabli.TransferOutQueryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of outbound transfers for an organization. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listTransfersOutOrg(77, {
    fromRecord: 0,
    limitRecord: 20
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListTransfersOutOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listTransfersOutPaypoint</a>(entry, { ...params }) -> Payabli.TransferOutQueryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of outbound transfers for a paypoint. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listTransfersOutPaypoint("47cade237", {
    fromRecord: 0,
    limitRecord: 20
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `Payabli.Entry` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListTransfersOutPaypointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listTransferDetailsOut</a>(entry, transferId, { ...params }) -> Payabli.TransferOutDetailQueryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve details for a specific outbound transfer. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listTransferDetailsOut("47ace2b25", 4521, {
    fromRecord: 0,
    limitRecord: 20
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `Payabli.Entry` 
    
</dd>
</dl>

<dl>
<dd>

**transferId:** `number` — The numeric identifier for the transfer, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListTransferDetailsOutRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listUsersOrg</a>(orgId, { ...params }) -> Payabli.QueryUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get list of users for an org. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listUsersOrg(123, {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListUsersOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listUsersPaypoint</a>(entry, { ...params }) -> Payabli.QueryUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get list of users for a paypoint. Use filters to limit results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listUsersPaypoint("8cfec329267", {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListUsersPaypointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listVendors</a>(entry, { ...params }) -> Payabli.QueryResponseVendors</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of vendors for an entrypoint. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listVendors("8cfec329267", {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — The paypoint's entrypoint identifier. [Learn more](/developers/api-reference/api-overview#entrypoint-vs-entry)
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListVendorsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listVendorsOrg</a>(orgId, { ...params }) -> Payabli.QueryResponseVendors</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of vendors for an organization. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listVendorsOrg(123, {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListVendorsOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listVcards</a>(entry, { ...params }) -> Payabli.VCardQueryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of vcards (virtual credit cards) issued for an entrypoint. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listVcards("8cfec329267", {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `Payabli.Entry` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListVcardsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.query.<a href="/src/api/resources/query/client/Client.ts">listVcardsOrg</a>(orgId, { ...params }) -> Payabli.VCardQueryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of vcards (virtual credit cards) issued for an organization. Use filters to limit results. Include the `exportFormat` query parameter to return the results as a file instead of a JSON response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.query.listVcardsOrg(123, {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListVcardsOrgRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QueryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Statistic
<details><summary><code>client.statistic.<a href="/src/api/resources/statistic/client/Client.ts">basicStats</a>(mode, freq, level, entryId, { ...params }) -> Payabli.StatBasicExtendedQueryRecord[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the basic statistics for an organization or a paypoint, for a given time period, grouped by a particular frequency. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.statistic.basicStats("ytd", "m", 1, 1000000, {
    endDate: "2025-11-01",
    startDate: "2025-11-30"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**mode:** `string` 

Mode for the request. Allowed values:

- `custom` - Allows you to set a custom date range
- `ytd` - Year To Date
- `mtd` - Month To Date
- `wtd` - Week To Date
- `today` - All current day
- `m12` - Last 12 months
- `d30` - Last 30 days
- `h24` - Last 24 hours
- `lasty` - Last Year
- `lastm` - Last Month
- `lastw` - Last Week
- `yesterday` - Last Day
  
    
</dd>
</dl>

<dl>
<dd>

**freq:** `string` 

Frequency to group series. Allowed values:

- `m` - monthly
- `w` - weekly
- `d` - daily
- `h` - hourly

For example, `w` groups the results by week.
    
</dd>
</dl>

<dl>
<dd>

**level:** `number` 

The entry level for the request: 
  - 0 for Organization
  - 2 for Paypoint
    
</dd>
</dl>

<dl>
<dd>

**entryId:** `number` — Identifier in Payabli for the entity.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.BasicStatsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StatisticClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.statistic.<a href="/src/api/resources/statistic/client/Client.ts">customerBasicStats</a>(mode, freq, customerId, { ...params }) -> Payabli.SubscriptionStatsQueryRecord[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the basic statistics for a customer for a specific time period, grouped by a selected frequency. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.statistic.customerBasicStats("ytd", "m", 998);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**mode:** `string` 

Mode for request. Allowed values:

- `ytd` - Year To Date
- `mtd` - Month To Date
- `wtd` - Week To Date
- `today` - All current day
- `m12` - Last 12 months
- `d30` - Last 30 days
- `h24` - Last 24 hours
- `lasty` - Last Year
- `lastm` - Last Month
- `lastw` - Last Week
- `yesterday` - Last Day
    
</dd>
</dl>

<dl>
<dd>

**freq:** `string` 

Frequency to group series. Allowed values:

- `m` - monthly
- `w` - weekly
- `d` - daily
- `h` - hourly

For example, `w` groups the results by week.
    
</dd>
</dl>

<dl>
<dd>

**customerId:** `number` — Payabli-generated customer ID. Maps to "Customer ID" column in PartnerHub. 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.CustomerBasicStatsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StatisticClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.statistic.<a href="/src/api/resources/statistic/client/Client.ts">subStats</a>(interval, level, entryId, { ...params }) -> Payabli.StatBasicQueryRecord[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the subscription statistics for a given interval for a paypoint or organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.statistic.subStats("30", 1, 1000000);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**interval:** `string` 

Interval to get the data. Allowed values:

- `all` - all intervals
- `30` - 1-30 days
- `60` - 31-60 days
- `90` - 61-90 days
- `plus` - +90 days
    
</dd>
</dl>

<dl>
<dd>

**level:** `number` 

The entry level for the request: 
  - 0 for Organization
  - 2 for Paypoint
    
</dd>
</dl>

<dl>
<dd>

**entryId:** `number` — Identifier in Payabli for the entity.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.SubStatsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StatisticClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.statistic.<a href="/src/api/resources/statistic/client/Client.ts">vendorBasicStats</a>(mode, freq, idVendor, { ...params }) -> Payabli.StatisticsVendorQueryRecord[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the basic statistics about a vendor for a given time period, grouped by frequency. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.statistic.vendorBasicStats("ytd", "m", 1);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**mode:** `string` 

Mode for request. Allowed values:

- `ytd` - Year To Date
- `mtd` - Month To Date
- `wtd` - Week To Date
- `today` - All current day
- `m12` - Last 12 months
- `d30` - Last 30 days
- `h24` - Last 24 hours
- `lasty` - Last Year
- `lastm` - Last Month
- `lastw` - Last Week
- `yesterday` - Last Day
    
</dd>
</dl>

<dl>
<dd>

**freq:** `string` 

Frequency to group series. Allowed values:

- `m` - monthly
- `w` - weekly
- `d` - daily
- `h` - hourly

For example, `w` groups the results by week.
    
</dd>
</dl>

<dl>
<dd>

**idVendor:** `number` — Vendor ID.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.VendorBasicStatsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StatisticClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Subscription
<details><summary><code>client.subscription.<a href="/src/api/resources/subscription/client/Client.ts">getSubscription</a>(subId) -> Payabli.SubscriptionQueryRecords</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a single subscription's details.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscription.getSubscription(263);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**subId:** `number` — The subscription ID. 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.subscription.<a href="/src/api/resources/subscription/client/Client.ts">newSubscription</a>({ ...params }) -> Payabli.AddSubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a subscription or scheduled payment to run at a specified time and frequency. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscription.newSubscription({
    body: {
        customerData: {
            customerId: 4440
        },
        entryPoint: "f743aed24a",
        paymentDetails: {
            serviceFee: 0,
            totalAmount: 100
        },
        paymentMethod: {
            cardcvv: "123",
            cardexp: "02/25",
            cardHolder: "John Cassian",
            cardnumber: "4111111111111111",
            cardzip: "37615",
            initiator: "payor",
            method: "card"
        },
        scheduleDetails: {
            endDate: "03-20-2025",
            frequency: "weekly",
            planId: 1,
            startDate: "09-20-2024"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.RequestSchedule` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.subscription.<a href="/src/api/resources/subscription/client/Client.ts">removeSubscription</a>(subId) -> Payabli.RemoveSubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a subscription, autopay, or recurring payment and prevents future charges.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscription.removeSubscription(396);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**subId:** `number` — The subscription ID. 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.subscription.<a href="/src/api/resources/subscription/client/Client.ts">updateSubscription</a>(subId, { ...params }) -> Payabli.UpdateSubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a subscription's details.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscription.updateSubscription(231, {
    setPause: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**subId:** `number` — The subscription ID. 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.RequestUpdateSchedule` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Templates
<details><summary><code>client.templates.<a href="/src/api/resources/templates/client/Client.ts">deleteTemplate</a>(templateId) -> Payabli.PayabliApiResponseTemplateId</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a template by ID. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.templates.deleteTemplate(80);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**templateId:** `number` — The boarding template ID. Can be found at the end of the boarding template URL in PartnerHub. Example: `https://partner-sandbox.payabli.com/myorganization/boarding/edittemplate/80`. Here, the template ID is `80`.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TemplatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.templates.<a href="/src/api/resources/templates/client/Client.ts">getlinkTemplate</a>(templateId, ignoreEmpty) -> Payabli.BoardingLinkApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generates a boarding link from a boarding template.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.templates.getlinkTemplate(80, true);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**templateId:** `number` — The boarding template ID. Can be found at the end of the boarding template URL in PartnerHub. Example: `https://partner-sandbox.payabli.com/myorganization/boarding/edittemplate/80`. Here, the template ID is `80`.
    
</dd>
</dl>

<dl>
<dd>

**ignoreEmpty:** `boolean` — Ignore read-only and empty fields Default is `false`. If `ignoreEmpty` = `false` and any field is empty, then the request returns a failure response. If `ignoreEmpty` = `true`, the request returns the boarding link name regardless of whether fields are empty.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TemplatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.templates.<a href="/src/api/resources/templates/client/Client.ts">getTemplate</a>(templateId) -> Payabli.TemplateQueryRecord</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a boarding template's details by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.templates.getTemplate(80);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**templateId:** `number` — The boarding template ID. Can be found at the end of the boarding template URL in PartnerHub. Example: `https://partner-sandbox.payabli.com/myorganization/boarding/edittemplate/80`. Here, the template ID is `80`.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TemplatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.templates.<a href="/src/api/resources/templates/client/Client.ts">listTemplates</a>(orgId, { ...params }) -> Payabli.TemplateQueryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of boarding templates for an organization. Use filters to limit results. You can't make a request that includes filters from the API console in the documentation. The response won't be filtered. Instead, copy the request, remove `parameters=` and run the request in a different client.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.templates.listTemplates(123, {
    fromRecord: 251,
    limitRecord: 0,
    sortBy: "desc(field_name)"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**orgId:** `number` — The numeric identifier for organization, assigned by Payabli.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.ListTemplatesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TemplatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## TokenStorage
<details><summary><code>client.tokenStorage.<a href="/src/api/resources/tokenStorage/client/Client.ts">addMethod</a>({ ...params }) -> Payabli.AddMethodResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Saves a payment method for reuse. This call exchanges sensitive payment information for a token that can be used to process future transactions. The `ReferenceId` value in the response is the `storedMethodId` to use with transactions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tokenStorage.addMethod({
    body: {
        customerData: {
            customerId: 4440
        },
        entryPoint: "f743aed24a",
        fallbackAuth: true,
        paymentMethod: {
            cardcvv: "123",
            cardexp: "02/25",
            cardHolder: "John Doe",
            cardnumber: "4111111111111111",
            cardzip: "12345",
            method: "card"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.AddMethodRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TokenStorageClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tokenStorage.<a href="/src/api/resources/tokenStorage/client/Client.ts">getMethod</a>(methodId, { ...params }) -> Payabli.GetMethodResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves details for a saved payment method.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tokenStorage.getMethod("32-8877drt00045632-678", {
    cardExpirationFormat: 1,
    includeTemporary: false
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**methodId:** `string` — The saved payment method ID.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.GetMethodRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TokenStorageClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tokenStorage.<a href="/src/api/resources/tokenStorage/client/Client.ts">removeMethod</a>(methodId) -> Payabli.PayabliApiResponsePaymethodDelete</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a saved payment method.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tokenStorage.removeMethod("32-8877drt00045632-678");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**methodId:** `string` — The saved payment method ID.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TokenStorageClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tokenStorage.<a href="/src/api/resources/tokenStorage/client/Client.ts">updateMethod</a>(methodId, { ...params }) -> Payabli.PayabliApiResponsePaymethodDelete</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a saved payment method.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tokenStorage.updateMethod("32-8877drt00045632-678", {
    body: {
        customerData: {
            customerId: 4440
        },
        entryPoint: "f743aed24a",
        fallbackAuth: true,
        paymentMethod: {
            cardcvv: "123",
            cardexp: "02/25",
            cardHolder: "John Doe",
            cardnumber: "4111111111111111",
            cardzip: "12345",
            method: "card"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**methodId:** `string` — The saved payment method ID.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.UpdateMethodRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TokenStorageClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## User
<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">addUser</a>({ ...params }) -> Payabli.AddUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use this endpoint to add a new user to an organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.addUser({});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.UserData` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">authRefreshUser</a>() -> Payabli.PayabliApiResponseUserMfa</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use this endpoint to refresh the authentication token for a user within an organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.authRefreshUser();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">authResetUser</a>({ ...params }) -> Payabli.AuthResetUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use this endpoint to initiate a password reset for a user within an organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.authResetUser();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.UserAuthResetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">authUser</a>(provider, { ...params }) -> Payabli.PayabliApiResponseMfaBasic</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint requires an application API token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.authUser("provider");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**provider:** `string` — Auth provider. This fields is optional and defaults to null for the built-in provider.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.UserAuthRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">changePswUser</a>({ ...params }) -> Payabli.ChangePswUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use this endpoint to change the password for a user within an organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.changePswUser();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.UserAuthPswResetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">deleteUser</a>(userId) -> Payabli.DeleteUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use this endpoint to delete a specific user within an organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.deleteUser(1000000);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `number` — The Payabli-generated `userId` value.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">editMfaUser</a>(userId, { ...params }) -> Payabli.EditMfaUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use this endpoint to enable or disable multi-factor authentication (MFA) for a user within an organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.editMfaUser(1000000, {});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `number` — User Identifier
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.MfaData` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">editUser</a>(userId, { ...params }) -> Payabli.PayabliApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use this endpoint to modify the details of a specific user within an organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.editUser(1000000, {});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `number` — User Identifier
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.UserData` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getUser</a>(userId, { ...params }) -> Payabli.UserQueryRecord</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use this endpoint to retrieve information about a specific user within an organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getUser(1000000, {
    entry: "478ae1234"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `number` — The Payabli-generated `userId` value.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.GetUserRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">logoutUser</a>() -> Payabli.LogoutUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use this endpoint to log a user out from the system.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.logoutUser();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">resendMfaCode</a>(usrname, Entry, EntryType) -> Payabli.PayabliApiResponseMfaBasic</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resends the MFA code to the user via the selected MFA mode (email or SMS).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.resendMfaCode("usrname", "Entry", 1);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**usrname:** `string` —  
    
</dd>
</dl>

<dl>
<dd>

**Entry:** `string` —  
    
</dd>
</dl>

<dl>
<dd>

**EntryType:** `number` —  
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">validateMfaUser</a>({ ...params }) -> Payabli.PayabliApiResponseUserMfa</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use this endpoint to validate the multi-factor authentication (MFA) code for a user within an organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.validateMfaUser();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.MfaValidationData` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Vendor
<details><summary><code>client.vendor.<a href="/src/api/resources/vendor/client/Client.ts">addVendor</a>(entry, { ...params }) -> Payabli.PayabliApiResponseVendors</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a vendor in an entrypoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vendor.addVendor("8cfec329267", {
    vendorNumber: "1234",
    name1: "Herman's Coatings and Masonry",
    name2: "<string>",
    ein: "12-3456789",
    phone: "5555555555",
    email: "example@email.com",
    address1: "123 Ocean Drive",
    address2: "Suite 400",
    city: "Miami",
    state: "FL",
    zip: "33139",
    country: "US",
    mcc: "7777",
    locationCode: "MIA123",
    contacts: [{
            contactName: "Herman Martinez",
            contactEmail: "example@email.com",
            contactTitle: "Owner",
            contactPhone: "3055550000"
        }],
    billingData: {
        id: 123,
        bankName: "Country Bank",
        routingAccount: "123123123",
        accountNumber: "123123123",
        typeAccount: "Checking",
        bankAccountHolderName: "Gruzya Adventure Outfitters LLC",
        bankAccountHolderType: "Business",
        bankAccountFunction: 0
    },
    paymentMethod: "managed",
    vendorStatus: 1,
    remitAddress1: "123 Walnut Street",
    remitAddress2: "Suite 900",
    remitCity: "Miami",
    remitState: "FL",
    remitZip: "31113",
    remitCountry: "US",
    payeeName1: "<string>",
    payeeName2: "<string>",
    customerVendorAccount: "A-37622",
    internalReferenceId: 123
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entry:** `string` — Entrypoint identifier.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.VendorData` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VendorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.vendor.<a href="/src/api/resources/vendor/client/Client.ts">deleteVendor</a>(idVendor) -> Payabli.PayabliApiResponseVendors</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a vendor. 
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vendor.deleteVendor(1);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**idVendor:** `number` — Vendor ID.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VendorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.vendor.<a href="/src/api/resources/vendor/client/Client.ts">editVendor</a>(idVendor, { ...params }) -> Payabli.PayabliApiResponseVendors</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a vendor's information. Send only the fields you need to update.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vendor.editVendor(1, {
    name1: "Theodore's Janitorial"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**idVendor:** `number` — Vendor ID.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Payabli.VendorData` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VendorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.vendor.<a href="/src/api/resources/vendor/client/Client.ts">getVendor</a>(idVendor) -> Payabli.VendorQueryRecord</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a vendor's details.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vendor.getVendor(1);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**idVendor:** `number` — Vendor ID.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VendorClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Wallet
<details><summary><code>client.wallet.<a href="/src/api/resources/wallet/client/Client.ts">configureApplePayOrganization</a>({ ...params }) -> Payabli.ConfigureApplePayOrganizationApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Configure and activate Apple Pay for a Payabli organization
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.wallet.configureApplePayOrganization({
    cascade: true,
    isEnabled: true,
    orgId: 901
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.ConfigureOrganizationRequestApplePay` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WalletClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.wallet.<a href="/src/api/resources/wallet/client/Client.ts">configureApplePayPaypoint</a>({ ...params }) -> Payabli.ConfigureApplePaypointApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Configure and activate Apple Pay for a Payabli paypoint
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.wallet.configureApplePayPaypoint({
    entry: "8cfec329267",
    isEnabled: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.ConfigurePaypointRequestApplePay` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WalletClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.wallet.<a href="/src/api/resources/wallet/client/Client.ts">configureGooglePayOrganization</a>({ ...params }) -> Payabli.ConfigureApplePayOrganizationApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Configure and activate Google Pay for a Payabli organization
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.wallet.configureGooglePayOrganization({
    cascade: true,
    isEnabled: true,
    orgId: 901
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.ConfigureOrganizationRequestGooglePay` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WalletClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.wallet.<a href="/src/api/resources/wallet/client/Client.ts">configureGooglePayPaypoint</a>({ ...params }) -> Payabli.ConfigureGooglePaypointApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Configure and activate Google Pay for a Payabli paypoint
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.wallet.configureGooglePayPaypoint({
    entry: "8cfec329267",
    isEnabled: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Payabli.ConfigurePaypointRequestGooglePay` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WalletClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>
