<template>
    <main>
        <b-card-group deck>
            <b-card
                header="Загрузить матрицу"
                header-tag="header"
            >
                <div class="main_fileInput">
                    <b-form-file
                        v-model="matrix"
                        :state="fileValidator(matrix)"
                        placeholder="Выберите файл json"
                        drop-placeholder="Бросьте файл сюда"
                    ></b-form-file>
                </div>
                <b-button href="#" variant="primary">Загрузить</b-button>
            </b-card>

            <b-card
                header="Создать матрицу"
                header-tag="header"
            >
                <div class="main_inputs">
                    <b-form-input 
                        type="number" 
                        class="main_sizeInput" 
                        v-model="width"
                        placeholder="Ширина"
                    ></b-form-input>
                    <b-form-input 
                        type="number" 
                        class="main_sizeInput" 
                        v-model="height"
                        placeholder="Высота"
                    ></b-form-input>
                </div>
                <b-button @click="createMatrix" variant="primary">Создать</b-button>
            </b-card>
        </b-card-group>
    </main>
</template>

<script>
import { BCardGroup, BCard, BCardText, BButton, BFormInput, BFormFile } from 'bootstrap-vue';
export default {
    name: 'MainPage',
    components: {
        BCardGroup, 
        BCard, 
        BCardText, 
        BButton,
        BFormInput,
        BFormFile
    },
    data() {
        return {
            width: 0,
            height: 0,
            matrix: null,
        }
    },
    methods: {
        fileValidator(file) {
            return file && file.type === 'application/json';
        },
        createMatrix() {
            if (this.width > 0 && this.height > 0) {
                return;
            }
            this.$toasted.show('Введены некорректные размеры матрицы');
        }
    }
}
</script>

<style>
main {
    width: 1200px;
    margin: 0 auto;
}
.main_inputs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.main_sizeInput {
    width: 45%;
}
.main_fileInput {
    margin-bottom: 20px;
}
</style>