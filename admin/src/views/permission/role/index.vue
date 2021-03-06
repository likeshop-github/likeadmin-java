<template>
    <div class="role">
        <el-card shadow="never">
            <router-link to="/permission/role/edit">
                <el-button v-perm="['system:role:add']" type="primary" size="small"
                    >新增角色</el-button
                >
            </router-link>
            <div v-loading="pager.loading" class="m-t-15">
                <div class="m-t-15">
                    <el-table :data="pager.lists" size="medium">
                        <el-table-column prop="id" label="ID"></el-table-column>
                        <el-table-column prop="name" label="名称"></el-table-column>
                        <el-table-column prop="sort" label="排序"></el-table-column>
                        <el-table-column prop="remark" label="备注"></el-table-column>
                        <el-table-column prop="isDisable" label="状态">
                            <template #default="scope">
                                <span>{{ scope.row.isDisable == 0 ? '启用' : '关闭' }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop label="权限"></el-table-column>
                        <el-table-column prop="createTime" label="创建时间"></el-table-column>
                        <el-table-column prop label="操作">
                            <template #default="{ row }">
                                <!-- 编辑 -->
                                <router-link
                                    v-perm="['system:role:edit']"
                                    class="m-r-10"
                                    :to="{
                                        path: '/permission/role/edit',
                                        query: {
                                            id: row.id
                                        }
                                    }"
                                >
                                    <el-button type="text" size="mini">编辑</el-button>
                                </router-link>
                                <!-- 删除 -->
                                <popup
                                    v-perm="['system:role:del']"
                                    class="m-r-10 inline"
                                    @confirm="handleDelete(row.id)"
                                >
                                    <template #trigger>
                                        <el-button type="text" size="mini">删除</el-button>
                                    </template>
                                </popup>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="flex row-right">
                    <pagination
                        v-model="pager"
                        layout="total, prev, pager, next, jumper"
                        @change="requestApi"
                    />
                </div>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue'
import { apiRoleLists, apiRoleDel } from '@/api/auth'
import Pagination from '@/components/pagination/index.vue'
import Popup from '@/components/popup/index.vue'
import { usePages } from '@/core/hooks/pages'
import { ElMessage } from 'element-plus'

export default defineComponent({
    components: {
        Pagination,
        Popup
    },
    setup() {
        // 表单数据
        const formData = reactive({
            id: 0, // 角色id
            name: '', // 角色名称
            remark: '', // 备注
            create_time: '', // 创建时间
            num: 0 // 使用该角色的人数
        })

        const { pager, requestApi } = usePages({
            callback: apiRoleLists,
            params: formData
        })

        // 删除角色
        const handleDelete = (id: number) => {
            apiRoleDel({
                id
            })
                .then((res: any) => {
                    console.log('res', res)
                    requestApi()
                    ElMessage({ type: 'success', message: '删除成功' })
                })
                .catch((err: any) => {
                    console.log('err', err)
                })
        }

        onMounted(() => {
            requestApi()
        })

        return {
            formData,
            apiRoleLists,
            handleDelete,
            pager,
            requestApi
        }
    }
})
</script>

<style lang="scss" scoped></style>
