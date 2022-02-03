<template> 
    <div class="row" style="display: flex; align-items: center; justify-content: center; height: 100vh">
        <div class="col-11 col-sm-10 col-md-8 col-lg-6">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Crie sua conta</div>
                </q-card-section>
                <q-card-section>
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-8 col-lg-6">
                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-6" style="padding: 5px">
                                    <q-input outlined dense label="Nome" v-model="usuario.nome"/>
                                </div>
                                <div class="col-12 col-sm-12 col-md-6" style="padding: 5px">
                                    <q-input outlined dense label="Sobrenome" v-model="usuario.sobrenome"/>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12" style="padding: 5px">
                                    <q-input outlined dense label="Nome de usuário" v-model="usuario.login"/>
                                </div>
                                <div class="col-12 col-sm-12 col-md-6" style="padding: 5px">
                                    <q-input outlined dense label="Senha" v-model="usuario.senha" :type="mostrarSenha ? 'text' : 'password' "/>
                                </div>
                                <div class="col-12 col-sm-12 col-md-6" style="padding: 5px">
                                    <q-input outlined dense label="Confirmar Senha" v-model="confirmaSenha" :type="mostrarSenha ? 'text' : 'password' "/>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12" style="padding: 5px">
                                    <q-checkbox label="Mostrar Senha" v-model="mostrarSenha"/>
                                </div>
                            </div>                          
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 col-lg-6 mobile-hide" style="display: flex; align-items: center; justify-content: center; padding: 10px">
                            <q-img src="../assets/compLogo.png" style="max-width: 280px"/>
                        </div>
                    </div>
                </q-card-section>
                <q-card-actions>
                    <div class="row" style="width: 100%">
                        <div class="col-12 col-sm-10 col-md-8 col-lg-6" style="margin: 10px 0px 10px 0px; display: flex; align-items: center; justify-content: space-evenly">
                            <q-btn @click="Voltar()" flat label="Já possuo uma conta" style="background: none; color: rgb(0, 120, 225); font-weight: bold; margin-right: 20px"/>
                            <q-btn @click="Cadastrar()" flat label="Continuar" style="background: rgb(0, 120, 225); color: white; font-weight: bold"/>
                        </div>
                    </div>
                </q-card-actions>
            </q-card>
        </div>
    </div>    
</template>

<script>

import { ref } from 'vue'
import router from '@/router';
import Swal from 'sweetalert2'

export default {
  name: 'Login',
  components: {
    
  },
  setup(){

    const mostrarSenha = ref(false);
    const confirmaSenha = ref("");

    const usuario = ref({
        nome: "",
        sobrenome: "",
        login:"",
        senha: ""
    })

    function Voltar(){
        router.push({name: "Login"})
    }

    function Cadastrar(){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Conta criada com sucesso',
            showConfirmButton: false,
            timer: 2000
        })
    }

    return{
        usuario,
        mostrarSenha,
        confirmaSenha,
        Voltar,
        Cadastrar
    }
  }
}
</script>

<style lang="scss">

</style>