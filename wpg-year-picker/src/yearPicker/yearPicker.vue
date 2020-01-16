<template>
  <a-date-picker v-bind="[$attrs, $slots]" mode="year" :open="selfOpen" format="YYYY"
                 @panelChange="handlePanelChange"
                 @openChange="handleOpenChange" @change="handleChange"/>
</template>

<script>
    export default {
        name: "AYearPicker",
        inheritAttrs: false,
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
