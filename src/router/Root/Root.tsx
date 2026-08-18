import { Outlet, useParams } from 'react-router'

export function Root() {
  const params = useParams()
  const id = params.id

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="font-heading text-6xl font-bold tracking-tight text-foreground uppercase">
        {id ? `${id}` : 'Доступные маршруты'}
      </h1>
      <Outlet />
    </div>
  )
}
