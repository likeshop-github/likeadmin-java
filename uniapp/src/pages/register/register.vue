<template>
    <view
        class="register bg-white min-h-full flex flex-col items-center px-[40rpx] pt-[40rpx] box-border"
    >
        <view class="w-full">
            <u-form borderBottom :label-width="150">
                <u-form-item label="创建账号" borderBottom>
                    <u-input
                        class="flex-1"
                        v-model="formData.username"
                        :border="false"
                        placeholder="请输入账号"
                    />
                </u-form-item>
                <u-form-item label="设置密码" borderBottom>
                    <u-input
                        class="flex-1"
                        type="password"
                        v-model="formData.password"
                        placeholder="6-20位数字+字母或符号组合"
                        :border="false"
                    />
                </u-form-item>
                <u-form-item label="确认密码" borderBottom>
                    <u-input
                        class="flex-1"
                        type="password"
                        v-model="formData.password2"
                        placeholder="请确认密码"
                        :border="false"
                    />
                </u-form-item>
            </u-form>
            <view class="mt-[40rpx]" v-if="isOpenAgreement">
                <u-checkbox v-model="isCheckAgreement" shape="circle">
                    <view class="text-xs flex">
                        已阅读并同意
                        <navigator
                            @click.stop=""
                            class="text-primary"
                            hover-class="none"
                            url="/pages/agreement/agreement?type=service"
                        >
                            《服务协议》
                        </navigator>
                        和<navigator
                            @click.stop=""
                            class="text-primary"
                            hover-class="none"
                            url="/pages/agreement/agreement?type=privacy"
                        >
                            《隐私协议》
                        </navigator>
                    </view>
                </u-checkbox>
            </view>
            <view class="mt-[60rpx]">
                <u-button type="primary" shape="circle" @click="accountRegister"> 注册 </u-button>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { register } from '@/api/account'
import { useAppStore } from '@/stores/app'
import { computed, reactive, ref } from 'vue'

const isCheckAgreement = ref(false)
const appStore = useAppStore()
const isOpenAgreement = computed(() => appStore.getLoginConfig.openAgreement == 1)
const formData = reactive({
    username: '',
    password: '',
    password2: ''
})

const accountRegister = async () => {
    if (!isCheckAgreement.value && isOpenAgreement.value)
        return uni.$u.toast('请勾选已阅读并同意《服务协议》和《隐私协议》')
    if (!formData.username) return uni.$u.toast('请输入账号')
    if (!formData.password) return uni.$u.toast('请输入密码')
    if (!formData.password2) return uni.$u.toast('请输入确认密码')
    if (formData.password != formData.password2) return uni.$u.toast('两次输入的密码不一致')
    await register(formData)
    uni.$u.toast('注册成功')
    uni.navigateBack()
}
</script>

<style lang="scss">
page {
    height: 100%;
}
</style>
