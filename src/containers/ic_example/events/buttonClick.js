export default function(props, id) {
	switch (id) {
		case 'btnSave':
			let formData = props.form.getAllValue();
			let tableData = props.table.getAllValue();

			let data = {
				...formVal,
				...tableVal
			};
			ajax({
				url: '/save',
				data: data,
				success: function(res) {
					alert('保存成功！');
				}
			});
			break;
		case 'btnCancel':
			window.history.back(); //回到列表页
			break;
		default:
			break;
	}
}

// let formVal = {
// 	head: {...}
// }

// let tableVal = {
// 	plan: {...}
// 	bank: {...}
// }

// let data = {
// 	head: { ...},
// 	plan: { ...}
// 	bank: {...}
// }
