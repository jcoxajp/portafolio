import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'rp',
    title: 'Sistema de Recepción de Productos (RP)',
    type: 'Módulo interno empresarial',
    description:
      'Sistema para gestionar la recepción física de productos en bodega. Incluye control de costeos, revisiones con validación anti-fraude, gestión de empleados revisores y trazabilidad completa por número de factura. El módulo implementa reglas de seguridad donde el digitador no puede conocer cantidades esperadas para evitar manipulación de datos.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'React', 'JWT'],
    status: 'Interno',
    statusVariant: 'internal',
  },
  {
    id: 'api-sap',
    title: 'Integración SAP SQL Server (api-sap)',
    type: 'Servicio de integración',
    description:
      'API bridge entre el sistema interno y SAP Business One (R1). Expone endpoints para consulta de facturas, notas de crédito, cotizaciones y pago a proveedores consumiendo directamente la base de datos de SQL Server de SAP. Permite que el sistema interno opere sin depender de la lentitud del cliente SAP con VPN.',
    stack: ['Node.js', 'Express', 'SQL Server', 'SAP B1'],
    status: 'Interno',
    statusVariant: 'internal',
  },
  {
    id: 'antillon',
    title: 'App Antillon (Web Pública)',
    type: 'Aplicación web pública',
    description:
      'Aplicación web accesible desde internet para la gestión de citas de descarga de proveedores. Incluye autenticación, panel de administración y coordinación de ventanas de recepción. Desplegada en servidor propio con Nginx como reverse proxy y reglas NAT en firewall Unifi.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Nginx'],
    status: 'En producción',
    statusVariant: 'production',
  },
  {
    id: 'cotizaciones',
    title: 'Cotizaciones Offline (App de Escritorio)',
    type: 'Aplicación de escritorio',
    description:
      'Aplicación de escritorio para que vendedores realicen cotizaciones sin conexión a internet, desarrollada como contingencia a SAP R1 que resulta muy lento al usarse con VPN fuera de sucursal. Funciona completamente offline con base de datos local.',
    stack: ['React', 'Electron', 'SQLite'],
    status: 'Desktop',
    statusVariant: 'desktop',
  },
  {
    id: 'bpkm',
    title: 'BPKM — Gestión de Rutas',
    type: 'Módulo interno',
    description:
      'Módulo para gestión y monitoreo de rutas de reparto. Incluye seguimiento en tiempo real, cambios de forma y sucursal, sistema de comentarios y reportes gerenciales. Arquitectura event-driven con notificaciones push.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'React'],
    status: 'Interno',
    statusVariant: 'internal',
  },
  {
    id: 'zebra',
    title: 'Zebra Service',
    type: 'Servicio / Utilidad',
    description:
      'Servicio Windows (.exe) desarrollado como alternativa gratuita a soluciones de pago como QZ Tray para la impresión de etiquetas en impresoras térmicas Zebra. Recibe solicitudes de impresión desde el navegador y las envía directamente a la impresora.',
    stack: ['Node.js', 'Electron/pkg', 'ZPL'],
    status: 'Utilidad',
    statusVariant: 'utility',
  },
]
