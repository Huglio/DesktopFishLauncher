export const ERROR_CODES = {
  // Session Context (SC)
  SC_001: 'SC_001', // Erro ao carregar token do storage
  SC_002: 'SC_002', // Erro ao salvar token no storage
  SC_003: 'SC_003', // Erro ao remover token do storage

  // Sale Routes (SR)
  SR_001: 'SR_001', // Erro ao buscar usuário (todas as tentativas falharam)

  // API Calls (API)
  API_001: 'API_001', // Erro de conexão com a API
  API_002: 'API_002', // Erro de autenticação da API
  API_003: 'API_003', // Erro de resposta inválida da API
} as const;
