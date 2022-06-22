import React from "react";
import CreatedDateCell from "../../components/shared/Cells/CreatedDateCell";
import { DeleteCell } from "../../components/shared/Cells/DeleteCell";
import { EditCell } from "../../components/shared/Cells/EditCell";
import SeeMoreCell from "../../components/shared/Cells/SeeMoreCell";
import { ThumbnailCell } from "../../components/shared/Cells/ThumbnailCell";
import Container from "../../components/shared/Container/Container";
import LoadingBoundary from "../../components/shared/LoadingBoundary/LoadingBoundary";
import { NoDataBoundary } from "../../components/shared/NoDataBoundary/NoDataBoundary";
import { Table } from "../../components/shared/Table/Table";
import TitleWithHrLine from "../../components/shared/TitleWithHrLine/TitleWithHrLine";
import useLocations from "../../lib/hooks/queries/Location/useLocations";
import { ITableColumn } from "../../types";

type Props = {};

const Locations = (props: Props) => {
  const { data, isLoading } = useLocations();

  return (
    <Container>
      <TitleWithHrLine text="Locations" />
      <LoadingBoundary isLoading={isLoading}>
        <NoDataBoundary condition={!isLoading && Boolean(data?.total)}>
          <Table columns={locationTableColumns} data={data?.data || []} />
        </NoDataBoundary>
      </LoadingBoundary>
    </Container>
  );
};

export const locationTableColumns: ITableColumn[] = [
  {
    header: "Profile Pic",
    accessor: "thumbnail",
    Cell: ThumbnailCell,
  },
  {
    header: "Name",
    accessor: "name",
  },
  {
    header: "Description",
    accessor: "description",
    Cell: SeeMoreCell,
  },
  {
    header: "What can you do",
    accessor: "whatCanYouDo",
    Cell: SeeMoreCell,
  },
  {
    header: "Views",
    accessor: "numberOfVisits",
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

export default Locations;
