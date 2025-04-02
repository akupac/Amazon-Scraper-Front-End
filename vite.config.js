
export default {
    build:{
        outDir: '../dist',
        emptyOutDir: true,
    },
    cors: {
        origin: import.meta.env.VITE_API_URL || 'http://localhost:3000',
      },
}