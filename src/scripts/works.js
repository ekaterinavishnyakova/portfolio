import Vue from 'vue';

const thumbs = {
    template: '#slider-thumbs',
    props: ['works', 'currentWork']
};

const btns = {
    template: '#slider-btns',
    props: ['currentIndex', 'worksLength']
};

const display = {
    template: '#slider-display',
    components: {
        thumbs, btns
    },
    props: ['works', 'currentWork', 'currentIndex']
};

const tags = {
    template: '#slider-tags',
    props: ['tags']
};

const info = {
    template: '#slider-info',
    components: { tags },
    props: ['currentWork'],
    computed: {
        tagsArray() {
            return this.currentWork.skills.split(', ');
        }
    }
};

new Vue({
    el: '#slider-component',
    template: '#slider-container',
    components: {
        display, info
    },
    data() {
        return {
            works: [],
            currentIndex: 0
        };
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex]
        }
    },
    methods: {
        makeArrWithRequiredImages(data) {
            return data.map(item => {
                const requiredPic = require(`../images/content/works/${item.photo}`);
                item.photo = requiredPic;
                return item;
            });
        },
        handleSlide(direction) {
            switch(direction) {
                case 'next':
                    this.currentIndex++;
                    break;
                case 'prev':
                    this.currentIndex--;
                    break;
            }
            
        },
        makeNoLoop(value) {
            const workAmountComputerCounted = this.works.length -1;

            if (value > workAmountComputerCounted) this.currentIndex = workAmountComputerCounted;
            if (value < 0) this.currentIndex = this.currentIndex = 0;
        }
    },
    watch: {
        currentIndex(value) {
            this.makeNoLoop(value)
        }
    },
    created() {
        const data = require('../data/works.json');
        this.works = this.makeArrWithRequiredImages(data);
    }
});