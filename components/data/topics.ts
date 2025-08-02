import { addDays } from 'date-fns';
export interface Topic {
  id: number;
  title: string;
  category: 'Tecnologia' | 'Gestão' | 'Saúde' | 'Segurança' | 'Autocuidado';
  description: string;
  publicationDate: Date;
  readTime: number; // in minutes
  likes?: number; // optional, for future use
}

const today = new Date();

export const topics: Topic[] = [
  {
    id: 1,
    title: 'Gestão de Cuidados: Princípios Fundamentais',
    category: 'Gestão',
    description: 'Explore os princípios essenciais para uma gestão eficaz de cuidados em enfermagem, focando na qualidade e segurança do paciente.',
    publicationDate: addDays(today, -1),
    readTime: 10,
    likes: 0,
  },
  {
    id: 2,
    title: 'Tecnologia na Enfermagem Moderna',
    category: 'Tecnologia',
    description: 'Como as novas tecnologias estão transformando a prática da enfermagem e melhorando os resultados dos pacientes.',
    publicationDate: addDays(today, -2),
    readTime: 7,
    likes: 0,
  },
  {
    id: 3,
    title: 'Prevenção de Infecções Hospitalares',
    category: 'Segurança',
    description: 'Estratégias baseadas em evidências para reduzir infecções hospitalares e promover um ambiente seguro.',
    publicationDate: addDays(today, -3),
    readTime: 6,
    likes: 0,
  },
  {
    id: 4,
    title: 'Telemedicina e Enfermagem: Como Aproveitar Ferramentas Digitais',
    category: 'Tecnologia',
    description: 'O papel do enfermeiro em consultas remotas, monitoramento de pacientes crônicos via apps e a integração de dados de saúde em plataformas digitais.',
    publicationDate: addDays(today, -4),
    readTime: 4,
    likes: 0,
  },
  {
    id: 5,
    title: 'Saúde Mental do Cuidador: Estratégias para Evitar Burnout',
    category: 'Autocuidado',
    description: 'A importância do autocuidado para profissionais de enfermagem que atuam em home care ou hospitais, com técnicas de gerenciamento de estresse e equilíbrio emocional.',
    publicationDate: addDays(today, -5),
    readTime: 5,
    likes: 0,
  },
  {
    id: 6,
    title: 'Nutrição e Hidratação no Cuidado ao Idoso: Guia Prático',
    category: 'Saúde',
    description: 'Orientações baseadas em evidências para prevenir desnutrição e desidratação em pacientes idosos, incluindo planos alimentares e sinais de alerta.',
    publicationDate: addDays(today, -6),
    readTime: 15,
    likes: 0,
  },
  {
    id: 7,
    title: 'Cuidados Paliativos em Ambiente Domiciliar: Abordagem Humanizada',
    category: 'Gestão',
    description: 'Como proporcionar conforto, alívio da dor e suporte emocional a pacientes terminais e suas famílias, respeitando diretivas antecipadas e valores culturais.',
    publicationDate: addDays(today, -7),
    readTime: 6,
    likes: 0,
  }
];