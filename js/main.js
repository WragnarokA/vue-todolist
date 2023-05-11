
const { createApp } = Vue
createApp({
    data() {
        return{
            taskList: [
                { text: 'fare la spesa', done: false },
                { text: 'montare la tv', done: false },
                { text: 'fare rifornimento', done: false }
            ],
            newTask:  {
                text: "",
                done: false,
            },
            error: false,
                
        }},             
        methods: {
            addTask() {
                if (this.newTask.text.length > 3) {
                    this.error = false;
                    let nuovaTask = {...this.newTask}
                    this.taskList.unshift(nuovaTask);
                    this.newTask.text = "";  
                } else {
                    this.error = true;
                }
            }, 
                    
            removeTask(posizione){
                this.taskList.splice(posizione, 1);
            },

            changeTask(posizione){
                this.taskList[posizione].done = !this.taskList[posizione].done;
            },
         } 
    }).mount('#app')
                      

                

//     tuduList: [
//         {food: [{
//             text: "fare la spesa",
//             done: false,
//         }]},
//         {tv: [{
//             text: "montare la tv",
//             done: false,
//         }]},
//         {car: [{
//             text: "fare ",
//             done: false,
//         }]}
        
//     ],
// }},     
   
    

            