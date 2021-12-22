
// interface e especifico do typescript com ele foi definido todos os elementos do produto e a "?" e utilizada pois o id não e obrigatorio podendo ser gerado automaticamente

export interface Produto{
    id?: number
    name:string
    price:number
}