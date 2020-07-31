'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    const data = ctx.request.body;
    strapi.services.contacts.create(data);
    /*await strapi.plugins['email'].services.email.send({
      to: 'vitdub2@gmail.com',
      subject: 'Comment posted that contains a bad words',
      text: `
          The comment # contain a bad words.

          Comment:
        `,
    });*/
    return "a";
  },
};
