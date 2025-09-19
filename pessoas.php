<?php
require_once 'config.php';
require_once 'audit_logger.php';

if (!isLoggedIn()) {
    header('Location: login.php');
    exit;
}

$message = '';
$error = '';

// Definir variáveis de filtro antes do processamento
$search = $_GET['search'] ?? '';
$mostrar_ocultas = isset($_GET['mostrar_ocultas']) && $_GET['mostrar_ocultas'] == '1';

// Processar formulário
if ($_POST) {
    if (isset($_POST['action'])) {
        switch ($_POST['action']) {
            case 'create':
                try {
                    // Validação dos campos obrigatórios
                    if (empty($_POST['nome']) || empty($_POST['cpf']) || empty($_POST['data_nascimento']) || 
                        empty($_POST['data_falecimento']) || empty($_POST['data_sepultamento']) || 
                        empty($_POST['mae']) || empty($_POST['setor']) || empty($_POST['jazigo']) || 
                        empty($_POST['gaveta']) || empty($_POST['quadra_id'])) {
                        throw new Exception('Todos os campos são obrigatórios, exceto o nome do pai.');
                    }
                    
                    // Validar formato do CPF
                    $cpf = preg_replace('/[^0-9]/', '', $_POST['cpf']);
                    if (strlen($cpf) !== 11) {
                        throw new Exception('CPF deve ter 11 dígitos.');
                    }
                    
                    $stmt = $pdo->prepare("INSERT INTO pessoas (nome, data_nascimento, data_falecimento, data_sepultamento, mae, pai, setor, jazigo, gaveta, quadra_id, cpf) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
                    $stmt->execute([
                        $_POST['nome'],
                        $_POST['data_nascimento'],
                        $_POST['data_falecimento'],
                        $_POST['data_sepultamento'],
                        $_POST['mae'],
                        $_POST['pai'] ?: null,
                        $_POST['setor'],
                        $_POST['jazigo'],
                        $_POST['gaveta'],
                        $_POST['quadra_id'],
                        $_POST['cpf']
                    ]);
                    
                    $new_pessoa_id = $pdo->lastInsertId();
                    $new_values = [
                        'nome' => $_POST['nome'],
                        'cpf' => $_POST['cpf'],
                        'data_nascimento' => $_POST['data_nascimento'],
                        'data_falecimento' => $_POST['data_falecimento'],
                        'mae' => $_POST['mae'],
                        'pai' => $_POST['pai'] ?: null,
                        'setor' => $_POST['setor'],
                        'jazigo' => $_POST['jazigo'],
                        'gaveta' => $_POST['gaveta'],
                        'quadra_id' => $_POST['quadra_id']
                    ];
                    
                    // Registrar criação no log
                    $auditLogger->logCreate('pessoas', $new_pessoa_id, $new_values);
                    
                    $message = 'Pessoa cadastrada com sucesso!';
                } catch (Exception $e) {
                    $error = 'Erro ao cadastrar: ' . $e->getMessage();
                }
                break;
                
            case 'update':
                try {
                    // Validação dos campos obrigatórios
                    if (empty($_POST['nome']) || empty($_POST['cpf']) || empty($_POST['data_nascimento']) || 
                        empty($_POST['data_falecimento']) || empty($_POST['data_sepultamento']) || 
                        empty($_POST['mae']) || empty($_POST['setor']) || empty($_POST['jazigo']) || 
                        empty($_POST['gaveta']) || empty($_POST['quadra_id'])) {
                        throw new Exception('Todos os campos são obrigatórios, exceto o nome do pai.');
                    }
                    
                    // Validar formato do CPF
                    $cpf = preg_replace('/[^0-9]/', '', $_POST['cpf']);
                    if (strlen($cpf) !== 11) {
                        throw new Exception('CPF deve ter 11 dígitos.');
                    }
                    
                    // Buscar dados antigos para o log
                    $stmt = $pdo->prepare("SELECT nome, cpf, data_nascimento, data_falecimento, data_sepultamento, mae, pai, setor, jazigo, gaveta, quadra_id FROM pessoas WHERE id = ?");
                    $stmt->execute([$_POST['id']]);
                    $old_pessoa = $stmt->fetch(PDO::FETCH_ASSOC);
                    
                    $stmt = $pdo->prepare("UPDATE pessoas SET nome=?, data_nascimento=?, data_falecimento=?, data_sepultamento=?, mae=?, pai=?, setor=?, jazigo=?, gaveta=?, quadra_id=?, cpf=? WHERE id=?");
                    $stmt->execute([
                        $_POST['nome'],
                        $_POST['data_nascimento'],
                        $_POST['data_falecimento'],
                        $_POST['data_sepultamento'],
                        $_POST['mae'],
                        $_POST['pai'] ?: null,
                        $_POST['setor'],
                        $_POST['jazigo'],
                        $_POST['gaveta'],
                        $_POST['quadra_id'],
                        $_POST['cpf'],
                        $_POST['id']
                    ]);
                    
                    // Registrar atualização no log
                    $new_values = [
                        'nome' => $_POST['nome'],
                        'cpf' => $_POST['cpf'],
                        'data_nascimento' => $_POST['data_nascimento'],
                        'data_falecimento' => $_POST['data_falecimento'],
                        'data_sepultamento' => $_POST['data_sepultamento'],
                        'mae' => $_POST['mae'],
                        'pai' => $_POST['pai'] ?: null,
                        'setor' => $_POST['setor'],
                        'jazigo' => $_POST['jazigo'],
                        'gaveta' => $_POST['gaveta'],
                        'quadra_id' => $_POST['quadra_id']
                    ];
                    $auditLogger->logUpdate('pessoas', $_POST['id'], $old_pessoa, $new_values);
                    
                    $message = 'Pessoa atualizada com sucesso!';
                } catch (Exception $e) {
                    $error = 'Erro ao atualizar: ' . $e->getMessage();
                }
                break;
                
            case 'ocultar':
                try {
                    // Buscar dados da pessoa antes de ocultar
                    $stmt = $pdo->prepare("SELECT nome, cpf, oculto FROM pessoas WHERE id = ?");
                    $stmt->execute([$_POST['id']]);
                    $old_pessoa = $stmt->fetch(PDO::FETCH_ASSOC);
                    
                    $stmt = $pdo->prepare("UPDATE pessoas SET oculto = 1 WHERE id = ?");
                    $stmt->execute([$_POST['id']]);
                    
                    // Registrar ocultação no log
                    $auditLogger->logHide('pessoas', $_POST['id'], $old_pessoa);
                    
                    $message = 'Pessoa ocultada com sucesso!';
                } catch (Exception $e) {
                    $error = 'Erro ao ocultar: ' . $e->getMessage();
                }
                break;
                
            case 'exibir':
                try {
                    // Buscar dados da pessoa antes de exibir
                    $stmt = $pdo->prepare("SELECT nome, cpf, oculto FROM pessoas WHERE id = ?");
                    $stmt->execute([$_POST['id']]);
                    $old_pessoa = $stmt->fetch(PDO::FETCH_ASSOC);
                    
                    $stmt = $pdo->prepare("UPDATE pessoas SET oculto = 0 WHERE id = ?");
                    $stmt->execute([$_POST['id']]);
                    
                    // Registrar exibição no log
                    $auditLogger->logShow('pessoas', $_POST['id'], $old_pessoa);
                    
                    $message = 'Pessoa exibida novamente com sucesso!';
                    
                    // Verificar se ainda há pessoas ocultas após exibir esta
                    $stmt = $pdo->query("SELECT COUNT(*) as total FROM pessoas WHERE oculto = 1");
                    $total_ocultas_restantes = $stmt->fetch()['total'];
                    
                    // Se não há mais pessoas ocultas e estamos no modo mostrar ocultas, redirecionar
                    if ($total_ocultas_restantes == 0 && $mostrar_ocultas) {
                        $redirect_url = 'pessoas.php';
                        if ($search) {
                            $redirect_url .= '?search=' . urlencode($search);
                        }
                        header("Location: $redirect_url");
                        exit;
                    }
                } catch (Exception $e) {
                    $error = 'Erro ao exibir: ' . $e->getMessage();
                }
                break;
        }
    }
}

// Buscar pessoas
$where = '';
$params = [];

if ($search) {
    if ($mostrar_ocultas) {
        $where = "WHERE (p.nome LIKE ? OR p.cpf LIKE ? OR p.mae LIKE ?) AND p.oculto = 1";
        $params = ["%$search%", "%$search%", "%$search%"];
    } else {
        $where = "WHERE (p.nome LIKE ? OR p.cpf LIKE ? OR p.mae LIKE ?) AND p.oculto = 0";
        $params = ["%$search%", "%$search%", "%$search%"];
    }
} else {
    if ($mostrar_ocultas) {
        $where = "WHERE p.oculto = 1";
        $params = [];
    } else {
        $where = "WHERE p.oculto = 0";
        $params = [];
    }
}

$stmt = $pdo->prepare("
    SELECT p.*, q.nome as quadra_nome 
    FROM pessoas p 
    LEFT JOIN quadras q ON p.quadra_id = q.id 
    $where 
    ORDER BY p.nome
");
$stmt->execute($params);
$pessoas = $stmt->fetchAll();

// Buscar quadras para o select
$stmt = $pdo->query("SELECT id, nome FROM quadras ORDER BY nome");
$quadras = $stmt->fetchAll();

// Contar pessoas ocultas para exibir no botão
$stmt = $pdo->query("SELECT COUNT(*) as total FROM pessoas WHERE oculto = 1");
$total_ocultas = $stmt->fetch()['total'];
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pessoas - Sistema Obtuário</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" rel="stylesheet">
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #365C3A;">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.php">
                <i class="bi bi-building"></i> Sistema Obtuário
            </a>
            <div class="navbar-nav ms-auto">
                <span class="navbar-text text-white me-3">
                    Olá, <?= htmlspecialchars($_SESSION['user_name']) ?>
                </span>
            </div>
        </div>
    </nav>

    <div class="container-fluid">
        <div class="row">
            <?php include 'sidebar.php'; ?>
            
            <!-- Conteúdo principal -->
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Gerenciar Pessoas</h1>
                    <button class="btn text-white" style="background-color: #365C3A; border-color: #365C3A;" data-bs-toggle="modal" data-bs-target="#pessoaModal" onclick="limparFormulario()">
                        <i class="bi bi-plus"></i> Nova Pessoa
                    </button>
                </div>

                <?php if ($message): ?>
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <?= htmlspecialchars($message) ?>
                        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    </div>
                <?php endif; ?>

                <?php if ($error): ?>
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <?= htmlspecialchars($error) ?>
                        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    </div>
                <?php endif; ?>

                <!-- Busca e Filtros -->
                <div class="row mb-3">
                    <div class="col-md-6">
                        <form method="GET" class="d-flex">
                            <input type="text" name="search" class="form-control me-2" placeholder="Buscar por nome, CPF ou mãe..." value="<?= htmlspecialchars($search) ?>">
                            <?php if ($mostrar_ocultas): ?>
                                <input type="hidden" name="mostrar_ocultas" value="1">
                            <?php endif; ?>
                            <button type="submit" class="btn" style="background-color: #365C3A; border-color: #365C3A; color: white;">Buscar</button>
                        </form>
                    </div>
                    <div class="col-md-6 text-end">
                        <?php if ($total_ocultas > 0): ?>
                            <a href="?mostrar_ocultas=<?= $mostrar_ocultas ? '0' : '1' ?><?= $search ? '&search=' . urlencode($search) : '' ?>" 
                               class="btn <?= $mostrar_ocultas ? 'btn-warning' : 'btn-outline-warning' ?> position-relative">
                                <i class="bi bi-eye<?= $mostrar_ocultas ? '-slash' : '' ?>"></i>
                                <?= $mostrar_ocultas ? 'Voltar ao Normal' : 'Ver Pessoas Ocultas' ?>
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    <?= $total_ocultas ?>
                                    <span class="visually-hidden">pessoas ocultas</span>
                                </span>
                            </a>
                        <?php else: ?>
                            <span class="btn btn-outline-secondary disabled">
                                <i class="bi bi-eye-slash"></i>
                                Nenhuma Pessoa Oculta
                            </span>
                        <?php endif; ?>
                    </div>
                </div>

                <?php if ($mostrar_ocultas): ?>
                    <?php if (count($pessoas) > 0): ?>
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <i class="bi bi-info-circle"></i>
                            <strong>Modo Pessoas Ocultas:</strong> Exibindo apenas as pessoas que foram ocultadas da listagem principal.
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        </div>
                    <?php else: ?>
                        <div class="alert alert-info alert-dismissible fade show" role="alert">
                            <i class="bi bi-check-circle"></i>
                            <strong>Nenhuma pessoa oculta encontrada!</strong> Todas as pessoas estão visíveis na listagem principal.
                            <a href="pessoas.php<?= $search ? '?search=' . urlencode($search) : '' ?>" class="btn btn-sm btn-outline-primary ms-2">
                                <i class="bi bi-arrow-left"></i> Voltar à Lista Normal
                            </a>
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        </div>
                    <?php endif; ?>
                <?php endif; ?>

                <!-- Tabela de pessoas -->
                <div class="table-responsive">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Data Nascimento</th>
                                <th>Data Falecimento</th>
                                <th>Mãe</th>
                                <th>Quadra</th>
                                <th>Setor</th>
                                <th>Jazigo</th>
                                <th>Gaveta</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($pessoas as $pessoa): ?>
                                <tr <?= $pessoa['oculto'] ? 'class="table-secondary"' : '' ?>>
                                    <td>
                                        <?= htmlspecialchars($pessoa['nome']) ?>
                                        <?php if ($pessoa['oculto']): ?>
                                            <span class="badge bg-warning text-dark ms-1">Oculta</span>
                                        <?php endif; ?>
                                    </td>
                                    <td><?= htmlspecialchars($pessoa['cpf']) ?></td>
                                    <td><?= htmlspecialchars($pessoa['data_nascimento']) ?></td>
                                    <td><?= htmlspecialchars($pessoa['data_falecimento']) ?></td>
                                    <td><?= htmlspecialchars($pessoa['mae']) ?></td>
                                    <td><?= htmlspecialchars($pessoa['quadra_nome']) ?></td>
                                    <td><?= htmlspecialchars($pessoa['setor']) ?></td>
                                    <td><?= htmlspecialchars($pessoa['jazigo']) ?></td>
                                    <td><?= htmlspecialchars($pessoa['gaveta']) ?></td>
                                    <td>
                                        <?php if ($pessoa['oculto']): ?>
                                            <span class="badge bg-warning text-dark">
                                                <i class="bi bi-eye-slash"></i> Oculta
                                            </span>
                                        <?php else: ?>
                                            <span class="badge bg-success">
                                                <i class="bi bi-eye"></i> Visível
                                            </span>
                                        <?php endif; ?>
                                    </td>
                                    <td>
                                        <button class="btn btn-sm text-white" style="background-color: #365C3A; border-color: #365C3A;" onclick="editarPessoa(<?= $pessoa['id'] ?>)">
                                            <i class="bi bi-pencil"></i>
                                        </button>
                                        <?php if ($pessoa['oculto']): ?>
                                            <button class="btn btn-sm btn-outline-success" onclick="exibirPessoa(<?= $pessoa['id'] ?>)">
                                                <i class="bi bi-eye"></i>
                                            </button>
                                        <?php else: ?>
                                            <button class="btn btn-sm btn-outline-warning" onclick="ocultarPessoa(<?= $pessoa['id'] ?>)">
                                                <i class="bi bi-eye-slash"></i>
                                            </button>
                                        <?php endif; ?>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                    
                    <?php if (count($pessoas) == 0 && $mostrar_ocultas): ?>
                        <div class="text-center py-5">
                            <i class="bi bi-inbox display-1 text-muted"></i>
                            <h4 class="text-muted mt-3">Nenhuma pessoa oculta encontrada</h4>
                            <p class="text-muted">Todas as pessoas estão visíveis na listagem principal.</p>
                            <a href="pessoas.php<?= $search ? '?search=' . urlencode($search) : '' ?>" class="btn btn-primary">
                                <i class="bi bi-arrow-left"></i> Voltar à Lista Normal
                            </a>
                        </div>
                    <?php endif; ?>
                </div>
            </main>
        </div>
    </div>

    <!-- Modal Pessoa -->
    <div class="modal fade" id="pessoaModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitle">Nova Pessoa</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <form method="POST" id="pessoaForm">
                    <div class="modal-body">
                        <input type="hidden" name="action" id="action" value="create">
                        <input type="hidden" name="id" id="id">
                        
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="nome" class="form-label">Nome *</label>
                                <input type="text" class="form-control" id="nome" name="nome" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="cpf" class="form-label">CPF *</label>
                                <input type="text" class="form-control" id="cpf" name="cpf" required maxlength="14" onblur="validarCPF(this.value)">
                                <div class="invalid-feedback" id="cpfError"></div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label for="data_nascimento" class="form-label">Data de Nascimento *</label>
                                <input type="date" class="form-control" id="data_nascimento" name="data_nascimento" required>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="data_falecimento" class="form-label">Data de Falecimento *</label>
                                <input type="date" class="form-control" id="data_falecimento" name="data_falecimento" required>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="data_sepultamento" class="form-label">Data de Sepultamento *</label>
                                <input type="date" class="form-control" id="data_sepultamento" name="data_sepultamento" required>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="mae" class="form-label">Nome da Mãe *</label>
                                <input type="text" class="form-control" id="mae" name="mae" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="pai" class="form-label">Nome do Pai</label>
                                <input type="text" class="form-control" id="pai" name="pai">
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-md-3 mb-3">
                                <label for="quadra_id" class="form-label">Quadra *</label>
                                <select class="form-control" id="quadra_id" name="quadra_id" required>
                                    <option value="">Selecione uma quadra</option>
                                    <?php foreach ($quadras as $quadra): ?>
                                        <option value="<?= $quadra['id'] ?>"><?= htmlspecialchars($quadra['nome']) ?></option>
                                    <?php endforeach; ?>
                                </select>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="setor" class="form-label">Setor *</label>
                                <select class="form-control" id="setor" name="setor" required>
                                    <option value="">Selecione o setor</option>
                                    <option value="I">I</option>
                                    <option value="II">II</option>
                                    <option value="III">III</option>
                                    <option value="IV">IV</option>
                                    <option value="V">V</option>
                                    <option value="VI">VI</option>
                                    <option value="VII">VII</option>
                                    <option value="VIII">VIII</option>
                                    <option value="IX">IX</option>
                                    <option value="X">X</option>
                                </select>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="jazigo" class="form-label">Jazigo *</label>
                                <input type="text" class="form-control" id="jazigo" name="jazigo" required>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="gaveta" class="form-label">Gaveta *</label>
                                <select class="form-control" id="gaveta" name="gaveta" required>
                                    <option value="">Selecione a gaveta</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="submit" class="btn text-white" style="background-color: #365C3A; border-color: #365C3A;" id="submitBtn">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Modal de confirmação de ocultação -->
    <div class="modal fade" id="confirmModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Confirmar Ocultação</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    Tem certeza que deseja ocultar esta pessoa?<br>
                    <small class="text-muted">A pessoa será removida da listagem, mas os dados serão preservados.</small>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <form method="POST" style="display: inline;">
                        <input type="hidden" name="action" value="ocultar">
                        <input type="hidden" name="id" id="ocultarId">
                        <button type="submit" class="btn btn-warning">Ocultar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal de confirmação de exibição -->
    <div class="modal fade" id="exibirModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Confirmar Exibição</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    Tem certeza que deseja exibir esta pessoa novamente?<br>
                    <small class="text-muted">A pessoa voltará a aparecer na listagem normal.</small>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <form method="POST" style="display: inline;">
                        <input type="hidden" name="action" value="exibir">
                        <input type="hidden" name="id" id="exibirId">
                        <button type="submit" class="btn btn-success">Exibir</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        // Validação de CPF
        function validarCPF(cpf) {
            // Remove caracteres não numéricos
            cpf = cpf.replace(/[^\d]/g, '');
            
            // Verifica se tem 11 dígitos
            if (cpf.length !== 11) {
                document.getElementById('cpfError').textContent = 'CPF deve ter 11 dígitos';
                document.getElementById('cpf').classList.add('is-invalid');
                return false;
            }
            
            // Verifica se todos os dígitos são iguais
            if (/^(\d)\1+$/.test(cpf)) {
                document.getElementById('cpfError').textContent = 'CPF inválido';
                document.getElementById('cpf').classList.add('is-invalid');
                return false;
            }
            
            // Validação do primeiro dígito verificador
            let soma = 0;
            for (let i = 0; i < 9; i++) {
                soma += parseInt(cpf.charAt(i)) * (10 - i);
            }
            let resto = 11 - (soma % 11);
            let dv1 = (resto === 10 || resto === 11) ? 0 : resto;
            
            // Validação do segundo dígito verificador
            soma = 0;
            for (let i = 0; i < 10; i++) {
                soma += parseInt(cpf.charAt(i)) * (11 - i);
            }
            resto = 11 - (soma % 11);
            let dv2 = (resto === 10 || resto === 11) ? 0 : resto;
            
            // Verifica se os dígitos verificadores estão corretos
            if (parseInt(cpf.charAt(9)) !== dv1 || parseInt(cpf.charAt(10)) !== dv2) {
                document.getElementById('cpfError').textContent = 'CPF inválido';
                document.getElementById('cpf').classList.add('is-invalid');
                return false;
            }
            
            // CPF válido
            document.getElementById('cpf').classList.remove('is-invalid');
            document.getElementById('cpfError').textContent = '';
            return true;
        }
        
        // Máscara para CPF
        document.getElementById('cpf').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length <= 11) {
                value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
                e.target.value = value;
            }
        });
        
        // Validação do formulário
        document.getElementById('pessoaForm').addEventListener('submit', function(e) {
            const cpf = document.getElementById('cpf').value;
            if (!validarCPF(cpf)) {
                e.preventDefault();
                alert('Por favor, corrija os erros no formulário.');
                return false;
            }
        });
        
        function limparFormulario() {
            document.getElementById('action').value = 'create';
            document.getElementById('id').value = '';
            document.getElementById('pessoaForm').reset();
            document.getElementById('modalTitle').textContent = 'Nova Pessoa';
            document.getElementById('submitBtn').textContent = 'Salvar';
            
            // Limpar erros de validação
            document.getElementById('cpf').classList.remove('is-invalid');
            document.getElementById('cpfError').textContent = '';
        }
        
        function editarPessoa(id) {
            fetch(`get_pessoa.php?id=${id}`)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        const pessoa = data.pessoa;
                        document.getElementById('action').value = 'update';
                        document.getElementById('id').value = pessoa.id;
                        document.getElementById('nome').value = pessoa.nome;
                        document.getElementById('cpf').value = pessoa.cpf;
                        document.getElementById('data_nascimento').value = pessoa.data_nascimento;
                        document.getElementById('data_falecimento').value = pessoa.data_falecimento;
                        document.getElementById('data_sepultamento').value = pessoa.data_sepultamento;
                        document.getElementById('mae').value = pessoa.mae;
                        document.getElementById('pai').value = pessoa.pai || '';
                        document.getElementById('quadra_id').value = pessoa.quadra_id;
                        document.getElementById('setor').value = pessoa.setor;
                        document.getElementById('jazigo').value = pessoa.jazigo;
                        document.getElementById('gaveta').value = pessoa.gaveta;
                        
                        document.getElementById('modalTitle').textContent = 'Editar Pessoa';
                        document.getElementById('submitBtn').textContent = 'Atualizar';
                        
                        new bootstrap.Modal(document.getElementById('pessoaModal')).show();
                    } else {
                        alert('Erro ao carregar dados da pessoa: ' + data.message);
                    }
                })
                .catch(error => {
                    console.error('Erro:', error);
                    alert('Erro ao carregar dados da pessoa');
                });
        }
        
        function ocultarPessoa(id) {
            document.getElementById('ocultarId').value = id;
            new bootstrap.Modal(document.getElementById('confirmModal')).show();
        }
        
        function exibirPessoa(id) {
            document.getElementById('exibirId').value = id;
            new bootstrap.Modal(document.getElementById('exibirModal')).show();
        }
    </script>
</body>
</html>
