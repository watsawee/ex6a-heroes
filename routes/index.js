var express = require('express');
var router = express.Router();

const powers = [
   { id: 1, name: 'flying' },
   { id: 2, name: 'teleporting' },
   { id: 3, name: 'super strengh' },
   { id: 4, name: 'clairvoyance'},
   { id: 5, name: 'mind reading' }
];

const heroes = [
   {
       id: 1,
       type: 'super-dog',
       displayName: 'The Rex',
       powers: [1, 4],
       img: 'dog.jpg',
       busy: false
   },
   {
       id: 2,
       type: 'super-horse',
       displayName: 'Peter Pan',
       powers: [2, 5],
       img: 'horse.jpg',
       busy: false
   },
   {
       id: 3,
       type: 'super-cat',
       displayName: 'Tom',
       powers: [3, 2],
       img: 'cat.jpg',
       busy: false
   },
   {
       id: 4,
       type: 'super-hamster',
       displayName: 'Jerry',
       powers: [1, 5],
       img: 'hamster.jpg',
       busy: false
   }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/heroes', function(req, res) {
  console.log('Returning heroes list');
  res.send(heroes);
});

router.get('/powers', function(req, res) {
  console.log('Returning powers list');
  res.send(powers);
});

router.post('/hero/**', (req, res) => {
   const heroId = req.params[0];
   const foundHero = heroes.find(elm => elm.id == heroId);

   if(foundHero){
      foundHero.busy = req.body.busy;
      console.log("xxxxxxx Set busy to "+req.body.busy+" to hero: "+heroId+"\n");
      res.status(202).send(foundHero);       
   }else{
       console.log("Hero not found.");
       res.status(404).send();
   }
});

router.put('/hero', (req, res) => {
	for(i=0; i<heroes.length; i++){
		var hero = heroes[i];
		hero.busy = req.body.busy;
	}
	console.log("xxxxxxx Set busy to "+req.body.busy+" to all heroes \n");
    res.status(202).send(heroes);       
});

module.exports = router;
