<template>
    <div>
        <vue-draggable-resizable :w="100" :h="100" @dragging="onDrag" :resizable="false" :parent="false">
            <table 
                id="map" 
                :style="tableStyle"
                @wheel.prevent="onWheelScroll"
            >
                <tr
                    v-for="(row, i) in map"
                    :key="i"
                >
                    <td
                        v-for="(cell, j) in row"
                        :key="j"
                        :class="$style.tableTd"
                    >
                        <div :class="$style.cell"></div>
                    </td>
                </tr>
            </table>
        </vue-draggable-resizable>
    </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable';
// import 'vue-draggable-resizable/dist/VueDraggableResizable.css';

export default {
    name: 'Editor',
    components: {
        VueDraggableResizable,
    },
    data() {
        return {
            map: [],
            scale: 1,
            position: {
                x: 0,
                y: 0,
            }
        };
    },
    methods: {
        generateMap() {
            const width = Number(this.$route.params.width);
            const height = Number(this.$route.params.height);

            let map = [];

            for (let i = 0; i < height; i++) {
                let row = [];
                for (let j = 0; j < width; j++) {
                    row.push({});
                }
                map.push(row);
            }

            this.map = map;
            this.renderMap();
        },
        onDrag(x, y) {
            this.position.x = x
            this.position.y = y
        },
        onWheelScroll(e) {
            const direction = e.deltaY;
            if (direction < 0 && this.scale < 5) {
                this.scale += 0.5;
            } else if (direction > 0 && this.scale > 0.5) {
                this.scale -= 0.5;
            }
        }
    },
    computed: {
        tableStyle() {
            return {transform: `scale(${this.scale})`};
        }
    },
    mounted() {
        this.generateMap();
    }
}
</script>

<style module>
.cell {
    display: block;
    width: 20px;
    height: 20px;
    background: yellowgreen;
    border: 1px solid black;
}
.cell:hover {
    background: tomato;
}

.tableTd {
    padding: 0;
}
</style>