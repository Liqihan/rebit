<template>
    <header class="layout-header">
        <div class="logo">
            <i class="iconfont">&#xe69b;</i>
            <span class="text">活动编辑</span>
        </div>
        <div class="module-actions">
        </div>
        <div class="user-actions">
            <a href="/preview.html" target="_blank">
                <div class="action preview-activity" title="预览">
                    <i class="iconfont">&#xe60a;</i>
                    <span>预览</span>
                </div>
            </a>
            <div class="action create-activity" title="新建活动" @click="createActivity">
                <i class="iconfont">&#xe641;</i>
                <span>新建</span>
            </div>
            <div class="action export-activity" title="导出活动" @click="exportActivity">
                <i class="iconfont">&#xe64f;</i>
                <span>导出</span>
            </div>
            <div class="action import-activity" title="导入活动" @click="importActivity">
                <i class="iconfont">&#xe613;</i>
                <span>导入</span>
                <input type="file" ref="importActivityInput" style="display: none;">
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'layout-header',
  data () {
    return {
      version: '1.0.0'
    }
  },
  methods: {
      createActivity: () => {

      },
      exportActivity: () => {

      },
      importActivity: () => {
          
      }


  }
}
</script>


<style lang="less" src="./layout-header.less">
</style>
