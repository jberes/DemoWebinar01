import { useCallback, useEffect, useState } from 'react';
import { EmployeeStringfAnonymousType9 } from '../models/NorthwindCloud/employee-stringf-anonymous-type9';
import { getEmployeeStringfAnonymousType9List, getOrderCustomerfAnonymousType8List, getOrderDetailsEmployeeList } from '../services/northwind-cloud';
import { OrderCustomerfAnonymousType8 } from '../models/NorthwindCloud/order-customerf-anonymous-type8';
import { OrderDetailsEmployee } from '../models/NorthwindCloud/order-details-employee';

export const useGetEmployeeStringfAnonymousType9List = () => {
  const [employeeStringfAnonymousType9, setEmployeeStringfAnonymousType9] = useState<EmployeeStringfAnonymousType9[]>([]);

  const requestEmployeeStringfAnonymousType9 = useCallback(() => {
    let ignore = false;
    getEmployeeStringfAnonymousType9List()
      .then((data) => {
        if (!ignore) {
          setEmployeeStringfAnonymousType9(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestEmployeeStringfAnonymousType9();
  }, [requestEmployeeStringfAnonymousType9]);

  return { requestNorthwindCloudEmployeeStringfAnonymousType9: requestEmployeeStringfAnonymousType9, northwindCloudEmployeeStringfAnonymousType9: employeeStringfAnonymousType9, setNorthwindCloudEmployeeStringfAnonymousType9: setEmployeeStringfAnonymousType9 };
}

export const useGetOrderCustomerfAnonymousType8List = (employeeId: any) => {
  const [orderCustomerfAnonymousType8, setOrderCustomerfAnonymousType8] = useState<OrderCustomerfAnonymousType8[]>([]);

  const requestOrderCustomerfAnonymousType8 = useCallback(() => {
    let ignore = false;
    getOrderCustomerfAnonymousType8List(employeeId)
      .then((data) => {
        if (!ignore) {
          setOrderCustomerfAnonymousType8(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [employeeId]);

  useEffect(() => {
    requestOrderCustomerfAnonymousType8();
  }, [employeeId, requestOrderCustomerfAnonymousType8]);

  return { requestNorthwindCloudOrderCustomerfAnonymousType8: requestOrderCustomerfAnonymousType8, northwindCloudOrderCustomerfAnonymousType8: orderCustomerfAnonymousType8, setNorthwindCloudOrderCustomerfAnonymousType8: setOrderCustomerfAnonymousType8 };
}

export const useGetOrderDetailsEmployeeList = (employeeId: any) => {
  const [orderDetailsEmployee, setOrderDetailsEmployee] = useState<OrderDetailsEmployee[]>([]);

  const requestOrderDetailsEmployee = useCallback(() => {
    let ignore = false;
    getOrderDetailsEmployeeList(employeeId)
      .then((data) => {
        if (!ignore) {
          setOrderDetailsEmployee(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [employeeId]);

  useEffect(() => {
    requestOrderDetailsEmployee();
  }, [employeeId, requestOrderDetailsEmployee]);

  return { requestNorthwindCloudOrderDetailsEmployee: requestOrderDetailsEmployee, northwindCloudOrderDetailsEmployee: orderDetailsEmployee, setNorthwindCloudOrderDetailsEmployee: setOrderDetailsEmployee };
}
