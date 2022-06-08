import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import Container from "../../components/shared/Container/Container";
import { ErrorMessage } from "../../components/shared/ErrorMessage/ErrorMessage";
import TitleWithHrLine from "../../components/shared/TitleWithHrLine/TitleWithHrLine";

type Props = {};

const CreateProduct = (props: Props) => {
  return (
    <Container>
      <TitleWithHrLine text="Create new product" />

      <ErrorBoundary FallbackComponent={ErrorMessage}>
        {/* <CreateProductForm /> */}
      </ErrorBoundary>
    </Container>
  );
};

export default CreateProduct;
