import Dashboard from "@/components/Dashboard"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section><Dashboard /></section>
}