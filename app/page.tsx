'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Building2, Droplets, Flame, AlarmSmoke, GraduationCap, Users, CheckCircle2, Linkedin, MessageCircle, Mail, Award, Briefcase, FileText, Sparkles, Eye, X } from 'lucide-react';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openImageModal, setOpenImageModal] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const ACENTO_COLOR = 'blue-700';
  const ACENTO_GRADIENT = 'from-blue-700 to-blue-800'; 
  const TEXTO_ACENTO = 'text-blue-800';
  const BG_SOBRIO = 'bg-slate-50';

  const expertise = [
    { icon: Droplets, label: 'Hidrosanitarias', gradient: 'from-blue-400 to-blue-500' },
    { icon: AlarmSmoke, label: 'Contra Incendio', gradient: 'from-orange-500 to-red-600' },
    { icon: Flame, label: 'Redes de Gas', gradient: 'from-yellow-400 to-orange-500' },
    { icon: Building2, label: 'Metodología BIM', gradient: 'from-slate-400 to-blue-400' }
  ];

  const projects = [
    {
      name: 'PARQUES DEL VÍNCULO',
      year: '2025',
      location: 'Soacha',
      type: 'VIS',
      units: '672',
      area: '27,990 m²',
      lod: 'LOD 350',
      description: 'Lideré el equipo desarrollando sistemas completos de acueducto, alcantarillado, gas, PCI y bombeo con integración de infraestructura municipal.',
      tools: ['Revit', 'EPANET', 'Sprinkler', 'Navisworks'],
      highlight: true,
      gradient: 'from-slate-50 to-slate-100'
    },
    {
      name: 'MARAWA',
      year: '2025',
      location: 'Santa Marta',
      type: 'NO VIS',
      units: '278',
      area: '32,114 m²',
      lod: 'LOD 350',
      description: 'Proyecto premium con análisis hidráulico detallado y coordinación integral de sistemas MEP para vivienda de alta gama.',
      tools: ['Revit', 'EPANET', 'Sprinkler', 'Navisworks'],
      highlight: true,
      image: "/images/projects/marawa.png",
      gradient: 'from-slate-50 to-slate-100'
    },
    {
      name: 'EL COUNTRY RESERVADO',
      year: '2024',
      location: 'Santa Marta',
      type: 'NO VIS',
      units: '278',
      area: '29,797 m²',
      lod: 'LOD 350',
      description: 'Ingeniería de detalle con cumplimiento normativo riguroso en proyecto de alta especificación técnica.',
      tools: ['Revit', 'EPANET', 'Sprinkler', 'Navisworks'],
      gradient: 'from-slate-50 to-slate-100'
    },
    {
      name: 'CENTRAL 68',
      year: '2023',
      location: 'Bogotá',
      type: 'VIS',
      units: '654',
      area: '33,975 m²',
      lod: 'LOD 350',
      description: 'Dos torres con amenidades múltiples. Optimización de presiones mediante análisis hidráulico. Diseños aprobados Vanti.',
      tools: ['Revit', 'EPANET', 'Sprinkler', 'Navisworks'],
      image: "/images/projects/central.png",
      gradient: 'from-slate-50 to-slate-100'
    },
    {
      name: 'BOSQUE ROBLEDAL',
      year: '2022',
      location: 'Rionegro',
      type: 'VIS',
      units: '1,512',
      area: '52,438 m²',
      lod: 'LOD 350',
      description: 'Gran escala: coordinación de +1,500 unidades con infraestructura exterior completa bajo metodología BIM.',
      tools: ['Revit', 'EPANET', 'Sprinkler'],
      image: '/images/projects/robledal.png',
      gradient: 'from-slate-50 to-slate-100'
    },
    {
      name: 'SENDEROS DE FONTIBÓN',
      year: '2021',
      location: 'Bogotá',
      type: 'VIS',
      units: '664',
      area: '36,645 m²',
      lod: 'LOD 350',
      description: 'Modelado y coordinación integral con articulación multidisciplinaria. Diseños aprobados Vanti.',
      tools: ['Revit', 'EPANET', 'Sprinkler'],
      gradient: 'from-slate-50 to-slate-100'
    },
    {
      name: 'BOSQUE CEIBAL',
      year: '2020',
      location: 'Rionegro',
      type: 'VIS',
      units: '608',
      area: '41,013 m²',
      lod: 'LOD 350',
      description: 'Diseño completo con áreas comerciales, amenidades y conexión a servicios municipales.',
      tools: ['Revit', 'EPANET'],
      image: '/images/projects/ceibal.png',
      gradient: 'from-slate-50 to-slate-100'
    }
  ];

  return (
    <div className={`min-h-screen ${BG_SOBRIO} text-slate-900 overflow-hidden relative`}>
      {/* Animated subtle background pattern */}
      <div 
        className={`fixed inset-0 ${BG_SOBRIO} bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70`} 
      />
      
      {/* Mouse follower effect - solo desktop */}
      <div 
        className="hidden md:block fixed w-96 h-96 rounded-full pointer-events-none mix-blend-multiply opacity-5 blur-3xl transition-all duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(29,78,216,0.3) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192
        }}
      />

      {/* Floating nav */}
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md rounded-full px-3 md:px-8 py-2 md:py-3 border border-slate-300 shadow-lg max-w-[95%] md:max-w-none">
        <div className="flex items-center gap-3 md:gap-8 overflow-x-auto scrollbar-hide">
          {['Inicio', 'Perfil', 'Servicios', 'Proyectos', 'Contacto'].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`} 
              className={`text-xs md:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors relative group whitespace-nowrap`}
            >
              {item}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${ACENTO_GRADIENT} group-hover:w-full transition-all duration-300`} />
            </a>
          ))}
        </div>
      </nav>

      {/* Contact buttons - Floating */}
      <div className="fixed z-50 flex flex-col gap-2 md:gap-3 right-3 bottom-3 md:right-8 md:top-1/2 md:-translate-y-1/2">
        {[
          { icon: Linkedin, href: 'https://www.linkedin.com/in/danielaf-aguilar/', color: 'from-blue-700 to-blue-800', label: 'LinkedIn' },
          { icon: MessageCircle, href: 'https://wa.me/573209207488', color: 'from-green-600 to-green-700', label: 'WhatsApp' },
          { icon: Mail, href: 'mailto:danielaf.aguilar@gmail.com', color: 'from-slate-500 to-slate-600', label: 'Email' },
          { icon: FileText, href: '/cv/CV Daniela Aguilar_ESP.pdf', color: 'from-slate-700 to-slate-800', label: 'CV' }
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={item.label}
            className={`group relative w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-slate-400/50 transition-all duration-300 text-white`}
          >
            <item.icon className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        ))}
      </div>

      {/* Modal de imagen */}
      {openImageModal && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setOpenImageModal(null)}
        >
          <button
            onClick={() => setOpenImageModal(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label="Cerrar imagen"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <Image 
              src={openImageModal}
              alt="Vista de proyecto"
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Hero */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-7xl w-full">
          <div className="text-center space-y-6 md:space-y-8" style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
            
            {/* Tag de profesión */}
            <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 bg-blue-700/10 border border-blue-700/20 rounded-full mb-6 md:mb-8">
              <Sparkles className={`w-3 h-3 md:w-4 md:h-4 ${TEXTO_ACENTO}`} />
              <span className={`text-xs md:text-sm font-medium ${TEXTO_ACENTO}`}>Ingeniera Civil & BIM Specialist</span>
            </div>
            
            {/* Título principal */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter bg-gradient-to-r from-slate-900 via-slate-800 to-blue-800 bg-clip-text text-transparent px-4">
              Daniela Aguilar
            </h1>
            
            {/* Subtítulo */}
            <p className="text-base sm:text-xl md:text-3xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed px-4">
              Transformando <span className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${ACENTO_GRADIENT}`}>infraestructura MEP</span> con precisión técnica y visión BIM
            </p>

            {/* Expertise cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pt-12 md:pt-16 max-w-6xl mx-auto">
              {expertise.map((item, idx) => (
                <div 
                  key={idx}
                  className={`group relative p-4 md:p-8 rounded-2xl md:rounded-3xl bg-white shadow-lg border border-slate-200 hover:border-${ACENTO_COLOR} transition-all duration-500 hover:scale-105 hover:-translate-y-1 transform-gpu cursor-default`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-2xl md:rounded-3xl transition-opacity duration-500`} />
                  <item.icon className={`w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 mx-auto text-slate-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br ${item.gradient} transition-all duration-300`} strokeWidth={1.5} />
                  <p className="text-xs md:text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* About */}
      <section id="perfil" className="relative py-16 md:py-32 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Perfil Profesional
            </h2>
            <div className={`h-1.5 w-24 md:w-32 bg-gradient-to-r ${ACENTO_GRADIENT} mx-auto rounded-full`} />
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-xl text-slate-700 leading-relaxed">
                Ingeniera civil con <span className={`${TEXTO_ACENTO} font-bold`}>+5 años especializándome</span> en diseño de redes hidrosanitarias, gas y protección contra incendios bajo metodología BIM.
              </p>
              
              <p className="text-base md:text-xl text-slate-700 leading-relaxed">
                Actualmente curso <span className="text-slate-900 font-bold">Maestría en Hidrosistemas</span> para profundizar en optimización y análisis hidráulico avanzado.
              </p>

              <div className="space-y-3 md:space-y-4 pt-4 md:pt-6">
                <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl bg-slate-100 shadow-md border border-blue-300 hover:border-${ACENTO_COLOR} transition-colors`}>
                  <div className="flex items-start gap-3 md:gap-4">
                    <Users className={`w-6 h-6 md:w-8 md:h-8 ${TEXTO_ACENTO} flex-shrink-0 mt-1`} />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1 md:mb-2 text-base md:text-lg">Colaboración BIM</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Coordinación multidisciplinaria en BIM 360 y Autodesk Construction Cloud
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-slate-100 shadow-md border border-slate-300 hover:border-slate-400 transition-colors">
                  <div className="flex items-start gap-3 md:gap-4">
                    <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-slate-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1 md:mb-2 text-base md:text-lg">Cumplimiento Normativo</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        NFPA · NTC 1500 · NTC 2505 · Resolución 0330 · SISTEC EAAB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                  <Briefcase className={`w-5 h-5 md:w-6 md:h-6 ${TEXTO_ACENTO}`} />
                  Stack Técnico
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {['Revit MEP', 'EPANET', 'The Sprinkler Program', 'Navisworks', 'AutoCAD', 'BIM 360', 'ACC'].map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 md:px-5 py-1.5 md:py-2.5 rounded-lg md:rounded-xl bg-slate-100 border border-slate-300 text-slate-700 text-xs md:text-sm font-semibold hover:bg-blue-700/10 hover:border-blue-700 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                  <Award className={`w-5 h-5 md:w-6 md:h-6 ${TEXTO_ACENTO}`} />
                  Competencias Clave
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {[
                    'Análisis y optimización hidráulica',
                    'Coordinación multidisciplinaria BIM',
                    'Dominio normativo técnico',
                    'Visión constructiva integral',
                    'Inglés B2 - Upper Intermediate'
                  ].map((strength, i) => (
                    <div key={i} className="flex items-center gap-2 md:gap-3 group cursor-default">
                      <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-gradient-to-r ${ACENTO_GRADIENT} group-hover:scale-150 transition-transform`} />
                      <span className="text-slate-700 group-hover:text-slate-900 transition-colors text-sm md:text-lg">
                        {strength}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="relative py-16 md:py-32 px-4 md:px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Servicios Especializados
            </h2>
            <div className={`h-1.5 w-24 md:w-32 bg-gradient-to-r ${ACENTO_GRADIENT} mx-auto rounded-full mb-4 md:mb-6`} />
            <p className="text-base md:text-xl text-slate-600">Soluciones integrales en diseño MEP bajo metodología BIM</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: 'Diseño Hidrosanitario',
                items: ['Redes de acueducto', 'Alcantarillado sanitario y pluvial', 'Sistemas de bombeo', 'Análisis hidráulico con EPANET'],
                icon: Droplets,
                iconColor: 'text-blue-700'
              },
              {
                title: 'Protección Contra Incendio',
                items: ['Diseño de redes PCI', 'Cálculos con The Sprinkler Program', 'Cumplimiento NFPA', 'Coordinación con arquitectura'],
                icon: AlarmSmoke,
                iconColor: 'text-red-600'
              },
              {
                title: 'Redes de Gas',
                items: ['Diseño residencial y comercial', 'Cumplimiento NTC 2505', 'Aprobaciones ante empresas de gas', 'Especificaciones técnicas'],
                icon: Flame,
                iconColor: 'text-orange-500'
              },
              {
                title: 'Modelado BIM LOD 350',
                items: ['Modelos MEP en Revit', 'Familias paramétricas', 'Cuantificación automatizada', 'Planos constructivos'],
                icon: Building2,
                iconColor: 'text-blue-700'
              },
              {
                title: 'Coordinación Multidisciplinaria',
                items: ['Detección de conflictos', 'Revisión en Navisworks', 'Gestión en BIM 360/ACC', 'Reportes de coordinación'],
                icon: Users,
                iconColor: 'text-slate-600'
              },
              {
                title: 'Consultoría Técnica',
                items: ['Revisión de diseños', 'Optimización de sistemas', 'Asesoría normativa', 'Soporte en obra'],
                icon: Award,
                iconColor: 'text-yellow-600'
              }
            ].map((service, idx) => (
              <div 
                key={idx}
                className={`group p-6 md:p-8 rounded-xl md:rounded-2xl bg-white shadow-lg border border-slate-200 hover:border-${ACENTO_COLOR} transition-all duration-300 hover:-translate-y-2 transform-gpu`}
              >
                <service.icon className={`w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 ${service.iconColor} transition-colors`} strokeWidth={1.5} />
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                      <CheckCircle2 className={`w-4 h-4 ${service.iconColor} flex-shrink-0 mt-0.5`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="proyectos" className="relative py-16 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Proyectos Destacados
            </h2>
            <div className={`h-1.5 w-24 md:w-32 bg-gradient-to-r ${ACENTO_GRADIENT} mx-auto rounded-full mb-4 md:mb-6`} />
            <p className="text-base md:text-xl text-slate-600">+5,000 unidades diseñadas · LOD 350 · Metodología BIM</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`group relative rounded-2xl md:rounded-3xl bg-white shadow-xl border border-slate-200 hover:border-${ACENTO_COLOR} transition-all duration-500 overflow-hidden hover:scale-[1.01] transform-gpu ${
                  idx === projects.length - 1 ? 'md:col-span-2 md:max-w-3xl md:mx-auto' : ''
                }`}
              >
                <div className="p-6 md:p-8 relative z-10">
                  <div className="flex items-start justify-between mb-4 gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-2 md:mb-3 group-hover:${TEXTO_ACENTO} transition-all duration-300`}>
                        {project.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
                        <span className={`font-bold ${TEXTO_ACENTO}`}>{project.year}</span>
                        <span className="hidden sm:inline">·</span>
                        <span>{project.location}</span>
                        <span className="hidden sm:inline">·</span>
                        <span className="px-2 py-0.5 md:py-1 bg-slate-200 rounded text-xs text-slate-700">{project.type}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-2 flex-shrink-0">
                      <div className="px-2 md:px-3 py-1 md:py-1.5 bg-slate-200 rounded-lg text-xs font-bold text-slate-700 border border-slate-300">
                        {project.lod}
                      </div>
                      
                      {project.highlight && (
                        <div className={`px-2 md:px-3 py-1 bg-blue-700/80 rounded-lg text-xs font-bold text-white shadow-md`}>
                          Reciente
                        </div>
                      )}
                      
                      {project.image && (
                        <button 
                          onClick={() => setOpenImageModal(project.image || null)}
                          className={`w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 text-slate-500 hover:text-${ACENTO_COLOR} hover:border-${ACENTO_COLOR} hover:bg-blue-50 transition-all active:scale-95`}
                          aria-label="Ver imagen del proyecto"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6 pb-4 md:pb-6 border-b border-slate-200">
                    <div>
                      <p className="text-xl md:text-2xl font-bold text-slate-900">{project.units}</p>
                      <p className="text-xs text-slate-500">unidades</p>
                    </div>
                    <div>
                      <p className="text-base md:text-lg font-semibold text-slate-700">{project.area}</p>
                      <p className="text-xs text-slate-500">área total</p>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4 md:mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-2.5 md:px-3 py-1 md:py-1.5 bg-slate-200 border border-slate-300 rounded-lg text-xs font-medium text-slate-600"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 md:mt-24 grid grid-cols-3 gap-4 md:gap-6">
            {[
              { value: '5,000+', label: 'Unidades Diseñadas', icon: Building2 },
              { value: 'LOD 350', label: 'Nivel de Detalle', icon: Award },
              { value: '5+', label: 'Años de Experiencia', icon: GraduationCap }
            ].map((stat, i) => (
              <div key={i} className={`text-center p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white shadow-lg border border-slate-200 hover:border-${ACENTO_COLOR}/50 transition-all hover:scale-105 transform-gpu`}>
                <stat.icon className={`w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4 ${TEXTO_ACENTO}`} />
                <p className="text-2xl md:text-4xl font-black text-slate-900 mb-1 md:mb-2">{stat.value}</p>
                <p className="text-xs md:text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="relative py-16 md:py-32 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className={`relative p-8 md:p-16 rounded-2xl md:rounded-3xl bg-gradient-to-br ${ACENTO_GRADIENT} overflow-hidden shadow-2xl shadow-blue-500/30`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 md:mb-6">
                ¿Listo para colaborar?
              </h2>
              <p className="text-base md:text-xl text-blue-100 mb-8 md:mb-10 max-w-2xl mx-auto">
                Llevemos tu proyecto al siguiente nivel con precisión técnica y metodología BIM
              </p>
              <a 
                href="mailto:danielaf.aguilar@gmail.com"
                className={`inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-white ${TEXTO_ACENTO} rounded-full text-sm md:text-base font-bold hover:scale-105 hover:shadow-2xl hover:shadow-white/30 transition-all duration-300`}
              >
                Hablemos Hoy
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 md:py-12 px-4 md:px-6 border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">Daniela Aguilar</h3>
            <p className="text-slate-500 text-xs md:text-sm">Ingeniera Civil & Especialista BIM MEP</p>
          </div>
          <p className="text-slate-500 text-xs md:text-sm">© 2025 · Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}