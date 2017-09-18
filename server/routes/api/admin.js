const express = require("express");
const router = express.Router();
const model = require("../../models/admins");
const News = require("../../models/news");
const User = require("../../models/users");
const UserNews = require("../../models/user_news");
const Category = require("../../models/category");
const Tag = require("../../models/tag");
const helpers = require("../../helpers");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const readTime = require('reading-time');

router.get("", (request, response) => {
  let data = {
    dashboard: {
      news: {},
      users: {}
    }
  };

  User.count({}).exec((err, count) => {
    if(err) {
      console.log(err);
      return response.json(helpers.api_error("Something Went wrong"));
    }
    data.dashboard.users.count = count;
  });

  News.count({}).exec((err, count) => {
    if(err) {
      console.log(err);
      return response.json(helpers.api_error("Something Went wrong"));
    }
    data.dashboard.news.count = count;
  });

  UserNews.count({}).exec((err, count) => {
    if(err) {
      console.log(err);
      return response.json(helpers.api_error("Something Went wrong"));
    }
    data.dashboard.news.readCount = count;
  });

  Category.count({}).exec((err, count) => {
    if(err) {
      console.log(err);
      return response.json(helpers.api_error("Something Went wrong"));
    }
    data.dashboard.news.categoryCount = count;
  });

  Tag.count({}).exec((err, count) => {
    if(err) {
      console.log(err);
      return response.json(helpers.api_error("Something Went wrong"));
    }
    data.dashboard.news.tagCount = count;
    return response.json(helpers.api_response(data)).end();
  });

});

router.post("/register", passport.authenticate("jwt", {session: false}), (request, response) => {

  let params = request.body;

  if (
    !helpers.exists(params.username) &&
    !helpers.exists(params.password) &&
    !helpers.exists(params.name) &&
    !helpers.exists(params.email)
  ) {
    response.status(422).json(helpers.api_error('Invalid parameters', 422));
    response.end();
    return;
  }

  let admin = new model({
    name: params.name,
    username: params.username,
    password: params.password,
    email: params.email,
    activated: true,
    "access_level.admin": true
  });

  if (admin.save()) {
    response.json(helpers.api_response(admin));
  } else {
    response.json(helpers.api_error("Invalid Error", 200));
  }

});

router.get("/news", (request, response) => {
  News.all((err, data) => {
    if (err) response.json(helpers.api_error(err));
    else response.json(helpers.api_response({newses: data}));
  });
});

router.post("/news/add", (request, response) => {
  let params = request.body;

  if (
    !helpers.exists(params.title) ||
    !helpers.exists(params.desc) ||
    !helpers.exists(params.author) ||
    !helpers.exists(params.credits) ||
    !helpers.exists(params.category) ||
    !helpers.exists(params.tags)
  ) {
    response.status(422).json(helpers.api_error('Invalid parameters', 422));
  }

  if (helpers.exists(params.time) || parseInt(params.time) === 0) {
    const time = params.time;
  } else {
    const time = readTime(params.desc);
  }

  let data = {
    title: params.title,
    author: params.author,
    credits: params.credits,
    category: params.category,
    tags: params.tags,
    desc: params.desc,
    time: time,
    'thumbnail.url1': params.thumb1
  };
  if (params.thumb2 !== '') {
    data['thumbnail.url2'] = params.thumb2;
  }
  if (params.thumb3 !== '') {
    data['thumbnail.url3'] = params.thumb3;
  }

  News.create(data, (err, data) => {
    if (err) response.json(helpers.api_error(err));
    else response.json(helpers.api_response({news: data}));
  });
});

router.delete("/news/:id", (request, response) => {
  try {
    const id = parseInt(request.params.id);
    News.find({_id: id}).remove().exec((err, data) => {
      if(err) {
        console.log(err);
        return response.json(helpres.api_error("Something went wrong."));
      }
      return response.json(helpers.api_response({data: "Sucessful"}));
    });
  } catch(e) {
    console.log(e);
    return response.json(helpers.api_error("Something went wrong."));
  }
});

router.get("/news/:id/view", (request, response) => {
  const id = request.params.id;
  News.byId(id, (err, news) => {

    if (err) {
      console.error(err);
      return response.status(417).json(helpers.api_error("Something Went wrong. Please try again"), 471).end();
    }
    if (news) {
      response.json(helpers.api_response({news: news})).end();
    } else {
      response.status(404).json(helpers.api_error('Item not found', 404));
      response.end();
    }
  });
});

router.post("/news/:id/view", (request, response) => {
  const params = request.body;
  const news_id = request.params;

  if (
    !helpers.exists(params.title) ||
    !helpers.exists(params.desc) ||
    !helpers.exists(params.author) ||
    !helpers.exists(params.credits) ||
    !helpers.exists(params.category) ||
    !helpers.exists(params.tags)
  ) {
    response.status(422).json(helpers.api_error('Invalid parameters', 422));
  }

  if (helpers.exists(params.time) || parseInt(params.time) === 0) {
    const time = params.time;
  } else {
    const time = readTime(params.desc);
  }

  //TODO Check Working
  News.findOne({_id: news_id}, (err, d) => {
    if (err) {
      console.log(err,d);
      return response.json(helpers.api_error(err));
    }

      d.title = params.title;
      d.author =  params.author;
      d.credits = params.credits;
      d.category = params.category;
      d.desc = params.desc;
      d.tags = params.tags;
      d.time = time;
      d['thumbnail.url1'] = params.thumb1;

    if (params.thumb2 !== '') {
      d['thumbnail.url2'] = params.thumb2;
    }
    if (params.thumb3 !== '') {
      d['thumbnail.url3'] = params.thumb3;
    }
    d.save()
    .then(() => {
      return response.json(helpers.api_response({news: d}));
    }).catch(err => {
      console.log(err,d);
      return response.json(helpers.api_error(err));
    });
  });
});

router.get("/news/tags", (request, response) => {
  Tag.all((err, tags) => {
    if (err) {
      console.log(err);
      return response.json(helpers.api_error(err)).end();
    }
    response.json(helpers.api_response({tags: tags})).end();
  });
});

router.post("/news/tag/add", (request, response) => {
  const params = request.body;
  if (!helpers.exists(params.name)) {
    response.json(helpers.api_error("Invalid parameters")).end();
    return;
  }
  Tag.create({name: params.name}, (err, tag) => {
    if (err) {
      console.log(err);
      return response.status(422).json(helpers.api_error('Invalid parameters', 422));
    }
    response.json(helpers.api_response({tag: tag}));
  });
});

router.post("/news/tag/delete", (request, response) => {
  const params = request.body;

  if (!helpers.exists(params.id)) {
    return response.status(422).json(helpers.api_error('Invalid parameters', 422));
  }

  Tag.deleteOne({_id: params.id}, (err, data) => {
    if (err) {
      return response.json(helpers.api_error(err)).end();
    } else {
      return response.json(helpers.api_response("Deleted")).end();
    }
  });

});

router.get("/news/categories", (request, response) => {
  Category.all((err, data) => {
    if (err) response.json(helpers.api_error(err));
    else response.json(helpers.api_response({categories: data}));
  });
});

router.post("/news/category/delete", (request, response) => {
  const params = request.body;

  if (!helpers.exists(params.id)) {
    return response.json(helpers.api_error('Invalid parameters', 422));
  }

  Category.deleteOne({_id: params.id}, (err, data) => {
    if (err) {
      return response.json(helpers.api_error(err)).end();
    }
    response.json(helpers.api_response("Deleted")).end();
  });

});

router.post("/news/category/add", (request, response) => {
  let params = request.body;

  if (!helpers.exists(params.name)) {
    return response.json(helpers.api_error('Invalid Parameters'));
  }

  Category.create({name: params.name}, (err, category) => {
    if (err) response.json(helpers.api_error(err));
    else response.json(helpers.api_response({category: category}));
  });
});

router.get("/news/:category", (request, response) => {
  News.find({category_id: request.body.category || 0}, (err, data) => {
    if (err) response.json(helpers.api_error(err));
    else response.json(helpers.api_response({newses: data}));
  });
});

router.get("/profile", (request, response) => {
  response.json(helpers.api_response(request.user));
});

router.get("/users", (request, response) => {

  const crypto = require('crypto');

  User.find({}).select(['username', 'email', 'credits', 'created_at', 'ref']).exec((err, data) => {
    if (err)
      response.json(helpers.api_error('Some error accrued', 200));

    data = JSON.parse(JSON.stringify(data));

    for (let i = 0; i < data.length; i++) {
      if(helpers.exists(data[i].ref)) {
        data[i].key = crypto.createHash('sha256').update(data[i].email).digest("hex");
      }
    }
    response.json(helpers.api_response({users: data}));
  });
});

module.exports = router;
