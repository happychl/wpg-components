<template>
  <a-date-picker v-bind="[$props, $slots]" mode="year" :open="selfOpen" format="YYYY"
                 @panelChange="handlePanelChange"
                 @openChange="handleOpenChange" @change="handleChange"/>
</template>

<script>
    import {DatePicker} from 'ant-design-vue';

    export default {
        name: "AYearPicker",
        inheritAttrs: false,
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
                this.$emit('change', val);
            },
            handleOpenChange(val) {
                this.selfOpen = val;
            },
            handleChange(val) {
                this.$emit('input', val);
                this.$emit('change', val);
            }
        }
    };
</script>
