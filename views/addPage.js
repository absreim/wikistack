const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div class="form-group">
      <label for="name">Name</label>
      <div>
        <input id="name" name="name" type="text"/>
      </div>
    </div>
    
    <div>
      <label for="email">E-mail</label>
      <div>
        <input id="email" name="email" type="email"/>
      </div>
    </div>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="content">Content</label>
      <div>
        <input id="content" name="content" type="textarea"/>
      </div>
    </div>
    
    <div>
      <label>Status</label>
      <div>
        <input id="openStatus" name="status" type="radio"/>
        <label for="openStatus">Open</label>
        <input id="closedStatus" name="status" type="radio"/>
        <label for="closedStatus">Closed</label>
      </div>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);