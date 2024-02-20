CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    tipo_usuario VARCHAR(20) NOT NULL
);

CREATE TABLE senhas (
    usuario_id INTEGER PRIMARY KEY REFERENCES usuarios(id),
    hash_senha VARCHAR(100) NOT NULL,
    salt VARCHAR(50) NOT NULL
);

CREATE TABLE projetos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    duracao INTEGER DEFAULT 0,
    perfilBuscado TEXT,
    status VARCHAR(20) DEFAULT 'Em andamento',
    criador_id INTEGER REFERENCES usuarios(id),
    n_participantes INTEGER DEFAULT 1,
    participantes JSONB DEFAULT '[]'::JSONB,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_finalizacao TIMESTAMP DEFAULT NULL
);

CREATE TABLE comentarios (
    id SERIAL PRIMARY KEY,
    texto TEXT NOT NULL,
    usuario_id INTEGER REFERENCES usuarios(id),
    projeto_id INTEGER REFERENCES projetos(id),
    data_comentario TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE avaliacoes_usuarios (
    id SERIAL PRIMARY KEY,
    avaliador_id INTEGER REFERENCES usuarios(id),
    avaliado_id INTEGER REFERENCES usuarios(id),
    pontuacao INTEGER CHECK (pontuacao >= 1 AND pontuacao <= 5),
    data_avaliacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE avaliacoes_projetos (
    id SERIAL PRIMARY KEY,
    avaliador_id INTEGER REFERENCES usuarios(id),
    projeto_id INTEGER REFERENCES projetos(id),
    pontuacao INTEGER CHECK (pontuacao >= 1 AND pontuacao <= 5),
    data_avaliacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
