<!-- #VUE SFC: TEMPLATE -->
<template>
  <main>
    <!-- sintaxe mais simples de interpolação de dados: double mustache -->
    <h2>Double Mustache</h2>
    Olá {{ nome }}
    <hr>

    <!-- DIRETIVA v-text: faz o mesmo que o double mustache -->
    <h2>DIRETIVA: v-text</h2>
    Olá <span v-text="nome"></span>
    <hr>

    <h2>DIRETIVA: v-bind</h2>
    <!-- DIRETIVA v-bind (ou somente :attr): usada para atributos HTML -->
    Olá <span v-text="nome" :id="elementId" v-bind:class="classTitle"></span>
    <hr>
    <!-- sintaxe especial v-bind para o atributo "style"-->
    <p :style="{ color: 'yellow', border: '2px solid gray' }">Sintaxe de objeto para o atributo style</p>
    <hr>
    <!-- sintaxe ARRAY v-bind para o atributo "class"-->
    <p :class="['blue', 'outraclasse', 'outraclasse2']">Sintaxe de array para o atributo class</p>
    <hr>
    <!-- exemplo de operador ternário para atributos -->
    <p :class="isNegative == true ? 'red' : ''">Sintaxe ternária isNegative = {{ isNegative }}</p>
    <hr>
    <!-- sintaxe OBJETO v-bind para o atributo "class"-->
    <p :class="{ red: isNegative }">Sintaxe de Objeto para o atributo class isNegative = {{ isNegative }}</p>
    <hr>

    <!-- DIRETIVA v-model: vincula uma variável a um campo de formulário -->
    <h2>DIRETIVA: v-model</h2>
    <input type="text" v-model="nome">
    <hr>

    <!-- DIRETIVA v-on (ou na forma curta "@"): para capturar eventos de interação do usuário -->
    <h2>DIRETIVA: v-on (ou @)</h2>
    <button @click="olaMundo()">olá</button>
    <hr>

    <!-- exercício modo dark -->
    <h2>EXERCÍCIO: modo dark</h2>
    <div :class="[{ dark: isDark == true }, 'exercicio-dark']" :style="{ 'font-size': fontSize + 'px' }">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, aperiam dolorum beatae pariatur itaque eveniet
      totam numquam unde, in, autem officia voluptatem quas et adipisci sequi sunt! Consequuntur, impedit id.<br><br>
      Está em modo dark? {{ isDark }} <br>
      fontSize: {{ fontSize }} <br><br>

      <button v-on:click="alterarTema()">alterar tema</button>
      <button @click="aumentarFonte()">+</button>
      <button @click="diminuirFonte()">-</button>

      <input type="number" v-model="fontSize">
    </div>

    <hr>

    <!-- DIRETIVA v-show: para ocultar e exibir elementos -->
    <h2>DIRETIVA: v-show</h2>
    <div v-show="exibir">Exercício v-show</div>

    <hr>

    <!-- DIRETIVA v-html: para exibir variáveis com tag HTML -->
    <h2>DIRETIVA: v-html</h2>
    <p v-html="mensagem"></p>
    {{ mensagem }}

    <hr>

    <!-- exercício revelador de senha -->
    <h2>EXERCÍCIO: revelador de senha</h2>
    <input :type="inputType" v-model="senha">
    <button @click="revelarSenha()">
      {{ inputType == 'password' ? 'revelar' : 'ocultar' }}
    </button>

    <!-- DIRETIVAS v-if, v-else-if, v-else: condicionais -->
    <h2>DIRETIVA: v-if, v-else-if, v-else</h2>
    <p v-if="senha == ''">Preencha uma senha</p>
    <p v-else-if="senha.length < 3">Digite pelo menos 3 caracteres</p>
    <p v-else-if="senha.length < 6">Digite pelo menos 6 caracteres</p>
    <p v-else>Senha válida
      <button>Criar conta</button>
    </p>

    <hr>

    <!-- exercício ícone do Whatsapp -->
    <h2>EXERCÍCIO: ícone do Whatsapp</h2>
    <p v-if="status == 'aguardando'">⏰</p>
    <p v-else-if="status == 'enviado'">✓</p>
    <p v-else :class="{ blue: status == 'lido' }">✓✓</p>

    <select v-model="status">
      <option value="aguardando">aguardando</option>
      <option value="enviado">enviado</option>
      <option value="recebido">recebido</option>
      <option value="lido">lido</option>
    </select>
  </main>
</template>

<!-- #VUE SFC: SCRIPT -->
<script>
export default {
  // data: onde ficam nossas variáveis
  data() {
    return {
      elementId: 'paragrafo',
      classTitle: 'blue',
      nome: 'Mauricio',
      isNegative: true,
      isDark: true,
      fontSize: 17,
      mensagem: 'ola <strong>mundo<strong>',
      exibir: true,
      senha: '',
      status: 'lido',
      inputType: 'password'
    }
  },
  // methods: onde ficam nossas funções
  methods: {
    revelarSenha() {
      this.inputType = this.inputType == 'password'
        ? 'text'
        : 'password'
    },
    olaMundo() {
      alert('ola mundo')
    },
    aumentarFonte() {
      this.fontSize++
    },
    diminuirFonte() {
      this.fontSize--
    },
    alterarTema() {
      this.isDark = !this.isDark
    }
  }
}
</script>

<!-- #VUE SFC: SYLE -->
<style>
.red {
  color: red;
}

.blue {
  color: blue;
}

.exercicio-dark {
  padding: 10px;
  border: 1px solid black;
}

.dark {
  color: #fff;
  background-color: #111;
}

* {
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

h2 {
  font-style: italic;
  font-weight: bold;
  color: #949494;
  font-size: 18px;
}

hr {
  border: 1px solid #e6e6e6;
}

main {
  padding: 20px;
  margin: 20px;
}
</style>