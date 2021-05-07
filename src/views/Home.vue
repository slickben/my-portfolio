<template>
    <!-- about -->
    <div id="intro" class="absolute inset-0 max-w-screez-p10 ">
        <div class="grid md:grid-cols-3 lg:grid-cols-2 h-full container mx-auto md:px-20 px-8">
            <div class="flex items-center md:col-span-2 lg:col-span-1">
                <div class="z-30">
                    <h1 class="xl:text-7xl lg:text-5xl text-4xl md:text-5xl font-bold text-black"> <span class="text-green-400"> {{ bTagOpen}} </span>Hello<span class="text-green-400"> {{bTagClose}} I’m Benson,</span>  Front-end Web Developer</h1>
                    <p class="pt-12 text-base md:text-sm lg:text-xl md:leading-8 leading-7">
                        A WordPress website about Hypergiant company which creates hyper-efficient and scalable. The careful have the as a spirits and client ihave by assistant have took initial sentences omens.
                    </p>
                </div>
            </div>
            <div class="relative ">
                <img class="absolute inset-0 z-0" src="../assets/ben.jpeg" alt="" srcset="">
            </div>
        </div>
    </div>

    <!-- skills -->
    <div class="container mx-auto md:px-20 px-8 py-20">
        <div class="grid lg:grid-cols-2 gap-12">
            <div class="flex items-center md:text-3xl md:leading-10">
                <p class="">
                    <span class="text-green-400">I am a curious individual</span> who is passionate about science, math, and technology. I am a habitual knowledge seeker who loves knowing how things work. In my spare time I like to bike and play video and board games.
                </p>
            </div>
            <div class="flex items-center ">
                <div class="w-full">
                    <div class="pb-5">
                        <div class="flex items-center justify-between text-xl w-full">
                        <span>HTML/CSS</span>
                        <span>90%</span>
                        </div>
                        <div class="w-full bg-gray-100 mt-2 ">
                            <div class="bg-green-400 text-xs leading-none h-1 text-center text-white" style="width: 90%"></div>
                        </div>
                    </div>

                    <div class="pb-5">
                        <div class="flex items-center justify-between text-xl w-full">
                        <span>JAVASCRIPT</span>
                        <span>80%</span>
                        </div>
                        <div class="w-full bg-gray-100 mt-2 ">
                            <div class="bg-green-400 text-xs leading-none h-1 text-center text-white" style="width: 80%"></div>
                        </div>
                    </div>

                    <div class="pb-5">
                        <div class="flex items-center justify-between text-xl w-full">
                        <span>Vue JS</span>
                        <span>95%</span>
                        </div>
                        <div class="w-full bg-gray-100 mt-2 ">
                            <div class="bg-green-400 text-xs leading-none h-1 text-center text-white" style="width: 95%"></div>
                        </div>
                    </div>

                    <div class="pb-5">
                        <div class="flex items-center justify-between text-xl w-full">
                        <span>React JS</span>
                        <span>50%</span>
                        </div>
                        <div class="w-full bg-gray-100 mt-2 ">
                            <div class="bg-green-400 text-xs leading-none h-1 text-center text-white" style="width: 50%"></div>
                        </div>
                    </div>

                    <div class="pb-5">
                        <div class="flex items-center justify-between text-xl w-full">
                        <span>BOOTSTRAP 4</span>
                        <span>40%</span>
                        </div>
                        <div class="w-full bg-gray-100 mt-2 ">
                            <div class="bg-green-400 text-xs leading-none h-1 text-center text-white" style="width: 40%"></div>
                        </div>
                    </div>

                    <div class="pb-5">
                        <div class="flex items-center justify-between text-xl w-full">
                        <span>TAILWIND CSS 2</span>
                        <span>90%</span>
                        </div>
                        <div class="w-full bg-gray-100 mt-2 ">
                            <div class="bg-green-400 text-xs leading-none h-1 text-center text-white" style="width: 90%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- project -->
    
    <div class="container mx-auto md:px-20 px-8 md:py-20">
        <div class="pb-12">
            <h3 class="pb-3 md:text-7xl text-3xl text-green-400">My finest works</h3>
            <p class="md:text-3xl">Here is a selection of my best projects for worldwide clients</p>
        </div>
        <div class="grid lg:grid-cols-3 gap-16">
           <div>
            <img class="h-96 mx-auto" src="../assets/chat.png" alt="">
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="py-3 text-xl">Chat App</h2>
                    <p class="text-green-400 font-semibold">Web Application</p>
                </div>
                <router-link class="font-bold " to="https://github.com/slickben/BM-chat/tree/main">
                 Github Rep
                </router-link>
            </div>

           </div>
           <div>
            <img class="h-96 mx-auto" src="../assets/termii.png" alt="">
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="py-3 text-xl">Termii</h2>
                    <p class="text-green-400 font-semibold">Termii Landing page clone</p>
                </div>
                <router-link class="font-bold " to="https://github.com/slickben/termii-landing-page-clone">
                 Github Rep
                </router-link>
            </div>
            
           </div>
           <div>
            <img class="h-96 mx-auto" src="../assets/rev.png" alt="">
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="py-3 text-xl">Rayvia</h2>

                    <p class="text-green-400 font-semibold">Photograpy Landing Page</p>
                </div>
                <router-link class="font-bold " to="https://github.com/slickben/Rayviar-6-Landing-page">
                 Github Rep
                </router-link>
            </div>
            
           </div>
        </div>
    </div>

    <!-- hire me -->
    <div class="container mx-auto md:px-20 px-8 md:py-20">
        <div class="grid lg:grid-cols-2 gap-20">
            <div>
                <h2 class="md:text-8xl text-5xl font-bold text-green-400 pb-5">Hire me</h2>
                <p class="md:text-2xl">I am a curious individual who is passionate about science, math, and technology. I am a habitual knowledge seeker who loves knowing how things work.</p>
            </div>
            <div>
                <form action="">
                  <div class="pb-5">
                      <input class="md:py-4 py-2 border w-full px-6 focus:outline-none" type="text" name="" id="" placeholder="Your full name here">
                  </div>
                  <div class="pb-5">
                      <input class="md:py-4 py-2 border w-full px-6 focus:outline-none" type="email" name="" id="" placeholder="Your email address">
                  </div>
                  <div class="">
                      <textarea placeholder="Write your message here" class="md:py-4 py-2 border w-full px-6 focus:outline-none" name="" id="" cols="30" rows="8"></textarea>
                  </div>
                </form>  
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Home",
        data () {
            return {
                username: "",
                bTagOpen: "<b>",
                bTagClose: "</b>"
            }
        },
        methods: {
            getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            },
            generateAvatar(text, foregroundColor, backgroundColor) {
                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");

                canvas.width = 200;
                canvas.height = 200;

                // Draw background
                context.fillStyle = backgroundColor;
                context.fillRect(0, 0, canvas.width, canvas.height);

                // Draw text
                context.font = "bold 100px Assistant";
                context.fillStyle = foregroundColor;
                context.textAlign = "center";
                context.textBaseline = "middle";
                context.fillText(text, canvas.width / 2, canvas.height / 2);

                return canvas.toDataURL("image/png");
            },
            
        },
    }
</script>

<style scoped>

</style>