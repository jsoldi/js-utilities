function* findAnywhere(obj, text, maxDepth = 5, path = 'root') {
	if (maxDepth > 0 && obj) {
		switch (typeof obj) {
			case 'string':
			case 'number':
				if (obj.toString().indexOf(text) !== -1) {
					yield path;
				}
				break;
			case 'object':
				for (var entry of Object.entries(obj)) {
					if (entry[1]) 
						yield* findAnywhere(entry[1], text, maxDepth - 1, `${path}['${entry[0]}']`);
				}
				break;
		}
	}
}
