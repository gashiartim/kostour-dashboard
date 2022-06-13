import React from "react";
import CreateRestaurantForm from "../../components/forms/Restaurant/CreateRestaurantForm";
import Container from "../../components/shared/Container/Container";
import TitleWithHrLine from "../../components/shared/TitleWithHrLine/TitleWithHrLine";

type Props = {};

const CreateRestaurant = (props: Props) => {
  return (
    <Container>
      <TitleWithHrLine text="Create a new restaurant" />
      <CreateRestaurantForm />
    </Container>
  );
};

export default CreateRestaurant;
