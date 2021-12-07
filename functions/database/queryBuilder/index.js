const queryBuilder = (query, payload) => {
	// WHERE
	if (payload.where) {
		if (payload.where && Array.isArray(payload.where)) {
			payload.where.forEach(element => {
				switch (element.type) {
					case "field":
						query.where(element.val.field).equals(element.val.value);
						break;
					case "compare":
						query.where(element.val.field);
						if (element.val.gt) {
							query.gt(element.val.gt);
						}
						if (element.val.lt) {
							query.lt(element.val.lt);
						}
						break;
				}
			});
		} else {
			console.log(payload.where);
			query.where(payload.where.field).equals(payload.where.value);
		}
	}

	// LIMIT
	if (payload.limit) {
		query.limit(payload.limit);
	}

	// SORT
	if (payload.sort) {
		if (Array.isArray(payload.sort)) {
			payload.sort.forEach(element => {
				query.sort(element);
			});
		} else {
			query.sort(payload.sort);
		}
	}

	// SELECT
	if (payload.select) {
		const STR = payload.select.join(" ");
		query.select(STR);
	}
	return query;
};

module.exports = queryBuilder;