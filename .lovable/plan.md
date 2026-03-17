

## Trello-Inspired Admin Dashboard Enhancements

Three major upgrades to make the Kanban board feel like a proper project management tool for the client demo.

### 1. Drag-and-Drop Card Movement
- Install `@hello-pangea/dnd` (the maintained fork of `react-beautiful-dnd`)
- Wrap the Kanban columns in `DragDropContext` and `Droppable`, each card in `Draggable`
- On drop, call the existing `moveProject()` function to update status in Supabase
- Remove the status dropdown from each card (drag replaces it)
- Visual feedback: dragging card gets a subtle shadow/rotation, drop zone highlights

### 2. Customer Avatars on Cards
- The `profiles` table already has an `avatar_url` column — we'll use it
- Show a small avatar circle on each Kanban card next to the customer name (initials fallback when no photo)
- Show avatars in the project detail slide-out and customers tab too
- Use the existing shadcn `Avatar` component (`src/components/ui/avatar.tsx`)

### 3. Enhanced Project Detail Modal (Activity Timeline)
- When clicking a card, the existing `ProjectDetail` slide-out opens — upgrade it with:
  - **Activity timeline**: merge messages, invoice events, and status changes into a single chronological feed with icons and timestamps
  - **Admin reply box**: let admin send messages directly from the detail panel
  - **Better visual hierarchy**: card-style sections for details, timeline, invoices, documents

### Technical Details

**New dependency**: `@hello-pangea/dnd` for drag-and-drop

**Files to modify**:
- `src/components/portal/AdminDashboard.tsx` — wrap Kanban in DnD context, add avatars to cards, remove status select from cards
- `src/components/portal/admin/ProjectDetail.tsx` — add activity timeline, admin message sending, avatar display
- `src/components/portal/admin/CustomersTab.tsx` — add avatar display

**No schema changes needed** — `avatar_url` and all required fields already exist.

