import {searchForWorkspaceRoot , defineConfig } from 'vite';

export default defineConfig({
    server: {
        host: '0.0.0.0', // Allows external connections
        port: 5173, // Default port; change if needed
        fs: {
            allow: [
                searchForWorkspaceRoot(process.cwd()),
                '/home/azureuser/cheapernights_frontend_new', // Only allow the public directory
              ],
        },
    }
});