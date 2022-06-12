import React from "react";
import CreateUserForm from "../../components/forms/User/CreateUserForm";
import Container from "../../components/shared/Container/Container";
import TitleWithHrLine from "../../components/shared/TitleWithHrLine/TitleWithHrLine";

type Props = {};

const CreateUser = (props: Props) => {
  return (
    <Container>
      <TitleWithHrLine text="Create a new user" />
      <CreateUserForm />
    </Container>
  );
};

export default CreateUser;
