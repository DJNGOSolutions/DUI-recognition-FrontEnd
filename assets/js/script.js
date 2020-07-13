import axios from 'axios'

let app = new Vue({
    el: '.app',
    data: {
        step1: true,
        step2: false,
        step3: false,
        step4: false,
        selectedFile: null
    },
    methods: {
        selectStep(numberStep) {
            this.step1 = false
            this.step2 = false
            this.step3 = false
            this.step4 = false
            if(numberStep == 1) {
                this.step1 = true
            } else if (numberStep == 2) {
                this.step2 = true
            } else if (numberStep == 3) {
                this.step3 = true
            } else if (numberStep == 4) {
                this.step4 = true
            }
        },

        clickNext(){
            if(this.step1 === true){
                this.step1 = false
                this.step2 = true
            } else if(this.step2 === true){
                this.step2 = false
                this.step3 = true
            } else if(this.step3 === true){
                this.step3 = false
                this.step4 = true
            }
        },

        clickPrevious(){
            if(this.step4 === true){
                this.step4 = false
                this.step3 = true
            } else if(this.step3 === true){
                this.step3 = false
                this.step2 = true
            } else if(this.step2 === true){
                this.step2 = false
                this.step1 = true
            }
        },

        onFileSelected(event) {
            this.selectedFile = event.target.files[0]
        },

        onUpload() {
            const formData = FormData();
            formData.append('dui', this.selectedFile, this.selectedFile.name)
            axios.post('', formData)
            .then(res => {
                console.log(res)
            })
        }
    }
})