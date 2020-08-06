/**
 * Constants file
 */
const constants = {
  validations: {
    // E00xx
    INVALID_REQUEST_DATA: { apicode: 'E0000', message: 'Dados de requisição inválidos' },
    INVALID_DATA_FIELD: { apicode: 'E0001', message: 'Dado inválido' },
    INVALID_FILE_EXTESION: { apicode: 'E0002', message: 'Extenssão inválida' }
  },
  auth: {
    // E01xx
    error: {
      UNAUTHORIZED: { apicode: 'E0100', message: 'Acesso negado! Token inválido ou inexistente' }
    }
  },
  user: {
    // S02xx
    success: {
      CREATE: { apicode: 'S0200', message: 'Usuário criado com sucesso' },
      UPDATE: { apicode: 'S0201', message: 'Usuário atualizado com sucesso' },
      REMOVE: { apicode: 'S0202', message: 'Usuário deletado com sucesso' },
      LOGIN: { apicode: 'S0203', message: 'Usuario logado' },
      FORGOT_PASSWORD: { apicode: 'S0204', message: 'Email enviado' },
      RESET_PASSWORD: { apicode: 'S0205', message: 'Senha redefinida com sucesso' }
    },
    // E02xx
    error: {
      CREATE: { apiapicode: 'E0200', message: 'Erro ao criar o Usuário' },
      UPDATE: { apicode: 'E0201', message: 'Erro ao atualizar Usuário' },
      REMOVE: { apicode: 'E0202', message: 'Erro ao deletar Usuário' },
      LOGIN: { apicode: 'E0203', message: 'Erro ao realizar login' },
      NOT_FOUND: { apicode: 'E0204', message: 'Erro ao buscar Usuário(s)' },
      INVALID_USER_LOGIN: { apicode: 'E0205', message: 'Email ou senha invalidos' },
      FORGOT_PASSWORD: { apicode: 'E0206', message: 'Erro ao enviar email' },
      FORGOT_PASSWORD_MAIL: { apicode: 'E0207', message: 'Email inválido' },
      RESET_PASSWORD: { apicode: 'E0208', message: 'Erro ao redefinir senha' },
      RESET_PASSWORD_TOKEN: { apicode: 'E0209', message: 'Token inválido' },
      RESET_PASSWORD_EXPIRES: { apicode: 'E0210', message: 'Token expirou' },
      MAIL_EXISTS: { apicode: 'E0211', message: 'Email já existe' }
    }
  },
  investor: {
    // S03xx
    success: {
      CREATE: { apicode: 'S0300', message: 'Investidor criado com sucesso' },
      UPDATE: { apicode: 'S0301', message: 'Investidor atualizado com sucesso' }
    },
    // E03xx
    error: {
      NOT_FOUND: { apicode: 'E0300', message: 'Erro ao buscar Investidor(es)' },
      INVESTMENTS_NOT_FOUND: { apicode: 'E0301', message: 'Erro ao buscar Investimentos' },
      INVESTMENTS_COUNT: { apicode: 'E0302', message: 'Erro ao buscar total de Investimentos' },
      INVESTED_AMOUNT: { apicode: 'E0303', message: 'Erro ao buscar valor total investido' },
      RECEIVED_AMOUNT: { apicode: 'E0304', message: 'Erro ao buscar valor total recebido' },
      PROJECTED_AMOUNT: { apicode: 'E0305', message: 'Erro ao buscar valor total projetado' },
      CREATE: { apicode: 'E0306', message: 'Erro ao criar o Investidor' },
      UPDATE: { apicode: 'E0307', message: 'Erro ao atualizar o Investidor' },
      INVALID_DATA: { apicode: 'E0308', message: 'Dados inválidos' }
    },
    phone: {
      // S03xx
      success: {
        CREATE: { apicode: 'S0302', message: 'Telefone(s) criado(s) com sucesso' },
        REMOVE: { apicode: 'S0303', message: 'Telefone(s) deletado(s) com sucesso' }
      },
      // E03xx
      error: {
        NOT_FOUND: { apicode: 'E0309', message: 'Telefone(s) não encontrado' },
        CREATE: { apicode: 'E0310', message: 'Erro ao criar o(s) telefone(s)' },
        REMOVE: { apicode: 'E0311', message: 'Erro ao deletar o(s) telefone(s)' },
        REQUIRED: { apicode: 'E0312', message: 'Telefone é um dado obrigatório' }
      }
    },
    bank_account: {
      // S03xx
      success: {
        CREATE: { apicode: 'S0304', message: 'Conta(s) criada(s) com sucesso' },
        REMOVE: { apicode: 'S0305', message: 'Conta(s) deletada(s) com sucesso' }
      },
      // E03xx
      error: {
        NOT_FOUND: { apicode: 'E0313', message: 'Conta(s) não encontrada(s)' },
        CREATE: { apicode: 'E0314', message: 'Erro ao criar a(s) conta(s)' },
        REMOVE: { apicode: 'E0315', message: 'Erro ao deletar a(s) conta(s)' },
        REQUIRED: { apicode: 'E0316', message: 'Conta bancária é um dado obrigatório' }
      }
    },
    document: {
      // S03xx
      success: {
        CREATE: { apicode: 'S0306', message: 'Comprovantes enviados com sucesso' }
      },
      // E03xx
      error: {
        NOT_FOUND: { apicode: 'E0317', message: 'Comprovantes não encontrados' },
        CREATE: { apicode: 'E0318', message: 'Erro ao tentar enviar os comprovantes' },
        REQUIRED: { apicode: 'E0319', message: 'Envie fotos do seu documento (frente e verso) e comprovante de residência' }
      }
    }
  },
  investment: {
    // S04xx
    success: {
      CREATE: { apicode: 'S0400', message: 'Investimento criado com sucesso' },
      CANCEL: { apicode: 'S0401', message: 'Investimento cancelado com sucesso' },
      TED_CONFIRMATION: { apicode: 'S0402', message: 'Comprovante de TED enviado' },
      CONFIRMATION: { apicode: 'S0403', message: 'Investimento(s) comnfirmado(s)' }
    },
    // E04xx
    error: {
      NOT_FOUND: { apicode: 'E0400', message: 'Erro ao buscar Investimento(s)' },
      CREATE: { apicode: 'E0401', message: 'Erro ao criar o investimento' },
      CANCEL: { apicode: 'E0402', message: 'Erro ao cancelar o investimento' },
      TED_CONFIRMATION: { apicode: 'E0403', message: 'Erro ao enviar comprovante de TED' },
      CONFIRMATION: { apicode: 'E0404', message: 'Erro ao confirmar o(s) investimento(s)' },
      INVESTOR_NOT_FOUND: { apicode: 'E0405', message: 'Complete seu cadastro para começar a investir' },
      BLACK_LIST: { apicode: 'E0406', message: 'Socios não podem realizar investimentos' },
      MIN_VALUE: { apicode: 'E0407', message: 'Valor abaixo do mínimo nescessário' },
      MAX_AMOUNT_NOT_QUALIFIED: { apicode: 'E0408', message: 'Limite de investimentos excedido para investidor não qualificado' },
      MAX_AMOUNT_QUALIFIED: { apicode: 'E0409', message: 'Limite de investimentos excedido' },
      NO_TED_FILE: { apicode: 'E0410', message: 'Comprovante de TED não anexado' },
      INVALID_DATA: { apicode: 'E0411', message: 'Formato de dados inválido' },
      INVALID_CANCEL: { apicode: 'E0412', message: 'Não é possivel cancelar investimentos com TED e/ou confirmados!' },
      INVALID_CANCEL_TIME: { apicode: 'E0413', message: 'Não é possivel cancelar investimentos confirmados a mais de 7 dias!' },
      INVALID_CANCEL_PENDING_LIMIT: {
        apicode: 'E0414',
        message: 'Só é possível cancelar um investimento em pendência com mais de 7 dias!'
      },
      ADMIN: { apicode: 'E0415', message: 'Não é possível investir utilizando um perfil de Administrador' }
    }
  },
  fundraising: {
    // S05xx
    success: {
      CREATE: { apicode: 'S0501', message: 'Captação criada com sucesso' },
      UPDATE: { apicode: 'S0502', message: 'Captação atualizada com sucesso' },
      REMOVE: { apicode: 'S0503', message: 'Captação deletada com sucesso' },
      FINISH: { apicode: 'S0504', message: 'Captação encerrada com sucesso' }
    },
    // E05xx
    error: {
      NOT_FOUND: { apicode: 'E0501', message: 'Erro ao buscar a(s) Captação(ões)' },
      AMOUNT_RAISED: { apicode: 'E0502', message: 'Erro ao buscar total captado' },
      AMOUNT_EXCEEDED: { apicode: 'E0508', message: 'O valor da captação ultrapassa o limite de R$5MM' },
      INVESTORS: { apicode: 'E0503', message: 'Erro ao buscar os Investidores da Captação' },
      CREATE: { apicode: 'E0504', message: 'Erro ao criar a captação' },
      UPDATE: { apicode: 'E0505', message: 'Erro ao atualizar a captação' },
      REMOVE: { apicode: 'E0506', message: 'Erro ao deletar a captação' },
      FINISH: { apicode: 'E0504', message: 'Erro ao encerrar a captação' },
      NOT_REMOVED_INVESTMENT: { apicode: 'E0507', message: 'Já existem investimentos realizados na captação' }
    }
  },
  custodian: {
    // S06xx
    success: {
      CREATE: { apicode: 'S0600', message: 'Custodiador criado com sucesso' },
      UPDATE: { apicode: 'S0601', message: 'Custodiador atualizado com sucesso' },
      REMOVE: { apicode: 'S0602', message: 'Custodiador deletado com sucesso' }
    },
    // E06xx
    error: {
      NOT_FOUND: { apicode: 'E0600', message: 'Erro ao buscar o Custodiador' },
      CREATE: { apicode: 'E0602', message: 'Erro ao criar o custodiador' },
      UPDATE: { apicode: 'E0603', message: 'Erro ao atualizar o custodiador' },
      REMOVE: { apicode: 'E0604', message: 'Erro ao deletar o custodiador' }
    }
  },
  building: {
    // S07xx
    success: {
      CREATE: { apicode: 'S0700', message: 'Obra criada com sucesso' },
      UPDATE: { apicode: 'S0701', message: 'Obra atualizada com sucesso' },
      REMOVE: { apicode: 'S0702', message: 'Obra deletada com sucesso' }
    },
    // E07xx
    error: {
      NOT_FOUND: { apicode: 'E0700', message: 'Erro ao buscar Obra(s)' },
      CREATE: { apicode: 'E0701', message: 'Erro ao criar Obra' },
      UPDATE: { apicode: 'E0702', message: 'Erro ao atualizar Obra' },
      REMOVE: { apicode: 'E0703', message: 'Erro ao deletar Obra' },
      INVALID_DATA: { apicode: 'E0704', message: 'Dados inválidos' }
    },
    images: {
      // S07xx
      success: {
        CREATE: { apicode: 'S0703', message: 'Imagens enviadas com sucesso' },
        REMOVE: { apicode: 'S0704', message: 'Imagens deletadas com sucesso' }
      },
      // E07xx
      error: {
        NOT_FOUND: { apicode: 'E0705', message: 'Erro ao buscar imagens' },
        CREATE: { apicode: 'E0706', message: 'Erro ao enviar as imagens' },
        REMOVE: { apicode: 'E0707', message: 'Erro ao deletar as imagens' }
      }
    }
  },
  builder: {
    // S08xx
    success: {
      CREATE: { apicode: 'S0800', message: 'Construtora criada com sucesso' },
      UPDATE: { apicode: 'S0801', message: 'Construtora atualizada com sucesso' },
      REMOVE: { apicode: 'S0802', message: 'Construtora deletada com sucesso' },
      SET_LOGO: { apicode: 'S0803', message: 'Imagem enviada com sucesso' },
      REMOVE_LOGO: { apicode: 'S0804', message: 'Imagem removida com sucesso' }
    },
    // E08xx
    error: {
      NOT_FOUND: { apicode: 'E0800', message: 'Erro ao buscar construtora(s)' },
      CREATE: { apicode: 'E0801', message: 'Erro ao criar a construtora' },
      UPDATE: { apicode: 'E0802', message: 'Erro ao atualizar a construtora' },
      REMOVE: { apicode: 'E0803', message: 'Erro ao deletar a construtora' },
      SET_LOGO: { apicode: 'E0804', message: 'Erro ao tentar enviar imagem' },
      REMOVE_LOGO: { apicode: 'E0805', message: 'Erro ao tentar remover imagem' },
      REQUIRED: { apicode: 'E0806', message: 'Informe seus dados' },
      INVALID_DATA: { apicode: 'E0807', message: 'Dados inválidos' },
      CNPJ: { apicode: 'E0808', message: 'O CNPJ informado já se encontra cadastrado no sistema.' }
    },
    phones: {
      // S08xx
      success: {
        CREATE: { apicode: 'S0805', message: 'Telefone(s) criado(s) com sucesso' },
        REMOVE: { apicode: 'S0806', message: 'Telefone(s) deletado(s) com sucesso' }
      },
      // E08xx
      error: {
        NOT_FOUND: { apicode: 'E0808', message: 'Erro ao buscar telefones' },
        CREATE: { apicode: 'E0809', message: 'Erro ao criar telefone(s)' },
        REMOVE: { apicode: 'E0810', message: 'Erro ao deletar telefone(s)' },
        REQUIRED: { apicode: 'E0811', message: 'Informe pelo menos 1 telefone' }
      }
    },
    partners: {
      // S08xx
      success: {
        CREATE: { apicode: 'S0807', message: 'Sócio(s) criado(s) com sucesso' },
        REMOVE: { apicode: 'S0808', message: 'Sócio(s) deletado(s) com sucesso' }
      },
      // E08xx
      error: {
        NOT_FOUND: { apicode: 'E0812', message: 'Erro ao buscar sócios' },
        CREATE: { apicode: 'E0813', message: 'Erro ao criar sócio(s)' },
        REMOVE: { apicode: 'E0814', message: 'Erro ao deletar sócio(s)' }
      }
    }
  }
}

export default constants
