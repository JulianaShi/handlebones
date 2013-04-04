(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cartItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"row-fluid cart-items\">\n        <div id=\"cart-item-image\" class=\"span4\">\n            <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n        </div>\n        <div class=\"span4\">\n            <div id=\"cart-prod-title\" class=\"row-fluid\">\n                ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div class=\"row-fluid\">\n                <a  itemtosave=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\" class=\"save-for-later\">Save For Later</a>&nbsp;&nbsp;&nbsp;&nbsp;\n                <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart\">Remove</a>\n            </div>\n        </div>\n        <div id=\"cart-qty\" class=\"span2\">\n            <form>\n                <fieldset>\n                    <p>\n                        <label>Quantity</label>\n                        <input type=\"text\"\n                               id=\"cart-qty-input\"\n                               value=\"";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n                    </p>\n                </fieldset>\n            </form>\n        </div>\n        <div class=\"span2 cart-item-price\">\n            $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        </div>\n    </div>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"row-fluid cart-items\">\n    <div id=\"saved-item-img\" class=\"span4\">\n        <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n    </div>\n    <div class=\"span4\">\n        <div id=\"cart-prod-title\" class=\"row-fluid\">\n            ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"row-fluid\">\n        <a href=\"#\" itemtomove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"move-to-cart\">Move To Cart</a>&nbsp;&nbsp;&nbsp;&nbsp;\n        <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart remove-from-saved\">Remove</a>\n        </div>\n    </div>\n    <div class=\"span2 qty-text\">\n        Quantity: ";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n    <div class=\"span2 cart-item-price\">\n        $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n</div>\n</div>\n";
  return buffer;
  }

  buffer += "<div id=\"line-item\" class=\"row-fluid\">\n    <div class=\"item-num grey-gloss\">\n        ";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " item(s) for purchase\n    </div>\n    ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>\n<div id=\"saved-item\" class=\"row-fluid\">\n<div class=\"item-num grey-gloss\">\n    ";
  if (stack1 = helpers.savedItemsCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.savedItemsCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Saved Item(s)\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0.savedItems, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['cartSort'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid cart-header\">\n    <div class=\"span5\">\n        ";
  if (stack1 = helpers.cartSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cartSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Item(s) in cart\n    </div>\n    <div class=\"span3\">\n        <select id=\"cart-sort\">\n            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n            <option value=\"price\">Price</option>\n            <option value=\"AZ\">A-Z</option>\n        </select>\n    </div>\n    <div class=\"span1 offset3\">\n        <img src=\"/img/global/close-panel.png\"/>\n    </div>\n</div>\n\n";
  return buffer;
  });
templates['cartSubTotal'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid\">\n    <div class=\"span4 offset5\">\n        <span class=\"cart-header\">Subtotal:</span> <span id=\"price-subtotal\">$";
  if (stack1 = helpers.subtotals) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtotals; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n    <div class=\"span3\">\n        <a href=\"/review.html\" class=\"checkout\">Checkout</a>\n    </div>\n</div>";
  return buffer;
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../../img/tvFinder/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../../img/tvFinder/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>\n\n\n\n";
  });
templates['addToCart'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "    <div id=\"about\" class=\"left-float\">\n        <span style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 25px; color:#000000;\">About</span>\n        <p id=\"short-desc\">\n            <section>\n                ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 250, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 250, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span>\n            </section>\n        </p>\n    </div>\n    <div id=\"add-to-cart\" class=\"left-float\">\n    <a href=\"#\" class=\"qty-btn\">Qty</a></a>&nbsp;&nbsp;<a href=\"#\" class=\"add-to-cart-btn\">Add to Cart</a>\n\n        <p>\n            <section>\n                <p><a href=\"#\"><img src=\"img/product/find-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Find this product locally.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/arrival-icon.png\"/>&nbsp;&nbsp;Calculate arrival date.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/share-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Share with a friend.</a></p>\n            </section>\n        </p>\n    </div>\n    <br class=\"clear\" />\n";
  return buffer;
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"active item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class=\"active\"></li>\n            ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'></li>\n            ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/productPage.js\"></script>\n\n<div id=\"product-name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span id=\"close-x\"><img\n        src=\"/img/global/close-panel.png\"></span></div>\n<div id=\"ratings-container\">\n<span class=\"left-float\"><img src=\"";
  if (stack1 = helpers.ratingUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ratingUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/> </span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a\n        href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n</div>\n<div id=\"product-price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div id=\"product-image\">\n<!--<div id=\"hero-image\" class=\"left-float\">-->\n    <div id=\"itemCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <!-- Carousel nav -->\n        <a class=\"carousel-control left\" href=\"#itemCarousel\" data-slide=\"prev\">&lsaquo;</a>\n        <a class=\"carousel-control right\" href=\"#itemCarousel\" data-slide=\"next\">&rsaquo;</a>\n        <!--progress-->\n        <ol class=\"carousel-indicators\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ol>\n    </div>\n<!--</div>-->\n</div>\n\n\n\n\n";
  return buffer;
  });
templates['peopleWhoViewed'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n";
  options = {hash:{
    'compare': (3)
  },inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.if_lt),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "if_lt", data.index, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"people-viewed-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n";
  return buffer;
  }

  buffer += "<div class=\"horizBorder\"><p class=\"inset\"></p></div>\n<div id=\"people-viewed-title\">\nPeople Who Viewed This Item Also Viewed<a href=\"#\" class=\"see-more-btn\">See More</a>\n</div>\n<div id=\"people-viewed-container\">\n";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.viewedItems),stack1 == null || stack1 === false ? stack1 : stack1.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n<br class=\"clear\" />\n</div>\n";
  return buffer;
  });
templates['prodDetailTabs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <ul>\n                        <li>";
  if (stack1 = helpers.attributeName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " : ";
  if (stack1 = helpers.attributeValue) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeValue; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n                    </ul>\n                    ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/tab.js\"></script>\n<div class=\"horizborder\"><p class=\"inset\"></p></div>\n<div id=\"product-details-title\">\nProduct Details<a href=\"#\" class=\"have-question-btn\">Have a Question?</a>\n</div>\n<div id=\"details-container\">\n<div id=\"detail-tabs\" class=\"left-float\">\n    <section class=\"product-details-container\">\n        <div class=\"wrapper\">\n            <div id=\"v-nav\">\n                <ul>\n                    <li tab=\"tab1\" class=\"first current\"><span class=\"product-detail-tab-name\">Description</span></li>\n                    <li tab=\"tab2\"><span class=\"product-detail-tab-name\">Specifications</span></li>\n                    <li tab=\"tab3\"><span class=\"product-detail-tab-name\">Warranty</span></li>\n                    <li tab=\"tab4\"><span class=\"product-detail-tab-name\">Financing</span></li>\n                    <li tab=\"tab5\" class=\"last\"><span class=\"product-detail-tab-name\">Gifting</span></li>\n                </ul>\n\n                <div class=\"tab-content details\" style=\"display:block\">\n                    ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 1200, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 1200, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "...\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  stack2 = helpers.each.call(depth0, depth0.itemAttr, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  if (stack2 = helpers.supplierWarranty) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.supplierWarranty; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "<br/>\n                    ";
  if (stack2 = helpers.warrantyLength) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.warrantyLength; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n                </div>\n\n                <div class=\"tab-content details\">\n\n                </div>\n                <div class=\"tab-content details\">\n\n                </div>\n\n            </div>\n        </div>\n    </section>\n</div>\n<br class=\"clear\"/>\n</div>";
  return buffer;
  });
templates['productHeader'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"header\">\n    <div class=\"row-fluid\">\n        <div id=\"cart-container\" class=\"span12\">\n            <div class=\"span3\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></div>\n            <div id=\"white\" class=\"span4\">\n                <form method=\"get\" action=\"/search\" id=\"search\">\n                    <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n                </form>\n            </div>\n            <!--<div id=\"create-link\" class=\"span1\"><img src=\"/img/tvFinder/create.png\"/><a href=\"#\">-->\n                <!--Create</a></div>-->\n\n            <!--<div id=\"sign-in\" class=\"span1\"><img src=\"/img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a>-->\n            <!--</div>-->\n\n            <div id=\"cart-items\" class=\"span1 offset4\"><img src=\"/img/tvFinder/shoppingCart.png\"/><a href=\"/cart.html\">\n                Items</a></div>\n        </div>\n    </div>\n</div>";
  });
templates['ratingsReviews'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                    <div class=\"selected-review\">\n                        <div class=\"selected-review-title\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n                        <br/>\n                        <div style=\"font-family: 'Sintony',sans-serif;font-size:15px;color:color: #777777;\">by <span style=\"color: #3078b9;\">";
  if (stack2 = helpers.customer) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.customer; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span> on ";
  if (stack2 = helpers.date) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.date; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " ";
  stack2 = helpers['if'].call(depth0, depth0.isVerified, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\n                        <div><span class=\"stars\">";
  if (stack2 = helpers.rating) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rating; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></div><br/><br/>\n                        <div>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.review, 200, options) : helperMissing.call(depth0, "rawText", depth0.review, 200, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span></div>\n                    </div>\n                    <div class=\"separator\"></div>\n                    <div class=\"review-attributes-left-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Value:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.value) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.value; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Meets Expectations:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.meetsexpectations) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.meetsexpectations; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Picture Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.picturequality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.picturequality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Sound Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.soundquality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.soundquality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Features:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.features) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.features; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                        </dl>\n                    </div>\n                    <div class=\"review-attributes-right-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Age:</dt>\n                            <dd>";
  if (stack2 = helpers.age) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.age; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Gender:</dt>\n                            <dd>";
  if (stack2 = helpers.gender) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.gender; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Ownership:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Usage:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>City:</dt>\n                            <dd>";
  if (stack2 = helpers.city) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.city; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Helpful Votes:</dt>\n                            <dd>";
  if (stack2 = helpers.helpfulvotes) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.helpfulvotes; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                        </dl>\n                    </div>\n                <!--carousel-inner closing div    -->\n                </div>\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car active item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n             ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return " is Verified";
  }

  buffer += "\n\n<div id=\"ratings-rev-title\">\n    Reviews & Ratings <span style=\"color: #3078b9;\">(";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Total)</span> <a href=\"#\" class=\"write-review-btn\">Write a Review</a>\n</div>\n<div id=\"review-dropdowns-container\">\n<span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"reveiwers\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"Men\">Men</option>\n                            <option value=\"Women\">Women</option>\n                            <option value=\"Children\">Children</option>\n                            <option value=\"Animals\">Animals</option>\n                            <option value=\"Minerals\">Minerals</option>\n                            <option value=\"Vegetables\">Vegetables</option>\n                        </select>\n                    </div>\n            </span>\n        <span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ages\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"25\">25 - 34</option>\n                            <option value=\"35\">35 - 44</option>\n                            <option value=\"45\">45 - 54</option>\n                            <option value=\"55\">55 - 64</option>\n                            <option value=\"65\">65+</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns-border left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ratings\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"All\">All Ratings</option>\n                            <option value=\"5\">5 star</option>\n                            <option value=\"4\">4 star</option>\n                            <option value=\"3\">3 star</option>\n                            <option value=\"2\">2 star</option>\n                            <option value=\"1\">1 star</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns\" style=\"float: right\">\n                    <div>\n                        <select id=\"helpful\">\n                            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n                            <option value=\"MostHelpful\">Most Helpful</option>\n                            <option value=\"Oldest\">Oldest to Newest</option>\n                            <option value=\"Newest\">Newest to Oldest</option>\n                        </select>\n                    </div>\n        </span>\n</div>\n\n\n<div class=\"reviews-container\">\n<div id=\"selected-review-container\">\n    <div id=\"reviewCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack2 = helpers.each.call(depth0, depth0.ratingsReviewsItems, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n            <!-- Carousel nav -->\n            <a class=\"carousel-control left\" href=\"#reviewCarousel\" data-slide=\"prev\">&lsaquo;</a>\n            <a class=\"carousel-control right\" href=\"#reviewCarousel\" data-slide=\"next\">&rsaquo;</a>\n\n        </div>\n    </div>\n    <div id=\"reviews-count-container\" class=\"left-float\">1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews</div>\n    <!--1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews-->\n</div>\n\n<script>\n\n    reviewCount = function (){\n        var index = $(\".rev-car.item.active\").attr(\"indexid\");\n        var count = Number(index);\n        $('#reviews-count-container').text(count +\" of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Reviews\");\n    };\n\n    $('#reviewCarousel').bind('slid', function() {\n        reviewCount();\n    })\n\n</script>";
  return buffer;
  });
templates['paymentShippingDetails'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"review-details\" class=\"row-fluid\">\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Payment Details</span></p>\n        <p>\n            <select id=\"payment-details-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n                <option value=\"MostHelpful\">Most Helpful</option>\n                <option value=\"Oldest\">Oldest to Newest</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Billing Address:</span><br/>\n                Juliana Shimer<br/>\n                555 test ave<br/>\n                San Bruno, CA 94066\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Shipping&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color:#3078b9;\">(Multiple Addresses?)</span></p>\n        <p>\n            <select id=\"shipping-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n                <option value=\"MostHelpful\">Most Helpful</option>\n                <option value=\"Oldest\">Oldest to Newest</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Shipping Address:</span><br/>\n                Juliana Shimer<br/>\n                555 test ave<br/>\n                San Bruno, CA 94066\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Delivery Date</span></p>\n        <p><span class=\"detail-labels\"><b>01/01/2013</b></span></p>\n        <p><span style=\"color:#C95925;\"><b>Please Note:</b></span></p>\n        <p><span style=\"color:#777777;font-family: 'Sintony',sans-serif;\">Non-priority delivery estimates<br/>\n                   can vary +/- 4 days.</span></p>\n    </div>\n</div>";
  });
templates['reviewConfirmOrder'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-breadcrumb\" class=\"row-fluid\">\n    <img src=\"/img/cart/breadcrumbHome.png\"/> <a href=\"/cart.html\"> YOUR CART</a>  >  <a href=\"/review.html\"> CHECKOUT</a>  >  CONFIRM YOUR ORDER\n</div>\n<div id=\"confirm-order\"  class=\"row-fluid\">\n<div class=\"span6 confirm-order-title\">\n    Review Your Order: <span style=\"font-weight: 600;\">";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Items  |  $1328.98 Total</span>\n</div>\n<div class=\"span2 offset1\">\n    <img src=\"/img/cart/confirmOrderBtn.png\"/>\n</div>\n</div>";
  return buffer;
  });
templates['reviewLineItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"col-labels\" class=\"row-fluid confirm-order-title\">\n    <div class=\"span2\">\n        Your Order\n    </div>\n    <div class=\"span1 offset4\">\n        Qty\n    </div>\n    <div class=\"span2\">\n        Price\n    </div>\n</div>\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"/img/product/tv-temp.png\"/>\n</div>\n<div class=\"span4 review-line-item-name\">\n    item name\n</div>\n<div class=\"span1 review-line-item-qty\">\n    5\n</div>\n<div class=\"span2 review-line-item-price\">\n    $139.98\n</div>\n</div>\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"/img/product/tv-temp.png\"/>\n</div>\n<div class=\"span4 review-line-item-name\">\n    item name\n</div>\n<div class=\"span1 review-line-item-qty\">\n    5\n</div>\n<div class=\"span2 review-line-item-price\">\n    $139.98\n</div>\n</div>\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"/img/product/tv-temp.png\"/>\n</div>\n<div class=\"span4 review-line-item-name\">\n    item name\n</div>\n<div class=\"span1 review-line-item-qty\">\n    5\n</div>\n<div class=\"span2 review-line-item-price\">\n    $139.98\n</div>\n</div>\n<div id=\"empty-div\" class=\"row-fluid\">\n</div>";
  });
templates['reviewSubtotals'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"review-subtotals\" class=\"row-fluid\">\n    <div class=\"span1 detail-labels\">\n        <b>Subtotals</b>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Items (3)</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$1128&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Shipping & Handling</span></p>\n\n        <p><span class=\"review-line-item-price\">$69.69&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Taxes</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$69.69</span></p>\n    </div>\n    <div class=\"span2 detail-labels\"><br/>\n\n        <p><b>Total</b>&nbsp;&nbsp;&nbsp;<span class=\"review-line-item-price\">$1300.98</span></p>\n    </div>\n</div>\n<div class=\"row-fluid\" style=\"padding-top: 4%\">\n<div class=\"span2 offset7\">\n    <img src=\"/img/cart/confirmOrderBtn.png\"/>\n</div>\n</div>";
  });
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../../img/tvFinder/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  buffer += "<script src=\"../../js/tvFinder/television.js\"></script>\n";
  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cartItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"row-fluid cart-items\">\n        <div id=\"cart-item-image\" class=\"span4\">\n            <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n        </div>\n        <div class=\"span4\">\n            <div id=\"cart-prod-title\" class=\"row-fluid\">\n                ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div class=\"row-fluid\">\n                <a  itemtosave=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\" class=\"save-for-later\">Save For Later</a>&nbsp;&nbsp;&nbsp;&nbsp;\n                <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart\">Remove</a>\n            </div>\n        </div>\n        <div id=\"cart-qty\" class=\"span2\">\n            <form>\n                <fieldset>\n                    <p>\n                        <label>Quantity</label>\n                        <input type=\"text\"\n                               id=\"cart-qty-input\"\n                               value=\"";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n                    </p>\n                </fieldset>\n            </form>\n        </div>\n        <div class=\"span2 cart-item-price\">\n            $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        </div>\n    </div>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"row-fluid cart-items\">\n    <div id=\"saved-item-img\" class=\"span4\">\n        <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n    </div>\n    <div class=\"span4\">\n        <div id=\"cart-prod-title\" class=\"row-fluid\">\n            ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"row-fluid\">\n        <a href=\"#\" itemtomove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"move-to-cart\">Move To Cart</a>&nbsp;&nbsp;&nbsp;&nbsp;\n        <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart remove-from-saved\">Remove</a>\n        </div>\n    </div>\n    <div class=\"span2 qty-text\">\n        Quantity: ";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n    <div class=\"span2 cart-item-price\">\n        $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n</div>\n</div>\n";
  return buffer;
  }

  buffer += "<div id=\"line-item\" class=\"row-fluid\">\n    <div class=\"item-num grey-gloss\">\n        ";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " item(s) for purchase\n    </div>\n    ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>\n<div id=\"saved-item\" class=\"row-fluid\">\n<div class=\"item-num grey-gloss\">\n    ";
  if (stack1 = helpers.savedItemsCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.savedItemsCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Saved Item(s)\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0.savedItems, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['cartSort'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid cart-header\">\n    <div class=\"span5\">\n        ";
  if (stack1 = helpers.cartSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cartSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Item(s) in cart\n    </div>\n    <div class=\"span3\">\n        <select id=\"cart-sort\">\n            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n            <option value=\"price\">Price</option>\n            <option value=\"AZ\">A-Z</option>\n        </select>\n    </div>\n    <div class=\"span1 offset3\">\n        <img src=\"/img/global/close-panel.png\"/>\n    </div>\n</div>\n\n";
  return buffer;
  });
templates['cartSubTotal'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid\">\n    <div class=\"span4 offset5\">\n        <span class=\"cart-header\">Subtotal:</span> <span id=\"price-subtotal\">$";
  if (stack1 = helpers.subtotals) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtotals; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n    <div class=\"span3\">\n        <a href=\"/review.html\" class=\"checkout\">Checkout</a>\n    </div>\n</div>";
  return buffer;
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../../img/tvFinder/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../../img/tvFinder/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>\n\n\n\n";
  });
templates['addToCart'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "    <div id=\"about\" class=\"left-float\">\n        <span style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 25px; color:#000000;\">About</span>\n        <p id=\"short-desc\">\n            <section>\n                ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 250, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 250, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span>\n            </section>\n        </p>\n    </div>\n    <div id=\"add-to-cart\" class=\"left-float\">\n    <a href=\"#\" class=\"qty-btn\">Qty</a></a>&nbsp;&nbsp;<a href=\"#\" class=\"add-to-cart-btn\">Add to Cart</a>\n\n        <p>\n            <section>\n                <p><a href=\"#\"><img src=\"img/product/find-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Find this product locally.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/arrival-icon.png\"/>&nbsp;&nbsp;Calculate arrival date.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/share-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Share with a friend.</a></p>\n            </section>\n        </p>\n    </div>\n    <br class=\"clear\" />\n";
  return buffer;
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"active item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class=\"active\"></li>\n            ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'></li>\n            ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/productPage.js\"></script>\n\n<div id=\"product-name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span id=\"close-x\"><img\n        src=\"/img/global/close-panel.png\"></span></div>\n<div id=\"ratings-container\">\n<span class=\"left-float\"><img src=\"";
  if (stack1 = helpers.ratingUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ratingUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/> </span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a\n        href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n</div>\n<div id=\"product-price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div id=\"product-image\">\n<!--<div id=\"hero-image\" class=\"left-float\">-->\n    <div id=\"itemCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <!-- Carousel nav -->\n        <a class=\"carousel-control left\" href=\"#itemCarousel\" data-slide=\"prev\">&lsaquo;</a>\n        <a class=\"carousel-control right\" href=\"#itemCarousel\" data-slide=\"next\">&rsaquo;</a>\n        <!--progress-->\n        <ol class=\"carousel-indicators\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ol>\n    </div>\n<!--</div>-->\n</div>\n\n\n\n\n";
  return buffer;
  });
templates['peopleWhoViewed'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n";
  options = {hash:{
    'compare': (3)
  },inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.if_lt),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "if_lt", data.index, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"people-viewed-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n";
  return buffer;
  }

  buffer += "<div class=\"horizBorder\"><p class=\"inset\"></p></div>\n<div id=\"people-viewed-title\">\nPeople Who Viewed This Item Also Viewed<a href=\"#\" class=\"see-more-btn\">See More</a>\n</div>\n<div id=\"people-viewed-container\">\n";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.viewedItems),stack1 == null || stack1 === false ? stack1 : stack1.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n<br class=\"clear\" />\n</div>\n";
  return buffer;
  });
templates['prodDetailTabs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <ul>\n                        <li>";
  if (stack1 = helpers.attributeName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " : ";
  if (stack1 = helpers.attributeValue) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeValue; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n                    </ul>\n                    ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/tab.js\"></script>\n<div class=\"horizborder\"><p class=\"inset\"></p></div>\n<div id=\"product-details-title\">\nProduct Details<a href=\"#\" class=\"have-question-btn\">Have a Question?</a>\n</div>\n<div id=\"details-container\">\n<div id=\"detail-tabs\" class=\"left-float\">\n    <section class=\"product-details-container\">\n        <div class=\"wrapper\">\n            <div id=\"v-nav\">\n                <ul>\n                    <li tab=\"tab1\" class=\"first current\"><span class=\"product-detail-tab-name\">Description</span></li>\n                    <li tab=\"tab2\"><span class=\"product-detail-tab-name\">Specifications</span></li>\n                    <li tab=\"tab3\"><span class=\"product-detail-tab-name\">Warranty</span></li>\n                    <li tab=\"tab4\"><span class=\"product-detail-tab-name\">Financing</span></li>\n                    <li tab=\"tab5\" class=\"last\"><span class=\"product-detail-tab-name\">Gifting</span></li>\n                </ul>\n\n                <div class=\"tab-content details\" style=\"display:block\">\n                    ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 1200, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 1200, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "...\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  stack2 = helpers.each.call(depth0, depth0.itemAttr, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  if (stack2 = helpers.supplierWarranty) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.supplierWarranty; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "<br/>\n                    ";
  if (stack2 = helpers.warrantyLength) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.warrantyLength; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n                </div>\n\n                <div class=\"tab-content details\">\n\n                </div>\n                <div class=\"tab-content details\">\n\n                </div>\n\n            </div>\n        </div>\n    </section>\n</div>\n<br class=\"clear\"/>\n</div>";
  return buffer;
  });
templates['productHeader'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"header\">\n    <div class=\"row-fluid\">\n        <div id=\"cart-container\" class=\"span12\">\n            <div class=\"span3\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></div>\n            <div id=\"white\" class=\"span4\">\n                <form method=\"get\" action=\"/search\" id=\"search\">\n                    <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n                </form>\n            </div>\n            <!--<div id=\"create-link\" class=\"span1\"><img src=\"/img/tvFinder/create.png\"/><a href=\"#\">-->\n                <!--Create</a></div>-->\n\n            <!--<div id=\"sign-in\" class=\"span1\"><img src=\"/img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a>-->\n            <!--</div>-->\n\n            <div id=\"cart-items\" class=\"span1 offset4\"><img src=\"/img/tvFinder/shoppingCart.png\"/><a href=\"/cart.html\">\n                Items</a></div>\n        </div>\n    </div>\n</div>";
  });
templates['ratingsReviews'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                    <div class=\"selected-review\">\n                        <div class=\"selected-review-title\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n                        <br/>\n                        <div style=\"font-family: 'Sintony',sans-serif;font-size:15px;color:color: #777777;\">by <span style=\"color: #3078b9;\">";
  if (stack2 = helpers.customer) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.customer; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span> on ";
  if (stack2 = helpers.date) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.date; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " ";
  stack2 = helpers['if'].call(depth0, depth0.isVerified, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\n                        <div><span class=\"stars\">";
  if (stack2 = helpers.rating) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rating; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></div><br/><br/>\n                        <div>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.review, 200, options) : helperMissing.call(depth0, "rawText", depth0.review, 200, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span></div>\n                    </div>\n                    <div class=\"separator\"></div>\n                    <div class=\"review-attributes-left-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Value:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.value) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.value; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Meets Expectations:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.meetsexpectations) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.meetsexpectations; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Picture Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.picturequality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.picturequality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Sound Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.soundquality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.soundquality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Features:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.features) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.features; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                        </dl>\n                    </div>\n                    <div class=\"review-attributes-right-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Age:</dt>\n                            <dd>";
  if (stack2 = helpers.age) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.age; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Gender:</dt>\n                            <dd>";
  if (stack2 = helpers.gender) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.gender; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Ownership:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Usage:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>City:</dt>\n                            <dd>";
  if (stack2 = helpers.city) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.city; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Helpful Votes:</dt>\n                            <dd>";
  if (stack2 = helpers.helpfulvotes) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.helpfulvotes; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                        </dl>\n                    </div>\n                <!--carousel-inner closing div    -->\n                </div>\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car active item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n             ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return " is Verified";
  }

  buffer += "\n\n<div id=\"ratings-rev-title\">\n    Reviews & Ratings <span style=\"color: #3078b9;\">(";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Total)</span> <a href=\"#\" class=\"write-review-btn\">Write a Review</a>\n</div>\n<div id=\"review-dropdowns-container\">\n<span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"reveiwers\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"Men\">Men</option>\n                            <option value=\"Women\">Women</option>\n                            <option value=\"Children\">Children</option>\n                            <option value=\"Animals\">Animals</option>\n                            <option value=\"Minerals\">Minerals</option>\n                            <option value=\"Vegetables\">Vegetables</option>\n                        </select>\n                    </div>\n            </span>\n        <span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ages\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"25\">25 - 34</option>\n                            <option value=\"35\">35 - 44</option>\n                            <option value=\"45\">45 - 54</option>\n                            <option value=\"55\">55 - 64</option>\n                            <option value=\"65\">65+</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns-border left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ratings\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"All\">All Ratings</option>\n                            <option value=\"5\">5 star</option>\n                            <option value=\"4\">4 star</option>\n                            <option value=\"3\">3 star</option>\n                            <option value=\"2\">2 star</option>\n                            <option value=\"1\">1 star</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns\" style=\"float: right\">\n                    <div>\n                        <select id=\"helpful\">\n                            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n                            <option value=\"MostHelpful\">Most Helpful</option>\n                            <option value=\"Oldest\">Oldest to Newest</option>\n                            <option value=\"Newest\">Newest to Oldest</option>\n                        </select>\n                    </div>\n        </span>\n</div>\n\n\n<div class=\"reviews-container\">\n<div id=\"selected-review-container\">\n    <div id=\"reviewCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack2 = helpers.each.call(depth0, depth0.ratingsReviewsItems, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n            <!-- Carousel nav -->\n            <a class=\"carousel-control left\" href=\"#reviewCarousel\" data-slide=\"prev\">&lsaquo;</a>\n            <a class=\"carousel-control right\" href=\"#reviewCarousel\" data-slide=\"next\">&rsaquo;</a>\n\n        </div>\n    </div>\n    <div id=\"reviews-count-container\" class=\"left-float\">1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews</div>\n    <!--1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews-->\n</div>\n\n<script>\n\n    reviewCount = function (){\n        var index = $(\".rev-car.item.active\").attr(\"indexid\");\n        var count = Number(index);\n        $('#reviews-count-container').text(count +\" of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Reviews\");\n    };\n\n    $('#reviewCarousel').bind('slid', function() {\n        reviewCount();\n    })\n\n</script>";
  return buffer;
  });
templates['paymentShippingDetails'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-details\" class=\"row-fluid\">\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Payment Details</span></p>\n        <p>\n            <select id=\"payment-details-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>Last 4 digits: 2227</option>\n                <option value=\"4437\">Last 4 digits: 4337</option>\n                <option value=\"2227\">Last 4 digits: 2227</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Billing Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Shipping&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color:#3078b9;\">(Multiple Addresses?)</span></p>\n        <p>\n            <select id=\"shipping-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>7000 Marina Blvd</option>\n                <option value=\"MostHelpful\">7000 Marina Blvd</option>\n                <option value=\"Oldest\">850 Cherry Ave</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Shipping Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n                555 test ave<br/>\n                San Bruno, CA 94066\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Delivery Date</span></p>\n        <p><span class=\"detail-labels\"><b>01/01/2013</b></span></p>\n        <p><span style=\"color:#C95925;\"><b>Please Note:</b></span></p>\n        <p><span style=\"color:#777777;font-family: 'Sintony',sans-serif;\">Non-priority delivery estimates<br/>\n                   can vary +/- 4 days.</span></p>\n    </div>\n</div>";
  return buffer;
  });
templates['reviewConfirmOrder'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-breadcrumb\" class=\"row-fluid\">\n    <img src=\"/img/cart/breadcrumbHome.png\"/> <a href=\"/cart.html\"> YOUR CART</a>  >  <a href=\"/review.html\"> CHECKOUT</a>  >  CONFIRM YOUR ORDER\n</div>\n<div id=\"confirm-order\"  class=\"row-fluid\">\n<div class=\"span6 confirm-order-title\">\n    Review Your Order: <span style=\"font-weight: 600;\">";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Items  |  $";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Total</span>\n</div>\n<div class=\"span2 offset1\">\n    <img src=\"/img/cart/confirmOrderBtn.png\"/>\n</div>\n</div>";
  return buffer;
  });
templates['reviewLineItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"col-labels\" class=\"row-fluid confirm-order-title\">\n    <div class=\"span2\">\n        Your Order\n    </div>\n    <div class=\"span1 offset4\">\n        Qty\n    </div>\n    <div class=\"span2\">\n        Price\n    </div>\n</div>\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"/img/product/tv-temp.png\"/>\n</div>\n<div class=\"span4 review-line-item-name\">\n    item name\n</div>\n<div class=\"span1 review-line-item-qty\">\n    5\n</div>\n<div class=\"span2 review-line-item-price\">\n    $139.98\n</div>\n</div>\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"/img/product/tv-temp.png\"/>\n</div>\n<div class=\"span4 review-line-item-name\">\n    item name\n</div>\n<div class=\"span1 review-line-item-qty\">\n    5\n</div>\n<div class=\"span2 review-line-item-price\">\n    $139.98\n</div>\n</div>\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"/img/product/tv-temp.png\"/>\n</div>\n<div class=\"span4 review-line-item-name\">\n    item name\n</div>\n<div class=\"span1 review-line-item-qty\">\n    5\n</div>\n<div class=\"span2 review-line-item-price\">\n    $139.98\n</div>\n</div>\n<div id=\"empty-div\" class=\"row-fluid\">\n</div>";
  });
templates['reviewSubtotals'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"review-subtotals\" class=\"row-fluid\">\n    <div class=\"span1 detail-labels\">\n        <b>Subtotals</b>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Items (3)</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$1128&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Shipping & Handling</span></p>\n\n        <p><span class=\"review-line-item-price\">$69.69&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Taxes</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$69.69</span></p>\n    </div>\n    <div class=\"span2 detail-labels\"><br/>\n\n        <p><b>Total</b>&nbsp;&nbsp;&nbsp;<span class=\"review-line-item-price\">$1300.98</span></p>\n    </div>\n</div>\n<div class=\"row-fluid\" style=\"padding-top: 4%\">\n<div class=\"span2 offset7\">\n    <img src=\"/img/cart/confirmOrderBtn.png\"/>\n</div>\n</div>";
  });
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../../img/tvFinder/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  buffer += "<script src=\"../../js/tvFinder/television.js\"></script>\n";
  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cartItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"row-fluid cart-items\">\n        <div id=\"cart-item-image\" class=\"span4\">\n            <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n        </div>\n        <div class=\"span4\">\n            <div id=\"cart-prod-title\" class=\"row-fluid\">\n                ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div class=\"row-fluid\">\n                <a  itemtosave=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\" class=\"save-for-later\">Save For Later</a>&nbsp;&nbsp;&nbsp;&nbsp;\n                <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart\">Remove</a>\n            </div>\n        </div>\n        <div id=\"cart-qty\" class=\"span2\">\n            <form>\n                <fieldset>\n                    <p>\n                        <label>Quantity</label>\n                        <input type=\"text\"\n                               id=\"cart-qty-input\"\n                               value=\"";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n                    </p>\n                </fieldset>\n            </form>\n        </div>\n        <div class=\"span2 cart-item-price\">\n            $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        </div>\n    </div>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"row-fluid cart-items\">\n    <div id=\"saved-item-img\" class=\"span4\">\n        <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n    </div>\n    <div class=\"span4\">\n        <div id=\"cart-prod-title\" class=\"row-fluid\">\n            ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"row-fluid\">\n        <a href=\"#\" itemtomove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"move-to-cart\">Move To Cart</a>&nbsp;&nbsp;&nbsp;&nbsp;\n        <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart remove-from-saved\">Remove</a>\n        </div>\n    </div>\n    <div class=\"span2 qty-text\">\n        Quantity: ";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n    <div class=\"span2 cart-item-price\">\n        $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n</div>\n</div>\n";
  return buffer;
  }

  buffer += "<div id=\"line-item\" class=\"row-fluid\">\n    <div class=\"item-num grey-gloss\">\n        ";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " item(s) for purchase\n    </div>\n    ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>\n<div id=\"saved-item\" class=\"row-fluid\">\n<div class=\"item-num grey-gloss\">\n    ";
  if (stack1 = helpers.savedItemsCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.savedItemsCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Saved Item(s)\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0.savedItems, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['cartSort'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid cart-header\">\n    <div class=\"span5\">\n        ";
  if (stack1 = helpers.cartSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cartSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Item(s) in cart\n    </div>\n    <div class=\"span3\">\n        <select id=\"cart-sort\">\n            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n            <option value=\"price\">Price</option>\n            <option value=\"AZ\">A-Z</option>\n        </select>\n    </div>\n    <div class=\"span1 offset3\">\n        <img src=\"/img/global/close-panel.png\"/>\n    </div>\n</div>\n\n";
  return buffer;
  });
templates['cartSubTotal'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid\">\n    <div class=\"span4 offset5\">\n        <span class=\"cart-header\">Subtotal:</span> <span id=\"price-subtotal\">$";
  if (stack1 = helpers.subtotals) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtotals; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n    <div class=\"span3\">\n        <a href=\"/review.html\" class=\"checkout\">Checkout</a>\n    </div>\n</div>";
  return buffer;
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../../img/tvFinder/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../../img/tvFinder/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>\n\n\n\n";
  });
templates['addToCart'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "    <div id=\"about\" class=\"left-float\">\n        <span style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 25px; color:#000000;\">About</span>\n        <p id=\"short-desc\">\n            <section>\n                ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 250, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 250, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span>\n            </section>\n        </p>\n    </div>\n    <div id=\"add-to-cart\" class=\"left-float\">\n    <a href=\"#\" class=\"qty-btn\">Qty</a></a>&nbsp;&nbsp;<a href=\"#\" class=\"add-to-cart-btn\">Add to Cart</a>\n\n        <p>\n            <section>\n                <p><a href=\"#\"><img src=\"img/product/find-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Find this product locally.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/arrival-icon.png\"/>&nbsp;&nbsp;Calculate arrival date.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/share-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Share with a friend.</a></p>\n            </section>\n        </p>\n    </div>\n    <br class=\"clear\" />\n";
  return buffer;
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"active item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class=\"active\"></li>\n            ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'></li>\n            ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/productPage.js\"></script>\n\n<div id=\"product-name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span id=\"close-x\"><img\n        src=\"/img/global/close-panel.png\"></span></div>\n<div id=\"ratings-container\">\n<span class=\"left-float\"><img src=\"";
  if (stack1 = helpers.ratingUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ratingUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/> </span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a\n        href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n</div>\n<div id=\"product-price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div id=\"product-image\">\n<!--<div id=\"hero-image\" class=\"left-float\">-->\n    <div id=\"itemCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <!-- Carousel nav -->\n        <a class=\"carousel-control left\" href=\"#itemCarousel\" data-slide=\"prev\">&lsaquo;</a>\n        <a class=\"carousel-control right\" href=\"#itemCarousel\" data-slide=\"next\">&rsaquo;</a>\n        <!--progress-->\n        <ol class=\"carousel-indicators\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ol>\n    </div>\n<!--</div>-->\n</div>\n\n\n\n\n";
  return buffer;
  });
templates['peopleWhoViewed'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n";
  options = {hash:{
    'compare': (3)
  },inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.if_lt),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "if_lt", data.index, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"people-viewed-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n";
  return buffer;
  }

  buffer += "<div class=\"horizBorder\"><p class=\"inset\"></p></div>\n<div id=\"people-viewed-title\">\nPeople Who Viewed This Item Also Viewed<a href=\"#\" class=\"see-more-btn\">See More</a>\n</div>\n<div id=\"people-viewed-container\">\n";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.viewedItems),stack1 == null || stack1 === false ? stack1 : stack1.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n<br class=\"clear\" />\n</div>\n";
  return buffer;
  });
templates['prodDetailTabs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <ul>\n                        <li>";
  if (stack1 = helpers.attributeName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " : ";
  if (stack1 = helpers.attributeValue) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeValue; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n                    </ul>\n                    ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/tab.js\"></script>\n<div class=\"horizborder\"><p class=\"inset\"></p></div>\n<div id=\"product-details-title\">\nProduct Details<a href=\"#\" class=\"have-question-btn\">Have a Question?</a>\n</div>\n<div id=\"details-container\">\n<div id=\"detail-tabs\" class=\"left-float\">\n    <section class=\"product-details-container\">\n        <div class=\"wrapper\">\n            <div id=\"v-nav\">\n                <ul>\n                    <li tab=\"tab1\" class=\"first current\"><span class=\"product-detail-tab-name\">Description</span></li>\n                    <li tab=\"tab2\"><span class=\"product-detail-tab-name\">Specifications</span></li>\n                    <li tab=\"tab3\"><span class=\"product-detail-tab-name\">Warranty</span></li>\n                    <li tab=\"tab4\"><span class=\"product-detail-tab-name\">Financing</span></li>\n                    <li tab=\"tab5\" class=\"last\"><span class=\"product-detail-tab-name\">Gifting</span></li>\n                </ul>\n\n                <div class=\"tab-content details\" style=\"display:block\">\n                    ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 1200, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 1200, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "...\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  stack2 = helpers.each.call(depth0, depth0.itemAttr, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  if (stack2 = helpers.supplierWarranty) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.supplierWarranty; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "<br/>\n                    ";
  if (stack2 = helpers.warrantyLength) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.warrantyLength; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n                </div>\n\n                <div class=\"tab-content details\">\n\n                </div>\n                <div class=\"tab-content details\">\n\n                </div>\n\n            </div>\n        </div>\n    </section>\n</div>\n<br class=\"clear\"/>\n</div>";
  return buffer;
  });
templates['productHeader'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"header\">\n    <div class=\"row-fluid\">\n        <div id=\"cart-container\" class=\"span12\">\n            <div class=\"span3\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></div>\n            <div id=\"white\" class=\"span4\">\n                <form method=\"get\" action=\"/search\" id=\"search\">\n                    <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n                </form>\n            </div>\n            <!--<div id=\"create-link\" class=\"span1\"><img src=\"/img/tvFinder/create.png\"/><a href=\"#\">-->\n                <!--Create</a></div>-->\n\n            <!--<div id=\"sign-in\" class=\"span1\"><img src=\"/img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a>-->\n            <!--</div>-->\n\n            <div id=\"cart-items\" class=\"span1 offset4\"><img src=\"/img/tvFinder/shoppingCart.png\"/><a href=\"/cart.html\">\n                Items</a></div>\n        </div>\n    </div>\n</div>";
  });
templates['ratingsReviews'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                    <div class=\"selected-review\">\n                        <div class=\"selected-review-title\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n                        <br/>\n                        <div style=\"font-family: 'Sintony',sans-serif;font-size:15px;color:color: #777777;\">by <span style=\"color: #3078b9;\">";
  if (stack2 = helpers.customer) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.customer; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span> on ";
  if (stack2 = helpers.date) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.date; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " ";
  stack2 = helpers['if'].call(depth0, depth0.isVerified, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\n                        <div><span class=\"stars\">";
  if (stack2 = helpers.rating) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rating; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></div><br/><br/>\n                        <div>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.review, 200, options) : helperMissing.call(depth0, "rawText", depth0.review, 200, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span></div>\n                    </div>\n                    <div class=\"separator\"></div>\n                    <div class=\"review-attributes-left-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Value:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.value) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.value; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Meets Expectations:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.meetsexpectations) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.meetsexpectations; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Picture Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.picturequality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.picturequality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Sound Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.soundquality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.soundquality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Features:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.features) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.features; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                        </dl>\n                    </div>\n                    <div class=\"review-attributes-right-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Age:</dt>\n                            <dd>";
  if (stack2 = helpers.age) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.age; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Gender:</dt>\n                            <dd>";
  if (stack2 = helpers.gender) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.gender; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Ownership:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Usage:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>City:</dt>\n                            <dd>";
  if (stack2 = helpers.city) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.city; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Helpful Votes:</dt>\n                            <dd>";
  if (stack2 = helpers.helpfulvotes) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.helpfulvotes; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                        </dl>\n                    </div>\n                <!--carousel-inner closing div    -->\n                </div>\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car active item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n             ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return " is Verified";
  }

  buffer += "\n\n<div id=\"ratings-rev-title\">\n    Reviews & Ratings <span style=\"color: #3078b9;\">(";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Total)</span> <a href=\"#\" class=\"write-review-btn\">Write a Review</a>\n</div>\n<div id=\"review-dropdowns-container\">\n<span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"reveiwers\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"Men\">Men</option>\n                            <option value=\"Women\">Women</option>\n                            <option value=\"Children\">Children</option>\n                            <option value=\"Animals\">Animals</option>\n                            <option value=\"Minerals\">Minerals</option>\n                            <option value=\"Vegetables\">Vegetables</option>\n                        </select>\n                    </div>\n            </span>\n        <span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ages\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"25\">25 - 34</option>\n                            <option value=\"35\">35 - 44</option>\n                            <option value=\"45\">45 - 54</option>\n                            <option value=\"55\">55 - 64</option>\n                            <option value=\"65\">65+</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns-border left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ratings\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"All\">All Ratings</option>\n                            <option value=\"5\">5 star</option>\n                            <option value=\"4\">4 star</option>\n                            <option value=\"3\">3 star</option>\n                            <option value=\"2\">2 star</option>\n                            <option value=\"1\">1 star</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns\" style=\"float: right\">\n                    <div>\n                        <select id=\"helpful\">\n                            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n                            <option value=\"MostHelpful\">Most Helpful</option>\n                            <option value=\"Oldest\">Oldest to Newest</option>\n                            <option value=\"Newest\">Newest to Oldest</option>\n                        </select>\n                    </div>\n        </span>\n</div>\n\n\n<div class=\"reviews-container\">\n<div id=\"selected-review-container\">\n    <div id=\"reviewCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack2 = helpers.each.call(depth0, depth0.ratingsReviewsItems, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n            <!-- Carousel nav -->\n            <a class=\"carousel-control left\" href=\"#reviewCarousel\" data-slide=\"prev\">&lsaquo;</a>\n            <a class=\"carousel-control right\" href=\"#reviewCarousel\" data-slide=\"next\">&rsaquo;</a>\n\n        </div>\n    </div>\n    <div id=\"reviews-count-container\" class=\"left-float\">1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews</div>\n    <!--1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews-->\n</div>\n\n<script>\n\n    reviewCount = function (){\n        var index = $(\".rev-car.item.active\").attr(\"indexid\");\n        var count = Number(index);\n        $('#reviews-count-container').text(count +\" of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Reviews\");\n    };\n\n    $('#reviewCarousel').bind('slid', function() {\n        reviewCount();\n    })\n\n</script>";
  return buffer;
  });
templates['paymentShippingDetails'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-details\" class=\"row-fluid\">\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Payment Details</span></p>\n        <p>\n            <select id=\"payment-details-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>Last 4 digits: 2227</option>\n                <option value=\"4437\">Last 4 digits: 4337</option>\n                <option value=\"2227\">Last 4 digits: 2227</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Billing Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Shipping&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color:#3078b9;\">(Multiple Addresses?)</span></p>\n        <p>\n            <select id=\"shipping-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>7000 Marina Blvd</option>\n                <option value=\"MostHelpful\">7000 Marina Blvd</option>\n                <option value=\"Oldest\">850 Cherry Ave</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Shipping Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n                555 test ave<br/>\n                San Bruno, CA 94066\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Delivery Date</span></p>\n        <p><span class=\"detail-labels\"><b>01/01/2013</b></span></p>\n        <p><span style=\"color:#C95925;\"><b>Please Note:</b></span></p>\n        <p><span style=\"color:#777777;font-family: 'Sintony',sans-serif;\">Non-priority delivery estimates<br/>\n                   can vary +/- 4 days.</span></p>\n    </div>\n</div>";
  return buffer;
  });
templates['reviewConfirmOrder'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-breadcrumb\" class=\"row-fluid\">\n    <img src=\"/img/cart/breadcrumbHome.png\"/> <a href=\"/cart.html\"> YOUR CART</a>  >  <a href=\"/review.html\"> CHECKOUT</a>  >  CONFIRM YOUR ORDER\n</div>\n<div id=\"confirm-order\"  class=\"row-fluid\">\n<div class=\"span6 confirm-order-title\">\n    Review Your Order: <span style=\"font-weight: 600;\">";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Items  |  $";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Total</span>\n</div>\n<div class=\"span2 offset1\">\n    <img src=\"/img/cart/confirmOrderBtn.png\"/>\n</div>\n</div>";
  return buffer;
  });
templates['reviewLineItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"col-labels\" class=\"row-fluid confirm-order-title\">\n    <div class=\"span2\">\n        Your Order\n    </div>\n    <div class=\"span1 offset4\">\n        Qty\n    </div>\n    <div class=\"span2\">\n        Price\n    </div>\n</div>\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"/img/product/tv-temp.png\"/>\n</div>\n<div class=\"span4 review-line-item-name\">\n    item name\n</div>\n<div class=\"span1 review-line-item-qty\">\n    5\n</div>\n<div class=\"span2 review-line-item-price\">\n    $139.98\n</div>\n</div>\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"/img/product/tv-temp.png\"/>\n</div>\n<div class=\"span4 review-line-item-name\">\n    item name\n</div>\n<div class=\"span1 review-line-item-qty\">\n    5\n</div>\n<div class=\"span2 review-line-item-price\">\n    $139.98\n</div>\n</div>\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"/img/product/tv-temp.png\"/>\n</div>\n<div class=\"span4 review-line-item-name\">\n    item name\n</div>\n<div class=\"span1 review-line-item-qty\">\n    5\n</div>\n<div class=\"span2 review-line-item-price\">\n    $139.98\n</div>\n</div>\n<div id=\"empty-div\" class=\"row-fluid\">\n</div>";
  });
templates['reviewSubtotals'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"review-subtotals\" class=\"row-fluid\">\n    <div class=\"span1 detail-labels\">\n        <b>Subtotals</b>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Items (3)</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$1128&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Shipping & Handling</span></p>\n\n        <p><span class=\"review-line-item-price\">$69.69&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Taxes</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$69.69</span></p>\n    </div>\n    <div class=\"span2 detail-labels\"><br/>\n\n        <p><b>Total</b>&nbsp;&nbsp;&nbsp;<span class=\"review-line-item-price\">$1300.98</span></p>\n    </div>\n</div>\n<div class=\"row-fluid\" style=\"padding-top: 4%\">\n<div class=\"span2 offset7\">\n    <img src=\"/img/cart/confirmOrderBtn.png\"/>\n</div>\n</div>";
  });
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../../img/tvFinder/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  buffer += "<script src=\"../../js/tvFinder/television.js\"></script>\n";
  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cartItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"row-fluid cart-items\">\n        <div id=\"cart-item-image\" class=\"span4\">\n            <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n        </div>\n        <div class=\"span4\">\n            <div id=\"cart-prod-title\" class=\"row-fluid\">\n                ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div class=\"row-fluid\">\n                <a  itemtosave=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\" class=\"save-for-later\">Save For Later</a>&nbsp;&nbsp;&nbsp;&nbsp;\n                <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart\">Remove</a>\n            </div>\n        </div>\n        <div id=\"cart-qty\" class=\"span2\">\n            <form>\n                <fieldset>\n                    <p>\n                        <label>Quantity</label>\n                        <input type=\"text\"\n                               id=\"cart-qty-input\"\n                               value=\"";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n                    </p>\n                </fieldset>\n            </form>\n        </div>\n        <div class=\"span2 cart-item-price\">\n            $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        </div>\n    </div>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"row-fluid cart-items\">\n    <div id=\"saved-item-img\" class=\"span4\">\n        <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n    </div>\n    <div class=\"span4\">\n        <div id=\"cart-prod-title\" class=\"row-fluid\">\n            ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"row-fluid\">\n        <a href=\"#\" itemtomove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"move-to-cart\">Move To Cart</a>&nbsp;&nbsp;&nbsp;&nbsp;\n        <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart remove-from-saved\">Remove</a>\n        </div>\n    </div>\n    <div class=\"span2 qty-text\">\n        Quantity: ";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n    <div class=\"span2 cart-item-price\">\n        $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n</div>\n</div>\n";
  return buffer;
  }

  buffer += "<div id=\"line-item\" class=\"row-fluid\">\n    <div class=\"item-num grey-gloss\">\n        ";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " item(s) for purchase\n    </div>\n    ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>\n<div id=\"saved-item\" class=\"row-fluid\">\n<div class=\"item-num grey-gloss\">\n    ";
  if (stack1 = helpers.savedItemsCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.savedItemsCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Saved Item(s)\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0.savedItems, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['cartSort'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid cart-header\">\n    <div class=\"span5\">\n        ";
  if (stack1 = helpers.cartSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cartSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Item(s) in cart\n    </div>\n    <div class=\"span3\">\n        <select id=\"cart-sort\">\n            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n            <option value=\"price\">Price</option>\n            <option value=\"AZ\">A-Z</option>\n        </select>\n    </div>\n    <div class=\"span1 offset3\">\n        <img src=\"/img/global/close-panel.png\"/>\n    </div>\n</div>\n\n";
  return buffer;
  });
templates['cartSubTotal'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid\">\n    <div class=\"span4 offset5\">\n        <span class=\"cart-header\">Subtotal:</span> <span id=\"price-subtotal\">$";
  if (stack1 = helpers.subtotals) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtotals; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n    <div class=\"span3\">\n        <a href=\"/review.html\" class=\"checkout\">Checkout</a>\n    </div>\n</div>";
  return buffer;
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../../img/tvFinder/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../../img/tvFinder/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>\n\n\n\n";
  });
templates['addToCart'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "    <div id=\"about\" class=\"left-float\">\n        <span style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 25px; color:#000000;\">About</span>\n        <p id=\"short-desc\">\n            <section>\n                ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 250, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 250, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span>\n            </section>\n        </p>\n    </div>\n    <div id=\"add-to-cart\" class=\"left-float\">\n    <a href=\"#\" class=\"qty-btn\">Qty</a></a>&nbsp;&nbsp;<a href=\"#\" class=\"add-to-cart-btn\">Add to Cart</a>\n\n        <p>\n            <section>\n                <p><a href=\"#\"><img src=\"img/product/find-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Find this product locally.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/arrival-icon.png\"/>&nbsp;&nbsp;Calculate arrival date.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/share-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Share with a friend.</a></p>\n            </section>\n        </p>\n    </div>\n    <br class=\"clear\" />\n";
  return buffer;
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"active item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class=\"active\"></li>\n            ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'></li>\n            ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/productPage.js\"></script>\n\n<div id=\"product-name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span id=\"close-x\"><img\n        src=\"/img/global/close-panel.png\"></span></div>\n<div id=\"ratings-container\">\n<span class=\"left-float\"><img src=\"";
  if (stack1 = helpers.ratingUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ratingUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/> </span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a\n        href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n</div>\n<div id=\"product-price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div id=\"product-image\">\n<!--<div id=\"hero-image\" class=\"left-float\">-->\n    <div id=\"itemCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <!-- Carousel nav -->\n        <a class=\"carousel-control left\" href=\"#itemCarousel\" data-slide=\"prev\">&lsaquo;</a>\n        <a class=\"carousel-control right\" href=\"#itemCarousel\" data-slide=\"next\">&rsaquo;</a>\n        <!--progress-->\n        <ol class=\"carousel-indicators\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ol>\n    </div>\n<!--</div>-->\n</div>\n\n\n\n\n";
  return buffer;
  });
templates['peopleWhoViewed'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n";
  options = {hash:{
    'compare': (3)
  },inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.if_lt),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "if_lt", data.index, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"people-viewed-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n";
  return buffer;
  }

  buffer += "<div class=\"horizBorder\"><p class=\"inset\"></p></div>\n<div id=\"people-viewed-title\">\nPeople Who Viewed This Item Also Viewed<a href=\"#\" class=\"see-more-btn\">See More</a>\n</div>\n<div id=\"people-viewed-container\">\n";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.viewedItems),stack1 == null || stack1 === false ? stack1 : stack1.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n<br class=\"clear\" />\n</div>\n";
  return buffer;
  });
templates['prodDetailTabs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <ul>\n                        <li>";
  if (stack1 = helpers.attributeName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " : ";
  if (stack1 = helpers.attributeValue) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeValue; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n                    </ul>\n                    ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/tab.js\"></script>\n<div class=\"horizborder\"><p class=\"inset\"></p></div>\n<div id=\"product-details-title\">\nProduct Details<a href=\"#\" class=\"have-question-btn\">Have a Question?</a>\n</div>\n<div id=\"details-container\">\n<div id=\"detail-tabs\" class=\"left-float\">\n    <section class=\"product-details-container\">\n        <div class=\"wrapper\">\n            <div id=\"v-nav\">\n                <ul>\n                    <li tab=\"tab1\" class=\"first current\"><span class=\"product-detail-tab-name\">Description</span></li>\n                    <li tab=\"tab2\"><span class=\"product-detail-tab-name\">Specifications</span></li>\n                    <li tab=\"tab3\"><span class=\"product-detail-tab-name\">Warranty</span></li>\n                    <li tab=\"tab4\"><span class=\"product-detail-tab-name\">Financing</span></li>\n                    <li tab=\"tab5\" class=\"last\"><span class=\"product-detail-tab-name\">Gifting</span></li>\n                </ul>\n\n                <div class=\"tab-content details\" style=\"display:block\">\n                    ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 1200, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 1200, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "...\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  stack2 = helpers.each.call(depth0, depth0.itemAttr, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  if (stack2 = helpers.supplierWarranty) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.supplierWarranty; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "<br/>\n                    ";
  if (stack2 = helpers.warrantyLength) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.warrantyLength; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n                </div>\n\n                <div class=\"tab-content details\">\n\n                </div>\n                <div class=\"tab-content details\">\n\n                </div>\n\n            </div>\n        </div>\n    </section>\n</div>\n<br class=\"clear\"/>\n</div>";
  return buffer;
  });
templates['productHeader'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"header\">\n    <div class=\"row-fluid\">\n        <div id=\"cart-container\" class=\"span12\">\n            <div class=\"span3\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></div>\n            <div id=\"white\" class=\"span4\">\n                <form method=\"get\" action=\"/search\" id=\"search\">\n                    <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n                </form>\n            </div>\n            <!--<div id=\"create-link\" class=\"span1\"><img src=\"/img/tvFinder/create.png\"/><a href=\"#\">-->\n                <!--Create</a></div>-->\n\n            <!--<div id=\"sign-in\" class=\"span1\"><img src=\"/img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a>-->\n            <!--</div>-->\n\n            <div id=\"cart-items\" class=\"span1 offset4\"><img src=\"/img/tvFinder/shoppingCart.png\"/><a href=\"/cart.html\">\n                Items</a></div>\n        </div>\n    </div>\n</div>";
  });
templates['ratingsReviews'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                    <div class=\"selected-review\">\n                        <div class=\"selected-review-title\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n                        <br/>\n                        <div style=\"font-family: 'Sintony',sans-serif;font-size:15px;color:color: #777777;\">by <span style=\"color: #3078b9;\">";
  if (stack2 = helpers.customer) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.customer; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span> on ";
  if (stack2 = helpers.date) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.date; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " ";
  stack2 = helpers['if'].call(depth0, depth0.isVerified, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\n                        <div><span class=\"stars\">";
  if (stack2 = helpers.rating) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rating; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></div><br/><br/>\n                        <div>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.review, 200, options) : helperMissing.call(depth0, "rawText", depth0.review, 200, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span></div>\n                    </div>\n                    <div class=\"separator\"></div>\n                    <div class=\"review-attributes-left-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Value:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.value) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.value; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Meets Expectations:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.meetsexpectations) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.meetsexpectations; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Picture Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.picturequality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.picturequality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Sound Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.soundquality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.soundquality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Features:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.features) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.features; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                        </dl>\n                    </div>\n                    <div class=\"review-attributes-right-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Age:</dt>\n                            <dd>";
  if (stack2 = helpers.age) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.age; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Gender:</dt>\n                            <dd>";
  if (stack2 = helpers.gender) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.gender; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Ownership:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Usage:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>City:</dt>\n                            <dd>";
  if (stack2 = helpers.city) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.city; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Helpful Votes:</dt>\n                            <dd>";
  if (stack2 = helpers.helpfulvotes) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.helpfulvotes; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                        </dl>\n                    </div>\n                <!--carousel-inner closing div    -->\n                </div>\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car active item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n             ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return " is Verified";
  }

  buffer += "\n\n<div id=\"ratings-rev-title\">\n    Reviews & Ratings <span style=\"color: #3078b9;\">(";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Total)</span> <a href=\"#\" class=\"write-review-btn\">Write a Review</a>\n</div>\n<div id=\"review-dropdowns-container\">\n<span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"reveiwers\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"Men\">Men</option>\n                            <option value=\"Women\">Women</option>\n                            <option value=\"Children\">Children</option>\n                            <option value=\"Animals\">Animals</option>\n                            <option value=\"Minerals\">Minerals</option>\n                            <option value=\"Vegetables\">Vegetables</option>\n                        </select>\n                    </div>\n            </span>\n        <span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ages\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"25\">25 - 34</option>\n                            <option value=\"35\">35 - 44</option>\n                            <option value=\"45\">45 - 54</option>\n                            <option value=\"55\">55 - 64</option>\n                            <option value=\"65\">65+</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns-border left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ratings\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"All\">All Ratings</option>\n                            <option value=\"5\">5 star</option>\n                            <option value=\"4\">4 star</option>\n                            <option value=\"3\">3 star</option>\n                            <option value=\"2\">2 star</option>\n                            <option value=\"1\">1 star</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns\" style=\"float: right\">\n                    <div>\n                        <select id=\"helpful\">\n                            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n                            <option value=\"MostHelpful\">Most Helpful</option>\n                            <option value=\"Oldest\">Oldest to Newest</option>\n                            <option value=\"Newest\">Newest to Oldest</option>\n                        </select>\n                    </div>\n        </span>\n</div>\n\n\n<div class=\"reviews-container\">\n<div id=\"selected-review-container\">\n    <div id=\"reviewCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack2 = helpers.each.call(depth0, depth0.ratingsReviewsItems, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n            <!-- Carousel nav -->\n            <a class=\"carousel-control left\" href=\"#reviewCarousel\" data-slide=\"prev\">&lsaquo;</a>\n            <a class=\"carousel-control right\" href=\"#reviewCarousel\" data-slide=\"next\">&rsaquo;</a>\n\n        </div>\n    </div>\n    <div id=\"reviews-count-container\" class=\"left-float\">1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews</div>\n    <!--1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews-->\n</div>\n\n<script>\n\n    reviewCount = function (){\n        var index = $(\".rev-car.item.active\").attr(\"indexid\");\n        var count = Number(index);\n        $('#reviews-count-container').text(count +\" of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Reviews\");\n    };\n\n    $('#reviewCarousel').bind('slid', function() {\n        reviewCount();\n    })\n\n</script>";
  return buffer;
  });
templates['paymentShippingDetails'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-details\" class=\"row-fluid\">\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Payment Details</span></p>\n        <p>\n            <select id=\"payment-details-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>Last 4 digits: 2227</option>\n                <option value=\"4437\">Last 4 digits: 4337</option>\n                <option value=\"2227\">Last 4 digits: 2227</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Billing Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Shipping&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color:#3078b9;\">(Multiple Addresses?)</span></p>\n        <p>\n            <select id=\"shipping-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>7000 Marina Blvd</option>\n                <option value=\"MostHelpful\">7000 Marina Blvd</option>\n                <option value=\"Oldest\">850 Cherry Ave</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Shipping Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n                555 test ave<br/>\n                San Bruno, CA 94066\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Delivery Date</span></p>\n        <p><span class=\"detail-labels\"><b>01/01/2013</b></span></p>\n        <p><span style=\"color:#C95925;\"><b>Please Note:</b></span></p>\n        <p><span style=\"color:#777777;font-family: 'Sintony',sans-serif;\">Non-priority delivery estimates<br/>\n                   can vary +/- 4 days.</span></p>\n    </div>\n</div>";
  return buffer;
  });
templates['reviewConfirmOrder'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-breadcrumb\" class=\"row-fluid\">\n    <img src=\"/img/cart/breadcrumbHome.png\"/> <a href=\"/cart.html\"> YOUR CART</a>  >  <a href=\"/review.html\"> CHECKOUT</a>  >  CONFIRM YOUR ORDER\n</div>\n<div id=\"confirm-order\"  class=\"row-fluid\">\n<div class=\"span6 confirm-order-title\">\n    Review Your Order: <span style=\"font-weight: 600;\">";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Items  |  $";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Total</span>\n</div>\n<div class=\"span2 offset1\">\n    <img src=\"/img/cart/confirmOrderBtn.png\"/>\n</div>\n</div>";
  return buffer;
  });
templates['reviewLineItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"col-labels\" class=\"row-fluid confirm-order-title\">\n    <div class=\"span2\">\n        Your Order\n    </div>\n    <div class=\"span1 offset4\">\n        Qty\n    </div>\n    <div class=\"span2\">\n        Price\n    </div>\n</div>\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"/img/product/tv-temp.png\"/>\n</div>\n<div class=\"span4 review-line-item-name\">\n    item name\n</div>\n<div class=\"span1 review-line-item-qty\">\n    5\n</div>\n<div class=\"span2 review-line-item-price\">\n    $139.98\n</div>\n</div>\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"/img/product/tv-temp.png\"/>\n</div>\n<div class=\"span4 review-line-item-name\">\n    item name\n</div>\n<div class=\"span1 review-line-item-qty\">\n    5\n</div>\n<div class=\"span2 review-line-item-price\">\n    $139.98\n</div>\n</div>\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"/img/product/tv-temp.png\"/>\n</div>\n<div class=\"span4 review-line-item-name\">\n    item name\n</div>\n<div class=\"span1 review-line-item-qty\">\n    5\n</div>\n<div class=\"span2 review-line-item-price\">\n    $139.98\n</div>\n</div>\n<div id=\"empty-div\" class=\"row-fluid\">\n</div>";
  });
templates['reviewSubtotals'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"review-subtotals\" class=\"row-fluid\">\n    <div class=\"span1 detail-labels\">\n        <b>Subtotals</b>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Items (3)</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$1128&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Shipping & Handling</span></p>\n\n        <p><span class=\"review-line-item-price\">$69.69&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Taxes</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$69.69</span></p>\n    </div>\n    <div class=\"span2 detail-labels\"><br/>\n\n        <p><b>Total</b>&nbsp;&nbsp;&nbsp;<span class=\"review-line-item-price\">$1300.98</span></p>\n    </div>\n</div>\n<div class=\"row-fluid\" style=\"padding-top: 4%\">\n<div class=\"span2 offset7\">\n    <img src=\"/img/cart/confirmOrderBtn.png\"/>\n</div>\n</div>";
  });
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../../img/tvFinder/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  buffer += "<script src=\"../../js/tvFinder/television.js\"></script>\n";
  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cartItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"row-fluid cart-items\">\n        <div id=\"cart-item-image\" class=\"span4\">\n            <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n        </div>\n        <div class=\"span4\">\n            <div id=\"cart-prod-title\" class=\"row-fluid\">\n                ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div class=\"row-fluid\">\n                <a  itemtosave=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\" class=\"save-for-later\">Save For Later</a>&nbsp;&nbsp;&nbsp;&nbsp;\n                <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart\">Remove</a>\n            </div>\n        </div>\n        <div id=\"cart-qty\" class=\"span2\">\n            <form>\n                <fieldset>\n                    <p>\n                        <label>Quantity</label>\n                        <input type=\"text\"\n                               id=\"cart-qty-input\"\n                               value=\"";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n                    </p>\n                </fieldset>\n            </form>\n        </div>\n        <div class=\"span2 cart-item-price\">\n            $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        </div>\n    </div>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"row-fluid cart-items\">\n    <div id=\"saved-item-img\" class=\"span4\">\n        <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n    </div>\n    <div class=\"span4\">\n        <div id=\"cart-prod-title\" class=\"row-fluid\">\n            ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"row-fluid\">\n        <a href=\"#\" itemtomove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"move-to-cart\">Move To Cart</a>&nbsp;&nbsp;&nbsp;&nbsp;\n        <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart remove-from-saved\">Remove</a>\n        </div>\n    </div>\n    <div class=\"span2 qty-text\">\n        Quantity: ";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n    <div class=\"span2 cart-item-price\">\n        $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n</div>\n</div>\n";
  return buffer;
  }

  buffer += "<div id=\"line-item\" class=\"row-fluid\">\n    <div class=\"item-num grey-gloss\">\n        ";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " item(s) for purchase\n    </div>\n    ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>\n<div id=\"saved-item\" class=\"row-fluid\">\n<div class=\"item-num grey-gloss\">\n    ";
  if (stack1 = helpers.savedItemsCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.savedItemsCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Saved Item(s)\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0.savedItems, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['cartSort'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid cart-header\">\n    <div class=\"span5\">\n        ";
  if (stack1 = helpers.cartSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cartSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Item(s) in cart\n    </div>\n    <div class=\"span3\">\n        <select id=\"cart-sort\">\n            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n            <option value=\"price\">Price</option>\n            <option value=\"AZ\">A-Z</option>\n        </select>\n    </div>\n    <div class=\"span1 offset3\">\n        <img src=\"/img/global/close-panel.png\"/>\n    </div>\n</div>\n\n";
  return buffer;
  });
templates['cartSubTotal'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid\">\n    <div class=\"span4 offset5\">\n        <span class=\"cart-header\">Subtotal:</span> <span id=\"price-subtotal\">$";
  if (stack1 = helpers.subtotals) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtotals; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n    <div class=\"span3\">\n        <a href=\"/review.html\" class=\"checkout\">Checkout</a>\n    </div>\n</div>";
  return buffer;
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../../img/tvFinder/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../../img/tvFinder/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>\n\n\n\n";
  });
templates['addToCart'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "    <div id=\"about\" class=\"left-float\">\n        <span style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 25px; color:#000000;\">About</span>\n        <p id=\"short-desc\">\n            <section>\n                ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 250, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 250, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span>\n            </section>\n        </p>\n    </div>\n    <div id=\"add-to-cart\" class=\"left-float\">\n    <a href=\"#\" class=\"qty-btn\">Qty</a></a>&nbsp;&nbsp;<a href=\"#\" class=\"add-to-cart-btn\">Add to Cart</a>\n\n        <p>\n            <section>\n                <p><a href=\"#\"><img src=\"img/product/find-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Find this product locally.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/arrival-icon.png\"/>&nbsp;&nbsp;Calculate arrival date.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/share-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Share with a friend.</a></p>\n            </section>\n        </p>\n    </div>\n    <br class=\"clear\" />\n";
  return buffer;
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"active item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class=\"active\"></li>\n            ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'></li>\n            ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/productPage.js\"></script>\n\n<div id=\"product-name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span id=\"close-x\"><img\n        src=\"/img/global/close-panel.png\"></span></div>\n<div id=\"ratings-container\">\n<span class=\"left-float\"><img src=\"";
  if (stack1 = helpers.ratingUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ratingUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/> </span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a\n        href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n</div>\n<div id=\"product-price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div id=\"product-image\">\n<!--<div id=\"hero-image\" class=\"left-float\">-->\n    <div id=\"itemCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <!-- Carousel nav -->\n        <a class=\"carousel-control left\" href=\"#itemCarousel\" data-slide=\"prev\">&lsaquo;</a>\n        <a class=\"carousel-control right\" href=\"#itemCarousel\" data-slide=\"next\">&rsaquo;</a>\n        <!--progress-->\n        <ol class=\"carousel-indicators\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ol>\n    </div>\n<!--</div>-->\n</div>\n\n\n\n\n";
  return buffer;
  });
templates['peopleWhoViewed'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n";
  options = {hash:{
    'compare': (3)
  },inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.if_lt),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "if_lt", data.index, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"people-viewed-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n";
  return buffer;
  }

  buffer += "<div class=\"horizBorder\"><p class=\"inset\"></p></div>\n<div id=\"people-viewed-title\">\nPeople Who Viewed This Item Also Viewed<a href=\"#\" class=\"see-more-btn\">See More</a>\n</div>\n<div id=\"people-viewed-container\">\n";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.viewedItems),stack1 == null || stack1 === false ? stack1 : stack1.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n<br class=\"clear\" />\n</div>\n";
  return buffer;
  });
templates['prodDetailTabs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <ul>\n                        <li>";
  if (stack1 = helpers.attributeName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " : ";
  if (stack1 = helpers.attributeValue) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeValue; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n                    </ul>\n                    ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/tab.js\"></script>\n<div class=\"horizborder\"><p class=\"inset\"></p></div>\n<div id=\"product-details-title\">\nProduct Details<a href=\"#\" class=\"have-question-btn\">Have a Question?</a>\n</div>\n<div id=\"details-container\">\n<div id=\"detail-tabs\" class=\"left-float\">\n    <section class=\"product-details-container\">\n        <div class=\"wrapper\">\n            <div id=\"v-nav\">\n                <ul>\n                    <li tab=\"tab1\" class=\"first current\"><span class=\"product-detail-tab-name\">Description</span></li>\n                    <li tab=\"tab2\"><span class=\"product-detail-tab-name\">Specifications</span></li>\n                    <li tab=\"tab3\"><span class=\"product-detail-tab-name\">Warranty</span></li>\n                    <li tab=\"tab4\"><span class=\"product-detail-tab-name\">Financing</span></li>\n                    <li tab=\"tab5\" class=\"last\"><span class=\"product-detail-tab-name\">Gifting</span></li>\n                </ul>\n\n                <div class=\"tab-content details\" style=\"display:block\">\n                    ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 1200, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 1200, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "...\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  stack2 = helpers.each.call(depth0, depth0.itemAttr, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  if (stack2 = helpers.supplierWarranty) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.supplierWarranty; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "<br/>\n                    ";
  if (stack2 = helpers.warrantyLength) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.warrantyLength; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n                </div>\n\n                <div class=\"tab-content details\">\n\n                </div>\n                <div class=\"tab-content details\">\n\n                </div>\n\n            </div>\n        </div>\n    </section>\n</div>\n<br class=\"clear\"/>\n</div>";
  return buffer;
  });
templates['productHeader'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"header\">\n    <div class=\"row-fluid\">\n        <div id=\"cart-container\" class=\"span12\">\n            <div class=\"span3\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></div>\n            <div id=\"white\" class=\"span4\">\n                <form method=\"get\" action=\"/search\" id=\"search\">\n                    <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n                </form>\n            </div>\n            <!--<div id=\"create-link\" class=\"span1\"><img src=\"/img/tvFinder/create.png\"/><a href=\"#\">-->\n                <!--Create</a></div>-->\n\n            <!--<div id=\"sign-in\" class=\"span1\"><img src=\"/img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a>-->\n            <!--</div>-->\n\n            <div id=\"cart-items\" class=\"span1 offset4\"><img src=\"/img/tvFinder/shoppingCart.png\"/><a href=\"/cart.html\">\n                Items</a></div>\n        </div>\n    </div>\n</div>";
  });
templates['ratingsReviews'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                    <div class=\"selected-review\">\n                        <div class=\"selected-review-title\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n                        <br/>\n                        <div style=\"font-family: 'Sintony',sans-serif;font-size:15px;color:color: #777777;\">by <span style=\"color: #3078b9;\">";
  if (stack2 = helpers.customer) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.customer; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span> on ";
  if (stack2 = helpers.date) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.date; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " ";
  stack2 = helpers['if'].call(depth0, depth0.isVerified, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\n                        <div><span class=\"stars\">";
  if (stack2 = helpers.rating) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rating; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></div><br/><br/>\n                        <div>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.review, 200, options) : helperMissing.call(depth0, "rawText", depth0.review, 200, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span></div>\n                    </div>\n                    <div class=\"separator\"></div>\n                    <div class=\"review-attributes-left-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Value:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.value) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.value; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Meets Expectations:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.meetsexpectations) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.meetsexpectations; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Picture Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.picturequality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.picturequality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Sound Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.soundquality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.soundquality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Features:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.features) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.features; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                        </dl>\n                    </div>\n                    <div class=\"review-attributes-right-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Age:</dt>\n                            <dd>";
  if (stack2 = helpers.age) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.age; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Gender:</dt>\n                            <dd>";
  if (stack2 = helpers.gender) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.gender; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Ownership:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Usage:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>City:</dt>\n                            <dd>";
  if (stack2 = helpers.city) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.city; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Helpful Votes:</dt>\n                            <dd>";
  if (stack2 = helpers.helpfulvotes) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.helpfulvotes; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                        </dl>\n                    </div>\n                <!--carousel-inner closing div    -->\n                </div>\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car active item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n             ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return " is Verified";
  }

  buffer += "\n\n<div id=\"ratings-rev-title\">\n    Reviews & Ratings <span style=\"color: #3078b9;\">(";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Total)</span> <a href=\"#\" class=\"write-review-btn\">Write a Review</a>\n</div>\n<div id=\"review-dropdowns-container\">\n<span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"reveiwers\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"Men\">Men</option>\n                            <option value=\"Women\">Women</option>\n                            <option value=\"Children\">Children</option>\n                            <option value=\"Animals\">Animals</option>\n                            <option value=\"Minerals\">Minerals</option>\n                            <option value=\"Vegetables\">Vegetables</option>\n                        </select>\n                    </div>\n            </span>\n        <span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ages\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"25\">25 - 34</option>\n                            <option value=\"35\">35 - 44</option>\n                            <option value=\"45\">45 - 54</option>\n                            <option value=\"55\">55 - 64</option>\n                            <option value=\"65\">65+</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns-border left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ratings\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"All\">All Ratings</option>\n                            <option value=\"5\">5 star</option>\n                            <option value=\"4\">4 star</option>\n                            <option value=\"3\">3 star</option>\n                            <option value=\"2\">2 star</option>\n                            <option value=\"1\">1 star</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns\" style=\"float: right\">\n                    <div>\n                        <select id=\"helpful\">\n                            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n                            <option value=\"MostHelpful\">Most Helpful</option>\n                            <option value=\"Oldest\">Oldest to Newest</option>\n                            <option value=\"Newest\">Newest to Oldest</option>\n                        </select>\n                    </div>\n        </span>\n</div>\n\n\n<div class=\"reviews-container\">\n<div id=\"selected-review-container\">\n    <div id=\"reviewCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack2 = helpers.each.call(depth0, depth0.ratingsReviewsItems, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n            <!-- Carousel nav -->\n            <a class=\"carousel-control left\" href=\"#reviewCarousel\" data-slide=\"prev\">&lsaquo;</a>\n            <a class=\"carousel-control right\" href=\"#reviewCarousel\" data-slide=\"next\">&rsaquo;</a>\n\n        </div>\n    </div>\n    <div id=\"reviews-count-container\" class=\"left-float\">1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews</div>\n    <!--1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews-->\n</div>\n\n<script>\n\n    reviewCount = function (){\n        var index = $(\".rev-car.item.active\").attr(\"indexid\");\n        var count = Number(index);\n        $('#reviews-count-container').text(count +\" of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Reviews\");\n    };\n\n    $('#reviewCarousel').bind('slid', function() {\n        reviewCount();\n    })\n\n</script>";
  return buffer;
  });
templates['paymentShippingDetails'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-details\" class=\"row-fluid\">\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Payment Details</span></p>\n        <p>\n            <select id=\"payment-details-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>Last 4 digits: 2227</option>\n                <option value=\"4437\">Last 4 digits: 4337</option>\n                <option value=\"2227\">Last 4 digits: 2227</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Billing Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Shipping&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color:#3078b9;\">(Multiple Addresses?)</span></p>\n        <p>\n            <select id=\"shipping-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>7000 Marina Blvd</option>\n                <option value=\"MostHelpful\">7000 Marina Blvd</option>\n                <option value=\"Oldest\">850 Cherry Ave</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Shipping Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n                555 test ave<br/>\n                San Bruno, CA 94066\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Delivery Date</span></p>\n        <p><span class=\"detail-labels\"><b>01/01/2013</b></span></p>\n        <p><span style=\"color:#C95925;\"><b>Please Note:</b></span></p>\n        <p><span style=\"color:#777777;font-family: 'Sintony',sans-serif;\">Non-priority delivery estimates<br/>\n                   can vary +/- 4 days.</span></p>\n    </div>\n</div>";
  return buffer;
  });
templates['reviewConfirmOrder'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-breadcrumb\" class=\"row-fluid\">\n    <img src=\"/img/cart/breadcrumbHome.png\"/> <a href=\"/cart.html\"> YOUR CART</a>  >  <a href=\"/review.html\"> CHECKOUT</a>  >  CONFIRM YOUR ORDER\n</div>\n<div id=\"confirm-order\"  class=\"row-fluid\">\n<div class=\"span6 confirm-order-title\">\n    Review Your Order: <span style=\"font-weight: 600;\">";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Items  |  $";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Total</span>\n</div>\n<div class=\"span2 offset1\">\n    <img src=\"/img/cart/confirmOrderBtn.png\"/>\n</div>\n</div>";
  return buffer;
  });
templates['reviewLineItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"col-labels\" class=\"row-fluid confirm-order-title\">\n    <div class=\"span2\">\n        Your Order\n    </div>\n    <div class=\"span1 offset4\">\n        Qty\n    </div>\n    <div class=\"span2\">\n        Price\n    </div>\n</div>\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"/img/product/tv-temp.png\"/>\n</div>\n<div class=\"span4 review-line-item-name\">\n    item name\n</div>\n<div class=\"span1 review-line-item-qty\">\n    5\n</div>\n<div class=\"span2 review-line-item-price\">\n    $139.98\n</div>\n</div>\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"/img/product/tv-temp.png\"/>\n</div>\n<div class=\"span4 review-line-item-name\">\n    item name\n</div>\n<div class=\"span1 review-line-item-qty\">\n    5\n</div>\n<div class=\"span2 review-line-item-price\">\n    $139.98\n</div>\n</div>\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"/img/product/tv-temp.png\"/>\n</div>\n<div class=\"span4 review-line-item-name\">\n    item name\n</div>\n<div class=\"span1 review-line-item-qty\">\n    5\n</div>\n<div class=\"span2 review-line-item-price\">\n    $139.98\n</div>\n</div>\n<div id=\"empty-div\" class=\"row-fluid\">\n</div>";
  });
templates['reviewSubtotals'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"review-subtotals\" class=\"row-fluid\">\n    <div class=\"span1 detail-labels\">\n        <b>Subtotals</b>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Items (3)</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$1128&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Shipping & Handling</span></p>\n\n        <p><span class=\"review-line-item-price\">$69.69&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Taxes</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$69.69</span></p>\n    </div>\n    <div class=\"span2 detail-labels\"><br/>\n\n        <p><b>Total</b>&nbsp;&nbsp;&nbsp;<span class=\"review-line-item-price\">$1300.98</span></p>\n    </div>\n</div>\n<div class=\"row-fluid\" style=\"padding-top: 4%\">\n<div class=\"span2 offset7\">\n    <img src=\"/img/cart/confirmOrderBtn.png\"/>\n</div>\n</div>";
  });
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../../img/tvFinder/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  buffer += "<script src=\"../../js/tvFinder/television.js\"></script>\n";
  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cartItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"row-fluid cart-items\">\n        <div id=\"cart-item-image\" class=\"span4\">\n            <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n        </div>\n        <div class=\"span4\">\n            <div id=\"cart-prod-title\" class=\"row-fluid\">\n                ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div class=\"row-fluid\">\n                <a  itemtosave=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\" class=\"save-for-later\">Save For Later</a>&nbsp;&nbsp;&nbsp;&nbsp;\n                <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart\">Remove</a>\n            </div>\n        </div>\n        <div id=\"cart-qty\" class=\"span2\">\n            <form>\n                <fieldset>\n                    <p>\n                        <label>Quantity</label>\n                        <input type=\"text\"\n                               id=\"cart-qty-input\"\n                               value=\"";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n                    </p>\n                </fieldset>\n            </form>\n        </div>\n        <div class=\"span2 cart-item-price\">\n            $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        </div>\n    </div>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"row-fluid cart-items\">\n    <div id=\"saved-item-img\" class=\"span4\">\n        <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n    </div>\n    <div class=\"span4\">\n        <div id=\"cart-prod-title\" class=\"row-fluid\">\n            ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"row-fluid\">\n        <a href=\"#\" itemtomove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"move-to-cart\">Move To Cart</a>&nbsp;&nbsp;&nbsp;&nbsp;\n        <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart remove-from-saved\">Remove</a>\n        </div>\n    </div>\n    <div class=\"span2 qty-text\">\n        Quantity: ";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n    <div class=\"span2 cart-item-price\">\n        $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n</div>\n</div>\n";
  return buffer;
  }

  buffer += "<div id=\"line-item\" class=\"row-fluid\">\n    <div class=\"item-num grey-gloss\">\n        ";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " item(s) for purchase\n    </div>\n    ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>\n<div id=\"saved-item\" class=\"row-fluid\">\n<div class=\"item-num grey-gloss\">\n    ";
  if (stack1 = helpers.savedItemsCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.savedItemsCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Saved Item(s)\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0.savedItems, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['cartSort'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid cart-header\">\n    <div class=\"span5\">\n        ";
  if (stack1 = helpers.cartSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cartSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Item(s) in cart\n    </div>\n    <div class=\"span3\">\n        <select id=\"cart-sort\">\n            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n            <option value=\"price\">Price</option>\n            <option value=\"AZ\">A-Z</option>\n        </select>\n    </div>\n    <div class=\"span1 offset3\">\n        <img src=\"/img/global/close-panel.png\"/>\n    </div>\n</div>\n\n";
  return buffer;
  });
templates['cartSubTotal'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid\">\n    <div class=\"span4 offset5\">\n        <span class=\"cart-header\">Subtotal:</span> <span id=\"price-subtotal\">$";
  if (stack1 = helpers.subtotals) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtotals; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n    <div class=\"span3\">\n        <a href=\"/review.html\" class=\"checkout\">Checkout</a>\n    </div>\n</div>";
  return buffer;
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../../img/tvFinder/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../../img/tvFinder/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>\n\n\n\n";
  });
templates['addToCart'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "    <div id=\"about\" class=\"left-float\">\n        <span style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 25px; color:#000000;\">About</span>\n        <p id=\"short-desc\">\n            <section>\n                ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 250, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 250, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span>\n            </section>\n        </p>\n    </div>\n    <div id=\"add-to-cart\" class=\"left-float\">\n    <a href=\"#\" class=\"qty-btn\">Qty</a></a>&nbsp;&nbsp;<a href=\"#\" class=\"add-to-cart-btn\">Add to Cart</a>\n\n        <p>\n            <section>\n                <p><a href=\"#\"><img src=\"img/product/find-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Find this product locally.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/arrival-icon.png\"/>&nbsp;&nbsp;Calculate arrival date.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/share-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Share with a friend.</a></p>\n            </section>\n        </p>\n    </div>\n    <br class=\"clear\" />\n";
  return buffer;
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"active item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class=\"active\"></li>\n            ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'></li>\n            ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/productPage.js\"></script>\n\n<div id=\"product-name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span id=\"close-x\"><img\n        src=\"/img/global/close-panel.png\"></span></div>\n<div id=\"ratings-container\">\n<span class=\"left-float\"><img src=\"";
  if (stack1 = helpers.ratingUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ratingUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/> </span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a\n        href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n</div>\n<div id=\"product-price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div id=\"product-image\">\n<!--<div id=\"hero-image\" class=\"left-float\">-->\n    <div id=\"itemCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <!-- Carousel nav -->\n        <a class=\"carousel-control left\" href=\"#itemCarousel\" data-slide=\"prev\">&lsaquo;</a>\n        <a class=\"carousel-control right\" href=\"#itemCarousel\" data-slide=\"next\">&rsaquo;</a>\n        <!--progress-->\n        <ol class=\"carousel-indicators\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ol>\n    </div>\n<!--</div>-->\n</div>\n\n\n\n\n";
  return buffer;
  });
templates['peopleWhoViewed'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n";
  options = {hash:{
    'compare': (3)
  },inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.if_lt),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "if_lt", data.index, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"people-viewed-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n";
  return buffer;
  }

  buffer += "<div class=\"horizBorder\"><p class=\"inset\"></p></div>\n<div id=\"people-viewed-title\">\nPeople Who Viewed This Item Also Viewed<a href=\"#\" class=\"see-more-btn\">See More</a>\n</div>\n<div id=\"people-viewed-container\">\n";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.viewedItems),stack1 == null || stack1 === false ? stack1 : stack1.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n<br class=\"clear\" />\n</div>\n";
  return buffer;
  });
templates['prodDetailTabs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <ul>\n                        <li>";
  if (stack1 = helpers.attributeName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " : ";
  if (stack1 = helpers.attributeValue) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeValue; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n                    </ul>\n                    ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/tab.js\"></script>\n<div class=\"horizborder\"><p class=\"inset\"></p></div>\n<div id=\"product-details-title\">\nProduct Details<a href=\"#\" class=\"have-question-btn\">Have a Question?</a>\n</div>\n<div id=\"details-container\">\n<div id=\"detail-tabs\" class=\"left-float\">\n    <section class=\"product-details-container\">\n        <div class=\"wrapper\">\n            <div id=\"v-nav\">\n                <ul>\n                    <li tab=\"tab1\" class=\"first current\"><span class=\"product-detail-tab-name\">Description</span></li>\n                    <li tab=\"tab2\"><span class=\"product-detail-tab-name\">Specifications</span></li>\n                    <li tab=\"tab3\"><span class=\"product-detail-tab-name\">Warranty</span></li>\n                    <li tab=\"tab4\"><span class=\"product-detail-tab-name\">Financing</span></li>\n                    <li tab=\"tab5\" class=\"last\"><span class=\"product-detail-tab-name\">Gifting</span></li>\n                </ul>\n\n                <div class=\"tab-content details\" style=\"display:block\">\n                    ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 1200, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 1200, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "...\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  stack2 = helpers.each.call(depth0, depth0.itemAttr, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  if (stack2 = helpers.supplierWarranty) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.supplierWarranty; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "<br/>\n                    ";
  if (stack2 = helpers.warrantyLength) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.warrantyLength; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n                </div>\n\n                <div class=\"tab-content details\">\n\n                </div>\n                <div class=\"tab-content details\">\n\n                </div>\n\n            </div>\n        </div>\n    </section>\n</div>\n<br class=\"clear\"/>\n</div>";
  return buffer;
  });
templates['productHeader'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"header\">\n    <div class=\"row-fluid\">\n        <div id=\"cart-container\" class=\"span12\">\n            <div class=\"span3\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></div>\n            <div id=\"white\" class=\"span4\">\n                <form method=\"get\" action=\"/search\" id=\"search\">\n                    <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n                </form>\n            </div>\n            <!--<div id=\"create-link\" class=\"span1\"><img src=\"/img/tvFinder/create.png\"/><a href=\"#\">-->\n                <!--Create</a></div>-->\n\n            <!--<div id=\"sign-in\" class=\"span1\"><img src=\"/img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a>-->\n            <!--</div>-->\n\n            <div id=\"cart-items\" class=\"span1 offset4\"><img src=\"/img/tvFinder/shoppingCart.png\"/><a href=\"/cart.html\">\n                Items</a></div>\n        </div>\n    </div>\n</div>";
  });
templates['ratingsReviews'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                    <div class=\"selected-review\">\n                        <div class=\"selected-review-title\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n                        <br/>\n                        <div style=\"font-family: 'Sintony',sans-serif;font-size:15px;color:color: #777777;\">by <span style=\"color: #3078b9;\">";
  if (stack2 = helpers.customer) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.customer; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span> on ";
  if (stack2 = helpers.date) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.date; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " ";
  stack2 = helpers['if'].call(depth0, depth0.isVerified, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\n                        <div><span class=\"stars\">";
  if (stack2 = helpers.rating) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rating; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></div><br/><br/>\n                        <div>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.review, 200, options) : helperMissing.call(depth0, "rawText", depth0.review, 200, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span></div>\n                    </div>\n                    <div class=\"separator\"></div>\n                    <div class=\"review-attributes-left-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Value:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.value) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.value; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Meets Expectations:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.meetsexpectations) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.meetsexpectations; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Picture Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.picturequality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.picturequality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Sound Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.soundquality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.soundquality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Features:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.features) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.features; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                        </dl>\n                    </div>\n                    <div class=\"review-attributes-right-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Age:</dt>\n                            <dd>";
  if (stack2 = helpers.age) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.age; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Gender:</dt>\n                            <dd>";
  if (stack2 = helpers.gender) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.gender; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Ownership:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Usage:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>City:</dt>\n                            <dd>";
  if (stack2 = helpers.city) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.city; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Helpful Votes:</dt>\n                            <dd>";
  if (stack2 = helpers.helpfulvotes) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.helpfulvotes; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                        </dl>\n                    </div>\n                <!--carousel-inner closing div    -->\n                </div>\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car active item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n             ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return " is Verified";
  }

  buffer += "\n\n<div id=\"ratings-rev-title\">\n    Reviews & Ratings <span style=\"color: #3078b9;\">(";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Total)</span> <a href=\"#\" class=\"write-review-btn\">Write a Review</a>\n</div>\n<div id=\"review-dropdowns-container\">\n<span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"reveiwers\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"Men\">Men</option>\n                            <option value=\"Women\">Women</option>\n                            <option value=\"Children\">Children</option>\n                            <option value=\"Animals\">Animals</option>\n                            <option value=\"Minerals\">Minerals</option>\n                            <option value=\"Vegetables\">Vegetables</option>\n                        </select>\n                    </div>\n            </span>\n        <span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ages\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"25\">25 - 34</option>\n                            <option value=\"35\">35 - 44</option>\n                            <option value=\"45\">45 - 54</option>\n                            <option value=\"55\">55 - 64</option>\n                            <option value=\"65\">65+</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns-border left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ratings\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"All\">All Ratings</option>\n                            <option value=\"5\">5 star</option>\n                            <option value=\"4\">4 star</option>\n                            <option value=\"3\">3 star</option>\n                            <option value=\"2\">2 star</option>\n                            <option value=\"1\">1 star</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns\" style=\"float: right\">\n                    <div>\n                        <select id=\"helpful\">\n                            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n                            <option value=\"MostHelpful\">Most Helpful</option>\n                            <option value=\"Oldest\">Oldest to Newest</option>\n                            <option value=\"Newest\">Newest to Oldest</option>\n                        </select>\n                    </div>\n        </span>\n</div>\n\n\n<div class=\"reviews-container\">\n<div id=\"selected-review-container\">\n    <div id=\"reviewCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack2 = helpers.each.call(depth0, depth0.ratingsReviewsItems, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n            <!-- Carousel nav -->\n            <a class=\"carousel-control left\" href=\"#reviewCarousel\" data-slide=\"prev\">&lsaquo;</a>\n            <a class=\"carousel-control right\" href=\"#reviewCarousel\" data-slide=\"next\">&rsaquo;</a>\n\n        </div>\n    </div>\n    <div id=\"reviews-count-container\" class=\"left-float\">1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews</div>\n    <!--1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews-->\n</div>\n\n<script>\n\n    reviewCount = function (){\n        var index = $(\".rev-car.item.active\").attr(\"indexid\");\n        var count = Number(index);\n        $('#reviews-count-container').text(count +\" of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Reviews\");\n    };\n\n    $('#reviewCarousel').bind('slid', function() {\n        reviewCount();\n    })\n\n</script>";
  return buffer;
  });
templates['paymentShippingDetails'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-details\" class=\"row-fluid\">\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Payment Details</span></p>\n        <p>\n            <select id=\"payment-details-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>Last 4 digits: 2227</option>\n                <option value=\"4437\">Last 4 digits: 4337</option>\n                <option value=\"2227\">Last 4 digits: 2227</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Billing Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Shipping&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color:#3078b9;\">(Multiple Addresses?)</span></p>\n        <p>\n            <select id=\"shipping-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>7000 Marina Blvd</option>\n                <option value=\"MostHelpful\">7000 Marina Blvd</option>\n                <option value=\"Oldest\">850 Cherry Ave</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Shipping Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n                555 test ave<br/>\n                San Bruno, CA 94066\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Delivery Date</span></p>\n        <p><span class=\"detail-labels\"><b>01/01/2013</b></span></p>\n        <p><span style=\"color:#C95925;\"><b>Please Note:</b></span></p>\n        <p><span style=\"color:#777777;font-family: 'Sintony',sans-serif;\">Non-priority delivery estimates<br/>\n                   can vary +/- 4 days.</span></p>\n    </div>\n</div>";
  return buffer;
  });
templates['reviewConfirmOrder'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-breadcrumb\" class=\"row-fluid\">\n    <img src=\"/img/cart/breadcrumbHome.png\"/> <a href=\"/cart.html\"> YOUR CART</a>  >  <a href=\"/review.html\"> CHECKOUT</a>  >  CONFIRM YOUR ORDER\n</div>\n<div id=\"confirm-order\"  class=\"row-fluid\">\n<div class=\"span6 confirm-order-title\">\n    Review Your Order: <span style=\"font-weight: 600;\">";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Items  |  $";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Total</span>\n</div>\n<div class=\"span2 offset1\">\n    <img src=\"/img/cart/confirmOrderBtn.png\"/>\n</div>\n</div>";
  return buffer;
  });
templates['reviewLineItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n</div>\n<div class=\"span4 review-line-item-name\">\n    ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"span1 review-line-item-qty\">\n    ";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</div>\n<div class=\"span2 review-line-item-price\">\n    $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</div>\n</div>\n";
  return buffer;
  }

  buffer += "<div id=\"col-labels\" class=\"row-fluid confirm-order-title\">\n    <div class=\"span2\">\n        Your Order\n    </div>\n    <div class=\"span1 offset4\">\n        Qty\n    </div>\n    <div class=\"span2\">\n        Price\n    </div>\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div id=\"empty-div\" class=\"row-fluid\">\n</div>";
  return buffer;
  });
templates['reviewSubtotals'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"review-subtotals\" class=\"row-fluid\">\n    <div class=\"span1 detail-labels\">\n        <b>Subtotals</b>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Items (3)</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$1128&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Shipping & Handling</span></p>\n\n        <p><span class=\"review-line-item-price\">$69.69&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Taxes</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$69.69</span></p>\n    </div>\n    <div class=\"span2 detail-labels\"><br/>\n\n        <p><b>Total</b>&nbsp;&nbsp;&nbsp;<span class=\"review-line-item-price\">$1300.98</span></p>\n    </div>\n</div>\n<div class=\"row-fluid\" style=\"padding-top: 4%\">\n<div class=\"span2 offset7\">\n    <img src=\"/img/cart/confirmOrderBtn.png\"/>\n</div>\n</div>";
  });
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../../img/tvFinder/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  buffer += "<script src=\"../../js/tvFinder/television.js\"></script>\n";
  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cartItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"row-fluid cart-items\">\n        <div id=\"cart-item-image\" class=\"span4\">\n            <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n        </div>\n        <div class=\"span4\">\n            <div id=\"cart-prod-title\" class=\"row-fluid\">\n                ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div class=\"row-fluid\">\n                <a  itemtosave=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\" class=\"save-for-later\">Save For Later</a>&nbsp;&nbsp;&nbsp;&nbsp;\n                <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart\">Remove</a>\n            </div>\n        </div>\n        <div id=\"cart-qty\" class=\"span2\">\n            <form>\n                <fieldset>\n                    <p>\n                        <label>Quantity</label>\n                        <input type=\"text\"\n                               id=\"cart-qty-input\"\n                               value=\"";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n                    </p>\n                </fieldset>\n            </form>\n        </div>\n        <div class=\"span2 cart-item-price\">\n            $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        </div>\n    </div>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"row-fluid cart-items\">\n    <div id=\"saved-item-img\" class=\"span4\">\n        <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n    </div>\n    <div class=\"span4\">\n        <div id=\"cart-prod-title\" class=\"row-fluid\">\n            ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"row-fluid\">\n        <a href=\"#\" itemtomove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"move-to-cart\">Move To Cart</a>&nbsp;&nbsp;&nbsp;&nbsp;\n        <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart remove-from-saved\">Remove</a>\n        </div>\n    </div>\n    <div class=\"span2 qty-text\">\n        Quantity: ";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n    <div class=\"span2 cart-item-price\">\n        $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n</div>\n</div>\n";
  return buffer;
  }

  buffer += "<div id=\"line-item\" class=\"row-fluid\">\n    <div class=\"item-num grey-gloss\">\n        ";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " item(s) for purchase\n    </div>\n    ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>\n<div id=\"saved-item\" class=\"row-fluid\">\n<div class=\"item-num grey-gloss\">\n    ";
  if (stack1 = helpers.savedItemsCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.savedItemsCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Saved Item(s)\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0.savedItems, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['cartSort'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid cart-header\">\n    <div class=\"span5\">\n        ";
  if (stack1 = helpers.cartSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cartSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Item(s) in cart\n    </div>\n    <div class=\"span3\">\n        <select id=\"cart-sort\">\n            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n            <option value=\"price\">Price</option>\n            <option value=\"AZ\">A-Z</option>\n        </select>\n    </div>\n    <div class=\"span1 offset3\">\n        <img src=\"/img/global/close-panel.png\"/>\n    </div>\n</div>\n\n";
  return buffer;
  });
templates['cartSubTotal'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid\">\n    <div class=\"span4 offset5\">\n        <span class=\"cart-header\">Subtotal:</span> <span id=\"price-subtotal\">$";
  if (stack1 = helpers.subtotals) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtotals; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n    <div class=\"span3\">\n        <a href=\"/review.html\" class=\"checkout\">Checkout</a>\n    </div>\n</div>";
  return buffer;
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../../img/tvFinder/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../../img/tvFinder/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>\n\n\n\n";
  });
templates['addToCart'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "    <div id=\"about\" class=\"left-float\">\n        <span style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 25px; color:#000000;\">About</span>\n        <p id=\"short-desc\">\n            <section>\n                ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 250, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 250, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span>\n            </section>\n        </p>\n    </div>\n    <div id=\"add-to-cart\" class=\"left-float\">\n    <a href=\"#\" class=\"qty-btn\">Qty</a></a>&nbsp;&nbsp;<a href=\"#\" class=\"add-to-cart-btn\">Add to Cart</a>\n\n        <p>\n            <section>\n                <p><a href=\"#\"><img src=\"img/product/find-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Find this product locally.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/arrival-icon.png\"/>&nbsp;&nbsp;Calculate arrival date.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/share-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Share with a friend.</a></p>\n            </section>\n        </p>\n    </div>\n    <br class=\"clear\" />\n";
  return buffer;
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"active item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class=\"active\"></li>\n            ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'></li>\n            ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/productPage.js\"></script>\n\n<div id=\"product-name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span id=\"close-x\"><img\n        src=\"/img/global/close-panel.png\"></span></div>\n<div id=\"ratings-container\">\n<span class=\"left-float\"><img src=\"";
  if (stack1 = helpers.ratingUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ratingUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/> </span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a\n        href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n</div>\n<div id=\"product-price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div id=\"product-image\">\n<!--<div id=\"hero-image\" class=\"left-float\">-->\n    <div id=\"itemCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <!-- Carousel nav -->\n        <a class=\"carousel-control left\" href=\"#itemCarousel\" data-slide=\"prev\">&lsaquo;</a>\n        <a class=\"carousel-control right\" href=\"#itemCarousel\" data-slide=\"next\">&rsaquo;</a>\n        <!--progress-->\n        <ol class=\"carousel-indicators\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ol>\n    </div>\n<!--</div>-->\n</div>\n\n\n\n\n";
  return buffer;
  });
templates['peopleWhoViewed'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n";
  options = {hash:{
    'compare': (3)
  },inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.if_lt),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "if_lt", data.index, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"people-viewed-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n";
  return buffer;
  }

  buffer += "<div class=\"horizBorder\"><p class=\"inset\"></p></div>\n<div id=\"people-viewed-title\">\nPeople Who Viewed This Item Also Viewed<a href=\"#\" class=\"see-more-btn\">See More</a>\n</div>\n<div id=\"people-viewed-container\">\n";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.viewedItems),stack1 == null || stack1 === false ? stack1 : stack1.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n<br class=\"clear\" />\n</div>\n";
  return buffer;
  });
templates['prodDetailTabs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <ul>\n                        <li>";
  if (stack1 = helpers.attributeName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " : ";
  if (stack1 = helpers.attributeValue) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeValue; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n                    </ul>\n                    ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/tab.js\"></script>\n<div class=\"horizborder\"><p class=\"inset\"></p></div>\n<div id=\"product-details-title\">\nProduct Details<a href=\"#\" class=\"have-question-btn\">Have a Question?</a>\n</div>\n<div id=\"details-container\">\n<div id=\"detail-tabs\" class=\"left-float\">\n    <section class=\"product-details-container\">\n        <div class=\"wrapper\">\n            <div id=\"v-nav\">\n                <ul>\n                    <li tab=\"tab1\" class=\"first current\"><span class=\"product-detail-tab-name\">Description</span></li>\n                    <li tab=\"tab2\"><span class=\"product-detail-tab-name\">Specifications</span></li>\n                    <li tab=\"tab3\"><span class=\"product-detail-tab-name\">Warranty</span></li>\n                    <li tab=\"tab4\"><span class=\"product-detail-tab-name\">Financing</span></li>\n                    <li tab=\"tab5\" class=\"last\"><span class=\"product-detail-tab-name\">Gifting</span></li>\n                </ul>\n\n                <div class=\"tab-content details\" style=\"display:block\">\n                    ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 1200, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 1200, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "...\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  stack2 = helpers.each.call(depth0, depth0.itemAttr, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  if (stack2 = helpers.supplierWarranty) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.supplierWarranty; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "<br/>\n                    ";
  if (stack2 = helpers.warrantyLength) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.warrantyLength; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n                </div>\n\n                <div class=\"tab-content details\">\n\n                </div>\n                <div class=\"tab-content details\">\n\n                </div>\n\n            </div>\n        </div>\n    </section>\n</div>\n<br class=\"clear\"/>\n</div>";
  return buffer;
  });
templates['productHeader'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"header\">\n    <div class=\"row-fluid\">\n        <div id=\"cart-container\" class=\"span12\">\n            <div class=\"span3\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></div>\n            <div id=\"white\" class=\"span4\">\n                <form method=\"get\" action=\"/search\" id=\"search\">\n                    <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n                </form>\n            </div>\n            <!--<div id=\"create-link\" class=\"span1\"><img src=\"/img/tvFinder/create.png\"/><a href=\"#\">-->\n                <!--Create</a></div>-->\n\n            <!--<div id=\"sign-in\" class=\"span1\"><img src=\"/img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a>-->\n            <!--</div>-->\n\n            <div id=\"cart-items\" class=\"span1 offset4\"><img src=\"/img/tvFinder/shoppingCart.png\"/><a href=\"/cart.html\">\n                Items</a></div>\n        </div>\n    </div>\n</div>";
  });
templates['ratingsReviews'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                    <div class=\"selected-review\">\n                        <div class=\"selected-review-title\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n                        <br/>\n                        <div style=\"font-family: 'Sintony',sans-serif;font-size:15px;color:color: #777777;\">by <span style=\"color: #3078b9;\">";
  if (stack2 = helpers.customer) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.customer; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span> on ";
  if (stack2 = helpers.date) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.date; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " ";
  stack2 = helpers['if'].call(depth0, depth0.isVerified, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\n                        <div><span class=\"stars\">";
  if (stack2 = helpers.rating) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rating; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></div><br/><br/>\n                        <div>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.review, 200, options) : helperMissing.call(depth0, "rawText", depth0.review, 200, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span></div>\n                    </div>\n                    <div class=\"separator\"></div>\n                    <div class=\"review-attributes-left-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Value:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.value) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.value; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Meets Expectations:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.meetsexpectations) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.meetsexpectations; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Picture Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.picturequality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.picturequality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Sound Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.soundquality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.soundquality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Features:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.features) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.features; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                        </dl>\n                    </div>\n                    <div class=\"review-attributes-right-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Age:</dt>\n                            <dd>";
  if (stack2 = helpers.age) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.age; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Gender:</dt>\n                            <dd>";
  if (stack2 = helpers.gender) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.gender; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Ownership:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Usage:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>City:</dt>\n                            <dd>";
  if (stack2 = helpers.city) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.city; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Helpful Votes:</dt>\n                            <dd>";
  if (stack2 = helpers.helpfulvotes) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.helpfulvotes; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                        </dl>\n                    </div>\n                <!--carousel-inner closing div    -->\n                </div>\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car active item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n             ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return " is Verified";
  }

  buffer += "\n\n<div id=\"ratings-rev-title\">\n    Reviews & Ratings <span style=\"color: #3078b9;\">(";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Total)</span> <a href=\"#\" class=\"write-review-btn\">Write a Review</a>\n</div>\n<div id=\"review-dropdowns-container\">\n<span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"reveiwers\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"Men\">Men</option>\n                            <option value=\"Women\">Women</option>\n                            <option value=\"Children\">Children</option>\n                            <option value=\"Animals\">Animals</option>\n                            <option value=\"Minerals\">Minerals</option>\n                            <option value=\"Vegetables\">Vegetables</option>\n                        </select>\n                    </div>\n            </span>\n        <span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ages\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"25\">25 - 34</option>\n                            <option value=\"35\">35 - 44</option>\n                            <option value=\"45\">45 - 54</option>\n                            <option value=\"55\">55 - 64</option>\n                            <option value=\"65\">65+</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns-border left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ratings\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"All\">All Ratings</option>\n                            <option value=\"5\">5 star</option>\n                            <option value=\"4\">4 star</option>\n                            <option value=\"3\">3 star</option>\n                            <option value=\"2\">2 star</option>\n                            <option value=\"1\">1 star</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns\" style=\"float: right\">\n                    <div>\n                        <select id=\"helpful\">\n                            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n                            <option value=\"MostHelpful\">Most Helpful</option>\n                            <option value=\"Oldest\">Oldest to Newest</option>\n                            <option value=\"Newest\">Newest to Oldest</option>\n                        </select>\n                    </div>\n        </span>\n</div>\n\n\n<div class=\"reviews-container\">\n<div id=\"selected-review-container\">\n    <div id=\"reviewCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack2 = helpers.each.call(depth0, depth0.ratingsReviewsItems, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n            <!-- Carousel nav -->\n            <a class=\"carousel-control left\" href=\"#reviewCarousel\" data-slide=\"prev\">&lsaquo;</a>\n            <a class=\"carousel-control right\" href=\"#reviewCarousel\" data-slide=\"next\">&rsaquo;</a>\n\n        </div>\n    </div>\n    <div id=\"reviews-count-container\" class=\"left-float\">1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews</div>\n    <!--1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews-->\n</div>\n\n<script>\n\n    reviewCount = function (){\n        var index = $(\".rev-car.item.active\").attr(\"indexid\");\n        var count = Number(index);\n        $('#reviews-count-container').text(count +\" of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Reviews\");\n    };\n\n    $('#reviewCarousel').bind('slid', function() {\n        reviewCount();\n    })\n\n</script>";
  return buffer;
  });
templates['paymentShippingDetails'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-details\" class=\"row-fluid\">\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Payment Details</span></p>\n        <p>\n            <select id=\"payment-details-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>Last 4 digits: 2227</option>\n                <option value=\"4437\">Last 4 digits: 4337</option>\n                <option value=\"2227\">Last 4 digits: 2227</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Billing Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Shipping&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color:#3078b9;\">(Multiple Addresses?)</span></p>\n        <p>\n            <select id=\"shipping-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>7000 Marina Blvd</option>\n                <option value=\"MostHelpful\">7000 Marina Blvd</option>\n                <option value=\"Oldest\">850 Cherry Ave</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Shipping Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n                555 test ave<br/>\n                San Bruno, CA 94066\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Delivery Date</span></p>\n        <p><span class=\"detail-labels\"><b>01/01/2013</b></span></p>\n        <p><span style=\"color:#C95925;\"><b>Please Note:</b></span></p>\n        <p><span style=\"color:#777777;font-family: 'Sintony',sans-serif;\">Non-priority delivery estimates<br/>\n                   can vary +/- 4 days.</span></p>\n    </div>\n</div>";
  return buffer;
  });
templates['reviewConfirmOrder'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-breadcrumb\" class=\"row-fluid\">\n    <img src=\"/img/cart/breadcrumbHome.png\"/> <a href=\"/cart.html\"> YOUR CART</a>  >  <a href=\"/review.html\"> CHECKOUT</a>  >  CONFIRM YOUR ORDER\n</div>\n<div id=\"confirm-order\"  class=\"row-fluid\">\n<div class=\"span6 confirm-order-title\">\n    Review Your Order: <span style=\"font-weight: 600;\">";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Items  |  $";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Total</span>\n</div>\n<div class=\"span2 offset1\">\n    <img src=\"/img/cart/confirmOrderBtn.png\"/>\n</div>\n</div>";
  return buffer;
  });
templates['reviewLineItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n</div>\n<div class=\"span4 review-line-item-name\">\n    ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"span1 review-line-item-qty\">\n    ";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</div>\n<div class=\"span2 review-line-item-price\">\n    $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</div>\n</div>\n";
  return buffer;
  }

  buffer += "<div id=\"col-labels\" class=\"row-fluid confirm-order-title\">\n    <div class=\"span2\">\n        Your Order\n    </div>\n    <div class=\"span1 offset4\">\n        Qty\n    </div>\n    <div class=\"span2\">\n        Price\n    </div>\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div id=\"empty-div\" class=\"row-fluid\">\n</div>";
  return buffer;
  });
templates['reviewSubtotals'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-subtotals\" class=\"row-fluid\">\n    <div class=\"span1 detail-labels\">\n        <b>Subtotals</b>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Items (3)</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$"
    + escapeExpression(((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.price)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Shipping & Handling</span></p>\n\n        <p><span class=\"review-line-item-price\">$66&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Taxes</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$70</span></p>\n    </div>\n    <div class=\"span2 detail-labels\"><br/>\n\n        <p><b>Total</b>&nbsp;&nbsp;&nbsp;<span class=\"review-line-item-price\">";
  if (stack2 = helpers.total) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.total; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></p>\n    </div>\n</div>\n<div class=\"row-fluid\" style=\"padding-top: 4%\">\n<div class=\"span2 offset7\">\n    <img src=\"/img/cart/confirmOrderBtn.png\"/>\n</div>\n</div>";
  return buffer;
  });
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../../img/tvFinder/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  buffer += "<script src=\"../../js/tvFinder/television.js\"></script>\n";
  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cartItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"row-fluid cart-items\">\n        <div id=\"cart-item-image\" class=\"span4\">\n            <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n        </div>\n        <div class=\"span4\">\n            <div id=\"cart-prod-title\" class=\"row-fluid\">\n                ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div class=\"row-fluid\">\n                <a  itemtosave=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\" class=\"save-for-later\">Save For Later</a>&nbsp;&nbsp;&nbsp;&nbsp;\n                <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart\">Remove</a>\n            </div>\n        </div>\n        <div id=\"cart-qty\" class=\"span2\">\n            <form>\n                <fieldset>\n                    <p>\n                        <label>Quantity</label>\n                        <input type=\"text\"\n                               id=\"cart-qty-input\"\n                               value=\"";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n                    </p>\n                </fieldset>\n            </form>\n        </div>\n        <div class=\"span2 cart-item-price\">\n            $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        </div>\n    </div>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"row-fluid cart-items\">\n    <div id=\"saved-item-img\" class=\"span4\">\n        <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n    </div>\n    <div class=\"span4\">\n        <div id=\"cart-prod-title\" class=\"row-fluid\">\n            ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"row-fluid\">\n        <a href=\"#\" itemtomove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"move-to-cart\">Move To Cart</a>&nbsp;&nbsp;&nbsp;&nbsp;\n        <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart remove-from-saved\">Remove</a>\n        </div>\n    </div>\n    <div class=\"span2 qty-text\">\n        Quantity: ";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n    <div class=\"span2 cart-item-price\">\n        $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n</div>\n</div>\n";
  return buffer;
  }

  buffer += "<div id=\"line-item\" class=\"row-fluid\">\n    <div class=\"item-num grey-gloss\">\n        ";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " item(s) for purchase\n    </div>\n    ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>\n<div id=\"saved-item\" class=\"row-fluid\">\n<div class=\"item-num grey-gloss\">\n    ";
  if (stack1 = helpers.savedItemsCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.savedItemsCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Saved Item(s)\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0.savedItems, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['cartSort'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid cart-header\">\n    <div class=\"span5\">\n        ";
  if (stack1 = helpers.cartSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cartSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Item(s) in cart\n    </div>\n    <div class=\"span3\">\n        <select id=\"cart-sort\">\n            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n            <option value=\"price\">Price</option>\n            <option value=\"AZ\">A-Z</option>\n        </select>\n    </div>\n    <div class=\"span1 offset3\">\n        <img src=\"/img/global/close-panel.png\"/>\n    </div>\n</div>\n\n";
  return buffer;
  });
templates['cartSubTotal'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid\">\n    <div class=\"span4 offset5\">\n        <span class=\"cart-header\">Subtotal:</span> <span id=\"price-subtotal\">$";
  if (stack1 = helpers.subtotals) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtotals; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n    <div class=\"span3\">\n        <a href=\"/review.html\" class=\"checkout\">Checkout</a>\n    </div>\n</div>";
  return buffer;
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../../img/tvFinder/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../../img/tvFinder/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>\n\n\n\n";
  });
templates['addToCart'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "    <div id=\"about\" class=\"left-float\">\n        <span style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 25px; color:#000000;\">About</span>\n        <p id=\"short-desc\">\n            <section>\n                ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 250, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 250, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span>\n            </section>\n        </p>\n    </div>\n    <div id=\"add-to-cart\" class=\"left-float\">\n    <a href=\"#\" class=\"qty-btn\">Qty</a></a>&nbsp;&nbsp;<a href=\"#\" class=\"add-to-cart-btn\">Add to Cart</a>\n\n        <p>\n            <section>\n                <p><a href=\"#\"><img src=\"img/product/find-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Find this product locally.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/arrival-icon.png\"/>&nbsp;&nbsp;Calculate arrival date.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/share-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Share with a friend.</a></p>\n            </section>\n        </p>\n    </div>\n    <br class=\"clear\" />\n";
  return buffer;
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"active item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class=\"active\"></li>\n            ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'></li>\n            ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/productPage.js\"></script>\n\n<div id=\"product-name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span id=\"close-x\"><img\n        src=\"/img/global/close-panel.png\"></span></div>\n<div id=\"ratings-container\">\n<span class=\"left-float\"><img src=\"";
  if (stack1 = helpers.ratingUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ratingUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/> </span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a\n        href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n</div>\n<div id=\"product-price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div id=\"product-image\">\n<!--<div id=\"hero-image\" class=\"left-float\">-->\n    <div id=\"itemCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <!-- Carousel nav -->\n        <a class=\"carousel-control left\" href=\"#itemCarousel\" data-slide=\"prev\">&lsaquo;</a>\n        <a class=\"carousel-control right\" href=\"#itemCarousel\" data-slide=\"next\">&rsaquo;</a>\n        <!--progress-->\n        <ol class=\"carousel-indicators\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ol>\n    </div>\n<!--</div>-->\n</div>\n\n\n\n\n";
  return buffer;
  });
templates['peopleWhoViewed'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n";
  options = {hash:{
    'compare': (3)
  },inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.if_lt),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "if_lt", data.index, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"people-viewed-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n";
  return buffer;
  }

  buffer += "<div class=\"horizBorder\"><p class=\"inset\"></p></div>\n<div id=\"people-viewed-title\">\nPeople Who Viewed This Item Also Viewed<a href=\"#\" class=\"see-more-btn\">See More</a>\n</div>\n<div id=\"people-viewed-container\">\n";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.viewedItems),stack1 == null || stack1 === false ? stack1 : stack1.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n<br class=\"clear\" />\n</div>\n";
  return buffer;
  });
templates['prodDetailTabs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <ul>\n                        <li>";
  if (stack1 = helpers.attributeName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " : ";
  if (stack1 = helpers.attributeValue) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeValue; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n                    </ul>\n                    ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/tab.js\"></script>\n<div class=\"horizborder\"><p class=\"inset\"></p></div>\n<div id=\"product-details-title\">\nProduct Details<a href=\"#\" class=\"have-question-btn\">Have a Question?</a>\n</div>\n<div id=\"details-container\">\n<div id=\"detail-tabs\" class=\"left-float\">\n    <section class=\"product-details-container\">\n        <div class=\"wrapper\">\n            <div id=\"v-nav\">\n                <ul>\n                    <li tab=\"tab1\" class=\"first current\"><span class=\"product-detail-tab-name\">Description</span></li>\n                    <li tab=\"tab2\"><span class=\"product-detail-tab-name\">Specifications</span></li>\n                    <li tab=\"tab3\"><span class=\"product-detail-tab-name\">Warranty</span></li>\n                    <li tab=\"tab4\"><span class=\"product-detail-tab-name\">Financing</span></li>\n                    <li tab=\"tab5\" class=\"last\"><span class=\"product-detail-tab-name\">Gifting</span></li>\n                </ul>\n\n                <div class=\"tab-content details\" style=\"display:block\">\n                    ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 1200, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 1200, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "...\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  stack2 = helpers.each.call(depth0, depth0.itemAttr, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  if (stack2 = helpers.supplierWarranty) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.supplierWarranty; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "<br/>\n                    ";
  if (stack2 = helpers.warrantyLength) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.warrantyLength; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n                </div>\n\n                <div class=\"tab-content details\">\n\n                </div>\n                <div class=\"tab-content details\">\n\n                </div>\n\n            </div>\n        </div>\n    </section>\n</div>\n<br class=\"clear\"/>\n</div>";
  return buffer;
  });
templates['productHeader'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"header\">\n    <div class=\"row-fluid\">\n        <div id=\"cart-container\" class=\"span12\">\n            <div class=\"span3\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></div>\n            <div id=\"white\" class=\"span4\">\n                <form method=\"get\" action=\"/search\" id=\"search\">\n                    <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n                </form>\n            </div>\n            <!--<div id=\"create-link\" class=\"span1\"><img src=\"/img/tvFinder/create.png\"/><a href=\"#\">-->\n                <!--Create</a></div>-->\n\n            <!--<div id=\"sign-in\" class=\"span1\"><img src=\"/img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a>-->\n            <!--</div>-->\n\n            <div id=\"cart-items\" class=\"span1 offset4\"><img src=\"/img/tvFinder/shoppingCart.png\"/><a href=\"/cart.html\">\n                Items</a></div>\n        </div>\n    </div>\n</div>";
  });
templates['ratingsReviews'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                    <div class=\"selected-review\">\n                        <div class=\"selected-review-title\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n                        <br/>\n                        <div style=\"font-family: 'Sintony',sans-serif;font-size:15px;color:color: #777777;\">by <span style=\"color: #3078b9;\">";
  if (stack2 = helpers.customer) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.customer; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span> on ";
  if (stack2 = helpers.date) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.date; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " ";
  stack2 = helpers['if'].call(depth0, depth0.isVerified, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\n                        <div><span class=\"stars\">";
  if (stack2 = helpers.rating) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rating; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></div><br/><br/>\n                        <div>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.review, 200, options) : helperMissing.call(depth0, "rawText", depth0.review, 200, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span></div>\n                    </div>\n                    <div class=\"separator\"></div>\n                    <div class=\"review-attributes-left-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Value:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.value) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.value; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Meets Expectations:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.meetsexpectations) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.meetsexpectations; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Picture Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.picturequality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.picturequality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Sound Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.soundquality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.soundquality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Features:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.features) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.features; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                        </dl>\n                    </div>\n                    <div class=\"review-attributes-right-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Age:</dt>\n                            <dd>";
  if (stack2 = helpers.age) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.age; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Gender:</dt>\n                            <dd>";
  if (stack2 = helpers.gender) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.gender; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Ownership:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Usage:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>City:</dt>\n                            <dd>";
  if (stack2 = helpers.city) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.city; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Helpful Votes:</dt>\n                            <dd>";
  if (stack2 = helpers.helpfulvotes) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.helpfulvotes; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                        </dl>\n                    </div>\n                <!--carousel-inner closing div    -->\n                </div>\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car active item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n             ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return " is Verified";
  }

  buffer += "\n\n<div id=\"ratings-rev-title\">\n    Reviews & Ratings <span style=\"color: #3078b9;\">(";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Total)</span> <a href=\"#\" class=\"write-review-btn\">Write a Review</a>\n</div>\n<div id=\"review-dropdowns-container\">\n<span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"reveiwers\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"Men\">Men</option>\n                            <option value=\"Women\">Women</option>\n                            <option value=\"Children\">Children</option>\n                            <option value=\"Animals\">Animals</option>\n                            <option value=\"Minerals\">Minerals</option>\n                            <option value=\"Vegetables\">Vegetables</option>\n                        </select>\n                    </div>\n            </span>\n        <span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ages\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"25\">25 - 34</option>\n                            <option value=\"35\">35 - 44</option>\n                            <option value=\"45\">45 - 54</option>\n                            <option value=\"55\">55 - 64</option>\n                            <option value=\"65\">65+</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns-border left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ratings\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"All\">All Ratings</option>\n                            <option value=\"5\">5 star</option>\n                            <option value=\"4\">4 star</option>\n                            <option value=\"3\">3 star</option>\n                            <option value=\"2\">2 star</option>\n                            <option value=\"1\">1 star</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns\" style=\"float: right\">\n                    <div>\n                        <select id=\"helpful\">\n                            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n                            <option value=\"MostHelpful\">Most Helpful</option>\n                            <option value=\"Oldest\">Oldest to Newest</option>\n                            <option value=\"Newest\">Newest to Oldest</option>\n                        </select>\n                    </div>\n        </span>\n</div>\n\n\n<div class=\"reviews-container\">\n<div id=\"selected-review-container\">\n    <div id=\"reviewCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack2 = helpers.each.call(depth0, depth0.ratingsReviewsItems, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n            <!-- Carousel nav -->\n            <a class=\"carousel-control left\" href=\"#reviewCarousel\" data-slide=\"prev\">&lsaquo;</a>\n            <a class=\"carousel-control right\" href=\"#reviewCarousel\" data-slide=\"next\">&rsaquo;</a>\n\n        </div>\n    </div>\n    <div id=\"reviews-count-container\" class=\"left-float\">1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews</div>\n    <!--1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews-->\n</div>\n\n<script>\n\n    reviewCount = function (){\n        var index = $(\".rev-car.item.active\").attr(\"indexid\");\n        var count = Number(index);\n        $('#reviews-count-container').text(count +\" of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Reviews\");\n    };\n\n    $('#reviewCarousel').bind('slid', function() {\n        reviewCount();\n    })\n\n</script>";
  return buffer;
  });
templates['paymentShippingDetails'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-details\" class=\"row-fluid\">\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Payment Details</span></p>\n        <p>\n            <select id=\"payment-details-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>Last 4 digits: 2227</option>\n                <option value=\"4437\">Last 4 digits: 4337</option>\n                <option value=\"2227\">Last 4 digits: 2227</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Billing Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Shipping&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color:#3078b9;\">(Multiple Addresses?)</span></p>\n        <p>\n            <select id=\"shipping-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>7000 Marina Blvd</option>\n                <option value=\"MostHelpful\">7000 Marina Blvd</option>\n                <option value=\"Oldest\">850 Cherry Ave</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Shipping Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n                555 test ave<br/>\n                San Bruno, CA 94066\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Delivery Date</span></p>\n        <p><span class=\"detail-labels\"><b>01/01/2013</b></span></p>\n        <p><span style=\"color:#C95925;\"><b>Please Note:</b></span></p>\n        <p><span style=\"color:#777777;font-family: 'Sintony',sans-serif;\">Non-priority delivery estimates<br/>\n                   can vary +/- 4 days.</span></p>\n    </div>\n</div>";
  return buffer;
  });
templates['reviewConfirmOrder'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-breadcrumb\" class=\"row-fluid\">\n    <img src=\"/img/cart/breadcrumbHome.png\"/> <a href=\"/cart.html\"> YOUR CART</a>  >  <a href=\"/review.html\"> CHECKOUT</a>  >  CONFIRM YOUR ORDER\n</div>\n<div id=\"confirm-order\"  class=\"row-fluid\">\n<div class=\"span6 confirm-order-title\">\n    Review Your Order: <span style=\"font-weight: 600;\">";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Items  |  $";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Total</span>\n</div>\n<div class=\"span2 offset1\">\n    <img src=\"/img/cart/confirmOrderBtn.png\"/>\n</div>\n</div>";
  return buffer;
  });
templates['reviewLineItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n</div>\n<div class=\"span4 review-line-item-name\">\n    ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"span1 review-line-item-qty\">\n    ";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</div>\n<div class=\"span2 review-line-item-price\">\n    $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</div>\n</div>\n";
  return buffer;
  }

  buffer += "<div id=\"col-labels\" class=\"row-fluid confirm-order-title\">\n    <div class=\"span2\">\n        Your Order\n    </div>\n    <div class=\"span1 offset4\">\n        Qty\n    </div>\n    <div class=\"span2\">\n        Price\n    </div>\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div id=\"empty-div\" class=\"row-fluid\">\n</div>";
  return buffer;
  });
templates['reviewSubtotals'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-subtotals\" class=\"row-fluid\">\n    <div class=\"span1 detail-labels\">\n        <b>Subtotals</b>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Items (";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Shipping & Handling</span></p>\n\n        <p><span class=\"review-line-item-price\">$66&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Taxes</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$70</span></p>\n    </div>\n    <div class=\"span2 detail-labels\"><br/>\n\n        <p><b>Total</b>&nbsp;&nbsp;&nbsp;<span class=\"review-line-item-price\">$";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></p>\n    </div>\n</div>\n<div class=\"row-fluid\" style=\"padding-top: 4%\">\n<div class=\"span2 offset7\">\n    <img src=\"/img/cart/confirmOrderBtn.png\"/>\n</div>\n</div>";
  return buffer;
  });
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../../img/tvFinder/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  buffer += "<script src=\"../../js/tvFinder/television.js\"></script>\n";
  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cartItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"row-fluid cart-items\">\n        <div id=\"cart-item-image\" class=\"span4\">\n            <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n        </div>\n        <div class=\"span4\">\n            <div id=\"cart-prod-title\" class=\"row-fluid\">\n                ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div class=\"row-fluid\">\n                <a  itemtosave=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\" class=\"save-for-later\">Save For Later</a>&nbsp;&nbsp;&nbsp;&nbsp;\n                <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart\">Remove</a>\n            </div>\n        </div>\n        <div id=\"cart-qty\" class=\"span2\">\n            <form>\n                <fieldset>\n                    <p>\n                        <label>Quantity</label>\n                        <input type=\"text\"\n                               id=\"cart-qty-input\"\n                               value=\"";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n                    </p>\n                </fieldset>\n            </form>\n        </div>\n        <div class=\"span2 cart-item-price\">\n            $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        </div>\n    </div>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"row-fluid cart-items\">\n    <div id=\"saved-item-img\" class=\"span4\">\n        <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n    </div>\n    <div class=\"span4\">\n        <div id=\"cart-prod-title\" class=\"row-fluid\">\n            ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"row-fluid\">\n        <a href=\"#\" itemtomove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"move-to-cart\">Move To Cart</a>&nbsp;&nbsp;&nbsp;&nbsp;\n        <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart remove-from-saved\">Remove</a>\n        </div>\n    </div>\n    <div class=\"span2 qty-text\">\n        Quantity: ";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n    <div class=\"span2 cart-item-price\">\n        $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n</div>\n</div>\n";
  return buffer;
  }

  buffer += "<div id=\"line-item\" class=\"row-fluid\">\n    <div class=\"item-num grey-gloss\">\n        ";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " item(s) for purchase\n    </div>\n    ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>\n<div id=\"saved-item\" class=\"row-fluid\">\n<div class=\"item-num grey-gloss\">\n    ";
  if (stack1 = helpers.savedItemsCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.savedItemsCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Saved Item(s)\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0.savedItems, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['cartSort'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid cart-header\">\n    <div class=\"span5\">\n        ";
  if (stack1 = helpers.cartSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cartSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Item(s) in cart\n    </div>\n    <div class=\"span3\">\n        <select id=\"cart-sort\">\n            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n            <option value=\"price\">Price</option>\n            <option value=\"AZ\">A-Z</option>\n        </select>\n    </div>\n    <div class=\"span1 offset3\">\n        <img src=\"/img/global/close-panel.png\"/>\n    </div>\n</div>\n\n";
  return buffer;
  });
templates['cartSubTotal'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid\">\n    <div class=\"span4 offset5\">\n        <span class=\"cart-header\">Subtotal:</span> <span id=\"price-subtotal\">$";
  if (stack1 = helpers.subtotals) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtotals; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n    <div class=\"span3\">\n        <a href=\"/review.html\" class=\"checkout\">Checkout</a>\n    </div>\n</div>";
  return buffer;
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../../img/tvFinder/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../../img/tvFinder/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>\n\n\n\n";
  });
templates['addToCart'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "    <div id=\"about\" class=\"left-float\">\n        <span style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 25px; color:#000000;\">About</span>\n        <p id=\"short-desc\">\n            <section>\n                ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 250, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 250, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span>\n            </section>\n        </p>\n    </div>\n    <div id=\"add-to-cart\" class=\"left-float\">\n    <a href=\"#\" class=\"qty-btn\">Qty</a></a>&nbsp;&nbsp;<a href=\"#\" class=\"add-to-cart-btn\">Add to Cart</a>\n\n        <p>\n            <section>\n                <p><a href=\"#\"><img src=\"img/product/find-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Find this product locally.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/arrival-icon.png\"/>&nbsp;&nbsp;Calculate arrival date.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/share-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Share with a friend.</a></p>\n            </section>\n        </p>\n    </div>\n    <br class=\"clear\" />\n";
  return buffer;
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"active item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class=\"active\"></li>\n            ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'></li>\n            ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/productPage.js\"></script>\n\n<div id=\"product-name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span id=\"close-x\"><img\n        src=\"/img/global/close-panel.png\"></span></div>\n<div id=\"ratings-container\">\n<span class=\"left-float\"><img src=\"";
  if (stack1 = helpers.ratingUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ratingUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/> </span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a\n        href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n</div>\n<div id=\"product-price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div id=\"product-image\">\n<!--<div id=\"hero-image\" class=\"left-float\">-->\n    <div id=\"itemCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <!-- Carousel nav -->\n        <a class=\"carousel-control left\" href=\"#itemCarousel\" data-slide=\"prev\">&lsaquo;</a>\n        <a class=\"carousel-control right\" href=\"#itemCarousel\" data-slide=\"next\">&rsaquo;</a>\n        <!--progress-->\n        <ol class=\"carousel-indicators\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ol>\n    </div>\n<!--</div>-->\n</div>\n\n\n\n\n";
  return buffer;
  });
templates['peopleWhoViewed'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n";
  options = {hash:{
    'compare': (3)
  },inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.if_lt),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "if_lt", data.index, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"people-viewed-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n";
  return buffer;
  }

  buffer += "<div class=\"horizBorder\"><p class=\"inset\"></p></div>\n<div id=\"people-viewed-title\">\nPeople Who Viewed This Item Also Viewed<a href=\"#\" class=\"see-more-btn\">See More</a>\n</div>\n<div id=\"people-viewed-container\">\n";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.viewedItems),stack1 == null || stack1 === false ? stack1 : stack1.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n<br class=\"clear\" />\n</div>\n";
  return buffer;
  });
templates['prodDetailTabs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <ul>\n                        <li>";
  if (stack1 = helpers.attributeName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " : ";
  if (stack1 = helpers.attributeValue) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeValue; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n                    </ul>\n                    ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/tab.js\"></script>\n<div class=\"horizborder\"><p class=\"inset\"></p></div>\n<div id=\"product-details-title\">\nProduct Details<a href=\"#\" class=\"have-question-btn\">Have a Question?</a>\n</div>\n<div id=\"details-container\">\n<div id=\"detail-tabs\" class=\"left-float\">\n    <section class=\"product-details-container\">\n        <div class=\"wrapper\">\n            <div id=\"v-nav\">\n                <ul>\n                    <li tab=\"tab1\" class=\"first current\"><span class=\"product-detail-tab-name\">Description</span></li>\n                    <li tab=\"tab2\"><span class=\"product-detail-tab-name\">Specifications</span></li>\n                    <li tab=\"tab3\"><span class=\"product-detail-tab-name\">Warranty</span></li>\n                    <li tab=\"tab4\"><span class=\"product-detail-tab-name\">Financing</span></li>\n                    <li tab=\"tab5\" class=\"last\"><span class=\"product-detail-tab-name\">Gifting</span></li>\n                </ul>\n\n                <div class=\"tab-content details\" style=\"display:block\">\n                    ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 1200, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 1200, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "...\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  stack2 = helpers.each.call(depth0, depth0.itemAttr, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  if (stack2 = helpers.supplierWarranty) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.supplierWarranty; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "<br/>\n                    ";
  if (stack2 = helpers.warrantyLength) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.warrantyLength; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n                </div>\n\n                <div class=\"tab-content details\">\n\n                </div>\n                <div class=\"tab-content details\">\n\n                </div>\n\n            </div>\n        </div>\n    </section>\n</div>\n<br class=\"clear\"/>\n</div>";
  return buffer;
  });
templates['productHeader'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"header\">\n    <div class=\"row-fluid\">\n        <div id=\"cart-container\" class=\"span12\">\n            <div class=\"span3\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></div>\n            <div id=\"white\" class=\"span4\">\n                <form method=\"get\" action=\"/search\" id=\"search\">\n                    <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n                </form>\n            </div>\n            <!--<div id=\"create-link\" class=\"span1\"><img src=\"/img/tvFinder/create.png\"/><a href=\"#\">-->\n                <!--Create</a></div>-->\n\n            <!--<div id=\"sign-in\" class=\"span1\"><img src=\"/img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a>-->\n            <!--</div>-->\n\n            <div id=\"cart-items\" class=\"span1 offset4\"><img src=\"/img/tvFinder/shoppingCart.png\"/><a href=\"/cart.html\">\n                Items</a></div>\n        </div>\n    </div>\n</div>";
  });
templates['ratingsReviews'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                    <div class=\"selected-review\">\n                        <div class=\"selected-review-title\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n                        <br/>\n                        <div style=\"font-family: 'Sintony',sans-serif;font-size:15px;color:color: #777777;\">by <span style=\"color: #3078b9;\">";
  if (stack2 = helpers.customer) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.customer; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span> on ";
  if (stack2 = helpers.date) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.date; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " ";
  stack2 = helpers['if'].call(depth0, depth0.isVerified, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\n                        <div><span class=\"stars\">";
  if (stack2 = helpers.rating) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rating; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></div><br/><br/>\n                        <div>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.review, 200, options) : helperMissing.call(depth0, "rawText", depth0.review, 200, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span></div>\n                    </div>\n                    <div class=\"separator\"></div>\n                    <div class=\"review-attributes-left-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Value:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.value) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.value; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Meets Expectations:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.meetsexpectations) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.meetsexpectations; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Picture Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.picturequality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.picturequality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Sound Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.soundquality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.soundquality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Features:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.features) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.features; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                        </dl>\n                    </div>\n                    <div class=\"review-attributes-right-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Age:</dt>\n                            <dd>";
  if (stack2 = helpers.age) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.age; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Gender:</dt>\n                            <dd>";
  if (stack2 = helpers.gender) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.gender; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Ownership:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Usage:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>City:</dt>\n                            <dd>";
  if (stack2 = helpers.city) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.city; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Helpful Votes:</dt>\n                            <dd>";
  if (stack2 = helpers.helpfulvotes) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.helpfulvotes; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                        </dl>\n                    </div>\n                <!--carousel-inner closing div    -->\n                </div>\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car active item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n             ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return " is Verified";
  }

  buffer += "\n\n<div id=\"ratings-rev-title\">\n    Reviews & Ratings <span style=\"color: #3078b9;\">(";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Total)</span> <a href=\"#\" class=\"write-review-btn\">Write a Review</a>\n</div>\n<div id=\"review-dropdowns-container\">\n<span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"reveiwers\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"Men\">Men</option>\n                            <option value=\"Women\">Women</option>\n                            <option value=\"Children\">Children</option>\n                            <option value=\"Animals\">Animals</option>\n                            <option value=\"Minerals\">Minerals</option>\n                            <option value=\"Vegetables\">Vegetables</option>\n                        </select>\n                    </div>\n            </span>\n        <span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ages\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"25\">25 - 34</option>\n                            <option value=\"35\">35 - 44</option>\n                            <option value=\"45\">45 - 54</option>\n                            <option value=\"55\">55 - 64</option>\n                            <option value=\"65\">65+</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns-border left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ratings\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"All\">All Ratings</option>\n                            <option value=\"5\">5 star</option>\n                            <option value=\"4\">4 star</option>\n                            <option value=\"3\">3 star</option>\n                            <option value=\"2\">2 star</option>\n                            <option value=\"1\">1 star</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns\" style=\"float: right\">\n                    <div>\n                        <select id=\"helpful\">\n                            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n                            <option value=\"MostHelpful\">Most Helpful</option>\n                            <option value=\"Oldest\">Oldest to Newest</option>\n                            <option value=\"Newest\">Newest to Oldest</option>\n                        </select>\n                    </div>\n        </span>\n</div>\n\n\n<div class=\"reviews-container\">\n<div id=\"selected-review-container\">\n    <div id=\"reviewCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack2 = helpers.each.call(depth0, depth0.ratingsReviewsItems, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n            <!-- Carousel nav -->\n            <a class=\"carousel-control left\" href=\"#reviewCarousel\" data-slide=\"prev\">&lsaquo;</a>\n            <a class=\"carousel-control right\" href=\"#reviewCarousel\" data-slide=\"next\">&rsaquo;</a>\n\n        </div>\n    </div>\n    <div id=\"reviews-count-container\" class=\"left-float\">1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews</div>\n    <!--1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews-->\n</div>\n\n<script>\n\n    reviewCount = function (){\n        var index = $(\".rev-car.item.active\").attr(\"indexid\");\n        var count = Number(index);\n        $('#reviews-count-container').text(count +\" of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Reviews\");\n    };\n\n    $('#reviewCarousel').bind('slid', function() {\n        reviewCount();\n    })\n\n</script>";
  return buffer;
  });
templates['paymentShippingDetails'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-details\" class=\"row-fluid\">\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Payment Details</span></p>\n        <p>\n            <select id=\"payment-details-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>Last 4 digits: 2227</option>\n                <option value=\"4437\">Last 4 digits: 4337</option>\n                <option value=\"2227\">Last 4 digits: 2227</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Billing Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Shipping&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color:#3078b9;\">(Multiple Addresses?)</span></p>\n        <p>\n            <select id=\"shipping-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>7000 Marina Blvd</option>\n                <option value=\"MostHelpful\">7000 Marina Blvd</option>\n                <option value=\"Oldest\">850 Cherry Ave</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Shipping Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n                555 test ave<br/>\n                San Bruno, CA 94066\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Delivery Date</span></p>\n        <p><span class=\"detail-labels\"><b>01/01/2013</b></span></p>\n        <p><span style=\"color:#C95925;\"><b>Please Note:</b></span></p>\n        <p><span style=\"color:#777777;font-family: 'Sintony',sans-serif;\">Non-priority delivery estimates<br/>\n                   can vary +/- 4 days.</span></p>\n    </div>\n</div>";
  return buffer;
  });
templates['reviewConfirmOrder'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-breadcrumb\" class=\"row-fluid\">\n    <img src=\"/img/cart/breadcrumbHome.png\"/> <a href=\"/cart.html\"> YOUR CART</a>  >  <a href=\"/review.html\"> CHECKOUT</a>  >  CONFIRM YOUR ORDER\n</div>\n<div id=\"confirm-order\"  class=\"row-fluid\">\n<div class=\"span6 confirm-order-title\">\n    Review Your Order: <span style=\"font-weight: 600;\">";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Items  |  $";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Total</span>\n</div>\n<div class=\"span2 offset1\">\n    <img src=\"/img/cart/confirmOrderBtn.png\"/>\n</div>\n</div>";
  return buffer;
  });
templates['reviewLineItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n</div>\n<div class=\"span4 review-line-item-name\">\n    ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"span1 review-line-item-qty\">\n    ";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</div>\n<div class=\"span2 review-line-item-price\">\n    $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</div>\n</div>\n";
  return buffer;
  }

  buffer += "<div id=\"col-labels\" class=\"row-fluid confirm-order-title\">\n    <div class=\"span2\">\n        Your Order\n    </div>\n    <div class=\"span1 offset4\">\n        Qty\n    </div>\n    <div class=\"span2\">\n        Price\n    </div>\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div id=\"empty-div\" class=\"row-fluid\">\n</div>";
  return buffer;
  });
templates['reviewSubtotals'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-subtotals\" class=\"row-fluid\">\n    <div class=\"span1 detail-labels\">\n        <b>Subtotals</b>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Items (";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$";
  if (stack1 = helpers.subtotal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtotal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Shipping & Handling</span></p>\n\n        <p><span class=\"review-line-item-price\">$66&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Taxes</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$70</span></p>\n    </div>\n    <div class=\"span2 detail-labels\"><br/>\n\n        <p><b>Total</b>&nbsp;&nbsp;&nbsp;<span class=\"review-line-item-price\">$";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></p>\n    </div>\n</div>\n<div class=\"row-fluid\" style=\"padding-top: 4%\">\n<div class=\"span2 offset7\">\n    <img src=\"/img/cart/confirmOrderBtn.png\"/>\n</div>\n</div>";
  return buffer;
  });
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../../img/tvFinder/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  buffer += "<script src=\"../../js/tvFinder/television.js\"></script>\n";
  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cartItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"row-fluid cart-items\">\n        <div id=\"cart-item-image\" class=\"span4\">\n            <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n        </div>\n        <div class=\"span4\">\n            <div id=\"cart-prod-title\" class=\"row-fluid\">\n                ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div class=\"row-fluid\">\n                <a  itemtosave=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\" class=\"save-for-later\">Save For Later</a>&nbsp;&nbsp;&nbsp;&nbsp;\n                <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart\">Remove</a>\n            </div>\n        </div>\n        <div id=\"cart-qty\" class=\"span2\">\n            <form>\n                <fieldset>\n                    <p>\n                        <label>Quantity</label>\n                        <input type=\"text\"\n                               id=\"cart-qty-input\"\n                               value=\"";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n                    </p>\n                </fieldset>\n            </form>\n        </div>\n        <div class=\"span2 cart-item-price\">\n            $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        </div>\n    </div>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"row-fluid cart-items\">\n    <div id=\"saved-item-img\" class=\"span4\">\n        <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n    </div>\n    <div class=\"span4\">\n        <div id=\"cart-prod-title\" class=\"row-fluid\">\n            ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"row-fluid\">\n        <a href=\"#\" itemtomove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"move-to-cart\">Move To Cart</a>&nbsp;&nbsp;&nbsp;&nbsp;\n        <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart remove-from-saved\">Remove</a>\n        </div>\n    </div>\n    <div class=\"span2 qty-text\">\n        Quantity: ";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n    <div class=\"span2 cart-item-price\">\n        $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n</div>\n</div>\n";
  return buffer;
  }

  buffer += "<div id=\"line-item\" class=\"row-fluid\">\n    <div class=\"item-num grey-gloss\">\n        ";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " item(s) for purchase\n    </div>\n    ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>\n<div id=\"saved-item\" class=\"row-fluid\">\n<div class=\"item-num grey-gloss\">\n    ";
  if (stack1 = helpers.savedItemsCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.savedItemsCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Saved Item(s)\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0.savedItems, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['cartSort'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid cart-header\">\n    <div class=\"span5\">\n        ";
  if (stack1 = helpers.cartSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cartSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Item(s) in cart\n    </div>\n    <div class=\"span3\">\n        <select id=\"cart-sort\">\n            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n            <option value=\"price\">Price</option>\n            <option value=\"AZ\">A-Z</option>\n        </select>\n    </div>\n    <div class=\"span1 offset3\">\n        <img src=\"/img/global/close-panel.png\"/>\n    </div>\n</div>\n\n";
  return buffer;
  });
templates['cartSubTotal'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid\">\n    <div class=\"span4 offset5\">\n        <span class=\"cart-header\">Subtotal:</span> <span id=\"price-subtotal\">$";
  if (stack1 = helpers.subtotals) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtotals; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n    <div class=\"span3\">\n        <a href=\"/review.html\" class=\"checkout\">Checkout</a>\n    </div>\n</div>";
  return buffer;
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../../img/tvFinder/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../../img/tvFinder/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>\n\n\n\n";
  });
templates['addToCart'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "    <div id=\"about\" class=\"left-float\">\n        <span style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 25px; color:#000000;\">About</span>\n        <p id=\"short-desc\">\n            <section>\n                ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 250, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 250, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span>\n            </section>\n        </p>\n    </div>\n    <div id=\"add-to-cart\" class=\"left-float\">\n    <a href=\"#\" class=\"qty-btn\">Qty</a></a>&nbsp;&nbsp;<a href=\"#\" class=\"add-to-cart-btn\">Add to Cart</a>\n\n        <p>\n            <section>\n                <p><a href=\"#\"><img src=\"img/product/find-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Find this product locally.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/arrival-icon.png\"/>&nbsp;&nbsp;Calculate arrival date.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/share-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Share with a friend.</a></p>\n            </section>\n        </p>\n    </div>\n    <br class=\"clear\" />\n";
  return buffer;
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"active item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class=\"active\"></li>\n            ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'></li>\n            ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/productPage.js\"></script>\n\n<div id=\"product-name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span id=\"close-x\"><img\n        src=\"/img/global/close-panel.png\"></span></div>\n<div id=\"ratings-container\">\n<span class=\"left-float\"><img src=\"";
  if (stack1 = helpers.ratingUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ratingUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/> </span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a\n        href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n</div>\n<div id=\"product-price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div id=\"product-image\">\n<!--<div id=\"hero-image\" class=\"left-float\">-->\n    <div id=\"itemCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <!-- Carousel nav -->\n        <a class=\"carousel-control left\" href=\"#itemCarousel\" data-slide=\"prev\">&lsaquo;</a>\n        <a class=\"carousel-control right\" href=\"#itemCarousel\" data-slide=\"next\">&rsaquo;</a>\n        <!--progress-->\n        <ol class=\"carousel-indicators\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ol>\n    </div>\n<!--</div>-->\n</div>\n\n\n\n\n";
  return buffer;
  });
templates['peopleWhoViewed'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n";
  options = {hash:{
    'compare': (3)
  },inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.if_lt),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "if_lt", data.index, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"people-viewed-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n";
  return buffer;
  }

  buffer += "<div class=\"horizBorder\"><p class=\"inset\"></p></div>\n<div id=\"people-viewed-title\">\nPeople Who Viewed This Item Also Viewed<a href=\"#\" class=\"see-more-btn\">See More</a>\n</div>\n<div id=\"people-viewed-container\">\n";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.viewedItems),stack1 == null || stack1 === false ? stack1 : stack1.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n<br class=\"clear\" />\n</div>\n";
  return buffer;
  });
templates['prodDetailTabs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <ul>\n                        <li>";
  if (stack1 = helpers.attributeName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " : ";
  if (stack1 = helpers.attributeValue) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeValue; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n                    </ul>\n                    ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/tab.js\"></script>\n<div class=\"horizborder\"><p class=\"inset\"></p></div>\n<div id=\"product-details-title\">\nProduct Details<a href=\"#\" class=\"have-question-btn\">Have a Question?</a>\n</div>\n<div id=\"details-container\">\n<div id=\"detail-tabs\" class=\"left-float\">\n    <section class=\"product-details-container\">\n        <div class=\"wrapper\">\n            <div id=\"v-nav\">\n                <ul>\n                    <li tab=\"tab1\" class=\"first current\"><span class=\"product-detail-tab-name\">Description</span></li>\n                    <li tab=\"tab2\"><span class=\"product-detail-tab-name\">Specifications</span></li>\n                    <li tab=\"tab3\"><span class=\"product-detail-tab-name\">Warranty</span></li>\n                    <li tab=\"tab4\"><span class=\"product-detail-tab-name\">Financing</span></li>\n                    <li tab=\"tab5\" class=\"last\"><span class=\"product-detail-tab-name\">Gifting</span></li>\n                </ul>\n\n                <div class=\"tab-content details\" style=\"display:block\">\n                    ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 1200, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 1200, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "...\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  stack2 = helpers.each.call(depth0, depth0.itemAttr, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  if (stack2 = helpers.supplierWarranty) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.supplierWarranty; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "<br/>\n                    ";
  if (stack2 = helpers.warrantyLength) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.warrantyLength; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n                </div>\n\n                <div class=\"tab-content details\">\n\n                </div>\n                <div class=\"tab-content details\">\n\n                </div>\n\n            </div>\n        </div>\n    </section>\n</div>\n<br class=\"clear\"/>\n</div>";
  return buffer;
  });
templates['productHeader'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"header\">\n    <div class=\"row-fluid\">\n        <div id=\"cart-container\" class=\"span12\">\n            <div class=\"span3\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></div>\n            <div id=\"white\" class=\"span4\">\n                <form method=\"get\" action=\"/search\" id=\"search\">\n                    <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n                </form>\n            </div>\n            <!--<div id=\"create-link\" class=\"span1\"><img src=\"/img/tvFinder/create.png\"/><a href=\"#\">-->\n                <!--Create</a></div>-->\n\n            <!--<div id=\"sign-in\" class=\"span1\"><img src=\"/img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a>-->\n            <!--</div>-->\n\n            <div id=\"cart-items\" class=\"span1 offset4\"><img src=\"/img/tvFinder/shoppingCart.png\"/><a href=\"/cart.html\">\n                Items</a></div>\n        </div>\n    </div>\n</div>";
  });
templates['ratingsReviews'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                    <div class=\"selected-review\">\n                        <div class=\"selected-review-title\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n                        <br/>\n                        <div style=\"font-family: 'Sintony',sans-serif;font-size:15px;color:color: #777777;\">by <span style=\"color: #3078b9;\">";
  if (stack2 = helpers.customer) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.customer; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span> on ";
  if (stack2 = helpers.date) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.date; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " ";
  stack2 = helpers['if'].call(depth0, depth0.isVerified, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\n                        <div><span class=\"stars\">";
  if (stack2 = helpers.rating) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rating; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></div><br/><br/>\n                        <div>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.review, 200, options) : helperMissing.call(depth0, "rawText", depth0.review, 200, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span></div>\n                    </div>\n                    <div class=\"separator\"></div>\n                    <div class=\"review-attributes-left-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Value:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.value) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.value; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Meets Expectations:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.meetsexpectations) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.meetsexpectations; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Picture Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.picturequality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.picturequality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Sound Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.soundquality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.soundquality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Features:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.features) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.features; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                        </dl>\n                    </div>\n                    <div class=\"review-attributes-right-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Age:</dt>\n                            <dd>";
  if (stack2 = helpers.age) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.age; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Gender:</dt>\n                            <dd>";
  if (stack2 = helpers.gender) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.gender; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Ownership:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Usage:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>City:</dt>\n                            <dd>";
  if (stack2 = helpers.city) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.city; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Helpful Votes:</dt>\n                            <dd>";
  if (stack2 = helpers.helpfulvotes) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.helpfulvotes; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                        </dl>\n                    </div>\n                <!--carousel-inner closing div    -->\n                </div>\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car active item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n             ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return " is Verified";
  }

  buffer += "\n\n<div id=\"ratings-rev-title\">\n    Reviews & Ratings <span style=\"color: #3078b9;\">(";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Total)</span> <a href=\"#\" class=\"write-review-btn\">Write a Review</a>\n</div>\n<div id=\"review-dropdowns-container\">\n<span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"reveiwers\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"Men\">Men</option>\n                            <option value=\"Women\">Women</option>\n                            <option value=\"Children\">Children</option>\n                            <option value=\"Animals\">Animals</option>\n                            <option value=\"Minerals\">Minerals</option>\n                            <option value=\"Vegetables\">Vegetables</option>\n                        </select>\n                    </div>\n            </span>\n        <span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ages\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"25\">25 - 34</option>\n                            <option value=\"35\">35 - 44</option>\n                            <option value=\"45\">45 - 54</option>\n                            <option value=\"55\">55 - 64</option>\n                            <option value=\"65\">65+</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns-border left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ratings\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"All\">All Ratings</option>\n                            <option value=\"5\">5 star</option>\n                            <option value=\"4\">4 star</option>\n                            <option value=\"3\">3 star</option>\n                            <option value=\"2\">2 star</option>\n                            <option value=\"1\">1 star</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns\" style=\"float: right\">\n                    <div>\n                        <select id=\"helpful\">\n                            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n                            <option value=\"MostHelpful\">Most Helpful</option>\n                            <option value=\"Oldest\">Oldest to Newest</option>\n                            <option value=\"Newest\">Newest to Oldest</option>\n                        </select>\n                    </div>\n        </span>\n</div>\n\n\n<div class=\"reviews-container\">\n<div id=\"selected-review-container\">\n    <div id=\"reviewCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack2 = helpers.each.call(depth0, depth0.ratingsReviewsItems, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n            <!-- Carousel nav -->\n            <a class=\"carousel-control left\" href=\"#reviewCarousel\" data-slide=\"prev\">&lsaquo;</a>\n            <a class=\"carousel-control right\" href=\"#reviewCarousel\" data-slide=\"next\">&rsaquo;</a>\n\n        </div>\n    </div>\n    <div id=\"reviews-count-container\" class=\"left-float\">1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews</div>\n    <!--1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews-->\n</div>\n\n<script>\n\n    reviewCount = function (){\n        var index = $(\".rev-car.item.active\").attr(\"indexid\");\n        var count = Number(index);\n        $('#reviews-count-container').text(count +\" of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Reviews\");\n    };\n\n    $('#reviewCarousel').bind('slid', function() {\n        reviewCount();\n    })\n\n</script>";
  return buffer;
  });
templates['paymentShippingDetails'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-details\" class=\"row-fluid\">\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Payment Details</span></p>\n        <p>\n            <select id=\"payment-details-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>Last 4 digits: 2227</option>\n                <option value=\"4437\">Last 4 digits: 4337</option>\n                <option value=\"2227\">Last 4 digits: 2227</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Billing Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Shipping&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color:#3078b9;\">(Multiple Addresses?)</span></p>\n        <p>\n            <select id=\"shipping-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>7000 Marina Blvd</option>\n                <option value=\"MostHelpful\">7000 Marina Blvd</option>\n                <option value=\"Oldest\">850 Cherry Ave</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Shipping Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n                555 test ave<br/>\n                San Bruno, CA 94066\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Delivery Date</span></p>\n        <p><span class=\"detail-labels\"><b>01/01/2013</b></span></p>\n        <p><span style=\"color:#C95925;\"><b>Please Note:</b></span></p>\n        <p><span style=\"color:#777777;font-family: 'Sintony',sans-serif;\">Non-priority delivery estimates<br/>\n                   can vary +/- 4 days.</span></p>\n    </div>\n</div>";
  return buffer;
  });
templates['reviewConfirmOrder'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-breadcrumb\" class=\"row-fluid\">\n    <img src=\"/img/cart/breadcrumbHome.png\"/> <a href=\"/cart.html\"> YOUR CART</a>  >  <a href=\"/review.html\"> CHECKOUT</a>  >  CONFIRM YOUR ORDER\n</div>\n<div id=\"confirm-order\"  class=\"row-fluid\">\n<div class=\"span6 confirm-order-title\">\n    Review Your Order: <span style=\"font-weight: 600;\">";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Items  |  $";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Total</span>\n</div>\n<div class=\"span2 offset1\">\n    <a href=\"#\" class=\"confirm\">Confirm</a>\n</div>\n</div>";
  return buffer;
  });
templates['reviewLineItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n</div>\n<div class=\"span4 review-line-item-name\">\n    ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"span1 review-line-item-qty\">\n    ";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</div>\n<div class=\"span2 review-line-item-price\">\n    $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</div>\n</div>\n";
  return buffer;
  }

  buffer += "<div id=\"col-labels\" class=\"row-fluid confirm-order-title\">\n    <div class=\"span2\">\n        Your Order\n    </div>\n    <div class=\"span1 offset4\">\n        Qty\n    </div>\n    <div class=\"span2\">\n        Price\n    </div>\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div id=\"empty-div\" class=\"row-fluid\">\n</div>";
  return buffer;
  });
templates['reviewSubtotals'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-subtotals\" class=\"row-fluid\">\n    <div class=\"span1 detail-labels\">\n        <b>Subtotals</b>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Items (";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$";
  if (stack1 = helpers.subtotal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtotal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Shipping & Handling</span></p>\n\n        <p><span class=\"review-line-item-price\">$66&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Taxes</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$70</span></p>\n    </div>\n    <div class=\"span2 detail-labels\"><br/>\n\n        <p><b>Total</b>&nbsp;&nbsp;&nbsp;<span class=\"review-line-item-price\">$";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></p>\n    </div>\n</div>\n<div class=\"row-fluid\" style=\"padding-top: 4%\">\n<div class=\"span2 offset7\">\n    <a href=\"#\" class=\"confirm\">Confirm</a>\n</div>\n</div>";
  return buffer;
  });
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../../img/tvFinder/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  buffer += "<script src=\"../../js/tvFinder/television.js\"></script>\n";
  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cartItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"row-fluid cart-items\">\n        <div id=\"cart-item-image\" class=\"span4\">\n            <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n        </div>\n        <div class=\"span4\">\n            <div id=\"cart-prod-title\" class=\"row-fluid\">\n                ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div class=\"row-fluid\">\n                <a  itemtosave=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\" class=\"save-for-later\">Save For Later</a>&nbsp;&nbsp;&nbsp;&nbsp;\n                <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart\">Remove</a>\n            </div>\n        </div>\n        <div id=\"cart-qty\" class=\"span2\">\n            <form>\n                <fieldset>\n                    <p>\n                        <label>Quantity</label>\n                        <input type=\"text\"\n                               id=\"cart-qty-input\"\n                               value=\"";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n                    </p>\n                </fieldset>\n            </form>\n        </div>\n        <div class=\"span2 cart-item-price\">\n            $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        </div>\n    </div>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"row-fluid cart-items\">\n    <div id=\"saved-item-img\" class=\"span4\">\n        <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n    </div>\n    <div class=\"span4\">\n        <div id=\"cart-prod-title\" class=\"row-fluid\">\n            ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"row-fluid\">\n        <a href=\"#\" itemtomove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"move-to-cart\">Move To Cart</a>&nbsp;&nbsp;&nbsp;&nbsp;\n        <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart remove-from-saved\">Remove</a>\n        </div>\n    </div>\n    <div class=\"span2 qty-text\">\n        Quantity: ";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n    <div class=\"span2 cart-item-price\">\n        $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n</div>\n</div>\n";
  return buffer;
  }

  buffer += "<div id=\"line-item\" class=\"row-fluid\">\n    <div class=\"item-num grey-gloss\">\n        ";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " item(s) for purchase\n    </div>\n    ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>\n<div id=\"saved-item\" class=\"row-fluid\">\n<div class=\"item-num grey-gloss\">\n    ";
  if (stack1 = helpers.savedItemsCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.savedItemsCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Saved Item(s)\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0.savedItems, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['cartSort'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid cart-header\">\n    <div class=\"span5\">\n        ";
  if (stack1 = helpers.cartSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cartSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Item(s) in cart\n    </div>\n    <div class=\"span3\">\n        <select id=\"cart-sort\">\n            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n            <option value=\"price\">Price</option>\n            <option value=\"AZ\">A-Z</option>\n        </select>\n    </div>\n    <div class=\"span1 offset3\">\n        <img src=\"/img/global/close-panel.png\"/>\n    </div>\n</div>\n\n";
  return buffer;
  });
templates['cartSubTotal'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid\">\n    <div class=\"span4 offset5\">\n        <span class=\"cart-header\">Subtotal:</span> <span id=\"price-subtotal\">$";
  if (stack1 = helpers.subtotals) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtotals; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n    <div class=\"span3\">\n        <a href=\"/review.html\" class=\"checkout\">Checkout</a>\n    </div>\n</div>";
  return buffer;
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../../img/tvFinder/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../../img/tvFinder/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>\n\n\n\n";
  });
templates['addToCart'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "    <div id=\"about\" class=\"left-float\">\n        <span style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 25px; color:#000000;\">About</span>\n        <p id=\"short-desc\">\n            <section>\n                ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 250, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 250, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span>\n            </section>\n        </p>\n    </div>\n    <div id=\"add-to-cart\" class=\"left-float\">\n    <a href=\"#\" class=\"qty-btn\">Qty</a></a>&nbsp;&nbsp;<a href=\"#\" class=\"add-to-cart-btn\">Add to Cart</a>\n\n        <p>\n            <section>\n                <p><a href=\"#\"><img src=\"img/product/find-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Find this product locally.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/arrival-icon.png\"/>&nbsp;&nbsp;Calculate arrival date.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/share-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Share with a friend.</a></p>\n            </section>\n        </p>\n    </div>\n    <br class=\"clear\" />\n";
  return buffer;
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"active item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class=\"active\"></li>\n            ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'></li>\n            ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/productPage.js\"></script>\n\n<div id=\"product-name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span id=\"close-x\"><img\n        src=\"/img/global/close-panel.png\"></span></div>\n<div id=\"ratings-container\">\n<span class=\"left-float\"><img src=\"";
  if (stack1 = helpers.ratingUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ratingUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/> </span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a\n        href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n</div>\n<div id=\"product-price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div id=\"product-image\">\n<!--<div id=\"hero-image\" class=\"left-float\">-->\n    <div id=\"itemCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <!-- Carousel nav -->\n        <a class=\"carousel-control left\" href=\"#itemCarousel\" data-slide=\"prev\">&lsaquo;</a>\n        <a class=\"carousel-control right\" href=\"#itemCarousel\" data-slide=\"next\">&rsaquo;</a>\n        <!--progress-->\n        <ol class=\"carousel-indicators\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ol>\n    </div>\n<!--</div>-->\n</div>\n\n\n\n\n";
  return buffer;
  });
templates['peopleWhoViewed'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n";
  options = {hash:{
    'compare': (3)
  },inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.if_lt),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "if_lt", data.index, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"people-viewed-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n";
  return buffer;
  }

  buffer += "<div class=\"horizBorder\"><p class=\"inset\"></p></div>\n<div id=\"people-viewed-title\">\nPeople Who Viewed This Item Also Viewed<a href=\"#\" class=\"see-more-btn\">See More</a>\n</div>\n<div id=\"people-viewed-container\">\n";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.viewedItems),stack1 == null || stack1 === false ? stack1 : stack1.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n<br class=\"clear\" />\n</div>\n";
  return buffer;
  });
templates['prodDetailTabs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <ul>\n                        <li>";
  if (stack1 = helpers.attributeName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " : ";
  if (stack1 = helpers.attributeValue) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeValue; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n                    </ul>\n                    ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/tab.js\"></script>\n<div class=\"horizborder\"><p class=\"inset\"></p></div>\n<div id=\"product-details-title\">\nProduct Details<a href=\"#\" class=\"have-question-btn\">Have a Question?</a>\n</div>\n<div id=\"details-container\">\n<div id=\"detail-tabs\" class=\"left-float\">\n    <section class=\"product-details-container\">\n        <div class=\"wrapper\">\n            <div id=\"v-nav\">\n                <ul>\n                    <li tab=\"tab1\" class=\"first current\"><span class=\"product-detail-tab-name\">Description</span></li>\n                    <li tab=\"tab2\"><span class=\"product-detail-tab-name\">Specifications</span></li>\n                    <li tab=\"tab3\"><span class=\"product-detail-tab-name\">Warranty</span></li>\n                    <li tab=\"tab4\"><span class=\"product-detail-tab-name\">Financing</span></li>\n                    <li tab=\"tab5\" class=\"last\"><span class=\"product-detail-tab-name\">Gifting</span></li>\n                </ul>\n\n                <div class=\"tab-content details\" style=\"display:block\">\n                    ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 1200, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 1200, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "...\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  stack2 = helpers.each.call(depth0, depth0.itemAttr, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  if (stack2 = helpers.supplierWarranty) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.supplierWarranty; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "<br/>\n                    ";
  if (stack2 = helpers.warrantyLength) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.warrantyLength; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n                </div>\n\n                <div class=\"tab-content details\">\n\n                </div>\n                <div class=\"tab-content details\">\n\n                </div>\n\n            </div>\n        </div>\n    </section>\n</div>\n<br class=\"clear\"/>\n</div>";
  return buffer;
  });
templates['productHeader'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"header\">\n    <div class=\"row-fluid\">\n        <div id=\"cart-container\" class=\"span12\">\n            <div class=\"span3\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></div>\n            <div id=\"white\" class=\"span4\">\n                <form method=\"get\" action=\"/search\" id=\"search\">\n                    <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n                </form>\n            </div>\n            <!--<div id=\"create-link\" class=\"span1\"><img src=\"/img/tvFinder/create.png\"/><a href=\"#\">-->\n                <!--Create</a></div>-->\n\n            <!--<div id=\"sign-in\" class=\"span1\"><img src=\"/img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a>-->\n            <!--</div>-->\n\n            <div id=\"cart-items\" class=\"span1 offset4\"><img src=\"/img/tvFinder/shoppingCart.png\"/><a href=\"/cart.html\">\n                Items</a></div>\n        </div>\n    </div>\n</div>";
  });
templates['ratingsReviews'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                    <div class=\"selected-review\">\n                        <div class=\"selected-review-title\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n                        <br/>\n                        <div style=\"font-family: 'Sintony',sans-serif;font-size:15px;color:color: #777777;\">by <span style=\"color: #3078b9;\">";
  if (stack2 = helpers.customer) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.customer; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span> on ";
  if (stack2 = helpers.date) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.date; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " ";
  stack2 = helpers['if'].call(depth0, depth0.isVerified, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\n                        <div><span class=\"stars\">";
  if (stack2 = helpers.rating) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rating; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></div><br/><br/>\n                        <div>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.review, 200, options) : helperMissing.call(depth0, "rawText", depth0.review, 200, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span></div>\n                    </div>\n                    <div class=\"separator\"></div>\n                    <div class=\"review-attributes-left-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Value:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.value) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.value; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Meets Expectations:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.meetsexpectations) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.meetsexpectations; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Picture Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.picturequality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.picturequality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Sound Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.soundquality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.soundquality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Features:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.features) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.features; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                        </dl>\n                    </div>\n                    <div class=\"review-attributes-right-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Age:</dt>\n                            <dd>";
  if (stack2 = helpers.age) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.age; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Gender:</dt>\n                            <dd>";
  if (stack2 = helpers.gender) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.gender; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Ownership:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Usage:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>City:</dt>\n                            <dd>";
  if (stack2 = helpers.city) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.city; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Helpful Votes:</dt>\n                            <dd>";
  if (stack2 = helpers.helpfulvotes) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.helpfulvotes; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                        </dl>\n                    </div>\n                <!--carousel-inner closing div    -->\n                </div>\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car active item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n             ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return " is Verified";
  }

  buffer += "\n\n<div id=\"ratings-rev-title\">\n    Reviews & Ratings <span style=\"color: #3078b9;\">(";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Total)</span> <a href=\"#\" class=\"write-review-btn\">Write a Review</a>\n</div>\n<div id=\"review-dropdowns-container\">\n<span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"reveiwers\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"Men\">Men</option>\n                            <option value=\"Women\">Women</option>\n                            <option value=\"Children\">Children</option>\n                            <option value=\"Animals\">Animals</option>\n                            <option value=\"Minerals\">Minerals</option>\n                            <option value=\"Vegetables\">Vegetables</option>\n                        </select>\n                    </div>\n            </span>\n        <span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ages\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"25\">25 - 34</option>\n                            <option value=\"35\">35 - 44</option>\n                            <option value=\"45\">45 - 54</option>\n                            <option value=\"55\">55 - 64</option>\n                            <option value=\"65\">65+</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns-border left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ratings\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"All\">All Ratings</option>\n                            <option value=\"5\">5 star</option>\n                            <option value=\"4\">4 star</option>\n                            <option value=\"3\">3 star</option>\n                            <option value=\"2\">2 star</option>\n                            <option value=\"1\">1 star</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns\" style=\"float: right\">\n                    <div>\n                        <select id=\"helpful\">\n                            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n                            <option value=\"MostHelpful\">Most Helpful</option>\n                            <option value=\"Oldest\">Oldest to Newest</option>\n                            <option value=\"Newest\">Newest to Oldest</option>\n                        </select>\n                    </div>\n        </span>\n</div>\n\n\n<div class=\"reviews-container\">\n<div id=\"selected-review-container\">\n    <div id=\"reviewCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack2 = helpers.each.call(depth0, depth0.ratingsReviewsItems, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n            <!-- Carousel nav -->\n            <a class=\"carousel-control left\" href=\"#reviewCarousel\" data-slide=\"prev\">&lsaquo;</a>\n            <a class=\"carousel-control right\" href=\"#reviewCarousel\" data-slide=\"next\">&rsaquo;</a>\n\n        </div>\n    </div>\n    <div id=\"reviews-count-container\" class=\"left-float\">1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews</div>\n    <!--1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews-->\n</div>\n\n<script>\n\n    reviewCount = function (){\n        var index = $(\".rev-car.item.active\").attr(\"indexid\");\n        var count = Number(index);\n        $('#reviews-count-container').text(count +\" of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Reviews\");\n    };\n\n    $('#reviewCarousel').bind('slid', function() {\n        reviewCount();\n    })\n\n</script>";
  return buffer;
  });
templates['paymentShippingDetails'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-details\" class=\"row-fluid\">\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Payment Details</span></p>\n        <p>\n            <select id=\"payment-details-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>Last 4 digits: 2227</option>\n                <option value=\"4437\">Last 4 digits: 4337</option>\n                <option value=\"2227\">Last 4 digits: 2227</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Billing Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Shipping&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color:#3078b9;\">(Multiple Addresses?)</span></p>\n        <p>\n            <select id=\"shipping-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>7000 Marina Blvd</option>\n                <option value=\"MostHelpful\">7000 Marina Blvd</option>\n                <option value=\"Oldest\">850 Cherry Ave</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Shipping Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n                555 test ave<br/>\n                San Bruno, CA 94066\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Delivery Date</span></p>\n        <p><span class=\"detail-labels\"><b>01/01/2013</b></span></p>\n        <p><span style=\"color:#C95925;\"><b>Please Note:</b></span></p>\n        <p><span style=\"color:#777777;font-family: 'Sintony',sans-serif;\">Non-priority delivery estimates<br/>\n                   can vary +/- 4 days.</span></p>\n    </div>\n</div>";
  return buffer;
  });
templates['reviewConfirmOrder'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-breadcrumb\" class=\"row-fluid\">\n    <img src=\"/img/cart/breadcrumbHome.png\"/> <a href=\"/cart.html\"> YOUR CART</a>  >  <a href=\"/review.html\"> CHECKOUT</a>  >  CONFIRM YOUR ORDER\n</div>\n<div id=\"confirm-order\"  class=\"row-fluid\">\n<div class=\"span6 confirm-order-title\">\n    Review Your Order: <span style=\"font-weight: 600;\">";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Items  |  $";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Total</span>\n</div>\n<div class=\"span2 offset1\">\n    <a href=\"#\" class=\"confirm\">Confirm Order</a>\n</div>\n</div>";
  return buffer;
  });
templates['reviewLineItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n</div>\n<div class=\"span4 review-line-item-name\">\n    ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"span1 review-line-item-qty\">\n    ";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</div>\n<div class=\"span2 review-line-item-price\">\n    $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</div>\n</div>\n";
  return buffer;
  }

  buffer += "<div id=\"col-labels\" class=\"row-fluid confirm-order-title\">\n    <div class=\"span2\">\n        Your Order\n    </div>\n    <div class=\"span1 offset4\">\n        Qty\n    </div>\n    <div class=\"span2\">\n        Price\n    </div>\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div id=\"empty-div\" class=\"row-fluid\">\n</div>";
  return buffer;
  });
templates['reviewSubtotals'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-subtotals\" class=\"row-fluid\">\n    <div class=\"span1 detail-labels\">\n        <b>Subtotals</b>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Items (";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$";
  if (stack1 = helpers.subtotal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtotal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Shipping & Handling</span></p>\n\n        <p><span class=\"review-line-item-price\">$66&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Taxes</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$70</span></p>\n    </div>\n    <div class=\"span2 detail-labels\"><br/>\n\n        <p><b>Total</b>&nbsp;&nbsp;&nbsp;<span class=\"review-line-item-price\">$";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></p>\n    </div>\n</div>\n<div class=\"row-fluid\" style=\"padding-top: 4%\">\n<div class=\"span2 offset7\">\n    <a href=\"#\" class=\"confirm\">Confirm Order</a>\n</div>\n</div>";
  return buffer;
  });
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../../img/tvFinder/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  buffer += "<script src=\"../../js/tvFinder/television.js\"></script>\n";
  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cartItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"row-fluid cart-items\">\n        <div id=\"cart-item-image\" class=\"span4\">\n            <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n        </div>\n        <div class=\"span4\">\n            <div id=\"cart-prod-title\" class=\"row-fluid\">\n                ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div class=\"row-fluid\">\n                <a  itemtosave=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\" class=\"save-for-later\">Save For Later</a>&nbsp;&nbsp;&nbsp;&nbsp;\n                <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart\">Remove</a>\n            </div>\n        </div>\n        <div id=\"cart-qty\" class=\"span2\">\n            <form>\n                <fieldset>\n                    <p>\n                        <label>Quantity</label>\n                        <input type=\"text\"\n                               id=\"cart-qty-input\"\n                               value=\"";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n                    </p>\n                </fieldset>\n            </form>\n        </div>\n        <div class=\"span2 cart-item-price\">\n            $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        </div>\n    </div>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"row-fluid cart-items\">\n    <div id=\"saved-item-img\" class=\"span4\">\n        <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n    </div>\n    <div class=\"span4\">\n        <div id=\"cart-prod-title\" class=\"row-fluid\">\n            ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"row-fluid\">\n        <a href=\"#\" itemtomove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"move-to-cart\">Move To Cart</a>&nbsp;&nbsp;&nbsp;&nbsp;\n        <a href=\"#\" itemtoremove=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"remove-from-cart remove-from-saved\">Remove</a>\n        </div>\n    </div>\n    <div class=\"span2 qty-text\">\n        Quantity: ";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n    <div class=\"span2 cart-item-price\">\n        $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n</div>\n</div>\n";
  return buffer;
  }

  buffer += "<div id=\"line-item\" class=\"row-fluid\">\n    <div class=\"item-num grey-gloss\">\n        ";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " item(s) for purchase\n    </div>\n    ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>\n<div id=\"saved-item\" class=\"row-fluid\">\n<div class=\"item-num grey-gloss\">\n    ";
  if (stack1 = helpers.savedItemsCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.savedItemsCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Saved Item(s)\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0.savedItems, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['cartSort'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid cart-header\">\n    <div class=\"span5\">\n        ";
  if (stack1 = helpers.cartSize) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cartSize; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Item(s) in cart\n    </div>\n    <div class=\"span3\">\n        <select id=\"cart-sort\">\n            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n            <option value=\"price\">Price</option>\n            <option value=\"AZ\">A-Z</option>\n        </select>\n    </div>\n    <div class=\"span1 offset3\">\n        <img src=\"/img/global/close-panel.png\"/>\n    </div>\n</div>\n\n";
  return buffer;
  });
templates['cartSubTotal'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid\">\n    <div class=\"span4 offset5\">\n        <span class=\"cart-header\">Subtotal:</span> <span id=\"price-subtotal\">$";
  if (stack1 = helpers.subtotals) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtotals; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n    <div class=\"span3\">\n        <a href=\"/review.html\" class=\"checkout\">Checkout</a>\n    </div>\n</div>";
  return buffer;
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../../img/tvFinder/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../../img/tvFinder/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../../img/tvFinder/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../../img/tvFinder/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>\n\n\n\n";
  });
templates['addToCart'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "    <div id=\"about\" class=\"left-float\">\n        <span style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 25px; color:#000000;\">About</span>\n        <p id=\"short-desc\">\n            <section>\n                ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 250, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 250, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span>\n            </section>\n        </p>\n    </div>\n    <div id=\"add-to-cart\" class=\"left-float\">\n    <a href=\"#\" class=\"qty-btn\">Qty</a></a>&nbsp;&nbsp;<a href=\"#\" class=\"add-to-cart-btn\">Add to Cart</a>\n\n        <p>\n            <section>\n                <p><a href=\"#\"><img src=\"img/product/find-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Find this product locally.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/arrival-icon.png\"/>&nbsp;&nbsp;Calculate arrival date.</a></p>\n\n                <p><a href=\"#\"><img src=\"img/product/share-icon.png\"/>&nbsp;&nbsp;&nbsp;&nbsp;Share with a friend.</a></p>\n            </section>\n        </p>\n    </div>\n    <br class=\"clear\" />\n";
  return buffer;
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"active item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"item\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n            ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class=\"active\"></li>\n            ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-target=\"#itemCarousel\" data-slide-to='"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'></li>\n            ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/productPage.js\"></script>\n\n<div id=\"product-name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span id=\"close-x\"><img\n        src=\"/img/global/close-panel.png\"></span></div>\n<div id=\"ratings-container\">\n<span class=\"left-float\"><img src=\"";
  if (stack1 = helpers.ratingUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ratingUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/> </span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a\n        href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n</div>\n<div id=\"product-price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div id=\"product-image\">\n<!--<div id=\"hero-image\" class=\"left-float\">-->\n    <div id=\"itemCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <!-- Carousel nav -->\n        <a class=\"carousel-control left\" href=\"#itemCarousel\" data-slide=\"prev\">&lsaquo;</a>\n        <a class=\"carousel-control right\" href=\"#itemCarousel\" data-slide=\"next\">&rsaquo;</a>\n        <!--progress-->\n        <ol class=\"carousel-indicators\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.altImages, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ol>\n    </div>\n<!--</div>-->\n</div>\n\n\n\n\n";
  return buffer;
  });
templates['peopleWhoViewed'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n";
  options = {hash:{
    'compare': (3)
  },inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.if_lt),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "if_lt", data.index, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"people-viewed-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n";
  return buffer;
  }

  buffer += "<div class=\"horizBorder\"><p class=\"inset\"></p></div>\n<div id=\"people-viewed-title\">\nPeople Who Viewed This Item Also Viewed<a href=\"#\" class=\"see-more-btn\">See More</a>\n</div>\n<div id=\"people-viewed-container\">\n";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.viewedItems),stack1 == null || stack1 === false ? stack1 : stack1.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n<br class=\"clear\" />\n</div>\n";
  return buffer;
  });
templates['prodDetailTabs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <ul>\n                        <li>";
  if (stack1 = helpers.attributeName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " : ";
  if (stack1 = helpers.attributeValue) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.attributeValue; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n                    </ul>\n                    ";
  return buffer;
  }

  buffer += "<script src=\"/js/product/tab.js\"></script>\n<div class=\"horizborder\"><p class=\"inset\"></p></div>\n<div id=\"product-details-title\">\nProduct Details<a href=\"#\" class=\"have-question-btn\">Have a Question?</a>\n</div>\n<div id=\"details-container\">\n<div id=\"detail-tabs\" class=\"left-float\">\n    <section class=\"product-details-container\">\n        <div class=\"wrapper\">\n            <div id=\"v-nav\">\n                <ul>\n                    <li tab=\"tab1\" class=\"first current\"><span class=\"product-detail-tab-name\">Description</span></li>\n                    <li tab=\"tab2\"><span class=\"product-detail-tab-name\">Specifications</span></li>\n                    <li tab=\"tab3\"><span class=\"product-detail-tab-name\">Warranty</span></li>\n                    <li tab=\"tab4\"><span class=\"product-detail-tab-name\">Financing</span></li>\n                    <li tab=\"tab5\" class=\"last\"><span class=\"product-detail-tab-name\">Gifting</span></li>\n                </ul>\n\n                <div class=\"tab-content details\" style=\"display:block\">\n                    ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.shortDesc, 1200, options) : helperMissing.call(depth0, "rawText", depth0.shortDesc, 1200, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "...\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  stack2 = helpers.each.call(depth0, depth0.itemAttr, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </div>\n\n                <div class=\"tab-content details\">\n                    ";
  if (stack2 = helpers.supplierWarranty) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.supplierWarranty; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "<br/>\n                    ";
  if (stack2 = helpers.warrantyLength) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.warrantyLength; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n                </div>\n\n                <div class=\"tab-content details\">\n\n                </div>\n                <div class=\"tab-content details\">\n\n                </div>\n\n            </div>\n        </div>\n    </section>\n</div>\n<br class=\"clear\"/>\n</div>";
  return buffer;
  });
templates['productHeader'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"header\">\n    <div class=\"row-fluid\">\n        <div id=\"cart-container\" class=\"span12\">\n            <div class=\"span3\"><img src=\"../../img/tvFinder/WmLogo.png\" id=\"logo\"/></div>\n            <div id=\"white\" class=\"span4\">\n                <form method=\"get\" action=\"/search\" id=\"search\">\n                    <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n                </form>\n            </div>\n            <!--<div id=\"create-link\" class=\"span1\"><img src=\"/img/tvFinder/create.png\"/><a href=\"#\">-->\n                <!--Create</a></div>-->\n\n            <!--<div id=\"sign-in\" class=\"span1\"><img src=\"/img/tvFinder/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a>-->\n            <!--</div>-->\n\n            <div id=\"cart-items\" class=\"span1 offset4\"><img src=\"/img/tvFinder/shoppingCart.png\"/><a href=\"/cart.html\">\n                Items</a></div>\n        </div>\n    </div>\n</div>";
  });
templates['ratingsReviews'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n            ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.equal),stack1 ? stack1.call(depth0, data.index, 0, options) : helperMissing.call(depth0, "equal", data.index, 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                    <div class=\"selected-review\">\n                        <div class=\"selected-review-title\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n                        <br/>\n                        <div style=\"font-family: 'Sintony',sans-serif;font-size:15px;color:color: #777777;\">by <span style=\"color: #3078b9;\">";
  if (stack2 = helpers.customer) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.customer; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span> on ";
  if (stack2 = helpers.date) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.date; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " ";
  stack2 = helpers['if'].call(depth0, depth0.isVerified, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\n                        <div><span class=\"stars\">";
  if (stack2 = helpers.rating) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.rating; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></div><br/><br/>\n                        <div>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.rawText),stack1 ? stack1.call(depth0, depth0.review, 200, options) : helperMissing.call(depth0, "rawText", depth0.review, 200, options)))
    + "...<span style=\"color: #3078b9;\"> Read more</span></div>\n                    </div>\n                    <div class=\"separator\"></div>\n                    <div class=\"review-attributes-left-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Value:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.value) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.value; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Meets Expectations:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.meetsexpectations) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.meetsexpectations; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Picture Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.picturequality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.picturequality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Sound Quality:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.soundquality) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.soundquality; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                            <dt>Features:</dt>\n                            <dd><span class=\"stars\">";
  if (stack2 = helpers.features) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.features; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></dd>\n                        </dl>\n                    </div>\n                    <div class=\"review-attributes-right-col left-float\">\n                        <dl class=\"dl-horizontal\">\n                            <dt>Age:</dt>\n                            <dd>";
  if (stack2 = helpers.age) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.age; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Gender:</dt>\n                            <dd>";
  if (stack2 = helpers.gender) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.gender; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Ownership:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Usage:</dt>\n                            <dd>";
  if (stack2 = helpers.ownership) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ownership; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>City:</dt>\n                            <dd>";
  if (stack2 = helpers.city) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.city; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                            <dt>Helpful Votes:</dt>\n                            <dd>";
  if (stack2 = helpers.helpfulvotes) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.helpfulvotes; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n                        </dl>\n                    </div>\n                <!--carousel-inner closing div    -->\n                </div>\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car active item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                <div class=\"rev-car item\" indexid=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexCount),stack1 ? stack1.call(depth0, data.index, options) : helperMissing.call(depth0, "indexCount", data.index, options)))
    + "\">\n             ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return " is Verified";
  }

  buffer += "\n\n<div id=\"ratings-rev-title\">\n    Reviews & Ratings <span style=\"color: #3078b9;\">(";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Total)</span> <a href=\"#\" class=\"write-review-btn\">Write a Review</a>\n</div>\n<div id=\"review-dropdowns-container\">\n<span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"reveiwers\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"Men\">Men</option>\n                            <option value=\"Women\">Women</option>\n                            <option value=\"Children\">Children</option>\n                            <option value=\"Animals\">Animals</option>\n                            <option value=\"Minerals\">Minerals</option>\n                            <option value=\"Vegetables\">Vegetables</option>\n                        </select>\n                    </div>\n            </span>\n        <span class=\"ratings-dropdowns left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ages\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"25\">25 - 34</option>\n                            <option value=\"35\">35 - 44</option>\n                            <option value=\"45\">45 - 54</option>\n                            <option value=\"55\">55 - 64</option>\n                            <option value=\"65\">65+</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns-border left-float\">\n                    <div class=\"left-float\">\n                        <select id=\"ratings\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"All\">All Ratings</option>\n                            <option value=\"5\">5 star</option>\n                            <option value=\"4\">4 star</option>\n                            <option value=\"3\">3 star</option>\n                            <option value=\"2\">2 star</option>\n                            <option value=\"1\">1 star</option>\n                        </select>\n                    </div>\n        </span>\n        <span class=\"ratings-dropdowns\" style=\"float: right\">\n                    <div>\n                        <select id=\"helpful\">\n                            <option selected=\"selected\" value=\"select\" disabled>Sort</option>\n                            <option value=\"MostHelpful\">Most Helpful</option>\n                            <option value=\"Oldest\">Oldest to Newest</option>\n                            <option value=\"Newest\">Newest to Oldest</option>\n                        </select>\n                    </div>\n        </span>\n</div>\n\n\n<div class=\"reviews-container\">\n<div id=\"selected-review-container\">\n    <div id=\"reviewCarousel\" class=\"carousel slide\" data-interval=\"false\">\n        <div class=\"carousel-inner\">\n            ";
  stack2 = helpers.each.call(depth0, depth0.ratingsReviewsItems, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n            <!-- Carousel nav -->\n            <a class=\"carousel-control left\" href=\"#reviewCarousel\" data-slide=\"prev\">&lsaquo;</a>\n            <a class=\"carousel-control right\" href=\"#reviewCarousel\" data-slide=\"next\">&rsaquo;</a>\n\n        </div>\n    </div>\n    <div id=\"reviews-count-container\" class=\"left-float\">1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews</div>\n    <!--1 of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " reviews-->\n</div>\n\n<script>\n\n    reviewCount = function (){\n        var index = $(\".rev-car.item.active\").attr(\"indexid\");\n        var count = Number(index);\n        $('#reviews-count-container').text(count +\" of ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length),stack1 ? stack1.call(depth0, depth0.ratingsReviewsItems, options) : helperMissing.call(depth0, "length", depth0.ratingsReviewsItems, options)))
    + " Reviews\");\n    };\n\n    $('#reviewCarousel').bind('slid', function() {\n        reviewCount();\n    })\n\n</script>";
  return buffer;
  });
templates['paymentShippingDetails'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-details\" class=\"row-fluid\">\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Payment Details</span></p>\n        <p>\n            <select id=\"payment-details-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>Last 4 digits: 2227</option>\n                <option value=\"4437\">Last 4 digits: 4337</option>\n                <option value=\"2227\">Last 4 digits: 2227</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Billing Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Shipping&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color:#3078b9;\">(Multiple Addresses?)</span></p>\n        <p>\n            <select id=\"shipping-dd\">\n                <option selected=\"selected\" value=\"select\" disabled>7000 Marina Blvd</option>\n                <option value=\"MostHelpful\">7000 Marina Blvd</option>\n                <option value=\"Oldest\">850 Cherry Ave</option>\n            </select>\n        </p>\n        <address>\n            <p><span class=\"detail-sub-labels\">Shipping Address:</span><br/>\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.order),stack1 == null || stack1 === false ? stack1 : stack1.name)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n                555 test ave<br/>\n                San Bruno, CA 94066\n            </p>\n        </address>\n    </div>\n    <div class=\"span3\">\n        <p><span class=\"detail-labels\">Delivery Date</span></p>\n        <p><span class=\"detail-labels\"><b>01/01/2013</b></span></p>\n        <p><span style=\"color:#C95925;\"><b>Please Note:</b></span></p>\n        <p><span style=\"color:#777777;font-family: 'Sintony',sans-serif;\">Non-priority delivery estimates<br/>\n                   can vary +/- 4 days.</span></p>\n    </div>\n</div>";
  return buffer;
  });
templates['reviewConfirmOrder'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-breadcrumb\" class=\"row-fluid\">\n    <img src=\"/img/cart/breadcrumbHome.png\"/> <a href=\"/cart.html\"> YOUR CART</a>  >  <a href=\"/review.html\"> CHECKOUT</a>  >  CONFIRM YOUR ORDER\n</div>\n<div id=\"confirm-order\"  class=\"row-fluid\">\n<div class=\"span6 confirm-order-title\">\n    Review Your Order: <span style=\"font-weight: 600;\">";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Items  |  $";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Total</span>\n</div>\n<div class=\"span2 offset1\">\n    <a href=\"#\" class=\"confirm\">Confirm Order</a>\n</div>\n</div>";
  return buffer;
  });
templates['reviewLineItems'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"row-fluid review-line-item\">\n<div class=\"span2 review-line-item-img\">\n    <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n</div>\n<div class=\"span4 review-line-item-name\">\n    ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"span1 review-line-item-qty\">\n    ";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</div>\n<div class=\"span2 review-line-item-price\">\n    $";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</div>\n</div>\n";
  return buffer;
  }

  buffer += "<div id=\"col-labels\" class=\"row-fluid confirm-order-title\">\n    <div class=\"span2\">\n        Your Order\n    </div>\n    <div class=\"span1 offset4\">\n        Qty\n    </div>\n    <div class=\"span2\">\n        Price\n    </div>\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div id=\"empty-div\" class=\"row-fluid\">\n</div>";
  return buffer;
  });
templates['reviewSubtotals'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"review-subtotals\" class=\"row-fluid\">\n    <div class=\"span1 detail-labels\">\n        <b>Subtotals</b>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Items (";
  if (stack1 = helpers.forPurchaseCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forPurchaseCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$";
  if (stack1 = helpers.subtotal) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtotal; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Shipping & Handling</span></p>\n\n        <p><span class=\"review-line-item-price\">$66&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span></p>\n    </div>\n    <div class=\"span2\">\n        <p><span class=\"detail-labels\">Taxes</span></p><br/>\n\n        <p><span class=\"review-line-item-price\">$70</span></p>\n    </div>\n    <div class=\"span2 detail-labels\"><br/>\n\n        <p><b>Total</b>&nbsp;&nbsp;&nbsp;<span class=\"review-line-item-price\">$";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></p>\n    </div>\n</div>\n<div class=\"row-fluid\" style=\"padding-top: 4%\">\n<div class=\"span2 offset7\">\n    <a href=\"#\" class=\"confirm\">Confirm Order</a>\n</div>\n</div>";
  return buffer;
  });
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../../img/tvFinder/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  buffer += "<script src=\"../../js/tvFinder/television.js\"></script>\n";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  });
})();
