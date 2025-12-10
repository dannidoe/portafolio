'use client';

import React, { useState, useEffect } from 'react';
import NextImage from 'next/image';
import { Building2, Droplets, Flame, AlarmSmoke, GraduationCap, Users, CheckCircle2, Linkedin, MessageCircle, Mail, Download } from 'lucide-react';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const expertise = [
    { icon: Droplets, label: 'Hidrosanitarias', color: 'from-blue-400 to-cyan-400' },
    { icon: AlarmSmoke, label: 'Redes Contra Incendio', color: 'from-blue-500 to-indigo-500' },
    { icon: Flame, label: 'Redes de Gas', color: 'from-cyan-400 to-teal-400' },
    { icon: Building2, label: 'Metodología BIM', color: 'from-indigo-400 to-blue-500' }
  ];

  const skills = [
    'Revit MEP', 'EPANET', 'The Sprinkler Program', 'Navisworks',
    'AutoCAD', 'BIM 360', 'Autodesk Construction Cloud'
  ];

  const projects = [
    {
      name: 'PARQUES DEL VÍNCULO',
      year: '2025',
      location: 'Soacha - Colombia',
      type: 'Multifamiliar VIS',
      units: '672 unidades',
      area: '27,990.91 m²',
      lod: 'LOD 350',
      description: 'Lideré el equipo de modelado desarrollando sistemas completos de acueducto, alcantarillado sanitario y pluvial, gas, PCI y bombeo, incluyendo redes exteriores integradas con infraestructura municipal.',
      tools: ['Revit', 'EPANET', 'The Sprinkler Program', 'Navisworks'],
      highlight: true,
      image: null
    },
    {
      name: 'MARAWA',
      year: '2025',
      location: 'Santa Marta - Colombia',
      type: 'Multifamiliar NO VIS',
      units: '278 apartamentos',
      area: '32,114.23 m²',
      lod: 'LOD 350',
      description: 'Proyecto de alta gama diseñado para vivienda permanente y alquiler a corto plazo. Coordiné la integración de todos los sistemas MEP con análisis hidráulico detallado y revisión multidisciplinaria.',
      tools: ['Revit', 'EPANET', 'The Sprinkler Program', 'Navisworks'],
      highlight: true,
      image: "/images/projects/marawa.png",
      imageCaption: 'Vista de proyecto coordinada en Navisworks, que ilustra la alineación de los modelos MEP, arquitectónicos y estructurales dentro del entorno digital'
    },
    {
      name: 'EL COUNTRY RESERVADO',
      year: '2024',
      location: 'Santa Marta - Colombia',
      type: 'Multifamiliar NO VIS',
      units: '278 apartamentos',
      area: '29,797.33 m²',
      lod: 'LOD 350',
      description: 'Desarrollé la ingeniería de detalle de las redes hidrosanitarias, gas y protección contra incendio, asegurando compatibilidad espacial y cumplimiento normativo en un proyecto de alta especificación técnica.',
      tools: ['Revit', 'EPANET', 'The Sprinkler Program', 'Navisworks'],
      image: null
    },
    {
      name: 'CENTRAL 68',
      year: '2023',
      location: 'Bogotá - Colombia',
      type: 'Multifamiliar VIS',
      units: '654 apartamentos',
      area: '33,975.36 m²',
      lod: 'LOD 350',
      description: 'Diseñé los sistemas hidrosanitarios, gas, PCI y bombeo para dos torres con múltiples niveles de amenidades, coordinando modelos BIM y optimizando presiones mediante análisis hidráulico. Diseños aprobados ante Vanti.',
      tools: ['Revit', 'EPANET', 'The Sprinkler Program', 'Navisworks'],
      image: "/images/projects/central.png",
      imageCaption: 'Vista completa del proyecto en Revit de las redes de tuberías coordinadas'
    },
    {
      name: 'BOSQUE ROBLEDAL',
      year: '2022',
      location: 'Rionegro - Colombia',
      type: 'Multifamiliar VIS',
      units: '1,512 apartamentos',
      area: '52,438.58 m²',
      lod: 'LOD 350',
      description: 'Complejo de gran escala donde dirigí el diseño integral de redes MEP, incluyendo infraestructura exterior y coordinación de más de 1,500 unidades bajo metodología BIM.',
      tools: ['Revit', 'EPANET', 'The Sprinkler Program'],
      image: '/images/projects/robledal.png',
      imageCaption: 'Vista completa del proyecto en Revit de las redes de tuberías coordinadas'
    },
    {
      name: 'SENDEROS DE FONTIBÓN',
      year: '2021',
      location: 'Bogotá - Colombia',
      type: 'Multifamiliar VIS',
      units: '664 apartamentos',
      area: '36,645.39 m²',
      lod: 'LOD 350',
      description: 'Modelé y coordiné los sistemas de acueducto, alcantarillado, gas y protección contra incendio, garantizando la articulación entre disciplinas y el cumplimiento de especificaciones técnicas. Diseños aprobados ante Vanti.',
      tools: ['Revit', 'EPANET', 'The Sprinkler Program'],
      image: null
    },
    {
      name: 'BOSQUE CEIBAL',
      year: '2020',
      location: 'Rionegro - Colombia',
      type: 'Multifamiliar VIS',
      units: '608 apartamentos',
      area: '41,013.91 m²',
      lod: 'LOD 350',
      description: 'Proyecto con áreas comerciales y amenidades donde desarrollé el diseño completo de redes hidrosanitarias, gas, PCI y bombeo, incluyendo conexión a servicios municipales.',
      tools: ['Revit', 'EPANET'],
      image: '/images/projects/ceibal.png',
      imageCaption: 'Sección isométrica en Revit que muestra el diseño MEP del edificio con el modelo arquitectónico en underlay'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 text-slate-800 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute w-96 h-96 bg-blue-200 rounded-full blur-3xl -top-48 -left-48 animate-pulse" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute w-96 h-96 bg-cyan-200 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" 
             style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute w-72 h-72 bg-indigo-200 rounded-full blur-3xl top-1/2 right-1/3 animate-pulse" 
             style={{ animationDuration: '12s', animationDelay: '4s' }} />
      </div>

      {/* BIM MEP Pattern Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bim-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Tuberías horizontales */}
              <line x1="0" y1="40" x2="200" y2="40" stroke="currentColor" strokeWidth="4"/>
              <line x1="0" y1="80" x2="200" y2="80" stroke="currentColor" strokeWidth="3"/>
              <line x1="0" y1="120" x2="200" y2="120" stroke="currentColor" strokeWidth="4"/>
              <line x1="0" y1="160" x2="200" y2="160" stroke="currentColor" strokeWidth="3"/>
              
              {/* Tuberías verticales */}
              <line x1="50" y1="0" x2="50" y2="200" stroke="currentColor" strokeWidth="3"/>
              <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="4"/>
              <line x1="150" y1="0" x2="150" y2="200" stroke="currentColor" strokeWidth="3"/>
              
              {/* Conexiones y válvulas */}
              <circle cx="50" cy="40" r="6" fill="currentColor"/>
              <circle cx="100" cy="80" r="6" fill="currentColor"/>
              <circle cx="150" cy="120" r="6" fill="currentColor"/>
              <circle cx="100" cy="160" r="6" fill="currentColor"/>
              
              {/* Válvulas cuadradas */}
              <rect x="92" y="32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"/>
              <rect x="142" y="112" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"/>
              
              {/* Flechas de flujo */}
              <path d="M 60 40 L 70 35 L 70 45 Z" fill="currentColor"/>
              <path d="M 110 80 L 120 75 L 120 85 Z" fill="currentColor"/>
              
              {/* Bridas */}
              <circle cx="50" cy="120" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="150" cy="40" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bim-pattern)" className="text-blue-600"/>
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div 
          className="max-w-5xl w-full transform transition-all duration-1000"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className="text-center space-y-8">
            <div className="mb-8">
              <p className="text-2xl md:text-3xl text-slate-600 font-light mb-2">¡Hola! Soy</p>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-2 text-slate-900">
                Daniela Aguilar
              </h1>
            </div>
            
            <div className="inline-block">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                Ingeniería + Diseño
              </h2>
              <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-full" />
            </div>
            
            <p className="text-xl md:text-2xl text-slate-700 font-light max-w-3xl mx-auto leading-relaxed">
              Especialista en <span className="text-cyan-600 font-semibold">diseño de redes MEP</span> con metodología BIM, 
              optimizando sistemas hidráulicos y coordinación multidisciplinaria
            </p>

            {/* Expertise Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
              {expertise.map((item, idx) => (
                <div 
                  key={idx}
                  className="group relative p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200 hover:border-blue-400 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-sm hover:shadow-xl"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`} />
                  <item.icon className="w-10 h-10 mb-3 mx-auto text-slate-600 group-hover:text-slate-900 transition-colors duration-300" />
                  <p className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-blue-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Floating Contact Buttons */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        <a 
          href="https://www.linkedin.com/in/danielaf-aguilar/" 
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:shadow-2xl hover:shadow-blue-400/50 hover:scale-110 transition-all duration-300"
          title="LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a 
          href="https://wa.me/573209207488" 
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:shadow-2xl hover:shadow-green-400/50 hover:scale-110 transition-all duration-300"
          title="WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a 
          href="mailto:danielaf.aguilar@gmail.com"
          className="group flex items-center justify-center w-14 h-14 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-full hover:shadow-2xl hover:shadow-indigo-400/50 hover:scale-110 transition-all duration-300"
          title="Email"
        >
          <Mail className="w-6 h-6" />
        </a>
        <a 
          href="/cv/CV Daniela Aguilar_ESP.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-14 h-14 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-full hover:shadow-2xl hover:shadow-slate-400/50 hover:scale-110 transition-all duration-300"
          title="Ver CV"
        >
          <Download className="w-6 h-6" />
        </a>
      </div>

      {/* About Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-blue-600" />
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Sobre Mí
                </h2>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed text-justify">
                Ingeniera civil especializada en <span className="text-blue-700 font-semibold">diseño de redes hidrosanitarias, 
                gas y protección contra incendios</span> bajo metodología BIM.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed text-justify">
                Actualmente curso <span className="text-indigo-700 font-semibold">Maestría en Hidrosistemas</span>, 
                fortaleciendo mi capacidad para optimizar sistemas con comprensión profunda del comportamiento hidráulico.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed text-justify">
                Mi experiencia en obra y coordinación BIM me permite integrar <span className="text-cyan-700 font-semibold">criterios 
                técnicos, constructivos y normativos</span> para entregar diseños coherentes y ejecutables.
              </p>

              <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-300 rounded-xl">
                <Users className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                <p className="text-slate-700 text-justify">
                  Trabajo colaborativamente con equipos multidisciplinarios usando plataformas como BIM 360 y Autodesk Construction Cloud 
                  para garantizar compatibilidad entre disciplinas.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-indigo-50 border border-indigo-300 rounded-xl mt-4">
                <CheckCircle2 className="w-6 h-6 text-indigo-700 flex-shrink-0 mt-1" />
                <div className="text-slate-700">
                  <p className="font-semibold mb-2">Normatividad Aplicada</p>
                  <p className="text-sm">NFPA · NTC 1500 · NTC 2505 · Resolución 0330 · SISTEC EAAB</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Herramientas & Plataformas</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group px-5 py-3 bg-white/80 backdrop-blur-sm border border-slate-300 rounded-full hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-12 space-y-3">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Fortalezas Clave</h3>
                {[
                  'Análisis y optimización hidráulica',
                  'Coordinación multidisciplinaria BIM',
                  'Conocimiento de estándares normativos',
                  'Visión constructiva práctica',
                  'Inglés B2 - Upper Intermediate'
                ].map((strength, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 group-hover:scale-125 transition-transform" />
                    <span className="text-slate-700 group-hover:text-slate-900 transition-colors">
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-transparent via-white/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-xl text-slate-600">Desarrollos multifamiliares de gran escala con metodología BIM</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`group relative rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 shadow-lg hover:shadow-2xl overflow-hidden ${
                  project.highlight 
                    ? 'bg-gradient-to-br from-blue-50/80 via-cyan-50/80 to-indigo-50/80 border-blue-400 hover:border-cyan-500' 
                    : 'bg-white/80 border-slate-300 hover:border-blue-400'
                }`}
              >
                {project.highlight && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-xs font-bold shadow-md z-10">
                    2025
                  </div>
                )}

                {project.image && (
                  <div className="relative overflow-hidden max-h-0 group-hover:max-h-[600px] transition-all duration-700 ease-in-out">
                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden border-b-2 border-slate-300">
                      <NextImage 
                        src={project.image}
                        alt={`Proyecto ${project.name}`}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {project.imageCaption && (
                      <div className="p-3 bg-slate-50 border-b border-slate-200">
                        <p className="text-slate-600 text-xs italic">{project.imageCaption}</p>
                      </div>
                    )}
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-blue-700 font-semibold">{project.year}</p>
                    </div>
                    <div className="px-3 py-1 bg-slate-200 rounded-full text-xs font-medium text-slate-700">
                      {project.lod}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <p className="text-slate-700 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-blue-600" />
                      {project.type}
                    </p>
                    <p className="text-slate-600 text-sm">📍 {project.location}</p>
                    <p className="text-slate-800 font-semibold">{project.units}</p>
                    <p className="text-slate-600 text-sm">📐 {project.area}</p>
                  </div>

                  <p className="text-slate-700 leading-relaxed mb-4 text-justify">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-100 border border-slate-300 rounded-lg text-xs text-slate-700 group-hover:border-blue-400 group-hover:bg-blue-50 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Summary */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Unidades Diseñadas', value: '5,000+' },
              { label: 'Nivel de Detalle', value: 'LOD 350' },
              { label: 'Normatividad', value: 'NFPA · NTC' },
              { label: 'Años de Experiencia', value: '5+' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-white/80 rounded-2xl border border-slate-300 hover:border-blue-400 transition-all shadow-sm hover:shadow-lg">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-blue-50/80 via-cyan-50/80 to-indigo-50/80 backdrop-blur-sm border border-blue-300 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-indigo-400 opacity-0 hover:opacity-10 transition-opacity duration-500" />
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              ¿Listo para colaborar?
            </h2>
            <p className="text-xl text-slate-700">
              Trabajemos juntos en tu próximo proyecto BIM
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-slate-300">
        <div className="max-w-5xl mx-auto text-center text-slate-600 text-sm">
          <p>© 2025 · Daniela Aguilar · Ingeniera Civil & Especialista BIM</p>
        </div>
      </footer>
    </div>
  );
}
