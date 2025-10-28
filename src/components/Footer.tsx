import { Link } from 'react-router-dom';
import { Ticket } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/50 mt-auto">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="rounded-lg bg-primary p-2">
                <Ticket className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">TicketFlow</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Streamline your ticket management with our intuitive platform.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">Features</Link></li>
              <li><Link to="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link></li>
              <li><Link to="/tickets" className="hover:text-foreground transition-colors">Tickets</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 TicketFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
