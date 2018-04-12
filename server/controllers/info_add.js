const { mysql } = require('../qcloud')
module.exports = async ctx => {
  //const u_oid = ctx.state.$wxInfo.userinfo
  var i_name = ctx.request.body.info_name || '----';
  var i_value = ctx.request.body.info_value || '----';
  var uid = 'oUq8B0Un0lXJZu7rUShUJqZ4cSLE';
  console.log('test info_add');
  const ids = await mysql('u_info').where('u_oid', 'oUq8B0Un0lXJZu7rUShUJqZ4cSLE').max('info_id as mid');
  var next_id = ids[0].mid+1 
  console.log(next_id);
  const data_rt = await mysql('u_info').insert({ u_oid:uid,info_id:next_id,info_name:i_name,info_value:i_value});
  const data = await mysql('u_info').where('u_oid', 'oUq8B0Un0lXJZu7rUShUJqZ4cSLE').select('info_id', 'info_name', 'info_value');
  ctx.state.data = data

}