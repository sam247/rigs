

## Admin Dashboard Improvements Plan

Here's what I'd recommend to make the dashboard really shine for the client demo tomorrow. Prioritised by visual impact and demo-ability:

### 1. Summary Stats Bar (top of dashboard)
Four metric cards above the Kanban board showing at-a-glance numbers:
- **Active Projects** (in_progress + booked count)
- **Total Pipeline Value** (sum of all quote_amounts)
- **Outstanding Invoices** (unpaid invoice count + total £)
- **Unread Messages** (count of unread messages)

These give an immediate "wow, this is a real business tool" impression.

### 2. Build Out the Invoices Tab
Currently just says "coming soon." Replace with a proper table showing:
- Invoice number, customer name, project, amount, status (with coloured badges), due date
- Filter/sort by status (draft, sent, paid, overdue)
- Quick status change dropdown on each row

### 3. Project Detail Slide-Out / Modal
When clicking a Kanban card, open a detail panel showing:
- Full project info (description, address, dates, quote amount, notes)
- Editable fields so admin can update details inline
- Associated invoices list
- Message thread with the customer
- Document list with upload capability

### 4. Customers Tab Enhancement
Currently very bare. Add:
- Total spend per customer
- Number of active vs completed projects
- Contact details (phone, email, address from profiles)
- Click-through to see their projects

### 5. Quick Visual Polish
- Loading skeleton states instead of blank screen
- £ symbol instead of $ icon on quote amounts
- Proper empty states with illustrations
- Responsive sidebar navigation instead of header buttons on mobile

---

### Technical approach
- All data already exists in Supabase tables (projects, invoices, messages, profiles, documents)
- No schema changes needed — purely frontend improvements to `AdminDashboard.tsx`
- Will split into sub-components for maintainability (StatsBar, InvoiceTable, ProjectDetail, etc.)
- Fetches invoices and messages counts alongside existing queries

### Estimated scope
This is a substantial but achievable set of changes — roughly 4-5 components to create/update. The stats bar + invoices tab + project detail panel will have the biggest demo impact.

