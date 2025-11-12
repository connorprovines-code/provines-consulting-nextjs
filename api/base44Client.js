import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68deb218ad31f960dca8fb5c", 
  requiresAuth: true // Ensure authentication is required for all operations
});
