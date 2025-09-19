-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 19/09/2025 às 16:26
-- Versão do servidor: 8.0.43-34
-- Versão do PHP: 8.3.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `amirch28_obtuario`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `audit_logs`
--

CREATE TABLE `audit_logs` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `user_name` varchar(100) DEFAULT NULL,
  `action` varchar(100) NOT NULL,
  `table_name` varchar(50) DEFAULT NULL,
  `record_id` int DEFAULT NULL,
  `old_values` text,
  `new_values` text,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `audit_logs`
--

INSERT INTO `audit_logs` (`id`, `user_id`, `user_name`, `action`, `table_name`, `record_id`, `old_values`, `new_values`, `ip_address`, `user_agent`, `created_at`) VALUES
(54, 5, 'Roberto Pedro', 'LOGIN', NULL, NULL, NULL, '{\"user_id\":5,\"user_name\":\"Roberto Pedro\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 17:16:18'),
(55, 5, 'Roberto Pedro', 'CREATE_QUADRAS', 'quadras', 16, NULL, '{\"nome\":\"C\",\"foto\":null}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 17:17:12'),
(56, 5, 'Roberto Pedro', 'CREATE_PESSOAS', 'pessoas', 20, NULL, '{\"nome\":\"José Fernandes de Araújo\",\"cpf\":\"170.267.506-82\",\"data_nascimento\":\"1946-05-13\",\"data_falecimento\":\"2025-09-18\",\"mae\":\"Alzimira Fernandes de Araújo\",\"pai\":\"Quintino Laurentino de Araújo\",\"setor\":\"III\",\"jazigo\":\"481\",\"gaveta\":\"1\",\"quadra_id\":\"16\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 17:20:52'),
(57, 5, 'Roberto Pedro', 'LOGOUT', NULL, NULL, NULL, '{\"user_id\":5,\"user_name\":\"Roberto Pedro\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 17:25:32'),
(58, 5, 'Roberto Pedro', 'LOGIN', NULL, NULL, NULL, '{\"user_id\":5,\"user_name\":\"Roberto Pedro\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 17:27:39'),
(59, 5, 'Roberto Pedro', 'LOGOUT', NULL, NULL, NULL, '{\"user_id\":5,\"user_name\":\"Roberto Pedro\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 17:30:07'),
(60, 5, 'Roberto Pedro', 'LOGIN', NULL, NULL, NULL, '{\"user_id\":5,\"user_name\":\"Roberto Pedro\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 17:55:29'),
(61, 5, 'Roberto Pedro', 'UPDATE_USERS', 'users', 5, '{\"name\":\"Roberto Pedro\",\"email\":\"teste@teste\",\"role\":\"admin\"}', '{\"name\":\"Roberto Pedro\",\"email\":\"administrativo@memorialparqueuberaba.com.br\",\"role\":\"admin\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 17:56:05'),
(62, 5, 'Roberto Pedro', 'LOGOUT', NULL, NULL, NULL, '{\"user_id\":5,\"user_name\":\"Roberto Pedro\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 17:56:17'),
(63, 5, 'Roberto Pedro', 'LOGIN', NULL, NULL, NULL, '{\"user_id\":5,\"user_name\":\"Roberto Pedro\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 17:56:25'),
(64, 5, 'Roberto Pedro', 'CREATE_USERS', 'users', 7, NULL, '{\"name\":\"Paulo Henrique\",\"email\":\"engenharia@memorialparqueuberaba.com.br\",\"role\":\"admin\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 17:57:22'),
(65, 5, 'Roberto Pedro', 'LOGOUT', NULL, NULL, NULL, '{\"user_id\":5,\"user_name\":\"Roberto Pedro\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 17:58:00'),
(66, 5, 'Roberto Pedro', 'LOGIN', NULL, NULL, NULL, '{\"user_id\":5,\"user_name\":\"Roberto Pedro\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 17:58:09'),
(67, 5, 'Roberto Pedro', 'LOGOUT', NULL, NULL, NULL, '{\"user_id\":5,\"user_name\":\"Roberto Pedro\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 17:58:21'),
(68, 5, 'Roberto Pedro', 'LOGIN', NULL, NULL, NULL, '{\"user_id\":5,\"user_name\":\"Roberto Pedro\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 18:00:41'),
(69, 5, 'Roberto Pedro', 'UPDATE_USERS', 'users', 7, '{\"name\":\"Paulo Henrique\",\"email\":\"engenharia@memorialparqueuberaba.com.br\",\"role\":\"admin\"}', '{\"name\":\"Paulo Henrique\",\"email\":\"engenharia@memorialparqueuberaba.com.br\",\"role\":\"admin\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 18:01:02'),
(70, 5, 'Roberto Pedro', 'LOGOUT', NULL, NULL, NULL, '{\"user_id\":5,\"user_name\":\"Roberto Pedro\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 18:01:05'),
(71, 7, 'Paulo Henrique', 'LOGIN', NULL, NULL, NULL, '{\"user_id\":7,\"user_name\":\"Paulo Henrique\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 18:01:20'),
(72, 7, 'Paulo Henrique', 'LOGOUT', NULL, NULL, NULL, '{\"user_id\":7,\"user_name\":\"Paulo Henrique\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 18:02:20'),
(73, 5, 'Roberto Pedro', 'LOGIN', NULL, NULL, NULL, '{\"user_id\":5,\"user_name\":\"Roberto Pedro\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 18:02:29'),
(74, 5, 'Roberto Pedro', 'LOGOUT', NULL, NULL, NULL, '{\"user_id\":5,\"user_name\":\"Roberto Pedro\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 18:02:31'),
(75, 7, 'Paulo Henrique', 'LOGIN', NULL, NULL, NULL, '{\"user_id\":7,\"user_name\":\"Paulo Henrique\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 18:04:22'),
(76, 7, 'Paulo Henrique', 'LOGOUT', NULL, NULL, NULL, '{\"user_id\":7,\"user_name\":\"Paulo Henrique\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 18:04:30'),
(77, 7, 'Paulo Henrique', 'LOGIN', NULL, NULL, NULL, '{\"user_id\":7,\"user_name\":\"Paulo Henrique\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', '2025-09-19 18:06:35'),
(78, 7, 'Paulo Henrique', 'UPDATE_USERS', 'users', 7, '{\"name\":\"Paulo Henrique\",\"email\":\"engenharia@memorialparqueuberaba.com.br\",\"role\":\"admin\"}', '{\"name\":\"Paulo Henrique\",\"email\":\"engenharia@memorialparqueuberaba.com.br\",\"role\":\"admin\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', '2025-09-19 18:08:50'),
(79, 7, 'Paulo Henrique', 'LOGIN', NULL, NULL, NULL, '{\"user_id\":7,\"user_name\":\"Paulo Henrique\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', '2025-09-19 18:09:17'),
(80, 7, 'Paulo Henrique', 'LOGIN', NULL, NULL, NULL, '{\"user_id\":7,\"user_name\":\"Paulo Henrique\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', '2025-09-19 18:12:12'),
(81, 5, 'Roberto Pedro', 'LOGIN', NULL, NULL, NULL, '{\"user_id\":5,\"user_name\":\"Roberto Pedro\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 18:14:32'),
(82, 5, 'Roberto Pedro', 'LOGOUT', NULL, NULL, NULL, '{\"user_id\":5,\"user_name\":\"Roberto Pedro\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 18:15:10'),
(83, 7, 'Paulo Henrique', 'LOGIN', NULL, NULL, NULL, '{\"user_id\":7,\"user_name\":\"Paulo Henrique\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', '2025-09-19 18:38:13'),
(84, 7, 'Paulo Henrique', 'CREATE_USERS', 'users', 8, NULL, '{\"name\":\"Celia Cazares\",\"email\":\"celiacazares73@gmail.com\",\"role\":\"user\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', '2025-09-19 18:40:50'),
(85, 7, 'Paulo Henrique', 'LOGOUT', NULL, NULL, NULL, '{\"user_id\":7,\"user_name\":\"Paulo Henrique\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', '2025-09-19 18:41:30'),
(86, 8, 'Celia Cazares', 'LOGIN', NULL, NULL, NULL, '{\"user_id\":8,\"user_name\":\"Celia Cazares\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', '2025-09-19 18:41:59'),
(87, 8, 'Celia Cazares', 'UPDATE_PESSOAS', 'pessoas', 20, '{\"nome\":\"José Fernandes de Araújo\",\"cpf\":\"170.267.506-82\",\"data_nascimento\":\"1946-05-13\",\"data_falecimento\":\"2025-09-18\",\"data_sepultamento\":\"2025-09-19\",\"mae\":\"Alzimira Fernandes de Araújo\",\"pai\":\"Quintino Laurentino de Araújo\",\"setor\":\"III\",\"jazigo\":\"481\",\"gaveta\":\"1\",\"quadra_id\":16}', '{\"nome\":\"José Fernandes de Araújo\",\"cpf\":\"170.267.506-82\",\"data_nascimento\":\"1946-05-13\",\"data_falecimento\":\"2025-09-19\",\"data_sepultamento\":\"2025-09-19\",\"mae\":\"Alzimira Fernandes de Araújo\",\"pai\":\"Quintino Laurentino de Araújo\",\"setor\":\"III\",\"jazigo\":\"481\",\"gaveta\":\"1\",\"quadra_id\":\"16\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', '2025-09-19 18:43:27'),
(88, 8, 'Celia Cazares', 'UPDATE_PESSOAS', 'pessoas', 20, '{\"nome\":\"José Fernandes de Araújo\",\"cpf\":\"170.267.506-82\",\"data_nascimento\":\"1946-05-13\",\"data_falecimento\":\"2025-09-19\",\"data_sepultamento\":\"2025-09-19\",\"mae\":\"Alzimira Fernandes de Araújo\",\"pai\":\"Quintino Laurentino de Araújo\",\"setor\":\"III\",\"jazigo\":\"481\",\"gaveta\":\"1\",\"quadra_id\":16}', '{\"nome\":\"José Fernandes de Araújo\",\"cpf\":\"170.267.506-82\",\"data_nascimento\":\"1946-05-13\",\"data_falecimento\":\"2025-09-18\",\"data_sepultamento\":\"2025-09-19\",\"mae\":\"Alzimira Fernandes de Araújo\",\"pai\":\"Quintino Laurentino de Araújo\",\"setor\":\"III\",\"jazigo\":\"481\",\"gaveta\":\"1\",\"quadra_id\":\"16\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', '2025-09-19 18:44:31'),
(89, 5, 'Roberto Pedro', 'LOGIN', NULL, NULL, NULL, '{\"user_id\":5,\"user_name\":\"Roberto Pedro\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 19:01:29'),
(90, 5, 'Roberto Pedro', 'LOGOUT', NULL, NULL, NULL, '{\"user_id\":5,\"user_name\":\"Roberto Pedro\"}', '186.248.207.38', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0', '2025-09-19 19:03:57'),
(91, 1, 'Admin', 'LOGIN', NULL, NULL, NULL, '{\"user_id\":1,\"user_name\":\"Admin\"}', '186.210.118.226', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', '2025-09-19 19:12:03');

-- --------------------------------------------------------

--
-- Estrutura para tabela `pessoas`
--

CREATE TABLE `pessoas` (
  `id` int NOT NULL,
  `nome` varchar(200) NOT NULL,
  `data_nascimento` date DEFAULT NULL,
  `data_falecimento` date DEFAULT NULL,
  `mae` varchar(200) DEFAULT NULL,
  `pai` varchar(200) DEFAULT NULL,
  `setor` varchar(50) DEFAULT NULL,
  `jazigo` varchar(50) DEFAULT NULL,
  `quadra_id` int DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cpf` char(14) DEFAULT NULL,
  `data_sepultamento` date DEFAULT NULL,
  `oculto` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0 = visível, 1 = oculto',
  `gaveta` varchar(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `pessoas`
--

INSERT INTO `pessoas` (`id`, `nome`, `data_nascimento`, `data_falecimento`, `mae`, `pai`, `setor`, `jazigo`, `quadra_id`, `created_at`, `cpf`, `data_sepultamento`, `oculto`, `gaveta`) VALUES
(20, 'José Fernandes de Araújo', '1946-05-13', '2025-09-18', 'Alzimira Fernandes de Araújo', 'Quintino Laurentino de Araújo', 'III', '481', 16, '2025-09-19 17:20:52', '170.267.506-82', '2025-09-19', 0, '1');

-- --------------------------------------------------------

--
-- Estrutura para tabela `quadras`
--

CREATE TABLE `quadras` (
  `id` int NOT NULL,
  `nome` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `foto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `quadras`
--

INSERT INTO `quadras` (`id`, `nome`, `created_at`, `foto`) VALUES
(16, 'C', '2025-09-19 17:17:12', NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','user') DEFAULT 'user',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `created_at`) VALUES
(1, 'Admin', 'admin@admin.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin', '2025-08-18 20:33:04'),
(5, 'Roberto Pedro', 'administrativo@memorialparqueuberaba.com.br', '$2y$10$eGygUEIeKy2cDb9DgUPbketKSctqaIFFWCoTkiDsC6CAzpkAG0SFa', 'admin', '2025-09-19 14:31:48'),
(7, 'Paulo Henrique', 'engenharia@memorialparqueuberaba.com.br', '$2y$10$UnKwPc9rM0xZCufLzH01AeJH97aAVMDpUlmbWb5Ux69/hrZ2xs/J.', 'admin', '2025-09-19 17:57:22'),
(8, 'Celia Cazares', 'celiacazares73@gmail.com', '$2y$10$R2D1mXZcAWuAkEsGeNjRjeb1Hmf5LcP8JugVr8ZowrceOMeWr237W', 'user', '2025-09-19 18:40:50');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `audit_logs`
--
ALTER TABLE `audit_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_user_id` (`user_id`),
  ADD KEY `idx_action` (`action`),
  ADD KEY `idx_created_at` (`created_at`),
  ADD KEY `idx_table_name` (`table_name`);

--
-- Índices de tabela `pessoas`
--
ALTER TABLE `pessoas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cpf` (`cpf`),
  ADD KEY `quadra_id` (`quadra_id`),
  ADD KEY `idx_pessoas_oculto` (`oculto`);

--
-- Índices de tabela `quadras`
--
ALTER TABLE `quadras`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `audit_logs`
--
ALTER TABLE `audit_logs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT de tabela `pessoas`
--
ALTER TABLE `pessoas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de tabela `quadras`
--
ALTER TABLE `quadras`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `pessoas`
--
ALTER TABLE `pessoas`
  ADD CONSTRAINT `pessoas_ibfk_1` FOREIGN KEY (`quadra_id`) REFERENCES `quadras` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
