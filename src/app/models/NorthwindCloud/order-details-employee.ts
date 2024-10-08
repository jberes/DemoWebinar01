export interface OrderDetailsEmployee {
  employeeID: number;
  lastName: string;
  fullName: string;
  orderID: number;
  orderDate: Date;
  requiredDate: Date;
  shippedDate: Date;
  shipVia: number;
  freight: number;
  shipName: string;
  shipAddress: string;
  shipCity: string;
  shipRegion: string;
  shipPostalCode: string;
  shipCountry: string;
  customerID: string;
  companyName: string;
  contactName: string;
  contactTitle: string;
  customerAddress: string;
  customerCity: string;
  customerRegion: string;
  customerPostalCode: string;
  customerCountry: string;
  customerPhone: string;
  customerFax: string;
}
