import { createRoot } from 'react-dom/client';
import styled from 'styled-components'

const root = document.getElementById('root')

const App = styled.h1`
  color: red;
  font-size: 22px;
`

const app = createRoot(root)

app.render(<App>Hello from React!</App>)