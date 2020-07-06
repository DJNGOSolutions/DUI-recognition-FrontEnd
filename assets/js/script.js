let app = new Vue({
    el: '.app',
    data: {
        step1: true,
        step2: false,
        step3: false,
        step4: false
    },
    methods: {
        selectStep1() {
            this.step1 = true
            this.step2 = false
            this.step3 = false
            this.step4 = false
            console.log(this.step1)
            console.log(this.step2)
            console.log(this.step3)
            console.log(this.step4)
        },

        selectStep2() {
            this.step1 = false
            this.step2 = true
            this.step3 = false
            this.step4 = false
            console.log(this.step1)
            console.log(this.step2)
            console.log(this.step3)
            console.log(this.step4)
        },
        selectStep3() {
            this.step1 = false
            this.step2 = false
            this.step3 = true
            this.step4 = false
            console.log(this.step1)
            console.log(this.step2)
            console.log(this.step3)
            console.log(this.step4)
        },

        selectStep4() {
            this.step1 = false
            this.step2 = false
            this.step3 = false
            this.step4 = true
            console.log(this.step1)
            console.log(this.step2)
            console.log(this.step3)
            console.log(this.step4)
        }
    }
})