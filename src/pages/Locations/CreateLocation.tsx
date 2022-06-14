import React from "react";
import CreateLocationForm from "../../components/forms/Location/CreateLocationForm";
import Container from "../../components/shared/Container/Container";
import TitleWithHrLine from "../../components/shared/TitleWithHrLine/TitleWithHrLine";

type Props = {};

const CreateLocation = (props: Props) => {
  return (
    <Container>
      <TitleWithHrLine text="Create a new location" />
      <CreateLocationForm />
    </Container>
  );
};

export default CreateLocation;
