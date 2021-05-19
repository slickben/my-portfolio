<template>
    <div class="flex items-center justify-center lg:px-16 px-6 py-5">
        <div class="flex justify-between items-center flex-none">
            <!-- logo -->
            <div class=" text-2xl text-gray-400 flex items-center z-30">
                <div class="w-12 h-12 bg-green-400 flex justify-between items-center text-2xl px-1 text-black relative">
                    <font-awesome-icon icon="chevron-left" />
                    <font-awesome-icon icon="chevron-right" />
                    <div class="absolute inset-0 flex justify-center">
                        <div class="h-full w-0.5 bg-black transform rotate-12">

                        </div>
                    </div>
                </div>
                
                <div class="px-2">
                    <p class="text-green-400">Benson</p>
                    <p class="text-sm">Momodu</p>
                </div>
            </div>
            <!-- toggle -->
            <!-- <div class="md:hidden">
                <button @click="toggleMenuFunc" v-if="!toggleMenu" class="text-2xl text-gray-400  focus:outline-none">
                    <font-awesome-icon icon="bars" />
                </button>
                <button @click="toggleMenuFunc" v-else class="text-2xl text-gray-400 focus:outline-none">
                    <font-awesome-icon icon="times" />
                </button>
            </div> -->
        </div>

    </div>
</template>

<script>
    import Nav from './Nav.vue'
    import { mapState } from 'vuex';
    
    export default {
        name: "NavBar",
        components: {
            Nav
        },
        computed: mapState({
            toggleMenu: state => state.toggleMenu
        }),
        methods: {
            toggleMenuFunc () {
                this.$store.commit('TOGGLE_MENU')
            }
        }
    }
</script>

<style scoped>

</style>