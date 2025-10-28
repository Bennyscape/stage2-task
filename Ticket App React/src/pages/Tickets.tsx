import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Ticket, TicketStatus } from '@/types/ticket';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const TICKETS_KEY = 'ticketapp_tickets';

export const Tickets = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [deleteTicketId, setDeleteTicketId] = useState<number | null>(null);
  const [currentTicket, setCurrentTicket] = useState<Ticket | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'open' as TicketStatus,
  });
  
  const [errors, setErrors] = useState<{ title?: string; status?: string; description?: string }>({});

  useEffect(() => {
    loadTickets();
  }, []);

  const loadTickets = () => {
    const storedTickets = localStorage.getItem(TICKETS_KEY);
    if (storedTickets) {
      setTickets(JSON.parse(storedTickets));
    }
  };

  const saveTickets = (updatedTickets: Ticket[]) => {
    localStorage.setItem(TICKETS_KEY, JSON.stringify(updatedTickets));
    setTickets(updatedTickets);
  };

  const validateForm = () => {
    const newErrors: { title?: string; status?: string; description?: string } = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.status) {
      newErrors.status = 'Status is required';
    }
    
    if (formData.description && formData.description.length > 200) {
      newErrors.description = 'Description must be under 200 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreate = () => {
    if (!validateForm()) return;

    const newTicket: Ticket = {
      id: Date.now(),
      title: formData.title.trim(),
      description: formData.description.trim() || undefined,
      status: formData.status,
      createdAt: new Date().toISOString(),
    };

    const updatedTickets = [...tickets, newTicket];
    saveTickets(updatedTickets);
    toast.success('Ticket created successfully.');
    resetForm();
    setIsCreateOpen(false);
  };

  const handleEdit = () => {
    if (!validateForm() || !currentTicket) return;

    const updatedTickets = tickets.map(ticket =>
      ticket.id === currentTicket.id
        ? {
            ...ticket,
            title: formData.title.trim(),
            description: formData.description.trim() || undefined,
            status: formData.status,
          }
        : ticket
    );

    saveTickets(updatedTickets);
    toast.success('Ticket updated successfully.');
    resetForm();
    setIsEditOpen(false);
    setCurrentTicket(null);
  };

  const handleDelete = () => {
    if (deleteTicketId === null) return;

    const updatedTickets = tickets.filter(ticket => ticket.id !== deleteTicketId);
    saveTickets(updatedTickets);
    toast.success('Ticket deleted successfully.');
    setDeleteTicketId(null);
  };

  const openEditDialog = (ticket: Ticket) => {
    setCurrentTicket(ticket);
    setFormData({
      title: ticket.title,
      description: ticket.description || '',
      status: ticket.status,
    });
    setIsEditOpen(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      status: 'open',
    });
    setErrors({});
  };

  const getStatusVariant = (status: TicketStatus) => {
    switch (status) {
      case 'open':
        return 'success';
      case 'in_progress':
        return 'warning';
      case 'closed':
        return 'secondary';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Tickets</h1>
              <p className="text-muted-foreground">Manage and track all your tickets</p>
            </div>
            <Button onClick={() => setIsCreateOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              New Ticket
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tickets.map(ticket => (
              <Card key={ticket.id} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{ticket.title}</CardTitle>
                    <Badge variant={getStatusVariant(ticket.status)}>
                      {ticket.status.replace('_', ' ')}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {ticket.description && (
                    <p className="text-sm text-muted-foreground mb-4">{ticket.description}</p>
                  )}
                  <div className="text-xs text-muted-foreground mb-4">
                    Created: {new Date(ticket.createdAt).toLocaleDateString()}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => openEditDialog(ticket)}
                    >
                      <Pencil className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setDeleteTicketId(ticket.id)}
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {tickets.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No tickets yet. Create your first ticket!</p>
              <Button onClick={() => setIsCreateOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Create Ticket
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* Create Dialog */}
      <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Ticket</DialogTitle>
            <DialogDescription>Fill in the details to create a new ticket.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="create-title">Title *</Label>
              <Input
                id="create-title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className={errors.title ? 'border-destructive' : ''}
              />
              {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="create-description">Description</Label>
              <Textarea
                id="create-description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className={errors.description ? 'border-destructive' : ''}
                maxLength={200}
              />
              {errors.description && <p className="text-sm text-destructive">{errors.description}</p>}
              <p className="text-xs text-muted-foreground">{formData.description.length}/200 characters</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="create-status">Status *</Label>
              <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value as TicketStatus })}>
                <SelectTrigger id="create-status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
              {errors.status && <p className="text-sm text-destructive">{errors.status}</p>}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => { setIsCreateOpen(false); resetForm(); }}>
              Cancel
            </Button>
            <Button onClick={handleCreate}>Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Ticket</DialogTitle>
            <DialogDescription>Update the ticket details.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="edit-title">Title *</Label>
              <Input
                id="edit-title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className={errors.title ? 'border-destructive' : ''}
              />
              {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-description">Description</Label>
              <Textarea
                id="edit-description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className={errors.description ? 'border-destructive' : ''}
                maxLength={200}
              />
              {errors.description && <p className="text-sm text-destructive">{errors.description}</p>}
              <p className="text-xs text-muted-foreground">{formData.description.length}/200 characters</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-status">Status *</Label>
              <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value as TicketStatus })}>
                <SelectTrigger id="edit-status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
              {errors.status && <p className="text-sm text-destructive">{errors.status}</p>}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => { setIsEditOpen(false); resetForm(); setCurrentTicket(null); }}>
              Cancel
            </Button>
            <Button onClick={handleEdit}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={deleteTicketId !== null} onOpenChange={() => setDeleteTicketId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the ticket.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Footer />
    </div>
  );
};
