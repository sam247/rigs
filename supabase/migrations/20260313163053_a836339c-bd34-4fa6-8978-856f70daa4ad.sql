
-- Insert invoices for completed and awaiting_payment projects
INSERT INTO invoices (invoice_number, amount, status, customer_id, project_id, description, due_date, paid_date, created_at) VALUES
-- Paid invoices (complete projects)
('GH-2026-001', 750.00, 'paid', 'a1111111-1111-1111-1111-111111111111', '86976286-24cc-444c-b081-2aa3445a7528', 'Consumer Unit Upgrade - 18th Edition dual RCD board', '2026-03-14', '2026-03-01', now() - interval '15 days'),
('GH-2026-002', 1200.00, 'paid', 'a2222222-2222-2222-2222-222222222222', '69b177fe-179b-4f5c-8ea3-cfda3ad424b6', 'Dental Surgery EICR & PAT Testing', '2026-03-15', '2026-03-02', now() - interval '28 days'),
('GH-2026-003', 5600.00, 'paid', 'a3333333-3333-3333-3333-333333333333', 'b3333333-3333-3333-3333-333333333333', 'New Build Plot 4 - Second Fix Electrical', '2026-03-01', '2026-02-25', now() - interval '35 days'),
('GH-2026-004', 3400.00, 'paid', 'a4444444-4444-4444-4444-444444444444', NULL, 'Restaurant Emergency Lighting Installation', '2026-03-05', '2026-03-03', now() - interval '40 days'),
('GH-2026-005', 480.00, 'paid', 'a5555555-5555-5555-5555-555555555555', NULL, 'Domestic EICR & Remedial Works - Rental Property', '2026-02-28', '2026-02-20', now() - interval '33 days'),
('GH-2026-006', 1150.00, 'paid', 'a3333333-3333-3333-3333-333333333333', 'b3333333-3333-3333-3333-333333333333', 'EV Charger Installation - Zappi V2 7kW', '2026-02-20', '2026-02-18', now() - interval '30 days'),

-- Sent invoices (awaiting payment)
('GH-2026-007', 8900.00, 'sent', 'a4444444-4444-4444-4444-444444444444', '05f1afd8-08a2-4d35-8d6f-68a205ddd8c8', 'Car Park Lighting Upgrade - LED Floodlights', '2026-03-28', NULL, now() - interval '14 days'),
('GH-2026-008', 4200.00, 'sent', 'a1111111-1111-1111-1111-111111111111', '25a3490f-d1d5-46b7-9e3f-2bfee1c7d9c5', 'Flat Rewire - 2 Bed Complete Rewire', '2026-03-20', NULL, now() - interval '10 days'),
('GH-2026-009', 3100.00, 'sent', 'a5555555-5555-5555-5555-555555555555', '0d4b543e-e95b-4e95-997d-89ed887484e1', 'Fire Alarm System - Grade A HMO', '2026-03-25', NULL, now() - interval '12 days'),
('GH-2026-010', 280.00, 'sent', 'a1111111-1111-1111-1111-111111111111', 'b6666666-6666-6666-6666-666666666666', 'EICR Inspection - Periodic Report', '2026-03-18', NULL, now() - interval '8 days'),

-- Overdue
('GH-2026-011', 6800.00, 'overdue', 'a2222222-2222-2222-2222-222222222222', 'b7777777-7777-7777-7777-777777777777', 'Fire Alarm System Installation - Phase 1', '2026-02-28', NULL, now() - interval '25 days'),

-- Draft invoices (in progress projects)
('GH-2026-012', 4200.00, 'draft', 'a1111111-1111-1111-1111-111111111111', 'b49a97ed-12ee-425b-bb3d-c694a025eeb0', 'Loft Conversion Electrics - Progress Payment', '2026-04-01', NULL, now() - interval '3 days'),
('GH-2026-013', 4600.00, 'draft', 'a2222222-2222-2222-2222-222222222222', 'f7a840e7-5a16-40cd-ac7f-29b40b627e25', 'Retail Unit Refit - Interim Invoice', '2026-04-05', NULL, now() - interval '2 days'),
('GH-2026-014', 6250.00, 'draft', 'a3333333-3333-3333-3333-333333333333', '4bbbce3d-a135-4a7f-8037-f74377d9be04', 'Smart Home Installation - 50% Milestone', '2026-04-10', NULL, now() - interval '1 day');

-- Insert messages across various projects
INSERT INTO messages (content, project_id, sender_id, is_read, created_at) VALUES
('Hi, just wanted to confirm the start date for the loft conversion electrics. Will your team be on site Monday?', 'b49a97ed-12ee-425b-bb3d-c694a025eeb0', 'a1111111-1111-1111-1111-111111111111', true, now() - interval '10 days'),
('Yes, we will be there first thing Monday morning. Dave and Tom will be doing the first fix. Should take 2-3 days.', 'b49a97ed-12ee-425b-bb3d-c694a025eeb0', '229c24ac-9833-4fab-8952-74b61568dacc', true, now() - interval '10 days' + interval '2 hours'),
('Brilliant, thanks. The plasterer is booked for Thursday so hopefully that works out.', 'b49a97ed-12ee-425b-bb3d-c694a025eeb0', 'a1111111-1111-1111-1111-111111111111', true, now() - interval '9 days'),
('First fix is all done. Passed the inspection too. Well let you know when we can come back for second fix after plastering.', 'b49a97ed-12ee-425b-bb3d-c694a025eeb0', '229c24ac-9833-4fab-8952-74b61568dacc', true, now() - interval '7 days'),
('Plasterer finished yesterday. Ready for second fix whenever suits.', 'b49a97ed-12ee-425b-bb3d-c694a025eeb0', 'a1111111-1111-1111-1111-111111111111', false, now() - interval '2 days'),

('Could you send over the quote for the retail unit refit? My landlord needs it for the lease agreement.', 'f7a840e7-5a16-40cd-ac7f-29b40b627e25', 'a2222222-2222-2222-2222-222222222222', true, now() - interval '15 days'),
('Quote attached to your portal. Let me know if you need any amendments for the landlord.', 'f7a840e7-5a16-40cd-ac7f-29b40b627e25', '229c24ac-9833-4fab-8952-74b61568dacc', true, now() - interval '14 days'),
('Phase 1 distribution board is in and tested. Starting on the lighting circuits tomorrow.', 'f7a840e7-5a16-40cd-ac7f-29b40b627e25', '229c24ac-9833-4fab-8952-74b61568dacc', true, now() - interval '5 days'),
('Looking great! The track lighting samples arrived - can you take a look when you are next on site?', 'f7a840e7-5a16-40cd-ac7f-29b40b627e25', 'a2222222-2222-2222-2222-222222222222', false, now() - interval '3 days'),

('We have chosen the Lutron Caseta system for the main living areas. Can you confirm compatibility with the dimmer modules?', '4bbbce3d-a135-4a7f-8037-f74377d9be04', 'a3333333-3333-3333-3333-333333333333', true, now() - interval '20 days'),
('Caseta is perfect for what you need. I will order the RA2 processor and the Pico remotes. Should arrive within 5 days.', '4bbbce3d-a135-4a7f-8037-f74377d9be04', '229c24ac-9833-4fab-8952-74b61568dacc', true, now() - interval '19 days'),
('Processor arrived and installed. Currently programming the lighting scenes. Can we schedule a walkthrough for the dimming preferences?', '4bbbce3d-a135-4a7f-8037-f74377d9be04', '229c24ac-9833-4fab-8952-74b61568dacc', true, now() - interval '5 days'),
('How about Saturday morning? We will both be home and can go through each room.', '4bbbce3d-a135-4a7f-8037-f74377d9be04', 'a3333333-3333-3333-3333-333333333333', true, now() - interval '4 days'),
('Saturday 10am works great. See you then.', '4bbbce3d-a135-4a7f-8037-f74377d9be04', '229c24ac-9833-4fab-8952-74b61568dacc', false, now() - interval '4 days' + interval '1 hour'),

('Just checking - is the car park lighting invoice correct? Seems higher than the original quote.', '05f1afd8-08a2-4d35-8d6f-68a205ddd8c8', 'a4444444-4444-4444-4444-444444444444', true, now() - interval '10 days'),
('Good spot - there were 4 additional bollard lights added during the project that werent on the original spec. I have itemised them on the invoice.', '05f1afd8-08a2-4d35-8d6f-68a205ddd8c8', '229c24ac-9833-4fab-8952-74b61568dacc', true, now() - interval '9 days'),
('Ah yes, I remember now. Will process payment this week. Thanks for clarifying.', '05f1afd8-08a2-4d35-8d6f-68a205ddd8c8', 'a4444444-4444-4444-4444-444444444444', false, now() - interval '8 days'),

('Any update on when UKPN will complete the 3-phase supply upgrade?', 'dfb769ab-5856-436b-bc34-cda0561d632a', 'a4444444-4444-4444-4444-444444444444', true, now() - interval '7 days'),
('Spoke to UKPN yesterday. They have confirmed April 12th for the supply upgrade. We can start our work the following week.', 'dfb769ab-5856-436b-bc34-cda0561d632a', '229c24ac-9833-4fab-8952-74b61568dacc', false, now() - interval '6 days'),

('Hi, is the EV charger installation still on track for the 20th?', '7768a811-356d-4f9a-815e-4075b296bf34', 'a3333333-3333-3333-3333-333333333333', true, now() - interval '4 days'),
('Absolutely! Zappi unit is in stock. Just need you to confirm the mounting location - left or right of the garage door?', '7768a811-356d-4f9a-815e-4075b296bf34', '229c24ac-9833-4fab-8952-74b61568dacc', true, now() - interval '3 days'),
('Right side please, nearest to where the car parks. Thanks!', '7768a811-356d-4f9a-815e-4075b296bf34', 'a3333333-3333-3333-3333-333333333333', false, now() - interval '2 days');
