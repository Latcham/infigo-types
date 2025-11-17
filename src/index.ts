/* TypeScript export interface for the Customer object */
export interface Customer {
	CatfishId: string;
	ExternalId: string | null;
	Email: string | null;
	Username: string;
	FirstName: string;
	LastName: string;
	PhoneNumber?: string | null;
	CompanyName?: string | null;
	AddressLine1: string;
	AddressLine2: string;
	Town: string;
	County: string;
	Country: string;
	CountryCode: string;
	ZipPostalCode: string;
	Custom1: string | null;
	Custom2: string | null;
	Custom3: string | null;
	CustomCheckbox: string | null;
	CustomerAttributes: string | null;
	Department: string | null;
	DepartmentDetails: string | null;
	Roles: string[];
	IsTest: boolean;
}

/* TypeScript export interface for the Address object */
export interface Address {
	ExternalId: string | null;
	FirstName: string;
	LastName: string;
	CompanyName: string | null;
	Address1: string;
	Address2: string;
	Postcode: string;
	State: string | null;
	Town: string;
	Country: string;
	CountryCode: string;
	Email: string | null;
	Phone: string | null;
	Fax: string | null;
}

/* TypeScript export interface for the Shipment object */
export interface Shipment {}

/* TypeScript export interface for the PrintParameters object */
export interface PrintParameters {
	CanvasName: string | null;
	CanvasSize: number | null;
	NumberOfPages: number | null;
	OutputType: string | number | null;
	SpineWidth: number | null;
	Weight: number | null;
	Height: number | null;
	Width: number | null;
	NumRecords: number | null;
	Stock: number | null;
}

/* TypeScript export interface for the OrderLine object */
export interface OrderLine {
	OrderLineId: string;
	ProductExternalId: string;
	ProductVariantExternalId: string;
	ProductAttributeCombinationExternalId?: string;
	ProductCatfishId: number;
	Sku: string;
	ProductName: string;
	CustomName: string;
	ShortDescription: string;
	Description: string;
	Quantity: number;
	TotalPrice: number;
	TotalTax: number;
	Weight: number;
	DiscountAmountInclTax: number;
	DiscountAmountExclTax: number;
	AssetUrl: string;
	AssetDetails?: [any];
	JobTicketUrl?: string;
	PrintParameters?: PrintParameters;
	ProductAttributes: ProductAttribute[];
	SpecificationAttributes: SpecificationAttribute[];
	Totals: {
		UnitPrice: number;
		TotalPrice: number;
		TotalTax: number;
		DiscountAmountInclTax: number;
		DiscountAmountExclTax: number;
	};
	GroupItem: any;
	ExtraData?: [any];
	DeliveryType: number;
	Tags?: [any];
	PackQuantity: number;
	LineNumber: number;
}

/* TypeScript export interface for the Totals object */
export interface Totals {
	CurrencyCode: string;
	TotalPrice: number;
	TotalDiscount: number;
	OrderDiscount: number;
	SubTotalDiscountInclTax: number;
	SubTotalDiscountExclTax: number;
	TotalTax: number;
	ShippingPrice: number;
	ShippingTax: number;
}

/* TypeScript export interface for the CheckoutAttribute object */
export interface CheckoutAttribute {
	AttributeExternalId?: string;
	AttributeName: string;
	SelectedValues: string[];
	Value: string;
	Values?: [
		{
			ExternalId: string;
			Value: string;
		}
	];
}

/* TypeScript export interface for the ProductAttribute object */
export interface ProductAttribute {}

/* TypeScript export interface for the SpecficationAttribute object */
export interface SpecificationAttribute {}

/* TypeScript export interface for the OrderNote object */
export interface OrderNote {}

/* TypeScript export interface for the ExtraData object */
export interface ExtraData {}

/* TypeScript export interface for the InfigoOrder object */
export interface InfigoOrder {
	OrderId: number;
	OrderGuid: string;
	StoreFrontId: number;
	StoreFrontName: string;
	IsTest: boolean;
	Amount: number;
	Taxes: number;
	TotalDiscount: number;
	OrderStatusId: number;
	OrderStatus: string;
	PaymentStatusId: number;
	PaymentStatus: string;
	ShippingStatusId: number;
	ShippingStatus: string;
	OrderDiscount: number;
	SubTotalDiscountInclTax: number;
	SubTotalDiscountExclTax: number;
	ShippingTax: number;
	ShippingPrice: number;
	ShippingMethod: string;
	ShippingMethodSystemName: string;
	ShippingMethodCode: string;
	ShippingMethodExternalId?: string;
	ActualShippingMethod?: string;
	PaymentMethod: string;
	PaymentTransactionId?: string;
	VatNumber: string;
	OrderWeight: number;
	Currency: string;
	PurchaseOrderNumber?: string;

	Customer: Customer;

	Impersonator: string | null;
	OrderNotes: OrderNote[];
	OrderDateUtc: string;
	DispatchBy: string;
	DeliverBy: string;
	IsAnyTimeDelivery: boolean;

	BillingAddress: Address;
	ShippingAddress: Address;
	Shipments: Shipment[] | null;
	OrderLines: OrderLine[];
	CheckoutAttributes: CheckoutAttribute[];
	Totals: Totals;

	SetItem: number;
	SetCount: number;
	ExtraData?: ExtraData[];
	InvoiceUrl: string | null;
	PackagingSlipUrl: string | null;
	IOSSNumber: string | null;
	OrderProcessingFee: number;
	OrderLineHandlingFee: number;
	ProductHandlingFee: number;

	StorefrontExternalID: string;
	StorefrontDescription: string;
	BudgetUsed: number;
	PaymentTransactions?: any;
}

export interface OrderProperty {
	key: string;
	value: string | number | null;
}

export interface OrderLine {
	Sku: string;
	Quantity: number;
}

export interface InfigoData {
	OrderId: number;
	OrderLines: OrderLine[];
}
