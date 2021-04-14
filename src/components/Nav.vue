<template>
    <div :class="{'hidden': !toggleMenu}" class="flex-grow  justify-end  md:flex bg-green-400 md:bg-transparent py-6 md:py-0 px-6 md:px-0 text-white md:text-black text-xl md:text-base">
        <nav>
            <div class="md:ml-10 md:flex items-baseline md;space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <div class="my-4 md:my-0">
                  <a href="#" class="md:px-4 py-2 text-white bg-green-400">Intro</a>
              </div>

              <div class="my-4 md:my-0">
                  <a href="#" class="md:px-4 py-2">About Me</a>
              </div>

              <div class="my-4 md:my-0">
                  <a href="#" class="md:px-4 py-2">Portfolio</a>
              </div>

              <div class="my-4 md:my-0">
                  <a href="#" class="md:px-4 py-2">Hire Me</a>
              </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Nav",
        computed: mapState({
            toggleMenu: state => state.toggleMenu
        })
    }
</script>

<style scoped>

</style>