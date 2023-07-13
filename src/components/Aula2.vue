<template>
  <table border="1">
    <tr>
      <td>Nome</td>
      <td>Quantidade</td>
      <td>Status</td>
    </tr>
    <tr v-for="produto in produtos">
      <td>{{ produto.nome }}</td>
      <td>{{ produto.qtdd }}</td>
      <td>
        <span v-if="produto.qtdd == 0">sem estoque</span>
        <span v-else-if="produto.qtdd < 10">últimas unidades!</span>
        <span v-else>em estoque</span>
      </td>
    </tr>
  </table>

  <ul>
    <li v-for="(p, index) in pessoas" :key="index">
      {{ p }}
    </li>
  </ul>

  <ul>
    <li v-for="(p, index) in pessoasNovo" :key="index">
      {{ p.nome }} tem {{  p.idade }} anos
    </li>
  </ul>

  <div v-for="numero in numeros">
    o numero é: {{ numero }}
  </div>

  <p v-for="vez in 2">
    {{ vez }}
    não vou jogar mais lixo no chão
  </p>

  <input type="text" v-model="busca">
  <br>
  <br>

  <div class="loja">
    <div v-for="produto in produtosComputed">
      <img :src="produto.thumbnail" alt="">
      <h2>{{  produto.title }}</h2>
      <h3>{{ produto.price }}</h3>
      <p>{{ produto.description }}</p>
      <button>Comprar</button>
    </div>
  </div>

  
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      pessoas: ['mauricio', 'gustavo', 'joão'],
      numeros: [32,123,432,23],
      produtosApi: [],
      busca: '',
      pessoasNovo: [
        {
          nome: 'mauricio',
          idade: 30
        },
        {
          nome: 'gustavo',
          idade: 40
        },
        {
          nome: 'joão',
          idade: 18
        }
      ],
      produtos: [
        {
          nome: 'Açucar',
          qtdd: 20
        },
        {
          nome: 'Feijão',
          qtdd: 6
        },
        {
          nome: 'Farrinha',
          qtdd: 0
        },
        {
          nome: 'Tomate',
          qtdd: 2
        },
      ]
    }
  },
  components: {},
  methods: {},
  computed: {
    produtosComputed() {
      return this.produtosApi.filter(produto => {
        return produto.title.toLowerCase().indexOf(this.busca.toLowerCase()) > -1
      })
    }
  },
  created() {
    axios.get('https://dummyjson.com/products').then(res => {
      this.produtosApi = res.data.products
      console.log(res)
    })
  }
}
</script>

<style>
.loja {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.loja img {
  width: 100%;
}
</style>