import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";
import SubCategories from "../../components/Category/SubCategories";
import EditCategoryForm from "../../components/forms/Category/EditCategoryForm";
import Container from "../../components/shared/Container/Container";
import { ErrorMessage } from "../../components/shared/ErrorMessage/ErrorMessage";
import LoadingBoundary from "../../components/shared/LoadingBoundary/LoadingBoundary";
import TitleWithHrLine from "../../components/shared/TitleWithHrLine/TitleWithHrLine";
import { useCategory } from "../../lib/hooks/queries/Category/useCategory";

type Props = {};

const EditCategory = (props: Props) => {
  const { categoryId } = useParams();

  const { data, isLoading } = useCategory(categoryId as string, {
    enabled: Boolean(categoryId as string),
  });

  return (
    <>
      <Container>
        <TitleWithHrLine text={`Edit Category`} />
        <LoadingBoundary isLoading={isLoading}>
          <EditCategoryForm data={data} />
        </LoadingBoundary>
      </Container>
      {/* 
      {data && data.level <= 1 && (
        <Container className="mt-7">
          <TitleWithHrLine text="Sub-Categories" />
          <SubCategories
            subCategories={data?.sub_categories}
            isLoading={isLoading}
          />
        </Container>
      )} */}
    </>
  );
};

export default EditCategory;
