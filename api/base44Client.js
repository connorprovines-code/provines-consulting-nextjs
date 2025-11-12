import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client without authentication requirement for public marketing site
export const base44 = createClient({
  appId: "68deb218ad31f960dca8fb5c",
  requiresAuth: false // Public marketing site - no auth required
});
