export interface Project {
  id: string
  title: string
  type: string
  description: string
  stack: string[]
  status: string
  statusVariant: 'internal' | 'production' | 'desktop' | 'utility'
}

export interface Experience {
  id: string
  role: string
  company: string
  period: string
  description: string
  tags: string[]
  isCurrent?: boolean
}

export interface TechItem {
  name: string
}

export interface TechCategory {
  name: string
  items: TechItem[]
}

export interface Certification {
  id: string
  name: string
  issuer: string
}
