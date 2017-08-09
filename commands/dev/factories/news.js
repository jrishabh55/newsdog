const faker = require('faker');
const News = require('../../../server/models/news');
const UserNews = require('../../../server/models/user_news');
let x = 0;

function call() {
  while (x < 20) {
    let n = new News({
      title: faker.name.firstName(),
      desc: faker.lorem.paragraph(),
      author: faker.name.firstName(),
      thumbnail: {
        url1: faker.image.avatar(),
      },
      credits: faker.random.number(),
      time: faker.random.number(),
      category: 1,
      meta: {
        votes: faker.random.number(),
        favs: faker.random.number()
      }
    });
    x++;
    n.save()
      .then(data => {
        console.log(`News ${x}saved`);
        let id = data._id;
        u = new UserNews({user_id: 1, news_id: id});
        u.save()
          .then(d => console.log("Relation Added"))
          .catch(e => console.log(e));
      }).catch(error => console.log(error));
  }
}

call();

// process.exit();
