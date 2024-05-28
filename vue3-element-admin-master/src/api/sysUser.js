import request from '@/utils/request'

const base_api='/admin/system/sysUser'
// 分页查询角色列表数据 
export const GetSysUserListByPage = (pageNum , pageSize , queryDto) => {
    return request({
        url: `${base_api}/findByPage/${pageNum}/${pageSize}`,
        method: 'get',
        params: queryDto
    })
}

export const SaveSysUser =(sysUser) =>{
    return request({
        url: `${base_api}/saveSysUser`,
        method: 'post',
        data: sysUser
    })
}
export const UpdateSysUser =(sysUser) =>{
    return request({
        url: `${base_api}/updateSysUser`,
        method: 'put',
        data: sysUser
    })
}
export const DeleteSysUser= (userId)=>{
    return request({
        url: `${base_api}/deleteById/${userId}`,
        method: 'delete'
    })

}
export const DoAssignRoleToUser = (assginRoleVo)=>{
    return request({
        url: `${base_api}/doAssign`,
        method: 'post',
        data: assginRoleVo
    })
}