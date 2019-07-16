<template>
    <div class="panel panel-success">
        <ul>
            <li v-for="teacher in changeTeachers">
                <span>{{teacher.name}}</span>
                <span>{{teacher.num}}课</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters,mapState } from 'vuex'
    export default {
        computed: {
            ...mapState([
                'teachers',
            ]),
            ...mapGetters([
                'changeTeachers'
            ])
        },
        data() {
            return {
            }
        },
        created(){
        },
        methods: {

        }
    }

</script>


<style lang="scss" scoped>
    ul {
        box-sizing: border-box;
        padding: 10px;
        background: grey;
        margin: 10px;
        list-style: none;
        li {
            margin: 10px;
            display: flex;
            justify-content: space-around;
        }
    }
</style>
