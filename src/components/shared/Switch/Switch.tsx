import { Switch } from "@headlessui/react";

type Props = {
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  enabled: boolean;
  className?: string;
  name?: string;
};

const SwitchComponent = ({ className, enabled, setEnabled, name }: Props) => {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      name={name}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex items-center h-6 rounded-full w-11 ${className}`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
  );
};

export default SwitchComponent;
