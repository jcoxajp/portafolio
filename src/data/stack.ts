import type { TechCategory } from '../types'

export const techStack: TechCategory[] = [
  {
    name: 'Backend',
    items: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'PostgreSQL' },
      { name: 'SQL Server' },
      { name: 'JWT' },
      { name: 'Helmet' },
      { name: 'Rate Limiting' },
      { name: 'Stored Procedures' },
      { name: 'OOP (JS)' },
      { name: 'PM2' },
    ],
  },
  {
    name: 'Frontend',
    items: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Vite' },
      { name: 'PrimeReact' },
    ],
  },
  {
    name: 'Desktop',
    items: [
      { name: 'Electron' },
      { name: 'SQLite' },
    ],
  },
  {
    name: 'DevOps / Infra',
    items: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Nginx' },
      { name: 'PM2' },
      { name: 'Vercel' },
      { name: 'Firewall Unifi' },
    ],
  },
  {
    name: 'Herramientas',
    items: [
      { name: 'VS Code' },
      { name: 'DataGrip' },
      { name: 'Postman' },
      { name: 'API Dog' },
    ],
  },
  {
    name: 'Adicional',
    items: [
      { name: 'Spring Boot' },
    ],
  },
]
