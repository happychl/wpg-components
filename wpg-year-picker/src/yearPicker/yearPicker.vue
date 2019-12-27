<template>
  <a-date-picker v-bind="$props" mode="year" :open="selfOpen" format="YYYY" placeholder="选择年"
                 @panelChange="handlePanelChange"
                 @openChange="handleOpenChange" @change="handleChange"/>
</template>

<script>
    import {DatePicker} from 'ant-design-vue';

    export default {
        name: "AYearPicker",
        props: DatePicker.props,
        data() {
            return {
                selfOpen: false
            };
        },
        methods: {
            handlePanelChange(val) {
                this.selfOpen = false;
                this.$emit('input', val);
            },
            handleOpenChange(val) {
                this.selfOpen = val;
            },
            handleChange(val) {
                this.$emit('input', null);
            }
        }
    };
</script>

<style scoped>

</style>
