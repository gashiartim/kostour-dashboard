import React from "react";
import { useParams } from "react-router-dom";
import SubCategories from "../../components/Category/SubCategories";
import EditCategoryForm from "../../components/forms/Category/EditCategoryForm";
import Container from "../../components/shared/Container/Container";
import LoadingBoundary from "../../components/shared/LoadingBoundary/LoadingBoundary";
import TitleWithHrLine from "../../components/shared/TitleWithHrLine/TitleWithHrLine";
import { useCategory } from "../../lib/hooks/queries/Category/useCategory";

type Props = {};

const EditSubCategory = (props: Props) => {
  const { subCategoryId, subSubCategoryId } = useParams();

  const { data, isLoading } = useCategory(
    (subSubCategoryId as string) || (subCategoryId as string),
    {
      enabled: Boolean(
        (subSubCategoryId as string) || (subCategoryId as string)
      ),
    }
  );

  return (
    <>
      <Container>
        <TitleWithHrLine
          text={`Edit level ${Number(data?.level) + 1} category`}
        />
        <LoadingBoundary isLoading={isLoading}>
          <EditCategoryForm data={data} />
        </LoadingBoundary>
      </Container>

      {data && data.level <= 1 && (
        <Container className="mt-7">
          <TitleWithHrLine text="Sub-Categories" />
          <SubCategories
            subCategories={data?.sub_categories}
            isLoading={isLoading}
          />
        </Container>
      )}
    </>
  );
};

export default EditSubCategory;
