export function getChoiceData(type) {
    if (!type) type = 1
    const data = {
        // select选择框数据
        1:  {
            // 项目选择
            project:{
                options: [{value: 'projectName',label: '项目名称'},{value: 'companyName',label: '企业'},{value: 'jobType',label: '岗位类型'}],
            },
            // 项目选择2
            project2: {
                options: [{value: 'projectName',label: '项目名称'},{value: 'companyName',label: '企业'}],
            },
            // 机构管理搜索框
            mechanismSelect: {
                options: [{value: 'orgName',label: '机构名'},{value: 'userName',label: '账号名'}],
            },
            // 人员管理搜索框
            personnelSelect: {
                options: [{value: 'name',label: '人员姓名'},{value: 'orgName',label: '提交机构名称'},{value: 'idCardNo',label: '身份证号'}],
            },
            // 查看招聘详情报名状态
            recruitmentViewState: {
                options: [{value: '', label: '所有'},{value: 1, label: '未下发'},{value: 2, label: '已下发'},{value: 3, label: '已锁定'},{value: 4, label: '已结束'}]
            },
            // 机构订单报名状态
            mechanismState: {
                options: [{value: '', label: '所有'},{value: 1, label: '报名中'},{value: 2, label: '已下发'},{value: 3, label: '已锁定'}]
            },
            // 机构订单待完成和已完成状态
            pendingOrFinished: {
                options: [{value: '', label: '所有'},{value: 3, label: '待完成'},{value: 5, label: '已完成'}]
            },
            finishedDemandState: {
                options: [{value: '', label: '所有'},{value: 1, label: '报名中'},{value: 2, label: '已下发'}]
            },
            // 结算管理订单状态
            financeState: {
                options: [{value: '', label: '所有'},{value: 2, label: '申请结算'},{value: '3', label: '同意结算'},{value: 4, label: '已结算'},{value: 5, label: '驳回'},{value: 6, label: '已确认结算金额'}]
            },
            // 机构管理签约状态
            mechanismStatus: {
                options: [{value: '', label: '所有'},{value: 0, label: '未签约'},{value: 1, label: '已签约'}]
            },
            // 人员管理提交人员状态
            personnelState: {
                options: [{value: '', label: '所有'},{value: 2, label: '在职中'},{value: 3, label: '已离职'},{value: 5, label: '提交面试'},{value: 6, label: '面试通过'},{value: 7, label: '未到面'},{value: 8,label: '面试未通过'}]
            }
        }
    }
    return data[type]
}