<template> 
    <div class="row" style="display: flex; align-items: center; justify-content: center; height: 100vh">
        <div class="col-11 col-sm-10 col-md-8 col-lg-6">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Login</div>
                </q-card-section>
                <q-card-section style="display: flex; align-items: center; justify-content: center">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12" style="margin-top: 10px">
                            <q-input outlined dense label="E-mail" v-model="acesso.email"/>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12" style="margin-top: 10px">
                            <q-input outlined dense label="Senha" type="password" v-model="acesso.senha"/>
                        </div>
                        <div class="row" style="width: 100%">
                            <div class="col-6 col-sm-6 col-md-6" style="margin-top: 10px; display: flex; align-items: center; justify-content: space-around">
                                <q-btn flat label="Criar conta" style="background: none; color: rgb(0, 120, 225); font-weight: bold"/>
                            </div>
                            <div class="col-6 col-sm-6 col-md-6" style="margin-top: 10px; display: flex; align-items: center; justify-content: space-around">
                                <q-btn flat label="Entrar" style="background: rgb(0, 120, 225); color: white; font-weight: bold"/>
                            </div>
                        </div>                        
                    </div>
                </q-card-section>
            </q-card>
        </div>
    </div>    
</template>

<script>

import { ref } from 'vue'

export default {
  name: 'Login',
  components: {
    
  },
  setup(){

    const acesso = ref({
        email: "",
        senha: ""
    })

    return{
        acesso
    }
  }
}
</script>

<style lang="scss">

</style>