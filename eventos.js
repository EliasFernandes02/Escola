
let alunos=[
    ['Samuel','samuel@email.com','85 8888888'],
    ['Bruno','bruno@email.com','85 8888888'],
    ['Matheus','mateus@email.com','85 8888888'],
    ['Marcelo','marcelo@email.com','85 8888888'],
    ['elias','elias@gmail.com','65 88324788']
];


function cadastrarAluno() //função que executará quando cadastrar um aluno, irá receber os dados e irá atualizar no array.
{
    event.preventDefault();
        alunos.push([`${nome.value}`,`${email.value}`,`${telefone.value}`]);

        listar_aluno();
};

function atualizarAlunos()
{
    tabela_alunos.innerHTML = '';
};


function novo_aluno() //Função que irá mostrar as telas quando clicadas no botão
{
    pagina_novo.style.display ='block' 
    pagina_listar.style.display ='none' 


};
function listar_aluno() //listar os alunos e adicionando os valores na tabela
{
    pagina_listar.style.display ='block';
    pagina_novo.style.display ='none';
    
    atualizarAlunos();

    alunos.forEach(function(cadaAluno) {
        tabela_alunos.innerHTML =
        tabela_alunos.innerHTML +
        `<tr>
        <td> ${cadaAluno[0]} </td>
        <td> ${cadaAluno[1]} </td>
        <td> ${cadaAluno[2]} </td>
        </tr>`;
        }
    );
}