import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        host: '0.0.0.0', // Allows external connections
        port: 5173, // Default port; change if needed
        fs: {
            allow: [
                '/home/azureuser/cheapernights_frontend_new/public', // Only allow the public directory
                '/home/azureuser/cheapernights_frontend_new/src', // Allow the src directory if needed
              ],
        },
    }
});