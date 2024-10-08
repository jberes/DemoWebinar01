import { EmployeeStringfAnonymousType9 } from '../models/NorthwindCloud/employee-stringf-anonymous-type9';
import { FetchApi } from './fetch-api';
import { OrderCustomerfAnonymousType8 } from '../models/NorthwindCloud/order-customerf-anonymous-type8';
import { OrderDetailsEmployee } from '../models/NorthwindCloud/order-details-employee';

const API_ENDPOINT = 'https://northwindcloud.azurewebsites.net';

export async function getEmployeeStringfAnonymousType9List(): Promise<EmployeeStringfAnonymousType9[]> {
  return await FetchApi.fetchApiResponse<EmployeeStringfAnonymousType9[]>(`${API_ENDPOINT}/api/employees`, []);
}

export async function getOrderCustomerfAnonymousType8List(employeeId: number = 1): Promise<OrderCustomerfAnonymousType8[]> {
  if (!employeeId) {
    return Promise.resolve([]);
  }
  return await FetchApi.fetchApiResponse<OrderCustomerfAnonymousType8[]>(`${API_ENDPOINT}/api/orders_by_employee/${employeeId}`, []);
}

export async function getOrderDetailsEmployeeList(employeeId: number = 1): Promise<OrderDetailsEmployee[]> {
  if (!employeeId) {
    return Promise.resolve([]);
  }
  return await FetchApi.fetchApiResponse<OrderDetailsEmployee[]>(`${API_ENDPOINT}/api/employee_orders/${employeeId}`, []);
}
