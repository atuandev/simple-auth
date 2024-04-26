import { RoleGate } from '@/components/auth/role-gate'
import FormSuccess from '@/components/form-success'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { UserRole } from '@prisma/client'
import UserTable from '../_components/user-table'

export default function DashboardCard() {
  return (
    <Card className='max-w-[1200px] shadow-md overflow-x-scroll mx-4'>
      <CardHeader>
        <p className='text-xl font-semibold text-center'>Dashboard</p>
      </CardHeader>
      <CardContent className='space-y-4'>
        <RoleGate allowedRoles={UserRole.ADMIN}>
          <FormSuccess message='You are allowed to see this content!' />
          <UserTable />
        </RoleGate>
      </CardContent>
    </Card>
  )
}
