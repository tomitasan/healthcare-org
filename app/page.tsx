'use client' // This is a client component

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { getServices } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Heart, Shield, Users, BookOpen, Mail, Phone, Calendar, ArrowRight, Menu, X } from 'lucide-react';
import logo from '@/public/logo_carol.png';


export default async function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const service = await getServices();

    const services = [
    {
      icon: <Heart className="h-8 w-8 text-teal-600" />,
      title: "Cuidados Especializados",
      description: "Gestão personalizada de cuidados com foco na qualidade e humanização do atendimento."
    },
    {
      icon: <Shield className="h-8 w-8 text-teal-600" />,
      title: "Segurança do Paciente",
      description: "Protocolos rigorosos de segurança para garantir o bem-estar e proteção dos pacientes."
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: "Capacitação de Equipes",
      description: "Treinamento e desenvolvimento de equipes de enfermagem para excelência no cuidado."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-teal-600" />,
      title: "Educação Continuada",
      description: "Programas de educação permanente baseados nas melhores práticas e evidências científicas."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src={logo.src} alt="Carol Lobato Saúde" className="h-10 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-slate-900">Carol Lobato</h1>
                <p className="text-sm text-teal-600">Assistência em Saúde com Foco na Pessoa</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-slate-700 hover:text-teal-600 transition-colors">Início</a>
              <a href="#servicos" className="text-slate-700 hover:text-teal-600 transition-colors">Serviços</a>
              <a href="#blog" className="text-slate-700 hover:text-teal-600 transition-colors">Blog</a>
              <a href="#sobre" className="text-slate-700 hover:text-teal-600 transition-colors">Sobre</a>
              <a href="#contato" className="text-slate-700 hover:text-teal-600 transition-colors">Contato</a>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#inicio" className="text-slate-700 hover:text-teal-600 transition-colors">Início</a>
                <a href="#servicos" className="text-slate-700 hover:text-teal-600 transition-colors">Serviços</a>
                <a href="#blog" className="text-slate-700 hover:text-teal-600 transition-colors">Blog</a>
                <a href="#sobre" className="text-slate-700 hover:text-teal-600 transition-colors">Sobre</a>
                <a href="#contato" className="text-slate-700 hover:text-teal-600 transition-colors">Contato</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Excelência em
              <span className="text-teal-600 block">Gestão de Cuidados</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Especializada em gestão de cuidados em enfermagem, oferecendo soluções inovadoras 
              para melhorar a qualidade do atendimento e a segurança do paciente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                Conheça Nossos Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Entre em Contato
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nossos Serviços
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em gestão de cuidados, focando na qualidade, 
              segurança e humanização do atendimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section from Contentful */}
      <section id="blog" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Blog de Saúde
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Artigos e insights sobre gestão de cuidados, melhores práticas 
              e inovações na área da enfermagem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.map((post) => (
              <Card key={typeof post.fields.id === 'string' || typeof post.fields.id === 'number'
                      ? post.fields.id
                      : ''} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">
                      {typeof post.fields.category === 'string' || typeof post.fields.category === 'number'
                      ? post.fields.category
                      : ''}
                    </Badge>
                    <span className="text-sm text-slate-500">
                      {typeof post.fields.readTime === 'string' || typeof post.fields.readTime === 'number'
                      ? post.fields.readTime
                      : ''}
                    </span>
                  </div>
                  <CardTitle className="text-xl hover:text-teal-600 transition-colors cursor-pointer">
                    {typeof post.fields.title === 'string' || typeof post.fields.title === 'number'
                    ? post.fields.title
                    : ''}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {post.fields.description && typeof post.fields.description === 'object' && 'nodeType' in post.fields.description
                    ? documentToReactComponents(post.fields.description as import('@contentful/rich-text-types').Document)
                    : null}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                    {typeof post.fields.date === 'string' || typeof post.fields.date === 'number'
                      ? new Date(post.fields.date).toLocaleDateString('pt-BR')
                      : ''}
                    </span>
                    <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700">
                      Ler mais
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Ver Todos os Artigos
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Sobre Carol Lobato
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                Profissional especializada em gestão de cuidados em enfermagem, com vasta experiência 
                em implementação de protocolos de segurança, capacitação de equipes e melhoria 
                contínua da qualidade assistencial.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Comprometida com a excelência no cuidado e a humanização do atendimento, 
                trabalho para transformar a prática da enfermagem através de evidências 
                científicas e inovação.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="text-teal-600 border-teal-600">
                  Gestão de Cuidados
                </Badge>
                <Badge variant="outline" className="text-teal-600 border-teal-600">
                  Segurança do Paciente
                </Badge>
                <Badge variant="outline" className="text-teal-600 border-teal-600">
                  Educação em Saúde
                </Badge>
                <Badge variant="outline" className="text-teal-600 border-teal-600">
                  Qualidade Assistencial
                </Badge>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl p-8 text-center">
              <div className="bg-white rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-16 w-16 text-teal-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">
                Missão
              </h4>
              <p className="text-slate-600">
                Promover a excelência em cuidados de enfermagem através da gestão 
                baseada em evidências, capacitação profissional e inovação tecnológica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Entre em Contato
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Vamos conversar sobre como posso ajudar a melhorar a gestão de cuidados 
              em sua instituição ou projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Mail className="h-8 w-8 text-teal-600 mx-auto mb-4" />
                <CardTitle>E-mail</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">carollobatosaude@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Phone className="h-8 w-8 text-teal-600 mx-auto mb-4" />
                <CardTitle>Telefone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">(11) 95040-2783</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Calendar className="h-8 w-8 text-teal-600 mx-auto mb-4" />
                <CardTitle>Agendamento</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Agendar Consulta
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src={logo.src} alt="Carol Lobato Saúde" className="h-10 w-auto" />
                <div>
                  <h4 className="text-lg font-bold">Carol Lobato</h4>
                  <p className="text-sm text-slate-400">Assistência em Saúde com Foco na Pessoa</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                Especializada em gestão de cuidados em enfermagem, promovendo 
                excelência e humanização no atendimento.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Links Rápidos</h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contato</h5>
              <ul className="space-y-2 text-slate-400">
                <li>carollobatosaude@gmail.com</li>
                <li>(11) 95040-2783</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Carol Lobato Saúde. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}