import { Dismiss} from 'flowbite'
import type { DismissOptions, DismissInterface } from "flowbite";
import type { InstanceOptions } from 'flowbite';

const infoClass = "p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
const dangerClass = "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
const successClass = "p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
const warningClass = "p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-400"
const primaryClass = "p-4 mb-4 text-sm text-indigo-800 rounded-lg bg-indigo-50 dark:bg-gray-800 dark:text-indigo-400"
const darkClass = "p-4 mb-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300"

interface AlertProps {
  children: any;
  title: string;
  type?: "info" | "danger" | "success" | "warning" | "primary" | "dark";
}



export default function Alert({ children, title, type = "info" }: AlertProps) {
// export default function Alert() {
  const getClass = () => {
    switch (type) {
      case "info":
        return infoClass;
      case "danger":
        return dangerClass;
      case "success":
        return successClass;
      case "warning":
        return warningClass;
      case "primary":
        return primaryClass;
      case "dark":
        return darkClass;
      default:
        return infoClass;
    }
  }

  return (
    <div
      class={getClass()}
      role="alert"
    >
      <span class="font-medium">{title}</span>
      {children}
    </div>
  );
}
