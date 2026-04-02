import type { ReactNode } from "react";

export interface TableColumn {
  key: string;
  header: string;
  scope?: "col" | "row";
}

export interface DataTableProps {
  caption: string;
  columns: TableColumn[];
  rows: Record<string, ReactNode>[];
}

export function DataTable({ caption, columns, rows }: DataTableProps) {
  return (
    <div className="table-scroll">
      <table className="data-table">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} scope={col.scope ?? "col"}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={col.key}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
