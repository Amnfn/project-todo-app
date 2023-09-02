<script setup>
const props = defineProps(['modalActive', 'modalTitle'])
</script>
<template>
    <teleport to="body">
        <Transition name="modal-fade">
            <div v-if="modalActive">
                <div class="modal d-block bg-secondary p-2 bg-opacity-50" id="exampleModal" tabindex="-1"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">{{ }}</h1>
                                <button type="button" class="btn-close" aria-label="Close"
                                    @click="modalActive = !modalActive"></button>
                            </div>
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </teleport>
</template>
<style>

</style>
