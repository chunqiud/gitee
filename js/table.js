function addRow(){
    var table =document.getElementById('table');
    //获取插入的位置
    var length=table.rows.length;
    // console.log(length)
    //插入行节点
    var newRow=table.insertRow(length);
    console.log(newRow);

    //插入列节点对象
    var nameCol=newRow.insertCell(0);
    var phoneCol=newRow.insertCell(1);
    var actionCol=newRow.insertCell(2);
    nameCol.innerHTML='未命名';
    phoneCol.innerHTML='无联系方式';
    //注意 使用innerHTML并给组件添加事件需要外面是双引号，里面是单引号
    actionCol.innerHTML="<button onclick='editRow(this)'>编辑</button><button onclick='deletRow(this)'>删除</button>"
}
function deletRow(button){
    // console.log(button)
    var row=button.parentNode.parentNode;
    // console.log(row);
    row.parentNode.removeChild(row);
}
function editRow(button){
    var row=button.parentNode.parentNode;
    //console.log(row)
    var name=row.cells[0];
    var phone=row.cells[1];
    var inputName =prompt("请输入名字:")
    var inputPhone=prompt("请输入联系方式:")
    if(inputName!=null&&inputPhone!=null){
    console.log(inputName)
    name.innerHTML=inputName;
    phone.innerHTML=inputPhone;
    }
}