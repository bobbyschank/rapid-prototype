let db = require('./models');

let treesList = [
	{
		name: 'Yellow Birch',
		bark: 'on young branches close, bright, silvery, yellowish gray in color; with age peeling into thin papery layers that roll back and extend up the trunk in long lines of ragged fringe, making excellent tinder for starting a fire in the rain; on very old trunks becoming rough and furrowed, reddish brown in color.'
	},
	{
		name: 'American Elm',
		bark: 'dark gray in color, divided by irregular up-and-down furrows into broad flat-topped ridges, rather firm or occasionally in old trees flaking off; inner bark in alternate layers of brown and white.'
	},
	{
		name: 'Bigtooth aspen',
		bark: 'resembles that of quaking aspen, though small branches are of a more pronounced yellow color. The lower trunk is generally more deeply furrowed than is that of quaking aspen.'
	},
	{
		name: 'Sycamore',
		bark: 'dark brown in color at base of older trunks, shallowly furrowed into broad ridges which are broken up into small plate-like scales; higher up on trunk and branches, peeling off in large, thin plates exposing areas of whitish, yellowish, or greenish inner bark which are very striking in winter.'
	},
		{
		name: 'Balsam fir',
		bark: 'smooth, grayish brown in color, dotted with balsam blisters containing fragrant oily resin; in old trees becoming somewhat roughened with small scales.'
	},
	{
		name: 'Paper birch',
		bark: 'on young stems, golden to reddish brown in color, early becoming chalky white and peeling off in thin, papery layers, which once separated from the tree are never renewed. Because it is tough, resinous, durable, and impervious to water, it was the choice of all northern Indians for their canoes. Now it is the choice of the souvenir hunter.'
	},
	{
		name: 'Red maple',
		bark: 'on young trunks smooth, light gray in color, often resembling beech; with age becoming darker and roughened into long ridges, often shaggy or scaly on surface; bark character extremely variable on different trees in the same stand.'
	},
];

db.Tree.remove({}, function(err, cards) {
	console.log('removed all trees in the name of SEED.');
	db.Tree.create(treesList, function(err, trees) {
		if (err) {
			console.log("Seed Error: " + err);
			return;
		}
		console.log('created some trees');
	});
});
