import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";
import EditUserForm from "../../components/forms/User/EditUserForm";
import Container from "../../components/shared/Container/Container";
import { ErrorMessage } from "../../components/shared/ErrorMessage/ErrorMessage";
import LoadingBoundary from "../../components/shared/LoadingBoundary/LoadingBoundary";
import useUser from "../../lib/hooks/queries/User/useUser";

type Props = {};

const EditUser = (props: Props) => {
  const { userId } = useParams();
  const { data, isLoading, error } = useUser(userId as string);

  return (
    <Container>
      <LoadingBoundary isLoading={isLoading}>
        <EditUserForm data={data} />
      </LoadingBoundary>
    </Container>
  );
};

export default EditUser;
