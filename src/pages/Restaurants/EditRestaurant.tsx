import React from "react";
import { useParams } from "react-router-dom";
import EditRestaurantForm from "../../components/forms/Restaurant/EditRestaurantForm";
import Container from "../../components/shared/Container/Container";
import LoadingBoundary from "../../components/shared/LoadingBoundary/LoadingBoundary";
import TitleWithHrLine from "../../components/shared/TitleWithHrLine/TitleWithHrLine";
import useRestaurant from "../../lib/hooks/queries/Restaurant/useRestaurant";

type Props = {};

const EditRestaurant = (props: Props) => {
  const { restaurantId } = useParams();
  const { data, isLoading } = useRestaurant(restaurantId as string);

  return (
    <Container>
      <LoadingBoundary isLoading={isLoading}>
        <TitleWithHrLine text="Edit Restaurant" />
        <EditRestaurantForm data={data} />
      </LoadingBoundary>
    </Container>
  );
};

export default EditRestaurant;
