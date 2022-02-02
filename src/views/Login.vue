<template> 
    <div class="row" style="display: flex; align-items: center; justify-content: center; height: 100vh">
        <div class="col-11 col-sm-10 col-md-8 col-lg-6">
            <q-card style="">
                <q-card-section>
                    <div class="text-h5">Login</div>
                </q-card-section>
                <q-card-section style="padding: 0px 25px 0px 25px">
                    <div class="row" style="display: flex; align-items: center; justify-content: center">
                        <div class="col-12 col-sm-12 col-md-12" style="margin-top: 10px">
                            <q-input outlined dense label="E-mail" v-model="acesso.email"/>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12" style="margin-top: 10px">
                            <q-input outlined dense label="Senha" type="password" v-model="acesso.senha"/>
                        </div>                      
                    </div>
                    <div class="row" style="display: flex; align-items: center; justify-content: center">
                        <div class="col-12 col-sm-12 col-md-12" style="margin-top: 10px">
                            <a href="">Esqueceu sua senha?</a>
                        </div>
                    </div>
                </q-card-section>
                <q-card-actions>
                    <div class="row" style="width: 100%">
                        <div class="col-12 col-sm-12 col-md-12" style="margin: 10px 0px 10px 0px; display: flex; align-items: center; justify-content: space-evenly">
                            <q-btn @click="Cadastrar()" flat label="Criar conta" style="background: none; color: rgb(0, 120, 225); font-weight: bold"/>
                            <q-btn flat label="Entrar" style="background: rgb(0, 120, 225); color: white; font-weight: bold"/>
                        </div>
                    </div>
                </q-card-actions>
                <q-card-section style="padding: 0px 0px 10px 0px; display: flex; align-items: center; justify-content: center">
                    <span style="font-size: 14px; color: rgb(150, 150, 150)">Brenno Sciammarella - 2022</span>
                </q-card-section>
            </q-card>
            <div class="row" style="margin-top: 10px">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12" style="display: flex; align-items: center; justify-content: space-around">
                    <q-btn flat label="Ajuda" style="background: none"/>
                    <q-btn flat label="Privacidade" style="background: none"/>
                    <q-btn flat label="Termos" style="background: none"/>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>

import { ref } from 'vue'
import router from '@/router'

export default {
  name: 'Login',
  components: {
    
  },
  setup(){

    const acesso = ref({
        email: "",
        senha: ""
    })

    function Cadastrar(){
        router.push({name: "Cadastrar"})
    }

    return{
        acesso,
        Cadastrar
    }
  }
}
</script>

<style lang="scss">

</style>