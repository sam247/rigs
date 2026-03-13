

# Greenhills Electric — Full Rebuild Plan

## Overview
Two-pronged project: a modern marketing website and a dual-portal system (admin + customer), all backed by Supabase.

---

## Part 1: Marketing Website

A modern, professional website that builds trust and drives enquiries. Deep Forest Green (#004225) brand, Plus Jakarta Sans headings, Inter body text.

### Pages
1. **Home** — Hero with strong CTA ("Get a Free Quote"), service highlights with icons, trust badges (NICEIC, ECA, Trustmark, Part P), testimonials carousel, recent project gallery, and clear contact info
2. **About** — Company story (60+ years experience), team section, accreditations & certifications displayed prominently
3. **Commercial Services** — Detailed breakdown: electrical installation, fire alarms, emergency lighting, data cabling, periodic testing. Each with description and CTA
4. **Domestic Services** — Rewires, consumer units, extensions, EV charger installation, smart home wiring, landlord certificates (EICR). Each with description and CTA
5. **Gallery / Projects** — Filterable grid (Commercial / Domestic) showcasing completed work with before/after capability
6. **Testimonials** — Customer reviews with star ratings, filterable by service type
7. **Contact** — Contact form, callback request, Google Maps embed, phone number, email, address. "Get a Quote" as primary action
8. **Privacy Policy & Cookie Notice**

### Global Elements
- Sticky header with phone number and "Get a Quote" button always visible
- Footer with contact details, quick links, accreditation logos, social links
- Mobile-responsive throughout

---

## Part 2: Admin Portal (For Greenhills team)

### Authentication
- Email & password login via Supabase Auth
- Role-based access: admin, team member

### Dashboard
- Overview stats: active projects count, pending quotes, overdue payments, jobs completed this month
- Recent activity feed

### Kanban Project Board (Core Feature)
Six columns with drag-and-drop:
- **Quote Sent** → **Booked** → **In Progress** → **On Hold** → **Complete** → **Awaiting Payment**

Each job card shows:
- Client name & address
- Job type (commercial/domestic)
- Payment status (coloured dot: green = paid, amber = partial, red = unpaid)
- Assigned team member(s)
- Last update date

Click a card to open full job detail view with:
- Job description & notes timeline
- Team updates (team members can post status updates)
- Invoice history & payment tracking
- Uploaded documents/photos
- Customer messages

### Client Management
- Client list with search & filter
- Client detail page: contact info, job history, payment history

### Billing & Invoices
- Create and send invoices linked to jobs
- Track payment status (Unpaid, Partial, Paid)
- Invoice PDF generation (basic)

### Team Management
- Add/remove team members
- Assign team members to jobs

---

## Part 3: Customer Portal

### Authentication
- Email & password login (same Supabase Auth, customer role)

### Customer Dashboard
- List of their projects with current status
- Click into a project to see:
  - Current stage (visual progress indicator)
  - Team updates & notes (read-only)
  - Their invoices with payment status
  - Uploaded documents/photos (customers can upload too)
  - Message thread with the Greenhills team

---

## Database (Supabase)

### Key Tables
- **profiles** — user profile data linked to auth.users
- **user_roles** — role management (admin, team_member, customer) using app_role enum
- **clients** — client contact details
- **projects** — job records with status, type, dates, assigned team, linked client
- **project_updates** — timeline of status changes and team notes
- **invoices** — linked to projects, with amount, status, due date
- **messages** — threaded messages between team and customer per project
- **documents** — file metadata, linked to projects (files stored in Supabase Storage)

### Storage
- Supabase Storage bucket for project documents and photos

### Row-Level Security
- Admins/team: full access to all data
- Customers: can only see their own projects, invoices, messages, and documents

---

## Implementation Approach
We'll build this incrementally:
1. Design system & website pages first
2. Connect Supabase and set up database schema
3. Build admin portal with Kanban board
4. Build customer portal
5. Wire up messaging and file uploads

