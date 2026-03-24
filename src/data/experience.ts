import type { Experience } from '../types'

export const experience: Experience[] = [
  {
    id: 'backend-dev',
    role: 'Backend Developer',
    company: 'Empresa actual',
    period: '2022 – Presente',
    description:
      'Desarrollo y mantenimiento de sistemas empresariales internos y públicos. Arquitectura de APIs RESTful con Node.js, integración con SAP B1 (SQL Server), gestión de base de datos PostgreSQL, implementación de seguridad (JWT, Helmet, rate limiting, sanitización). Administración de infraestructura con PM2 y Nginx.',
    tags: ['Node.js', 'PostgreSQL', 'SAP', 'React', 'Nginx'],
    isCurrent: true,
  },
  {
    id: 'power-platform',
    role: 'Desarrollador Power Platform',
    company: 'Empresa anterior',
    period: '~6 meses',
    description:
      'Desarrollo de aplicaciones internas con Microsoft Power Apps y flujos de automatización con Power Automate.',
    tags: ['Power Apps', 'Power Automate', 'Microsoft 365'],
  },
  {
    id: 'oracle-apex',
    role: 'Desarrollador Oracle APEX',
    company: 'Primera empresa',
    period: '~6 meses',
    description:
      'Desarrollo de aplicaciones web de datos con Oracle APEX. Base sólida en SQL, procedimientos almacenados y modelado de datos.',
    tags: ['Oracle APEX', 'SQL', 'PL/SQL'],
  },
]
