/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The business ownership type.
 */
export type OwnType =
    | "Limited Liability Company"
    | "Non-Profit Org"
    | "Partnership"
    | "Private Corp"
    | "Public Corp"
    | "Tax Exempt"
    | "Government"
    | "Sole Proprietor";
export const OwnType = {
    LimitedLiabilityCompany: "Limited Liability Company",
    NonProfitOrg: "Non-Profit Org",
    Partnership: "Partnership",
    PrivateCorp: "Private Corp",
    PublicCorp: "Public Corp",
    TaxExempt: "Tax Exempt",
    Government: "Government",
    SoleProprietor: "Sole Proprietor",
} as const;
