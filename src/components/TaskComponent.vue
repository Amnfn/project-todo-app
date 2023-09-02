<script setup>
import { useTaskStore } from '@/stores/tasks';
import { ref } from 'vue';
import ModalComponent from '@/components/ModalComponent.vue';

const taskStore = useTaskStore();
const props = defineProps(['task']);
const modalActive = ref(false);
const updateDialog = ref(false);
const title = ref();
const completed = ref(props.task.is_complete);
const date = ref(props.task.inserted_at.substr(0, 10));

const deleteSubmit = async () => {
    await taskStore.deleteTask(props.task)
    modalActive.value = !modalActive.value
};   
const updateTask = async () => {
    await taskStore.updateTask(props.task, title.value)
    title.value = ''
    updateDialog.value = false;
};
const completedTask = async () => {
    await taskStore.completeTask(props.task, !completed.value)
    completed.value = !completed.value
};
</script>

<template>   
    <div>
        <li class="list-group-item list-group-item-action p-0" :data-completed="task.is_complete">
            <div class="d-flex flex-row justify-content-between align-items-center ">
                
                <div class="p-2 d-flex flex-row justify-content-between align-items-center gap-3">
                    
                    <button @click="completedTask" class="btn rounded-circle p-0 d-inline-flex check-btn"><lord-icon
                            src="" :trigger="task.is_complete ? 'click' : 'hover'"
                            colors="primary:#228B22,secondary:#228B22" stroke="300" state="hover-2"
                            style="width: 20px;px;height:20px">
                        </lord-icon></button>
                    <div class="p-2 flex-row">
                        <p class="fs-6 m-0" :class="task.is_complete ? 'text-decoration-line-through' : ''">{{ task.title }}
                        </p>
                    </div>
                </div>
                <div class="p-2 flex-row">
                    
                    <button @click="updateDialog = !updateDialog" class="btn p-0" data-bs-toggle="modal"
                        data-bs-target="#updateModal"> <lord-icon src="https://cdn.lordicon.com/qtqvorle.json"
                            trigger="hover" colors="outline:#121331,primary:#646e78,secondary:#ebe6ef,tertiary:#4cb4fd"
                            state="hover-2" style="width:40px;height:40px">
                        </lord-icon> </button>

                    
                    <button @click="modalActive = !modalActive" class="btn p-0" type="button"><lord-icon
                            src="https://cdn.lordicon.com/exkbusmy.json" trigger="morph"
                            colors="primary:#f01e2c" state="morph-trash-in"
                            style="width:35px;height:35px">
                        </lord-icon>
                    </button>
                </div>
            </div>
            
            <ModalComponent :modalActive="modalActive" modalTitle="Delete Task">
                <div class="modal-body">
                    <p>Delete Task?</p>
                </div>
                <div class="modal-footer d-flex justify-content-end">
                    <button @click="deleteSubmit" type="button" class="btn btn-primary align-content-center">
                        <lord-icon src="https://cdn.lordicon.com/exkbusmy.json" trigger="hover" delay="1000"
                            colors="outline:#121331,primary:#646e78,secondary:#4bb3fd,tertiary:#ebe6ef" style="width:20px;height:20px">
                        </lord-icon>
                    </button>
                </div>
            </ModalComponent>
            
            <form @submit.prevent="updateTask" v-show="updateDialog">
                <div class="input-group">
                    <input type="text" placeholder="Edit task" class="form-control" v-model="title" minlength="4"
                        required />
                    <button class="btn btn-primary ">Edit</button>
                </div>
            </form>
        </li>
    </div>
</template>


<style>
</style>