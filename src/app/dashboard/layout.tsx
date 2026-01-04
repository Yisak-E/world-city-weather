

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="bg-amber-100/80 lg:h-screen p-10">
            {children}
        </main>
    )
}