import React from "react";
import CreatedDateCell from "../../components/shared/Cells/CreatedDateCell";
import { DeleteCell } from "../../components/shared/Cells/DeleteCell";
import { EditCell } from "../../components/shared/Cells/EditCell";
import { LocationNameCell } from "../../components/shared/Cells/LocationNameCell";
import SeeMoreCell from "../../components/shared/Cells/SeeMoreCell";
import { ThumbnailCell } from "../../components/shared/Cells/ThumbnailCell";
import Container from "../../components/shared/Container/Container";
import LoadingBoundary from "../../components/shared/LoadingBoundary/LoadingBoundary";
import { NoDataBoundary } from "../../components/shared/NoDataBoundary/NoDataBoundary";
import { Table } from "../../components/shared/Table/Table";
import TitleWithHrLine from "../../components/shared/TitleWithHrLine/TitleWithHrLine";
import useRestaurants from "../../lib/hooks/queries/Restaurant/useRestaurants";
import { ITableColumn } from "../../types";

type Props = {};

const Restaurants = (props: Props) => {
  const { data, isLoading } = useRestaurants();

  return (
    <Container>
      <TitleWithHrLine text="Restaurants" />
      <LoadingBoundary isLoading={isLoading} message="Loading user data...">
        <NoDataBoundary condition={!isLoading && Boolean(data?.total)}>
          <Table columns={restaurantTableColumns} data={data?.data || []} />
        </NoDataBoundary>
      </LoadingBoundary>
    </Container>
  );
};

export const restaurantTableColumns: ITableColumn[] = [
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
    header: "Open Hours",
    accessor: "open_hours",
  },
  {
    header: "Location",
    accessor: "location",
    Cell: LocationNameCell,
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

export default Restaurants;
