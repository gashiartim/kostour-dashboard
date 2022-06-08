import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import CategoriesTable from "../../components/Category/CategoriesTable";
import Container from "../../components/shared/Container/Container";
import { ErrorMessage } from "../../components/shared/ErrorMessage/ErrorMessage";
import TitleWithHrLine from "../../components/shared/TitleWithHrLine/TitleWithHrLine";
import { useCategories } from "../../lib/hooks/queries/Category/useCategories";

type Props = {};

const Categories = (props: Props) => {
  const { data, isLoading } = useCategories();

  return (
    <Container>
      <TitleWithHrLine text="Categories List" />
      <ErrorBoundary FallbackComponent={ErrorMessage}>
        <CategoriesTable className="mt-5" data={data} isLoading={isLoading} />
      </ErrorBoundary>
    </Container>
  );
};

export default Categories;
