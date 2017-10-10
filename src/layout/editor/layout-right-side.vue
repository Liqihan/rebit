<template>
    <div class="layout-right-side">
        <el-tabs v-if="!moduleConfig" value="global-properties">
            <el-tab-pane label="全局配置" name="global-properties">
                <global-properties />
            </el-tab-pane>
            <el-tab-pane label="弹窗配置" name="popups-properties">112221</el-tab-pane>
            <el-tab-pane label="其他" name="others-properties">others</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import globalProperties from './global-properties';
export default {
    components: {
        globalProperties
    },
    data () {
        return {
            moduleConfig: false
        }
    },
    methods: {
    }
}
</script>
<style lang="less" src="./layout-right-side.less">

</style>
