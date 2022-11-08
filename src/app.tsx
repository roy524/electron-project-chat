import { createRoot } from 'react-dom/client';

const root = document.getElementById('root')

const app = createRoot(root)

app.render(<h2>Hello from React!</h2>)