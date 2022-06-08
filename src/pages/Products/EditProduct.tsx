import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";
import Container from "../../components/shared/Container/Container";
import { ErrorMessage } from "../../components/shared/ErrorMessage/ErrorMessage";
import LoadingBoundary from "../../components/shared/LoadingBoundary/LoadingBoundary";
import TitleWithHrLine from "../../components/shared/TitleWithHrLine/TitleWithHrLine";
// import { useProduct } from "../../lib/hooks/queries/Product/useProduct";

type Props = {};

const EditProduct = (props: Props) => {
  const { productId } = useParams();

  // const { data, isLoading } = useProduct(productId as string, {
  //   enabled: Boolean(productId as string),
  // });
  return (
    <Container>
      <TitleWithHrLine text="Edit Business" />
      <LoadingBoundary isLoading={true}>
        <ErrorBoundary FallbackComponent={ErrorMessage}>
          {/* <EditProductForm data={data} /> */}
        </ErrorBoundary>
      </LoadingBoundary>
    </Container>
  );
};

export default EditProduct;
