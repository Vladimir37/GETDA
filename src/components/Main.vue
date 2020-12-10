<template>
    <main :class="$style.main">
        <b-card-group deck>
            <b-card
                header="Загрузить матрицу"
                header-tag="header"
            >
                <div :class="$style.fileInput">
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
                <div :class="$style.inputs">
                    <b-form-input 
                        type="number" 
                        :class="$style.sizeInput" 
                        v-model="width"
                        placeholder="Ширина"
                    ></b-form-input>
                    <b-form-input 
                        type="number" 
                        :class="$style.sizeInput" 
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
            width: null,
            height: null,
            matrix: null,
        }
    },
    methods: {
        fileValidator(file) {
            return file && file.type === 'application/json';
        },
        createMatrix() {
            if (this.width > 0 && this.height > 0) {
                this.$router.push({path: `/editor/${this.width}/${this.height}`});
                return;
            }
            this.$toasted.show('Введены некорректные размеры матрицы');
        }
    }
}
</script>

<style module>
.main {
    width: 1200px;
    margin: 0 auto;
}
.inputs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.sizeInput {
    width: 45%;
}
.fileInput {
    margin-bottom: 20px;
}
</style>