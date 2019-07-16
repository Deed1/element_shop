<template>
    <div class="panel panel-success">
        <ul>
            <li v-for="teacher in teachers">
                <span>{{teacher.name}}</span>
                <span>{{teacher.num}}课</span>
            </li>
        </ul>
        <button @click="decNum(2)">课程减少</button>
        <button>课程增加</button>
    </div>
</template>


<script>
    import { mapState,mapActions } from 'vuex'
    export default {
        computed: {
            ...mapState([
                'teachers',
            ])

        },
        data() {
            return {
            }

        },
        created(){
        },
        methods: {

            ...mapActions([
                'decNum'
            ]),
        }
}



</script>

<style lang="scss" scoped>
    ul {
        box-sizing: border-box;
        padding: 10px;
        background: pink;
        margin: 10px;
        list-style: none;
        li {
            margin: 10px;
            display: flex;
            justify-content: space-around;
        }
    }

    button {
        border: none
    }
</style>
