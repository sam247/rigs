-- Make Sam an admin
UPDATE user_roles SET role = 'admin' WHERE user_id = '229c24ac-9833-4fab-8952-74b61568dacc';

-- Re-link some projects to Sam's account so they're visible even in customer view testing
-- But mainly, as admin, all projects will be visible via RLS anyway
