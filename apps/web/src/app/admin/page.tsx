import { prisma } from "@growmodo/db"

export const dynamic = "force-dynamic"

async function getLeads() {
  if (!process.env.DATABASE_URL) {
    return { leads: [], error: "DATABASE_URL is not configured, so live leads cannot be loaded yet." }
  }

  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
      take: 25,
    })
    return { leads, error: null }
  } catch (error) {
    return {
      leads: [],
      error: error instanceof Error ? error.message : "Unable to load leads.",
    }
  }
}

export default async function AdminPage() {
  const { leads, error } = await getLeads()

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Admin</span>
          <h1 className="mt-2 text-4xl font-heading font-bold tracking-tight">Lead Dashboard</h1>
          <p className="mt-2 text-muted-foreground">Review book-call requests and talent applications captured by the site.</p>
        </div>

        {error && (
          <div className="mb-8 rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
            {error}
          </div>
        )}

        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-10 text-center text-muted-foreground">
                    No leads found yet.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id}>
                    <td className="px-6 py-4 font-medium">{lead.name ?? "Unknown"}</td>
                    <td className="px-6 py-4 text-muted-foreground">{lead.email}</td>
                    <td className="px-6 py-4">{lead.status}</td>
                    <td className="px-6 py-4 text-muted-foreground">{lead.createdAt.toLocaleDateString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
