

## Plan: Dashboard Enhancements

### 1. Minimal SaaS-style Footer for Admin Dashboard
Add a slim footer at the bottom of `AdminDashboard.tsx` with copyright, version number, and subtle links (Help, Terms, Privacy). Light gray, minimal — typical SaaS admin feel.

### 2. Export Functionality
- **Invoices tab**: Add "Export CSV" button in the header area that exports the current filtered invoices as a CSV file (invoice number, customer, project, amount, status, due date).
- **Customers tab**: Add "Export CSV" button that exports customer list with stats (name, email, phone, company, active projects, total spend).
- **Kanban**: Add "Export" button that exports all projects as CSV.

Pure client-side CSV generation using `Blob` + `URL.createObjectURL` — no dependencies needed.

### 3. Connect QuickBooks Button (Invoices Tab)
Add a "Connect QuickBooks" button with the QuickBooks logo/icon in the invoices header area. Non-functional for now — shows a toast saying "QuickBooks integration coming soon" on click.

### 4. CRM-style Customers Tab
Redesign `CustomersTab.tsx` from simple cards to a proper CRM layout:
- **Left panel**: Searchable/filterable customer list (table or list view with search bar)
- **Right panel**: When a customer is selected, show a detailed profile view with:
  - Contact info section (email, phone, address, company)
  - Projects list for that customer with statuses
  - Invoice history for that customer
  - Activity notes / last contact date
  - Quick action buttons (Email, Call links)
- Add a search/filter bar at the top
- "Add Note" functionality (stored in a simple local state for demo — no new DB table needed)

### 5. Clickable Invoice Rows
In the invoices table, make rows clickable. On click, open a detail modal/sheet showing:
- Full invoice details (number, amount, description, dates)
- Customer and project info
- Status change actions
- Payment date if paid

### 6. Footer Link Rename
In `Footer.tsx`, change "Customer Portal" to "Login" (line 40).

### Files to modify:
- `src/components/portal/AdminDashboard.tsx` — add SaaS footer, export on Kanban
- `src/components/portal/admin/InvoicesTab.tsx` — export CSV, QuickBooks button, clickable rows with detail modal
- `src/components/portal/admin/CustomersTab.tsx` — full CRM redesign
- `src/components/layout/Footer.tsx` — rename link

