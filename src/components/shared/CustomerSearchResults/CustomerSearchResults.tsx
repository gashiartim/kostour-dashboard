import React from "react";
import { Table } from "../Table/Table";
import mockData from "./MockData.json";
import { tableColumns } from "./TableColumns";

interface Props {}

export const CustomerSearchResults = (props: Props) => {
  return (
    <div className="p-5 mt-[30px] bg-white">
      <Table
        columns={tableColumns}
        data={mockData}
        className="max-h-[44vh] lg:max-h-[60vh]"
      />
    </div>
  );
};
