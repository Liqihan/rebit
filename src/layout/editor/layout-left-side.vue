<template>
    <div class="layout-left-side">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="组件" name="components">
                <div class="component-list">
                    <div class="component" v-for="(module, index) in filterModuleConfig" :key="index" @click="addModule">
                        <img :src="module.side.src">
                        <p v-text="module.side.title"></p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="其他" name="others">others</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import defaultModuleConfigMap from '@/data/default-module-config';
export default {
    data () {
        return {
            filterModuleConfig: defaultModuleConfigMap,
            activeName: 'components'
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        addModule () {

        }

    }
}
</script>
<style lang="less" src="./layout-left-side.less">

</style>
