const { mysql } = require('../qcloud')
module.exports = async ctx => {
  //const u_oid = ctx.state.$wxInfo.userinfo
  //console.log(u_oid)
  var i_id = ctx.request.query.id || 0;
  const data1 = await mysql('u_info').where('u_oid', 'oUq8B0Un0lXJZu7rUShUJqZ4cSLE').andWhere('info_id',i_id).del();
  const data = await mysql('u_info').where('u_oid', 'oUq8B0Un0lXJZu7rUShUJqZ4cSLE').select('info_id', 'info_name', 'info_value');
  ctx.state.data = data

}