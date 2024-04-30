import React, {
  HTMLAttributes,
  ReactNode,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react";
import { cn } from "../utils/utils";
import Pushpin2LineIcon from "remixicon-react/Pushpin2LineIcon";

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  children?: ReactNode;
  dense?:boolean;
}

interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  children?: ReactNode;
}

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children?: ReactNode;
}

interface TableHeadCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
  children?: ReactNode;
  icon?: JSX.Element;
  sticky?: boolean;
  left?: string;
  stickyIcon?: JSX.Element;
  shadow?:boolean;
}

interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  children?: ReactNode;
  icon?: JSX.Element;
  sticky?: boolean;
  left?: string;
  shadow?:boolean;
}

export const Table = ({ children, className,dense, ...props }: TableProps) => {
  return (
    <table
      {...props}
      className={cn(
      dense && "group",
        "bg-white text-left w-full whitespace-nowrap relative border",
        className
      )}
    >
      {children}
    </table>
  );
};

export const TableHead = ({
  children,
  className,
  ...props
}: TableHeadProps) => {
  return (
    <thead
      {...props}
      className={cn("bg-gray-50 border border-gray-200", className)}
    >
      {children}
    </thead>
  );
};

export const TableBody = ({
  children,
  className,
  ...props
}: TableHeadProps) => {
  return (
    <tbody {...props} className={cn(className)}>
      {children}
    </tbody>
  );
};

export const TableRow = ({ children, className, ...props }: TableRowProps) => {
  return (
    <tr {...props} className={cn("border border-gray-200",className)}>
      {children}
    </tr>
  );
};

export const TableHeadCell = ({
  children,
  className,
  icon,
  sticky,
  stickyIcon,
  shadow,
  left,
  ...props
}: TableHeadCellProps) => {
  return (
    <th
      {...props}
      className={cn(
        "px-6 py-3 text-left group-has-[th]:py-1",
        sticky && `sticky bg-gray-50`,
        sticky && shadow && "shadow-table",
        left,
        className
      )}
      style={{
        left: left,
      }}
    >
      <div className="flex items-center">
        <span>
          {sticky && <Pushpin2LineIcon className="w-3.5 h-3.5" />}
        </span>
        <span className="font-medium text-xs">{children}</span>
        <span
          className={cn(
            icon &&
              "hover:bg-gray-100 w-5 h-5 flex items-center justify-center p-1 rounded focus:bg-gray-300 active:bg-gray-300"
          )}
        >
          {icon}
        </span>
      </div>
    </th>
  );
};

export const TableDataCell = ({
  children,
  className,
  icon,
  sticky,
  shadow,
  left,
  ...props
}: TableCellProps) => {
  return (
    <td
      {...props}
      className={cn(
        "px-6 py-4 text-sm font-medium space-x-2 group-has-[td]:py-1",
        sticky &&`sticky bg-white`,
        sticky && shadow && "shadow-table",
        left,
        className
      )}
      style={{
        left: left,
      }}
    >
      <span className="font-medium text-sm">{children}</span>
      <span
        className={cn(
          icon
            ? "hover:bg-gray-100 w-5 h-5 flex items-center justify-center p-1 rounded focus:bg-gray-300 active:bg-gray-300"
            : "hidden"
        )}
      >
        {icon}
      </span>
    </td>
  );
};
