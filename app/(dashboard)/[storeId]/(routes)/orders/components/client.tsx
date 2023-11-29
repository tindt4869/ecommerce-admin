"use client";

import React from "react";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface OrdersClientProps {
  data: OrderColumn[];
}

export const OrdersClient = ({ data }: OrdersClientProps) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Orders (${data.length})`}
          description="Manage orders for your store"
        />
      </div>
      <Separator className="my-4" />
      <DataTable columns={columns} data={data} searchKey="label" />
    </>
  );
};
