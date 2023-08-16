import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/csi-26-atividade1/'
})


// https://lucasll37.github.io
// ssh-keygen -t rsa -b 4096 -C "lucas.silva1037@gmail.com" -f "gh-pages" -N ""