<template>
<div class="layout-global-config">
    <el-form label-position="left" label-width="68px">
    <el-form-item label="标题">
        <el-input
        v-model="model.title"
        ></el-input>
    </el-form-item>

    </el-form>
</div>
</template>

<script>
import _ from 'lodash'

export default {
    data () {
        return {
            model: {
                title: ''
            }
        }
    }
}
</script>

<style lang="less" src="./global-properties.less">

</style>
