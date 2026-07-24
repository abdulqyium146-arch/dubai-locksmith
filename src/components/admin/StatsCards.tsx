import { CalendarDays, Clock, CheckCircle2, TrendingUp } from 'lucide-react'

interface Props {
  total: number
  pending: number
  today: number
  completed: number
}

export function StatsCards({ total, pending, today, completed }: Props) {
  const cards = [
    {
      label: 'Total Bookings',
      value: total,
      icon: CalendarDays,
      color: 'bg-blue-50 text-blue-600',
      ring: 'ring-blue-100',
    },
    {
      label: 'Pending Action',
      value: pending,
      icon: Clock,
      color: pending > 0 ? 'bg-amber-50 text-amber-600' : 'bg-gray-50 text-gray-400',
      ring: pending > 0 ? 'ring-amber-100' : 'ring-gray-100',
      highlight: pending > 0,
    },
    {
      label: "Today's Bookings",
      value: today,
      icon: TrendingUp,
      color: 'bg-purple-50 text-purple-600',
      ring: 'ring-purple-100',
    },
    {
      label: 'Completed',
      value: completed,
      icon: CheckCircle2,
      color: 'bg-green-50 text-green-600',
      ring: 'ring-green-100',
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map(({ label, value, icon: Icon, color, ring, highlight }) => (
        <div
          key={label}
          className={`rounded-2xl border bg-white p-6 shadow-sm ${highlight ? 'border-amber-200' : 'border-gray-100'}`}
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-gray-500">{label}</p>
            <div className={`flex h-9 w-9 items-center justify-center rounded-xl ring-4 ${color} ${ring}`}>
              <Icon className="h-4 w-4" />
            </div>
          </div>
          <p className={`font-heading text-3xl font-bold ${highlight ? 'text-amber-600' : 'text-gray-900'}`}>
            {value}
          </p>
          {highlight && (
            <p className="mt-1 text-xs font-medium text-amber-600">Needs attention</p>
          )}
        </div>
      ))}
    </div>
  )
}
