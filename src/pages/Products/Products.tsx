import React from "react";
import { ErrorBoundary } from "react-error-boundary";
// import ProductsTable from "../../components/Product/ProductsTable";
import Container from "../../components/shared/Container/Container";
import { ErrorMessage } from "../../components/shared/ErrorMessage/ErrorMessage";
import TitleWithHrLine from "../../components/shared/TitleWithHrLine/TitleWithHrLine";

type Props = {};

const Products = (props: Props) => {
  return (
    <Container>
      <TitleWithHrLine text="Products List" />
      <ErrorBoundary FallbackComponent={ErrorMessage}>
        {/* <ProductsTable /> */}
      </ErrorBoundary>
    </Container>
  );
};

export default Products;
