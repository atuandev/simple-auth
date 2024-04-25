import { DataTable } from '@/components/ui/data-table'
import { getAllUsers } from '@/data/user'
import { UserRole } from '@prisma/client'
import { ColumnDef } from '@tanstack/react-table'

type UserTable = {
  id: string
  name: string
  email: string
  password: string
  role: UserRole
}

const columns: ColumnDef<UserTable>[] = [
  {
    accessorKey: 'id',
    header: 'Id'
  },
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'password',
    header: 'Password'
  },
  {
    accessorKey: 'role',
    header: 'Role'
  }
]

export default async function UserTable() {
  const users = (await getAllUsers()) as UserTable[]

  return (
    <>
      <DataTable columns={columns} data={users} />
    </>
  )
}
