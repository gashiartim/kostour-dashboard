import React from "react";
import { StatusCell } from "../Cells/StatusCell";
import { Cell } from "react-table";
import { CustomerNameCell } from "../Cells/CustomerNameCell";

export interface ICustomerTableColumn {
  header: string;
  accessor: string;
  Cell?: any;
  render?: any;
}

export const tableColumns: ICustomerTableColumn[] = [
  {
    header: "Customer Name",
    accessor: "customerName",
    Cell: CustomerNameCell,
  },
  {
    header: "Mobile Phone",
    accessor: "mobilePhone",
  },
  {
    header: "Email Address",
    accessor: "emailAddress",
  },
  {
    header: "Boom Account Status",
    accessor: "boomAccountStatus",
    Cell: StatusCell,
  },
  {
    header: "Registration Date",
    accessor: "registrationDate",
  },
];
