import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Ticket as TicketType } from '@/types/ticket';
import { Ticket, CheckCircle, Clock } from 'lucide-react';

const TICKETS_KEY = 'ticketapp_tickets';

export const Dashboard = () => {
  const [tickets, setTickets] = useState<TicketType[]>([]);

  useEffect(() => {
    const storedTickets = localStorage.getItem(TICKETS_KEY);
    if (storedTickets) {
      setTickets(JSON.parse(storedTickets));
    }
  }, []);

  const totalTickets = tickets.length;
  const openTickets = tickets.filter(t => t.status === 'open' || t.status === 'in_progress').length;
  const closedTickets = tickets.filter(t => t.status === 'closed').length;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Decorative Circle */}
      <div className="fixed top-40 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Overview of your ticket management</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Tickets</CardTitle>
                <div className="rounded-lg bg-primary/10 p-2">
                  <Ticket className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{totalTickets}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  All tickets in the system
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
                <div className="rounded-lg bg-warning/10 p-2">
                  <Clock className="h-4 w-4 text-warning" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{openTickets}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Awaiting resolution
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Resolved Tickets</CardTitle>
                <div className="rounded-lg bg-success/10 p-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{closedTickets}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Successfully closed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
