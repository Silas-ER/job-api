'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('companies', [
      {
        name: 'Acme Tech',
        bio: 'Empresa de tecnologia focada em soluções cloud-native e APIs escaláveis.',
        website: 'https://acme.tech',
        email: 'contact@acme.tech',
      },
      {
        name: 'NovaSoft',
        bio: 'Desenvolvimento de software sob medida para fintechs e e-commerce.',
        website: 'https://novasoft.com',
        email: 'hello@novasoft.com',
      },
      {
        name: 'BlueWave Solutions',
        bio: 'Consultoria em transformação digital e engenharia de dados.',
        website: 'https://bluewave.io',
        email: 'info@bluewave.io',
      },
      {
        name: 'Stellar Labs',
        bio: 'Pesquisa e desenvolvimento em ML/AI aplicados a produtos SaaS.',
        website: 'https://stellarlabs.ai',
        email: 'team@stellarlabs.ai',
      },
      {
        name: 'GreenField Industries',
        bio: 'Soluções sustentáveis para logística e cadeia de suprimentos.',
        website: 'https://greenfield.co',
        email: 'contact@greenfield.co',
      },
      {
        name: 'QuantumDynamics',
        bio: 'Plataforma de análise em tempo real e streaming de eventos.',
        website: 'https://quantumdynamics.com',
        email: 'support@quantumdynamics.com',
      },
      {
        name: 'Orbit Systems',
        bio: 'Infraestrutura e ferramentas DevOps para times ágeis.',
        website: 'https://orbitsystems.dev',
        email: 'ops@orbitsystems.dev',
      },
      {
        name: 'PixelForge',
        bio: 'Agência digital especializada em produtos web e mobile.',
        website: 'https://pixelforge.studio',
        email: 'studio@pixelforge.studio',
      },
      {
        name: 'Harbor Logistics',
        bio: 'Soluções de roteirização e otimização de frotas.',
        website: 'https://harborlogistics.com',
        email: 'sales@harborlogistics.com',
      },
      {
        name: 'Summit Analytics',
        bio: 'Ferramentas de BI e dashboards para tomada de decisão.',
        website: 'https://summit-analytics.io',
        email: 'contact@summit-analytics.io',
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('companies', null, {});
  }
};
