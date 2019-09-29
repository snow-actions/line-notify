const core = require('@actions/core');
const request = require('request');

try {
  const token = core.getInput('access_token');
  const message = core.getInput('message');

  request.post('https://notify-api.line.me/api/notify', {
    auth: {
      'bearer': token
    },
    form: {
      message,
    },
  })
  .on('response', function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      console.log(data);
      if (response.statusCode !== 200) {
        core.setFailed(data.message);
      }
    });
  });
} catch (error) {
  core.setFailed(error.message);
}
