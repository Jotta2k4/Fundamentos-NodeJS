import http from 'node:http'

//*Rotas de criação e listagem (métodos HTTP)
//Métodos mais utilizados
//GET - Buscar uma informação do back-end
//POST - Criar uma informação no back-end
//PUT - Atualizar uma informação no back-end
//PATCH - Atualizar uma informação específica no back-end
//DELETE - Remover uma informação no back-end
//OBS: Posso ter a mesma url com diferentes métodos

//*Salvando usuários em memória (Headers)
//Stateful = cada request usa o mesmo objeto(depende da meméria)
//Stateless = cada request cria um novo objeto(não salva nada em memória)
//Cabeçalhos (Requisição/resposta) => Metadados, tem a ver em como os dados serão interpretados pelo front
//OBS: Ao salvar em memória, sempre que o servidor reiniciar, os dados serão perdidos

//*Conhecendo HTTP status codes
//1xx = informação
//2xx = sucesso
//3xx = redirecionamento
//4xx = client error
//5xx = server error


const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === 'GET' && url === '/users') {
        //Early return
        return res
            .setHeader('Content-Type', 'application/json')
            .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        //Salvando em memória
        users.push({
            id: 1,
            name: 'Jotta',
            email: 'jottinhaDoGrau@sla.com',
        })

        return res.writeHead(201).end()
    }

    return res.writeHead(404).end()
})

server.listen(3333)
//node --watch src/server.js = atualização em tempo real