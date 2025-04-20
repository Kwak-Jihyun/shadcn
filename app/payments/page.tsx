import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "489e1486",
        amount: 150,
        status: "processing",
        email: "j@example.com",
      },
      {
        id: "3a4b5c6d",
        amount: 200,
        status: "success",
        email: "k@example.com",
      },
      {
        id: "8e9f0a1b",
        amount: 75,
        status: "failed",
        email: "l@example.com",
      },
      {
        id: "2c3d4e5f",
        amount: 300,
        status: "pending",
        email: "o@example.com",
      },
      {
        id: "6g7h8i9j",
        amount: 120,
        status: "success",
        email: "p@example.com",
      },
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      {
          id: "728ed52f",
          amount: 100,
          status: "pending",
          email: "m@example.com",
        },
        {
          id: "489e1486",
          amount: 150,
          status: "processing",
          email: "j@example.com",
        },
        {
          id: "3a4b5c6d",
          amount: 200,
          status: "success",
          email: "k@example.com",
        },
        {
          id: "8e9f0a1b",
          amount: 75,
          status: "failed",
          email: "l@example.com",
        },
        {
          id: "2c3d4e5f",
          amount: 300,
          status: "pending",
          email: "o@example.com",
        },
        {
          id: "6g7h8i9j",
          amount: 120,
          status: "success",
          email: "p@example.com",
        },      
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto px-6 py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
