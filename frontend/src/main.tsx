import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { EditModeProvider } from './contexts/EditModeContext.tsx'
import { PageProvider } from './contexts/PageContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageProvider>
      <EditModeProvider>
        <App />
      </EditModeProvider>
    </PageProvider>
  </StrictMode>,
)
