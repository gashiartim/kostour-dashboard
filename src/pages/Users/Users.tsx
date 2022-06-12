import React from "react";
import CreatedDateCell from "../../components/shared/Cells/CreatedDateCell";
import { DeleteCell } from "../../components/shared/Cells/DeleteCell";
import { EditCell } from "../../components/shared/Cells/EditCell";
import Container from "../../components/shared/Container/Container";
import LoadingBoundary from "../../components/shared/LoadingBoundary/LoadingBoundary";
import { NoDataBoundary } from "../../components/shared/NoDataBoundary/NoDataBoundary";
import { Table } from "../../components/shared/Table/Table";
import TitleWithHrLine from "../../components/shared/TitleWithHrLine/TitleWithHrLine";
import useUsers from "../../lib/hooks/queries/User/useUsers";
import { ITableColumn } from "../../types";

type Props = {};

const Users = (props: Props) => {
  const { data, isLoading, error } = useUsers();
  console.log(data);

  return (
    <Container>
      <TitleWithHrLine text="Users" />
      <LoadingBoundary isLoading={isLoading} message="Loading user data...">
        <NoDataBoundary condition={!isLoading && Boolean(data?.total)}>
          <Table columns={userTableColumns} data={data?.data || []} />
        </NoDataBoundary>
      </LoadingBoundary>
    </Container>
  );
};

export const userTableColumns: ITableColumn[] = [
  {
    header: "First Name",
    accessor: "first_name",
  },
  {
    header: "Last Name",
    accessor: "last_name",
  },
  {
    header: "Email Address",
    accessor: "email",
  },
  {
    header: "Registration Date",
    accessor: "created_at",
    Cell: CreatedDateCell,
  },
  {
    header: "Edit",
    accessor: "edit",
    Cell: EditCell,
  },
  {
    header: "Delete",
    accessor: "delete",
    Cell: DeleteCell,
  },
];

export default Users;
