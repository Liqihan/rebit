<template>
<div class="layout-global-config">
    <el-form label-position="left" label-width="68px">
    <el-form-item label="标题">
        <el-input
        v-model="model.title"
        @blur="setGlobalConfig"
        ></el-input>
    </el-form-item>

    <hr>

    <el-form-item label="分享">
        <el-checkbox v-model="model.share" @change="setGlobalConfig">允许分享</el-checkbox>
    </el-form-item>
    <template v-if="model.share">
        <el-form-item label="分享标题">
        <el-input placeholder="默认为当前页标题"
            v-model="model.shareTitle"
            @blur="setGlobalConfig"
        ></el-input>
        </el-form-item>
        <el-form-item label="分享摘要">
        <el-input placeholder="默认为空"
            v-model="model.shareDescription"
            @blur="setGlobalConfig"
        ></el-input>
        </el-form-item>
        <el-form-item label="分享链接">
        <el-input placeholder="默认为活动链接"
            v-model="model.shareLink"
            @blur="setGlobalConfig"
        ></el-input>
        </el-form-item>
        <el-form-item label="分享图标">
        <el-x-upload-single
            v-model="model.shareIcon"
            @success="setGlobalConfig"
            @remove="setGlobalConfig"
        />
        </el-form-item>
    </template>

    <hr>

    <el-form-item label="前景色">
        <el-x-color-picker v-model="model.forecolor" @change="setGlobalConfig"/>
    </el-form-item>
    <el-form-item label="背景色">
        <el-x-color-picker v-model="model.backgroundColor" @change="setGlobalConfig"/>
    </el-form-item>
    <el-form-item label="背景纹理">
        <el-x-upload-single
        v-model="model.backgroundImage"
        @success="setGlobalConfig"
        @remove="setGlobalConfig"
        />
    </el-form-item>

    <hr>

    <el-form-item label="活动开始">
        <el-x-date-picker
        v-model="model.timeStart"
        type="date"
        placeholder="不限"
        @change="changeTimeStart"
        >
        </el-x-date-picker>
    </el-form-item>

    <el-form-item label="活动结束">
        <el-x-date-picker
        v-model="model.timeEnd"
        type="date"
        placeholder="不限"
        @change="changeTimeEnd"
        >
        </el-x-date-picker>
    </el-form-item>

    </el-form>
</div>
</template>

<script>
import _ from 'lodash'

export default {
    data () {
        return {
            model: _.cloneDeep(this.$store.state.globalConfig)
        }
    },

    watch: {
    '$store.state.globalConfig': {
        deep: true,
        handler (model) {
        this.model = _.cloneDeep(model)
        }
    }
    },

    methods: {
    setGlobalConfig () {
        this.$store.commit('setGlobalConfig', _.cloneDeep(this.model))
    },

    changeTimeStart () {
        if (this.model.timeStart && this.model.timeEnd) {
        if (new Date(this.model.timeStart) > new Date(this.model.timeEnd)) {
            this.model.timeEnd = this.model.timeStart
        }
        }
        this.setGlobalConfig()
    },

    changeTimeEnd () {
        if (this.model.timeStart && this.model.timeEnd) {
        if (new Date(this.model.timeStart) > new Date(this.model.timeEnd)) {
            this.model.timeStart = this.model.timeEnd
        }
        }
        this.setGlobalConfig()
    }
    }
}
</script>

<style lang="less" src="./global-properties.less">

</style>
