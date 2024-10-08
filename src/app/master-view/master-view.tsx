import { IgrActionStrip, IgrActionStripModule, IgrColumn, IgrGrid, IgrGridEditingActions, IgrGridModule, IgrGridPinningActions, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarExporter, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrGridToolbarTitle } from 'igniteui-react-grids';
import { IgrAvatar, IgrAvatarModule, IgrList, IgrListItem, IgrListModule } from 'igniteui-react';
import { IgrCategoryChart, IgrCategoryChartModule } from 'igniteui-react-charts';
import { useState } from 'react';
import { useGetEmployeeStringfAnonymousType9List, useGetOrderCustomerfAnonymousType8List, useGetOrderDetailsEmployeeList } from '../hooks/northwind-cloud-hooks';
import 'igniteui-react-grids/grids';
import styles from './master-view.module.css';
import createClassTransformer from '../style-utils';

IgrActionStripModule.register();
IgrAvatarModule.register();
IgrCategoryChartModule.register();
IgrGridModule.register();
IgrListModule.register();

export default function MasterView() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [selectedEmployee, setSelectedEmployee] = useState<number | undefined>(1);
  const [columnVisible, setColumnVisible] = useState<boolean | undefined>(false);
  const [columnVisible1, setColumnVisible1] = useState<boolean | undefined>(false);
  const [columnVisible2, setColumnVisible2] = useState<boolean | undefined>(false);
  const { northwindCloudEmployeeStringfAnonymousType9 } = useGetEmployeeStringfAnonymousType9List();
  const { northwindCloudOrderCustomerfAnonymousType8 } = useGetOrderCustomerfAnonymousType8List(selectedEmployee as any);
  const { northwindCloudOrderDetailsEmployee } = useGetOrderDetailsEmployeeList(selectedEmployee as any);

  return (
    <>
      <div className={classes("row-layout master-view-container")}>
        <div className={classes("column-layout group")}>
          <IgrList className={classes("list")}>
            {northwindCloudEmployeeStringfAnonymousType9?.map((item) => (
              <div style={{display: 'contents'}} onClick={() => setSelectedEmployee(item.employee.employeeID)} key={uuid()}>
                <IgrListItem>
                  <div slot="start" key={uuid()}>
                    <IgrAvatar src={item.employee?.photoPath} shape="circle" className={classes("avatar")} key={uuid()}></IgrAvatar>
                  </div>
                  <div slot="title" key={uuid()}>{item.fullName}</div>
                  <div slot="subtitle" key={uuid()}>{item.employee?.title}</div>
                </IgrListItem>
              </div>
            ))}
          </IgrList>
        </div>
        <div className={classes("column-layout group_1")}>
          <div className={classes("column-layout group_2")}>
            <IgrGrid data={northwindCloudOrderCustomerfAnonymousType8} rowEditable="true" moving="true" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
              <IgrGridToolbar>
                <IgrGridToolbarActions>
                  <IgrGridToolbarPinning></IgrGridToolbarPinning>
                  <IgrGridToolbarHiding></IgrGridToolbarHiding>
                  <IgrGridToolbarExporter></IgrGridToolbarExporter>
                </IgrGridToolbarActions>
                <IgrGridToolbarTitle>
                  <span key={uuid()}>React Demo</span>
                </IgrGridToolbarTitle>
              </IgrGridToolbar>
              <IgrColumn field="order.orderID" dataType="number" header="order orderID" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              <IgrColumn field="order.customerID" dataType="string" header="order customerID" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              <IgrColumn field="order.employeeID" dataType="number" header="order employeeID" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              <IgrColumn field="order.orderDate" dataType="date" header="order orderDate" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              <IgrColumn field="order.requiredDate" dataType="date" header="order requiredDate" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              <IgrColumn field="order.shippedDate" dataType="date" header="order shippedDate" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              <IgrColumn field="order.shipVia" dataType="number" header="order shipVia" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              <IgrColumn field="order.freight" dataType="number" header="order freight" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              <IgrColumn field="order.shipName" dataType="string" header="order shipName" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              <IgrColumn field="order.shipAddress" dataType="string" header="order shipAddress" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              <IgrColumn field="order.shipCity" dataType="string" header="order shipCity" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              <IgrColumn field="order.shipRegion" dataType="string" header="order shipRegion" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              <IgrColumn field="order.shipPostalCode" dataType="string" header="order shipPostalCode" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              <IgrColumn field="order.shipCountry" dataType="string" header="order shipCountry" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              <IgrColumn field="customer.customerID" dataType="string" header="Customer ID" pinned="true" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              <IgrColumn field="customer.companyName" dataType="string" header="customer companyName" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              {columnVisible && (
                <IgrColumn field="customer.contactName" dataType="string" header="customer contactName" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              )}
              {columnVisible1 && (
                <IgrColumn field="customer.contactTitle" dataType="string" header="customer contactTitle" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              )}
              {columnVisible2 && (
                <IgrColumn field="customer.address" dataType="string" header="customer address" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              )}
              <IgrColumn field="customer.city" dataType="string" header="customer city" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              <IgrColumn field="customer.region" dataType="string" header="customer region" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              <IgrColumn field="customer.postalCode" dataType="string" header="customer postalCode" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              <IgrColumn field="customer.country" dataType="string" header="customer country" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              <IgrColumn field="customer.phone" dataType="string" header="customer phone" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              <IgrColumn field="customer.fax" dataType="string" header="customer fax" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
              <IgrActionStrip>
                <IgrGridPinningActions></IgrGridPinningActions>
                <IgrGridEditingActions addRow="true"></IgrGridEditingActions>
              </IgrActionStrip>
            </IgrGrid>
          </div>
          <div className={classes("column-layout group_2")}>
            <div className={classes("group_3")}>
              <IgrCategoryChart dataSource={northwindCloudOrderDetailsEmployee} chartType="Column" chartTitle="Orders by Customer (by this Salesperson)" initialGroups="customerID" initialSummaries="COUNT(orderID)" groupSorts="customerID asc" yAxisInterval="1" yAxisMinimumValue="0" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
