'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const [companies] = await queryInterface.sequelize.query('SELECT id FROM companies;');

    await queryInterface.bulkInsert('jobs', [{
        title: 'Backend Developer',
        description: 'Desenvolver e manter APIs REST em Node.js, integrar com PostgreSQL e escrever testes.',
        limit_date: new Date('2026-03-31'),
        company_id: companies[0].id
      },
      {
        title: 'Frontend Engineer (React)',
        description: 'Construir interfaces em React/TypeScript com foco em performance e acessibilidade.',
        limit_date: new Date('2026-04-15'),
        company_id: companies[1].id
      },
      {
        title: 'Data Engineer',
        description: 'Projetar pipelines ETL, otimizar queries e trabalhar com armazenamento em nuvem.',
        limit_date: new Date('2026-05-01'),
        company_id: companies[2].id
      },
      {
        title: 'Machine Learning Engineer',
        description: 'Desenvolver modelos ML, implementar inferência e monitoramento em produção.',
        limit_date: new Date('2026-02-28'),
        company_id: companies[4].id
      },
      {
        title: 'Sustainability Product Manager',
        description: 'Liderar roadmap de produtos sustentáveis, interface com times de engenharia e operações.',
        limit_date: new Date('2026-06-30'),
        company_id: companies[3].id
      },
      {
        title: 'Real-time Platform Engineer',
        description: 'Construir soluções de streaming e análise em tempo real com baixa latência.',
        limit_date: new Date('2026-03-20'),
        company_id: companies[5].id
      },
      {
        title: 'DevOps Engineer',
        description: 'Automatizar pipelines CI/CD, gerenciar infraestrutura como código e observabilidade.',
        limit_date: new Date('2026-04-01'),
        company_id: companies[6].id
      },
      {
        title: 'Product Designer',
        description: 'Criar experiências de usuário para web e mobile, prototipar e validar hipóteses.',
        limit_date: new Date('2026-05-15'),
        company_id: companies[8].id
      },
      {
        title: 'Logistics Optimization Engineer',
        description: 'Desenvolver algoritmos de roteirização e otimização para operações de frota.',
        limit_date: new Date('2026-06-10'),
        company_id: companies[9].id
      },
      {
        title: 'BI Engineer',
        description: 'Construir pipelines de dados, modelos analíticos e dashboards para times de negócio.',
        limit_date: new Date('2026-07-01'),
        company_id: companies[7].id
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('jobs', null, {});
  }
};
