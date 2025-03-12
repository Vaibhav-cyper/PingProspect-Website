/// <reference types="vite/client" />

interface Window {
  clarity?: (method: string, ...args: any[]) => void;
}
