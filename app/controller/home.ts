import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    await this.ctx.render('home.html');
  }

  public async submit() {
    const rules = {
      name: 'string',
      age: 'int?',
      weight: {
        type: 'int?',
        min: 1,
        max: 100,
      },
      someJson: 'jsonString'
    };

    const { app, ctx } = this;
    const errors = app.validator.validate(rules, ctx.request.body);

    ctx.body = errors || ctx.request.body;
  }
}
