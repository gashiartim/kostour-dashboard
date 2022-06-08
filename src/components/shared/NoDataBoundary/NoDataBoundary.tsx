import { Icon } from "../Icon/Icon";
import cs from "classnames";

interface Props {
  condition?: boolean;
  children: React.ReactNode;
  className?: string;
  message?: string;
}
export const NoDataBoundary = (props: Props) => {
  if (!props.condition)
    return (
      <div
        className={cs(
          "flex items-center justify-center gap-5 text-base font-medium text-gray-500 italic p-2",
          props.className
        )}
      >
        {props.message || "No data available"}
      </div>
    );

  return <>{props.children}</>;
};
