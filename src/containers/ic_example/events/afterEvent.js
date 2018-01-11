export default function(props, key, value) {
	switch (key) {
		case 'repaymny':
			// 付息金额
			let tableVal = sumplan(props.table.getTableValue('plan'));
			let unrepaymny = sumunrepaymny(value);
			props.table.setTableValue('plan', tableVal);
			props.form.setValue('head', {
				unrepaymny: unrepaymny
			});
			break;
		case 'rate':
			// 本币汇率
			props.form.setValue('head', {
				rate: format(value)
			});
			break;
		default:
			break;
	}
}
