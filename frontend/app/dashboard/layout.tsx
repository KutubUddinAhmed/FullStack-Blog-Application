import Dashboard from "@/components/Dashboard"
import Context from "@/context/context"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <Context>
        <section>
            This is Dashboard
            {children}
            </section>
            </Context>
            )
}