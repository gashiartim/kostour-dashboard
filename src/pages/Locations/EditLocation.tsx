import React from "react";
import { useParams } from "react-router-dom";
import EditLocationForm from "../../components/forms/Location/EditLocationForm";
import Container from "../../components/shared/Container/Container";
import LoadingBoundary from "../../components/shared/LoadingBoundary/LoadingBoundary";
import TitleWithHrLine from "../../components/shared/TitleWithHrLine/TitleWithHrLine";
import useLocation from "../../lib/hooks/queries/Location/useLocation";

type Props = {};

const EditLocation = (props: Props) => {
  const { locationId } = useParams();
  const { data, isLoading } = useLocation(locationId as string);

  return (
    <Container>
      <LoadingBoundary isLoading={isLoading}>
        <TitleWithHrLine text="Edit Location" />
        <EditLocationForm data={data} />
      </LoadingBoundary>
    </Container>
  );
};

export default EditLocation;
