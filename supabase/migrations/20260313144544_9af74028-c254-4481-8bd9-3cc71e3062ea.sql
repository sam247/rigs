
-- Create demo customer users in auth.users
-- Using fixed UUIDs for reproducibility
DO $$
DECLARE
  demo_users jsonb := '[
    {"id": "a1111111-1111-1111-1111-111111111111", "email": "sarah.mitchell@demo.com", "name": "Sarah Mitchell", "phone": "07700 900001", "address": "14 Elm Road, Watford, WD17 3EJ"},
    {"id": "a2222222-2222-2222-2222-222222222222", "email": "james.thornton@demo.com", "name": "James Thornton", "phone": "07700 900002", "address": "8 Victoria Street, St Albans, AL1 3TF", "company": "Thornton & Partners LLP"},
    {"id": "a3333333-3333-3333-3333-333333333333", "email": "linda.pearce@demo.com", "name": "Linda Pearce", "phone": "07700 900003", "address": "22 Church Lane, Hemel Hempstead, HP1 1LT"},
    {"id": "a4444444-4444-4444-4444-444444444444", "email": "david.chen@demo.com", "name": "David Chen", "phone": "07700 900004", "address": "Unit 5, Kings Business Park, Berkhamsted, HP4 2PQ", "company": "Chen Electronics Ltd"},
    {"id": "a5555555-5555-5555-5555-555555555555", "email": "rachel.green@demo.com", "name": "Rachel Green", "phone": "07700 900005", "address": "9 Meadow Way, Tring, HP23 5LR"}
  ]';
  u jsonb;
BEGIN
  FOR u IN SELECT * FROM jsonb_array_elements(demo_users)
  LOOP
    -- Insert into auth.users
    INSERT INTO auth.users (id, instance_id, aud, role, email, encrypted_password, email_confirmed_at, created_at, updated_at, raw_user_meta_data)
    VALUES (
      (u->>'id')::uuid,
      '00000000-0000-0000-0000-000000000000',
      'authenticated',
      'authenticated',
      u->>'email',
      crypt('DemoPass123!', gen_salt('bf')),
      now(),
      now() - interval '30 days' * random(),
      now(),
      jsonb_build_object('full_name', u->>'name')
    )
    ON CONFLICT (id) DO NOTHING;

    -- Insert into auth.identities
    INSERT INTO auth.identities (id, user_id, provider_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
    VALUES (
      (u->>'id')::uuid,
      (u->>'id')::uuid,
      u->>'email',
      jsonb_build_object('sub', u->>'id', 'email', u->>'email'),
      'email',
      now(),
      now(),
      now()
    )
    ON CONFLICT DO NOTHING;

    -- Update profile with phone/address/company
    UPDATE public.profiles 
    SET phone = u->>'phone', 
        address = u->>'address',
        company_name = u->>'company'
    WHERE id = (u->>'id')::uuid;
  END LOOP;
END $$;

-- Insert demo projects across all kanban stages
INSERT INTO public.projects (id, title, description, status, customer_id, address, quote_amount, start_date, end_date, notes) VALUES
  ('b1111111-1111-1111-1111-111111111111', 'Full House Rewire', 'Complete rewire of 3-bed semi-detached property including new consumer unit and smoke alarms.', 'in_progress', 'a1111111-1111-1111-1111-111111111111', '14 Elm Road, Watford, WD17 3EJ', 4850, '2026-03-01', '2026-03-21', 'First fix complete. Second fix scheduled for next week.'),
  ('b2222222-2222-2222-2222-222222222222', 'Office Fit-Out Electrics', 'Full electrical installation for new office space - 12 workstations, server room, kitchen area.', 'in_progress', 'a2222222-2222-2222-2222-222222222222', '8 Victoria Street, St Albans, AL1 3TF', 12500, '2026-02-15', '2026-04-01', 'Data cabling 80% complete. Awaiting light fittings delivery.'),
  ('b3333333-3333-3333-3333-333333333333', 'EV Charger Installation', 'Supply and install 7kW EV charger with dedicated circuit from consumer unit.', 'complete', 'a3333333-3333-3333-3333-333333333333', '22 Church Lane, Hemel Hempstead, HP1 1LT', 1150, '2026-02-20', '2026-02-21', 'Installation complete. OZEV grant applied.'),
  ('b4444444-4444-4444-4444-444444444444', 'Warehouse Lighting Upgrade', 'Replace fluorescent fittings with LED panels across 500sqm warehouse. Emergency lighting included.', 'booked', 'a4444444-4444-4444-4444-444444444444', 'Unit 5, Kings Business Park, Berkhamsted, HP4 2PQ', 8200, '2026-03-25', NULL, NULL),
  ('b5555555-5555-5555-5555-555555555555', 'Kitchen Extension Electrics', 'First and second fix electrics for single-storey kitchen extension. Includes underfloor heating wiring.', 'quote_sent', 'a5555555-5555-5555-5555-555555555555', '9 Meadow Way, Tring, HP23 5LR', 2400, NULL, NULL, NULL),
  ('b6666666-6666-6666-6666-666666666666', 'EICR Inspection', 'Electrical Installation Condition Report for rental property prior to new tenancy.', 'awaiting_payment', 'a1111111-1111-1111-1111-111111111111', '31 Park Avenue, Watford, WD18 7HP', 280, '2026-03-05', '2026-03-05', 'Report complete. Satisfactory result. Certificate issued.'),
  ('b7777777-7777-7777-7777-777777777777', 'Fire Alarm System Install', 'Design and install addressable fire alarm system for 3-storey office building. 24 zones.', 'on_hold', 'a2222222-2222-2222-2222-222222222222', '15 High Street, Berkhamsted, HP4 2DG', 6800, '2026-03-10', NULL, 'On hold - awaiting building control approval for cable routes.'),
  ('b8888888-8888-8888-8888-888888888888', 'Smart Home Wiring', 'Pre-wire for smart lighting, blinds, multi-room audio and CCTV in new build property.', 'quote_sent', 'a3333333-3333-3333-3333-333333333333', '22 Church Lane, Hemel Hempstead, HP1 1LT', 3600, NULL, NULL, NULL)
ON CONFLICT (id) DO NOTHING;

-- Insert demo invoices
INSERT INTO public.invoices (id, invoice_number, amount, status, customer_id, project_id, description, due_date, paid_date) VALUES
  ('c1111111-1111-1111-1111-111111111111', 'GE-2026-001', 2425, 'paid', 'a1111111-1111-1111-1111-111111111111', 'b1111111-1111-1111-1111-111111111111', 'Full House Rewire - 50% deposit', '2026-02-28', '2026-02-27'),
  ('c2222222-2222-2222-2222-222222222222', 'GE-2026-002', 2425, 'sent', 'a1111111-1111-1111-1111-111111111111', 'b1111111-1111-1111-1111-111111111111', 'Full House Rewire - Final balance', '2026-03-28', NULL),
  ('c3333333-3333-3333-3333-333333333333', 'GE-2026-003', 6250, 'paid', 'a2222222-2222-2222-2222-222222222222', 'b2222222-2222-2222-2222-222222222222', 'Office Fit-Out - 50% deposit', '2026-02-14', '2026-02-13'),
  ('c4444444-4444-4444-4444-444444444444', 'GE-2026-004', 6250, 'draft', 'a2222222-2222-2222-2222-222222222222', 'b2222222-2222-2222-2222-222222222222', 'Office Fit-Out - Final balance', '2026-04-15', NULL),
  ('c5555555-5555-5555-5555-555555555555', 'GE-2026-005', 1150, 'paid', 'a3333333-3333-3333-3333-333333333333', 'b3333333-3333-3333-3333-333333333333', 'EV Charger Installation - Full payment', '2026-02-25', '2026-02-24'),
  ('c6666666-6666-6666-6666-666666666666', 'GE-2026-006', 280, 'overdue', 'a1111111-1111-1111-1111-111111111111', 'b6666666-6666-6666-6666-666666666666', 'EICR Inspection', '2026-03-12', NULL),
  ('c7777777-7777-7777-7777-777777777777', 'GE-2026-007', 8200, 'draft', 'a4444444-4444-4444-4444-444444444444', 'b4444444-4444-4444-4444-444444444444', 'Warehouse Lighting Upgrade - Full quote', '2026-04-01', NULL)
ON CONFLICT (id) DO NOTHING;

-- Insert demo messages
INSERT INTO public.messages (project_id, sender_id, content, created_at) VALUES
  ('b1111111-1111-1111-1111-111111111111', 'a1111111-1111-1111-1111-111111111111', 'Hi, just checking when the second fix is scheduled for?', now() - interval '2 days'),
  ('b1111111-1111-1111-1111-111111111111', NULL, 'Hi Sarah! We''re planning to start second fix on Monday 17th. Should take 2-3 days.', now() - interval '1 day 20 hours'),
  ('b1111111-1111-1111-1111-111111111111', 'a1111111-1111-1111-1111-111111111111', 'Perfect, thank you! Will someone need access to the loft?', now() - interval '1 day 18 hours'),
  ('b2222222-2222-2222-2222-222222222222', 'a2222222-2222-2222-2222-222222222222', 'Can we add 2 more data points in the meeting room?', now() - interval '3 days'),
  ('b2222222-2222-2222-2222-222222222222', NULL, 'Of course! That''ll be an additional £180. Shall we go ahead?', now() - interval '2 days 22 hours'),
  ('b2222222-2222-2222-2222-222222222222', 'a2222222-2222-2222-2222-222222222222', 'Yes please, go ahead with that.', now() - interval '2 days 20 hours');
