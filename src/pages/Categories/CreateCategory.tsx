import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import CreateCategoryForm from "../../components/forms/Category/CreateCategoryForm";
import Container from "../../components/shared/Container/Container";
import { ErrorMessage } from "../../components/shared/ErrorMessage/ErrorMessage";
import TitleWithHrLine from "../../components/shared/TitleWithHrLine/TitleWithHrLine";

type Props = {};

const CreateCategory = (props: Props) => {
  return (
    <Container>
      <TitleWithHrLine text="Create new category" />

      <ErrorBoundary FallbackComponent={ErrorMessage}>
        <CreateCategoryForm />
      </ErrorBoundary>
    </Container>
  );
};

export default CreateCategory;
