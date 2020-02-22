import Vue from 'vue';

const ability = {
    template: '#ability',
    props: ['abilityName', 'abilityPercent'],
    methods: {
        drawColorCircle() {
            const circle = this.$refs['color-circle'];
            const dashArray = parseInt(
                getComputedStyle(circle).getPropertyValue('stroke-dasharray')
            );
    
            const percent = (dashArray / 100) * (100 - this.abilityPercent);
            circle.style.strokeDashoffset = percent;
        }
    },
    mounted() {
        this.drawColorCircle();
    }
};

const abilitiesRow = {
    template: '#abilities-row',
    components: {
        ability
    },
    props: ['ability']
};

new Vue({
    el: '#abilities-component',
    template: '#abilities-list',
    data() {
        return {
            abilities: []
        }
    },
    components: {
        abilitiesRow
    },
    created() {
        const data = require('../data/abilities.json');
        this.abilities = data;
    }
});