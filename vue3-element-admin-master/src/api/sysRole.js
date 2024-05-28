import request from '@/utils/request'

const base_api='/admin/system/sysRole'
// 分页查询角色列表数据 
export const GetSysRoleListByPage = (pageNum , pageSize , queryDto) => {
    return request({
        url: `${base_api}/findByPage/${pageNum}/${pageSize}`,
        method: 'post',
        data: queryDto
    })
}
//角色添加
export const SaveSysRole = (data) => {
    return request({
        url: '/admin/system/sysRole/saveSysRole',
        method: 'post',
        data
    })
}

export const UpdateSysRole = (data) => {
    return request({
        url: '/admin/system/sysRole/updateSysRole',
        method: 'put',
        data
    })
}

export const DeleteSysRole  = (roleId) =>{
    return request({
        url: `${base_api}/deleteById/${roleId}`,
        method: 'delete',
    })
}

export const GetAllRoleList= (userId) =>{
    return request({
        url: `${base_api}/findAllRoles/${userId}`,
        method: 'get',
    })
}

// 查询指定角色所对应的菜单id
export const GetSysRoleMenuIds = (roleId) => {
    return request({
        url: "/admin/system/sysRoleMenu/findSysRoleMenuByRoleId/"+ roleId,
        method: 'get'
    })
}

// 根据角色分配菜单请求方法
export const DoAssignMenuIdToSysRole = (assignMenuDto) => {
    return request({
        url: "/admin/system/sysRoleMenu/doAssign",
        method: 'post',
        data: assignMenuDto
    })
}